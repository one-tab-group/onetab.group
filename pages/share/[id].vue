<template>
  <NuxtLayout name="share">
    <section class="flex gap-2 flex-col" v-if="session.shared">
      <div
        class="flex items-center justify-between border-b border-b-shark-100 dark:border-b-shark-700 pb-4"
      >
        <h2 class="text-2xl">
          <div class="flex items-center gap-4 flex-col lg:flex-row">
            <div>{{ session.title }}</div>
            <div class="text-base text-secondary">
              {{ tabLength }} Tabs ({{ tabGroupLength }} Group)
            </div>
          </div>
        </h2>
        <a
          class="hidden lg:flex items-center px-4 py-2 mb-4 text-sm font-medium text-white bg-lochmara-500 border border-lochmara-500 rounded-lg sm:w-auto active:text-opacity-75"
          hover="bg-lochmara-400 text-white"
          focus="outline-none ring"
          @click="openAllTabs"
        >
          <mdi:open-in-new class="h-5 w-5 mr-2" />
          <span>Open all tabs</span>
        </a>
      </div>
      <div v-for="element in session.tabTree">
        <template v-if="element.children">
          <div
            flex="~"
            align="items-center"
            justify="between"
            bg="white dark:shark-900"
            class="tab-group-meta p-2 rounded-lg box-border h-[45px]"
            :style="getGroupHeaderStyle(element)"
          >
            <span
              class="px-3 py-1 rounded-lg text-shark-700"
              :style="getGroupTitleStyle(element)"
            >
              {{ element.title }}
            </span>
          </div>
          <section
            class="flex gap-2 flex-col rounded-lg p-4 bg-white dark:bg-shark-900"
            :style="getGroupContentStyle(element)"
          >
            <template v-for="item in element.children">
              <TabMeta
                :meta-info="item"
                class="rounded-lg py-1"
                hover="bg-shark-100 dark:bg-shark-700"
              />
            </template>
          </section>
        </template>
        <TabMeta
          :meta-info="element"
          v-else
          class="bg-white dark:bg-shark-900 rounded-lg py-1"
          hover="bg-shark-100 dark:bg-shark-700"
        />
      </div>
    </section>
    <section
      class="flex items-center flex-col gap-8 justify-center h-96"
      v-else
    >
      Session has not been shared
      <a href="https://onetab.group" class="text-neon">
        Learn how to shared a session in One Tab Group?
      </a>
    </section>
    <OpenTabsAlert />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/store/global'

const route = useRoute()
type AnyRecord = Record<string, any>

const { data, refresh, pending } = await useFetch(
  '/api/sdb/session/fetchById',
  {
    query: {
      id: route.params.id
    }
  }
)

const TAB_GROUP_COLORS: Record<string, string> = {
  grey: '#BDC1C5',
  blue: '#8AB4F7',
  red: '#F28B82',
  yellow: '#FDD563',
  green: '#81C995',
  pink: '#FF8BCB',
  purple: '#D6AEFB',
  cyan: '#78D9EC',
  orange: '#FCAD70'
}

const formatColor = (color: string) => TAB_GROUP_COLORS[color]

const session = computed(() => data.value.data)
const tabLength = computed(() => {
  let tabs = []
  const tabTree = session.value.tabTree
  for (let index = 0; index < tabTree.length; index++) {
    const item = tabTree[index]
    if (!item) continue

    if (item.children) {
      const groupId = item.id
      item.children.forEach((tab: AnyRecord) => {
        tabs.push({
          ...tab,
          groupId
        })
      })
    } else {
      tabs.push({
        ...item,
        groupId: -1
      })
    }
  }
  return tabs.length
})
const tabGroupLength = computed(() => {
  return session.value.tabTree.filter((item) => item.children).length
})

const getGroupTitleStyle = (meta) => {
  return {
    'background-color': formatColor(meta.color)
  }
}

const getGroupHeaderStyle = (meta) => {
  return {
    'border-left': `1px solid ${formatColor(meta.color)}`,
    'border-right': `1px solid ${formatColor(meta.color)}`,
    'border-top': `1px solid ${formatColor(meta.color)}`,
    'border-bottom-left-radius': 0,
    'border-bottom-right-radius': 0
  }
}
const getGroupContentStyle = (meta) => {
  return {
    'border-left': `1px solid ${formatColor(meta.color)}`,
    'border-right': `1px solid ${formatColor(meta.color)}`,
    'border-bottom': `1px solid ${formatColor(meta.color)}`,
    'border-top-left-radius': 0,
    'border-top-right-radius': 0
  }
}

const globalStore = useGlobalStore()

const openAllTabs = () => {
  globalStore.showOpenTabsAlert = true
}
</script>

<style scoped></style>
