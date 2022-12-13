import NotionConnector from '@/services/notion'

export default defineEventHandler(async (event) => {
  const { token, pageId } = await readBody(event)
  let data = null
  let message = null

  const notion = new NotionConnector(token)

  try {
    const res = await notion.archivedNotionPageById(pageId)
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
