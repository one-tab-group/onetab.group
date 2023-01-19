export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data: navigation } = await useAsyncData('navigation', () =>
    fetchContentNavigation()
  )
  let allContentPath: any[] = []
  
  navigation.value?.map(nav => {
    if (nav.children && nav.children.length > 0) {
      const childPath = nav.children.map(child => child._path)
      allContentPath = [...allContentPath, ...childPath]
    } else {
      allContentPath.push(nav._path)
    }
  })

  // blog page guard
  if (to.fullPath.includes('blog') && !allContentPath.includes(to.fullPath)) {
    abortNavigation()
    return navigateTo('/')
  }
})
