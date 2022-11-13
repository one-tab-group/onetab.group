<template>
  <NuxtLayout name="share">
    <section class="flex gap-6 flex-col" v-if="session.shared">
      <h2
        class="text-2xl border-b border-b-shark-100 dark:border-b-shark-700 pb-4"
      >
        {{ session.title }}
      </h2>
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
    <section class="flex items-center flex-col gap-8 justify-center h-96">
      Session has not been shared
      <div>How to shared a session via link?</div>
    </section>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const route = useRoute()

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
</script>

<style scoped></style>
