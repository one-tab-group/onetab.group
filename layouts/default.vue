<template>
  <ClientOnly>
    <SiteHeader />
  </ClientOnly>
  <main
    class="max-w-screen-lg px-16 py-16 my-12 m-auto sm:px-16 sm:shadow bg-white dark:bg-shark-800 sm:rounded"
  >
    <article class="prose text-shark-800 dark:text-shark-200 max-w-none">
      <slot />
    </article>
  </main>
  <SiteFooter />
</template>

<style>
/* Customize Prose Styles */
.prose h1,
.prose h2 a,
.prose h3 a,
.prose h4 a {
  @apply no-underline;
  @apply text-shark-800 dark:text-shark-200;
}

.prose p,
.prose ul > li {
  @apply text-shark-700 dark:text-shark-400;
}

.prose h2 a:hover,
.prose h3 a:hover {
  @apply border-b border-neutral-600 dark:border-neutral-300;
}

.prose a {
  @apply text-lochmara-500 dark:text-lochmara-400;
}

.prose pre {
  @apply bg-shark-900;
}

.prose code,
.prose strong {
  @apply dark:text-shark-100;
}

.prose hr {
  @apply dark:border-shark-500;
}
</style>
