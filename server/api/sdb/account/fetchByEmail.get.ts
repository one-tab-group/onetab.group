import { sdb } from '@/services/sdb'

export default defineEventHandler(async (event) => {
  const { email } = getQuery(event) as { email: string }

  let [data, message] = [null, null]

  try {
    const res = await sdb.account.fetchByEmail(email)
    if (res && res.length === 1) {
      data = res[0]
    }
  } catch (err) {
    console.log(err)
    message = err
  }

  return {
    data,
    error: !!message,
    message
  }
})
