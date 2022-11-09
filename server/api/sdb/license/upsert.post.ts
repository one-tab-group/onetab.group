import { sdb } from '@/utils/sdb'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  let [data, message] = [null, null]

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
})
