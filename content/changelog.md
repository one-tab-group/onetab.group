---
navigation.title: 'Changelog'
title: 'One Tab Group | Changelog'
description: Stay up to date with the latest One Tab Group improvements. Learn how we build the new features in public.
category: changelog
head.image: /img/changelog.jpg
---

# Changelog

:::alert{info}
🎉🎉 One Tab Group supports integrates with Raycast, [Learn how to search saved browser tabs and tab groups in Raycast](/blog/search-saved-browser-tabs-and-tab-groups-in-raycast)
:::

## 1.3.4 (2023-02-23)

### Features

- Merge two or more sessions into one session
- Add the setting option
  - Whether to restore pinned tabs when restoring a session
  - Automatically open the extension homepage when opening a new window

### Improvements

- Pinned tabs can not drag/sort/move

### Bug Fixes

- Fixed the problem of extension's page always selected on `Open Tabs` pane

## 1.3.3（2023-02-18)

### Features

- Bi-directional synchronization between `browser tabs` and `OTG's Open Tabs sidebar`
  - Double click the tab to switch tab
  - Tabs/tab groups can be reordered by dragging and dropping
- Always open the extension home page when create a new window

### Improvements

- UI improvements of Open Tabs Sidebar
- Enlarge the trash, bubble, pin icon on tab row clickable area

### Bug Fixes

- Fixed the problem of sharing session failure when logging in for the first time
- Fixed the problem that the tabs in the search results cannot be deleted and pinned

## 1.3.2（2023-02-12)

### Bug Fixes

- Fixed the wrong order when cloud sync

## 1.3.1（2023-01-31）

### Features

- Support Chinese Payment channels for Lifetime License like (支付宝、微信支付)
- The default title for creating a new session is the creation time; this helps to avoid scrambled session names.

## 1.3.0（2023-01-15）

### Features

- Integrates with with `Raycast` for effective tab searching
- Virtual scrolling rendering for the long session list (40% memeory savings)

## 1.2.3 (2022-12-30)

### Features

- i18n for command palette
- Open/Show the One Tab Group Home Page with Command/Context Menu Action
- Action items for multi-select sessions
  - Move to Top
  - Move up
  - Move to Bottom
  - Move down
  - Add/Cancel Favorites
  - Delete selected session

## 1.2.2 (2022-12-25) 🎄

### Features

- i18n for shortcuts
- add a new settings, [whether show the session title]
- enhancement the bookmark feature
  - Copy image to clipboard
  - Toggle QRCode
  - Styling your bookmark
- add the [open & suspend] option for click the tab in session

### Bug Fixes

- Fixed the sharing feature when not login

## 1.2.1 (2022-12-17)

### Features

- i18n for session

### Bug Fixes

- Fixed the session sharing feature
- Fixed the bookmark render bug

## 1.2.0 (2022-12-15)

:::alert{info}
🎉🎉 One Tab Group supports integration with Notion, [Learn how to sync your tabs/tab groups to Notion](/blog/sync-your-browser-tabs-to-notion)
:::

### Features

- Sync all sessions to `Notion`
- Send a specific session to `Notion`
- Replace the entire session with current open tabs
- Close all open tabs & restore session
- Grouping by domian in a session
- Sharing feature open for free
- Favorite feature open for free
- zh/en/fr languages supported in web store

### Bug Fixes

- Save pinned tabs when saving a session
- Adaptation to small screen style

## 1.1.1 (2022-11-25)

### Bug Fixes

- fixed the lost data bug when refresh the browser

## 1.1.0 (2022-11-16)

### Features

- 1、Sharing session as a link to the web
- 2、Sort by session
  - Newest (Created Time)
  - Oldest (Created TIme)
  - Alphabetical (a - z)
  - Alphabetical (z - a)
  - Favorites to Top
  - Shared to Top
- 3、Bookmark your favorites sessions
- 4、Send open tabs into specified session

## 1.0.0 (2022-11-09)

### Bug Fixes

- fixed the bug of can not login with GitHub
- fixed the bug of add a new tab group in session but can not restore
- fixed the bug of blinking when open two extension page

### Features

- 1、[Migrate your session from `Session Buddy` to `One Tab Group`](https://www.onetab.group/blog/how-to-migrate-from-session-buddy)
- 2、Easy grouping and sorting of open tabs
- 3、Single/multi-select open tabs, operate as you wish
- 4、Single/multi-select sessions, delete in batch
- 5、How to create sessions, whether to close tabs or not, it's up to you
- 6、Support cloud sync & backup, never miss your data, and more...

## 0.4.6 (2022-10-10)

### Bug Fixes

- fixed duplicate create group bug
- fixed the tab group create bug
- fixed typo error

### Features

- add leave a review menu
- add the command shortcuts support

## 0.4.5 (2022-10-08)

### Features

- remove permissions of identity email

## 0.4.3 (2022-10-04)

### Bug Fixes

- fixed the runtime error

### Features

- import tabs into the head of sessions

## 0.4.2 (2022-09-29)

### Bug Fixes

- fixed the path in client side

### Features

- add log in with google

## 0.4.1 (2022-09-25)

### Bug Fixes

- fixed the runtime bug

# 0.4.0 (2022-09-22)

### Bug Fixes

- fixed the discard all tabs bug

### Features

- remove duplicate tabs in opened tabs
- remove duplicate tabs in session
- suspend opened tabs

# 0.3.0 (2022-08-22)

### Bug Fixes

- fixed the delete all tabs tooltips

### Features

- add collapse session feature
- add the dblclick event on the tab group meta
- add the title options in fuzz search options
- change the fuzz search options
- change the tab group hover logic
- hidden the session feature icon
- hidden the tab group icons
- make all the input using the `keyup.enter` event

## 0.2.4 (2022-08-15)

### Bug Fixes

- fixed the help link
- fixed the layout bug

## 0.2.3 (2022-08-11)

### Bug Fixes

- fixed some logic of hand pick store into session

## 0.2.2 (2022-08-07)

### Bug Fixes

- fixed the context menu restore all tabs action

### Features

- add send current/selected tabs to otg in context menu
- add the debounce search feature
- add the global search feature
- add the sketch module when searching sth
- change the skeleton page
- i18n for the site

## 0.2.1 (2022-07-19)

### Bug Fixes

- fixed the behavior when click the extension icon
- fixed the loading content bug
- fixed the opened tabs sync bug

## 0.2.0 (2022-07-16)

Finish the MVP version

## 0.1.0 (2022-07-15)

First release on Chrome Web Store
