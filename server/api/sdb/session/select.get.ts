import { sdb } from '@/utils/sdb'

export default defineEventHandler(async (event): Promise<any> => {
  const query = getQuery(event)

  const sessionList = await sdb.session.select()

  return {
    query,
    sessionList
  }
})
