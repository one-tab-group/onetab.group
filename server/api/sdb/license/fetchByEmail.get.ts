import { sdb } from '@/utils/sdb'

export default defineEventHandler(async (event) => {
  const { email } = getQuery(event) as { email: string }

  let license = null

  try {
    const res = await sdb.license.fetchByEmail(email)

    if (res && res.length === 1) {
      license = res[0]
    }
  } catch (error) {
    console.log(error)
  }

  return license
})
