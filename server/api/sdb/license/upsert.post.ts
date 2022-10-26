import { sdb } from '@/utils/sdb'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  let license = null

  try {
    const res = await sdb.license.upsert(body)
    if (res && res.length === 1) {
      license = res[0]
    }
  } catch (error) {
    console.log(error)
  }

  return license
})
