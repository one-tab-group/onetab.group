import { sdb } from '@/services/sdb'

export default defineEventHandler(async (event) => {
  const { key } = getQuery(event) as { key: string }

  let data = null
  let message = null

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
