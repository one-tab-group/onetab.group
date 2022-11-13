<template>
  <div>
    <ClientOnly>
      <SiteHeader />
    </ClientOnly>

    <main class="max-w-screen-xl pt-12 2xl:pt-16 my-12 m-auto sm:rounded">
      <article class="prose text-shark-800 dark:text-shark-100 max-w-none">
        <PageHeader />

        <Divider between />

        <section class="grid grid-cols-[1fr,2fr]">
          <PageToc />
          <slot />
        </section>
      </article>

      <Divider between />
    </main>
    <SiteFooter />
    <ClientOnly>
      <Chatwoot />
    </ClientOnly>
  </div>
</template>

<style>
/* Customize Prose Styles */
.prose {
  @apply bg-white dark:bg-shark-800 p-20 rounded-lg;
}
.prose h1,
.prose h2 a,
.prose h3 a,
.prose h4 a {
  @apply no-underline;
  @apply text-shark-800 dark:text-shark-50;
}

.prose p,
.prose ul > li,
.prose ol > li {
  @apply text-shark-700 dark:text-shark-300;
}

.prose ul > li > li {
  @apply list-circle list-inside;
}
.prose ul > li > li::marker {
  @apply text-shark-200 dark:text-shark-100;
}

.prose h2 a:hover,
.prose h3 a:hover {
  @apply border-b border-shark-600 dark:border-shark-300;
}

.prose a {
  @apply text-lochmara-500 dark:text-lochmara-400;
}

.prose pre {
  @apply bg-shark-900;
}

.prose strong {
  @apply text-lochmara-500 dark:text-lochmara-400;
}

.prose code,
.prose kbd {
  @apply px-2 py-1 rounded-lg bg-shark-100 dark:bg-shark-700 dark:text-lochmara-400;
}

.prose code::before,
.prose code::after {
  content: '';
}

.prose hr {
  @apply dark:border-shark-500;
}
</style>
