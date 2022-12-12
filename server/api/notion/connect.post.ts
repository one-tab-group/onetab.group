import dayjs from 'dayjs'
import NotionConnector from '@/services/notion'

export default defineEventHandler(async (event) => {
  const { token, pageId } = await readBody(event)
  let data
  let message

  const notion = new NotionConnector(token, pageId)

  try {
    const database = await notion.createSessionDatabase({
      pageId,
      title: `Session Database - ${dayjs().format('YYYY-MM-DD hh:mm:ss')}`,
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
