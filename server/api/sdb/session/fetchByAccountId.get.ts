import { sdb } from '@/utils/sdb'
import { SessionData } from '~/types'

export default defineEventHandler(async (event): Promise<SessionData[]> => {
  const { accountId } = getQuery(event) as { accountId: string }

  let session = [] as SessionData[]

  try {
    session = await sdb.session.fetchByAccountId(accountId)
  } catch (error) {
    console.log(error)
  }

  return session
})
