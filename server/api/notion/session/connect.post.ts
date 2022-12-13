import dayjs from 'dayjs'

import NotionConnector from '@/services/notion'

export default defineEventHandler(async (event) => {
  const { token, databaseId, sessionPage } = await readBody(event)
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
      description: `Created by One Tab Group, Your tabs & tab groups will be sync into here, and do not delete、add column on this database. - ${dayjs().format(
        'YYYY-MM-DD HH:mm:ss'
      )}`
    })

    data = {
      page,
      database
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
