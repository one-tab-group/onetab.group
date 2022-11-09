import { sdb } from '@/utils/sdb'

export default defineEventHandler(async (event) => {
  setHeader(event, 'Cache-Control', 'no-cache')
  const body = await readBody(event)
  let [data, message] = [null, null]
  const { email, license_key } = body

  const resByKey = await sdb.license.fetchByKey(license_key)
  const resByEmail = await sdb.license.fetchByEmail(email)

  console.log(resByEmail)
  console.log(resByKey)
  if (resByEmail.data && resByEmail.data.length === 1) {
    // old user
    try {
      const { data: LicenseList, error } = await sdb.license.upsert(body)
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
  } else {
    // new user
    // found a old license
    if (resByKey.data && resByKey.data.length === 1) {
      const license = resByKey.data[0]
      // use other's license
      if (license.email !== email) {
        data = null
        message = 'The License has been used by others.'
      }

      return {
        data,
        error: !!message,
        message
      }
    } else {
      // has a new license
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
  }
})
