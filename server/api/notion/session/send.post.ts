import NotionConnector from '@/services/notion'
import { sequentialPromise } from '@/utils'

export default defineEventHandler(async (event) => {
  const { token, databaseId, tabPageList } = await readBody(event)
  let data = null
  let message = null

  const notion = new NotionConnector(token)

  try {
    const promises = tabPageList.map((tab: any) => {
      // insert tab into tab database
      return () => notion.createPageInTabDatabase(databaseId, tab)
    })
    const pages = await sequentialPromise(promises)
    data = pages
  } catch (error) {
    message = error
  }
  return {
    data,
    error: !!message,
    message
  }
})
