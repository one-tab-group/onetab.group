import { sdb } from '@/utils/sdb'
import { Session } from '~/types'

export default defineEventHandler(async (event) => {
  const { sessionId, sessionItem } = await readBody(event)

  let session = [] as Session[]

  try {
    session = await sdb.session.updateById(sessionId, sessionItem)
  } catch (error) {
    console.log(error)
  }

  return session
})
