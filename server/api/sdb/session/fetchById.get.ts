import { sdb } from '@/services/sdb'

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event) as { id: string }

  let [data, message] = [null, null]

  try {
    const { data: sessionList, error } = await sdb.session.fetchById(id)
    if (sessionList && sessionList.length > 0) {
      data = sessionList[0]
    }
    message = error
  } catch (error) {
    console.log(error)
  }

  return {
    data,
    error: !!message,
    message
  }
})
