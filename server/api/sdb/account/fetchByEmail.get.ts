import { sdb } from '@/utils/sdb'

export default defineEventHandler(async (event) => {
  const { email } = getQuery(event) as { email: string }

  let account = null

  try {
    const res = await sdb.account.fetchByEmail(email)

    if (res && res.length === 1) {
      account = res[0]
    }
  } catch (error) {
    console.log(error)
  }

  return account
})
