import NotionConnector from '@/services/notion'
import { sequentialPromise } from '@/utils'

export default defineEventHandler(async (event) => {
  const { token, databaseId, sessionPage, tabPageList } = await readBody(event)
  let data = null
  let message = null

  const notion = new NotionConnector(token)

  try {
    // insert session into session database
    const page = await notion.createPageInSessionDatabase(
      databaseId,
      sessionPage
    )
    // create tab database
    const database = await notion.createTabDatabase({
      pageId: page.id,
      title: 'Session Database > Tab Database',
      description: ''
    })
    sessionPage.page_id = page.id
    sessionPage.database_id = database.id

    const promises = tabPageList.map((tab: any) => {
      // insert tab into tab database
      return () => notion.createPageInTabDatabase(database.id, tab)
    })
    const pages = await sequentialPromise(promises)
    data = {
      page,
      database,
      pages
    }
  } catch (error) {
    message = error
  }
  return {
    data,
    error: !!message,
    message
  }
})
