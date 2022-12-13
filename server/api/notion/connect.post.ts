import dayjs from 'dayjs'
import NotionConnector from '@/services/notion'

export default defineEventHandler(async (event) => {
  const { token, pageId } = await readBody(event)
  let data = null
  let message = null

  const notion = new NotionConnector(token)

  try {
    const database = await notion.createSessionDatabase({
      pageId,
      title: `Session Database - ${dayjs().format('MMMM D, YYYY h:mm A')}`,
      description: `Created by One Tab Group, Your data will be sync into here, and do not delete、add column on this database. - ${dayjs().format(
        'YYYY-MM-DD HH:mm:ss'
      )}`
    })
    data = database
  } catch (error) {
    message = error
  }
  return {
    data,
    error: !!message,
    message
  }
})
