import NotionConnector from '@/services/notion'

export default defineEventHandler(async (event) => {
  const { token, pageId } = await readBody(event)
  let data
  let message

  const notion = new NotionConnector(token)

  try {
    const res = notion.archivedNotionPageById(pageId)
    data = res
  } catch (error) {
    message = error
  }
  return {
    data,
    error: !!message,
    message
  }
})
