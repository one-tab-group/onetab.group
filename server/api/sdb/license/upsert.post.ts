import { sdb } from '@/services/sdb'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  let [data, message] = [null, null]
  const { email, license_key } = body

  const resByEmail = await sdb.license.fetchByEmail(email)
  const resByKey = await sdb.license.fetchByKey(license_key)

  // found a old license
  if (resByKey.data && resByKey.data.length === 1) {
    const license = resByKey.data[0]
    // use other's license
    if (license.email !== email) {
      message = 'The License has been used by other accounts.'
    } else {
      // update user own license
      if (resByEmail.data && resByEmail.data.length === 1) {
        // old user
        const license = resByEmail.data[0]
        // delete first
        await sdb.license.deleteById(license.id, license.account_id)
        // insert the new one
        try {
          const { data: LicenseList, error } = await sdb.license.insert(body)
          if (LicenseList && LicenseList.length === 1) {
            data = LicenseList[0]
          }
          message = error
        } catch (err) {
          message = err
        }
      }
    }

    return {
      data,
      error: !!message,
      message
    }
  } else {
    // new license && old user need delete old license first
    if (resByEmail.data && resByEmail.data.length === 1) {
      const license = resByEmail.data[0]
      await sdb.license.deleteById(license.id, license.account_id)
    }
    // insert the new license
    try {
      const { data: LicenseList, error } = await sdb.license.insert(body)
      if (LicenseList && LicenseList.length === 1) {
        data = LicenseList[0]
      }
      message = error
    } catch (err) {
      message = err
    }

    return {
      data,
      error: !!message,
      message
    }
  }
})
