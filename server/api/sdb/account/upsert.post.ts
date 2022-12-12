import { sdb } from '@/services/sdb'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  let account = null

  try {
    const res = await sdb.account.upsert(body)
    if (res && res.length === 1) {
      account = res[0]
    }
  } catch (error) {
    console.log(error)
  }

  return account
})
