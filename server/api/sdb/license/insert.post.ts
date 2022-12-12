import { sdb } from '@/services/sdb'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  let [data, message] = [null, null]

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
})
