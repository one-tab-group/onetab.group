import { sdb } from '@/services/sdb'

export default defineEventHandler(async (event) => {
  const { email } = getQuery(event) as { email: string }

  let [data, message] = [null, null]

  try {
    const { data: LicenseList, error } = await sdb.license.fetchByEmail(email)
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
})
