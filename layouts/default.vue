<template>
  <ClientOnly>
    <SiteHeader />
  </ClientOnly>

  <main class="max-w-screen-xl pt-24 my-12 m-auto sm:rounded">
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
</template>

<style>
/* Customize Prose Styles */
.prose h1,
.prose h2 a,
.prose h3 a,
.prose h4 a {
  @apply no-underline;
  @apply text-shark-800 dark:text-shark-100;
}

.prose p,
.prose ul > li,
.prose ol > li {
  @apply text-shark-700 dark:text-shark-300;
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

.prose code,
.prose strong {
  @apply text-lochmara-500 dark:text-lochmara-300;
}

.prose code::before,
.prose code::after {
  content: '';
}

.prose hr {
  @apply dark:border-shark-500;
}
</style>
