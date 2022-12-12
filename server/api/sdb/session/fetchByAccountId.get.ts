import { sdb } from '@/services/sdb'
import { Session } from '~/types'

export default defineEventHandler(async (event): Promise<Session[]> => {
  const { accountId } = getQuery(event) as { accountId: string }

  let session = [] as Session[]

  try {
    session = await sdb.session.fetchByAccountId(accountId)
  } catch (error) {
    console.log(error)
  }

  return session
})
