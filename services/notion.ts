import { Client } from '@notionhq/client'
import dayjs from 'dayjs'

type DatabaseInit = {
  pageId: string
  title: string
  description: string
}

// type SelectColor =
//   | 'default'
//   | 'gray'
//   | 'brown'
//   | 'orange'
//   | 'yellow'
//   | 'green'
//   | 'blue'
//   | 'purple'
//   | 'pink'
//   | 'red'

export default class NotionConnector {
  notion: Client

  constructor(token: string) {
    // Initializing a client
    this.notion = new Client({
      auth: token
    })
  }

  /**
   * Step 1、Database for session list / tab tree
   * @param payload
   * @returns
   */
  async createSessionDatabase(payload: DatabaseInit) {
    const { pageId, title, description } = payload
    return this.notion.databases.create({
      parent: {
        page_id: pageId
      },
      title: [
        {
          type: 'text',
          text: {
            content: title,
            link: null
          }
        }
      ],
      description: [
        {
          type: 'text',
          text: {
            content: description,
            link: null
          }
        }
      ],
      icon: {
        type: 'external',
        external: {
          url: 'https://onetab.group/logo.png'
        }
      },
      is_inline: true,
      properties: {
        title: {
          type: 'title',
          title: {}
        },
        id: {
          type: 'rich_text',
          rich_text: {}
        },
        shared: {
          type: 'checkbox',
          checkbox: {}
        },
        starred: {
          type: 'checkbox',
          checkbox: {}
        },
        created_at: {
          type: 'created_time',
          created_time: {}
        },
        updated_at: {
          type: 'last_edited_time',
          last_edited_time: {}
        }
      }
    })
  }
  /**
   * Step 2、Some as the one tab group'session data structure
   * @param databaseId
   * @param payload
   */
  async createPageInSessionDatabase(
    databaseId: string,
    payload: Record<string, any>
  ) {
    const {
      id,
      title,
      shared = false,
      starred = false,
      created_at,
      updated_at
    } = payload

    return this.notion.pages.create({
      parent: {
        database_id: databaseId
      },
      // cover: {
      //   type: 'external',
      //   external: {
      //     url: 'https://onetab.group/preview.jpg'
      //   }
      // },
      icon: {
        type: 'external',
        external: {
          url: 'https://onetab.group/logo.png'
        }
      },
      properties: {
        title: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: title
              }
            }
          ]
        },
        id: {
          type: 'rich_text',
          rich_text: [
            {
              text: {
                content: id
              }
            }
          ]
        },
        shared: {
          type: 'checkbox',
          checkbox: shared
        },
        starred: {
          type: 'checkbox',
          checkbox: starred
        },
        created_at: {
          type: 'date',
          date: {
            start: dayjs(Number(created_at)).toISOString(),
            end: dayjs(Number(updated_at)).toISOString()
          }
        }
      }
    })
  }
  /**
   * Step 3、Database for flatten Tab List
   * @param payload
   * @returns
   */
  async createTabDatabase(payload: DatabaseInit) {
    const { pageId, title, description } = payload
    return this.notion.databases.create({
      parent: {
        page_id: pageId
      },
      title: [
        {
          type: 'text',
          text: {
            content: title,
            link: null
          }
        }
      ],
      description: [
        {
          type: 'text',
          text: {
            // content: 'One Tab Group Connection via Notion, Your data will be sync into here, and do not delete、add column on this database.',
            content: description,
            link: null
          }
        }
      ],
      icon: {
        type: 'emoji',
        emoji: '📖'
      },
      is_inline: true,
      properties: {
        title: {
          type: 'title',
          title: {}
        },
        windowId: {
          type: 'number',
          number: {
            format: 'number'
          }
        },
        id: {
          type: 'number',
          number: {
            format: 'number'
          }
        },
        groupId: {
          type: 'number',
          number: {
            format: 'number'
          }
        },
        groupName: {
          type: 'select',
          select: {}
        },
        favIconUrl: {
          type: 'rich_text',
          rich_text: {}
        },
        url: {
          type: 'url',
          url: {}
        },
        pinned: {
          type: 'checkbox',
          checkbox: {}
        },
        highlighted: {
          type: 'checkbox',
          checkbox: {}
        }
      }
    })
  }
  /**
   * Step 4、Store the tabs in notion
   * @param databaseId
   * @param payload
   * @returns
   */
  async createPageInTabDatabase(
    databaseId: string,
    payload: Record<string, any>
  ) {
    const {
      id,
      title,
      windowId = -1,
      groupId = -1,
      groupName = 'None',
      // groupColor = 'default',
      favIconUrl,
      url,
      pinned = false,
      highlighted = false
    } = payload

    return this.notion.pages.create({
      parent: {
        database_id: databaseId
      },
      icon: {
        type: 'emoji',
        emoji: '🔖'
      },
      properties: {
        title: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: title
              }
            }
          ]
        },
        id: {
          type: 'number',
          number: id
        },
        windowId: {
          type: 'number',
          number: windowId
        },
        groupId: {
          type: 'number',
          number: groupId
        },
        // groupName: {
        //   type: 'rich_text',
        //   rich_text: [
        //     {
        //       text: {
        //         content: groupName
        //       },
        //       annotations: {
        //         color: groupColor,
        //         bold: true
        //       }
        //     }
        //   ]
        // },
        groupName: {
          type: 'select',
          select: {
            name: groupName
          }
        },
        favIconUrl: {
          type: 'rich_text',
          rich_text: [
            {
              text: {
                content: favIconUrl
              }
            }
          ]
        },
        url: {
          type: 'url',
          url
        },
        pinned: {
          type: 'checkbox',
          checkbox: pinned
        },
        highlighted: {
          type: 'checkbox',
          checkbox: highlighted
        }
      }
    })
  }

  /**
   * Update session page fields.
   * @param pageId
   * @param payload
   */
  updateSessionPageById(pageId: string, payload: Record<string, any>) {
    const {
      id,
      title,
      shared = false,
      starred = false,
      created_at,
      updated_at
    } = payload
    return this.notion.pages.update({
      page_id: pageId,
      properties: {
        title: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: title
              }
            }
          ]
        },
        id: {
          type: 'rich_text',
          rich_text: [
            {
              text: {
                content: id
              }
            }
          ]
        },
        shared: {
          type: 'checkbox',
          checkbox: shared
        },
        starred: {
          type: 'checkbox',
          checkbox: starred
        },
        created_at: {
          type: 'date',
          date: {
            start: dayjs(Number(created_at)).toISOString(),
            end: dayjs(Number(updated_at)).toISOString()
          }
        }
      }
    })
  }

  /**
   * Remove single tab from notion tab database
   * @param pageId
   * @returns
   */
  archivedNotionPageById(pageId: string) {
    return this.notion.pages.update({
      page_id: pageId,
      archived: true
    })
  }

  /**
   * Remove multiple tabs from notion database
   * @param pageIds
   * @returns
   */
  archivedMultipleNotionPages = async (pageIds: string[]) => {
    const promises = pageIds.map(this.archivedNotionPageById)

    return await Promise.all(promises)
  }
}
