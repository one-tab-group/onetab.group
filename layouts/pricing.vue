<template>
  <div>
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>

    <main class="max-w-screen-lg pt-12 2xl:pt-16 my-12 m-auto sm:rounded">
      <section class="text-shark-800 dark:text-shark-100 max-w-none">
        <slot />
      </section>
      <Divider between />
    </main>
    <SiteFooter />
    <ClientOnly>
      <Chatwoot />
    </ClientOnly>
  </div>
</template>
