import { sdb } from '@/services/sdb'
import { Session } from '@/types'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  let session = [] as Session[]

  try {
    session = await sdb.session.upsert(body)
  } catch (error) {
    console.log(error)
  }

  return session
})
