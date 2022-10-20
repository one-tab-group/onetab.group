import { sdb } from '@/utils/sdb'
import { SessionData } from '~/types'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  let session = [] as SessionData[]

  try {
    session = await sdb.session.upsert(body)
  } catch (error) {
    console.log(error)
  }

  return session
})
