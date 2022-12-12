import { sdb } from '@/services/sdb'
import { Session } from '@/types'

export default defineEventHandler(async (event) => {
  const { sessionId, accountId } = await readBody(event)

  let session = [] as Session[]

  try {
    session = await sdb.session.deleteById(sessionId, accountId)
  } catch (error) {
    console.log(error)
  }

  return session
})
