<template>
  <div>
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>

    <main class="max-w-screen-xl pt-12 2xl:pt-16 px-8 my-12 m-auto sm:rounded">
      <slot />
      <Divider between />
    </main>
    <SiteFooter />
    <ClientOnly>
      <Chatwoot />
    </ClientOnly>
  </div>
</template>
