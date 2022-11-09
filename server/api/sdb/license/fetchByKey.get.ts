import { sdb } from '@/utils/sdb'

export default defineEventHandler(async (event) => {
  setHeader(event, 'Cache-Control', 'no-cache')
  const { key } = getQuery(event) as { key: string }

  let [data, message] = [null, null]

  try {
    const { data: LicenseList, error } = await sdb.license.fetchByKey(key)
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
