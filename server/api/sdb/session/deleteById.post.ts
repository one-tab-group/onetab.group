import { sdb } from '@/utils/sdb'
import { SessionData } from '~/types'

export default defineEventHandler(async (event) => {
  const { sessionId, sessionItem } = await readBody(event)

  let session = [] as SessionData[]

  try {
    session = await sdb.session.deleteById(sessionId, sessionItem)
  } catch (error) {
    console.log(error)
  }

  return session
})
