import { sdb } from '@/utils/sdb'

export default defineEventHandler(async (event) => {
  const { accountId } = await readBody(event)

  let account = null

  try {
    const nowTime = new Date().getTime()
    const res = await sdb.account.updateSyncedAt(accountId, nowTime)
    if (res && res.length === 1) {
      account = res[0]
    }
  } catch (error) {
    console.log(error)
  }

  return account
})
