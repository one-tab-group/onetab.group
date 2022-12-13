import { serverQueryContent } from '#content/server'
import { Feed } from 'feed'
import dayjs from 'dayjs'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()

  const feed = new Feed({
    id: 'https://onetab.group/',
    title: 'One Tab Group: Your all-in-one tab/tab group manager for Chrome.',
    copyright: `Copyright © ${dayjs().format('YYYY')} onetab.group`,
    description: 'is a chrome extension that allows you to manage your tabs & tab groups in one place. One-click to aggregate all tabs & tab groups into one session.',
    link: 'https://onetab.group',
    feedLinks: 'https://onetab.group/feed.xml',
    image: 'http://onetab.group/preview.jpg',
    favicon: 'http://onetab.group/favicon.svg'
  })

  for (const doc of docs) {
    feed.addItem({
      id: doc.id,
      link: doc._path || '',
      title: doc.title || '',
      description: doc.description,
      date: dayjs(doc.published_at).toDate()
    })
  }

  event.node.res.setHeader('Content-Type', 'application/rss+xml; charset=UTF-8')

  return feed.rss2()
})
