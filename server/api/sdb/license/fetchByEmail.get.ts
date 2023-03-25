import dayjs from 'dayjs'
import { sdb } from '@/services/sdb'

export default defineEventHandler(async (event) => {
  const { email } = getQuery(event) as { email: string }

  let data = null
  let message = null

  try {
    const { data: LicenseList, error } = await sdb.license.fetchByEmail(email)
    if (LicenseList && LicenseList.length === 1) {
      data = LicenseList[0]
      if (data.recurrence === 'monthly' || data.recurrence === 'yearly') {
        console.log(data.license_key)
        const verifyRes = await $fetch('/api/lemon/verifyLicense', {
          method: 'post',
          body: {
            license_key: data.license_key
          }
        })
        if (!verifyRes.error && verifyRes.data) {
          const purchaseInfo = verifyRes.data as any
          const subsExpiredAt =
            purchaseInfo.renews_at || purchaseInfo.expires_at

          data.expiry_at = dayjs(subsExpiredAt).valueOf()

          const upsertRes = await $fetch('/api/sdb/license/upsert', {
            method: 'post',
            body: data
          })
          if (!upsertRes.error && upsertRes.data) {
            data = upsertRes.data
          }
        }
      }
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
