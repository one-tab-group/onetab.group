<template>
  <!-- header -->
  <header class="px-4 sm:px-6 md:px-8">
    <div
      class="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200"
    >
      <h1 class="text-xl text-neon">onetab.group</h1>
      <div class="flex items-center">
        <div class="hidden md:flex items-center">
          <!-- homepage navigation -->
          <nav>
            <ul class="flex items-center space-x-8">
              <li>
                <a
                  class="hover:text-sky-500 dark:hover:text-sky-400"
                  href="/features"
                >
                  {{ $t('common.features') }}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sponsors/xiaoluoboding"
                  class="hover:text-sky-500 dark:hover:text-sky-400"
                  >Sponsor</a
                >
              </li>
              <li>
                <a
                  class="hover:text-sky-500 dark:hover:text-sky-400"
                  href="/about"
                  >About</a
                >
              </li>
            </ul>
          </nav>
          <!-- end homepage navigation -->
          <div
            class="flex items-center border-l border-slate-900 dark:border-slate-400 ml-6 pl-6 space-x-6"
          >
            <button
              class="flex items-center block text-slate-900 dark:text-white hover:text-slate-500 dark:hover:text-sky-500"
              @click="(e) => toggleDark()"
            >
              <carbon:moon class="h-6 w-6" v-if="isDark" />
              <carbon:sun class="h-6 w-6" v-else />
            </button>
            <button
              class="flex items-center block text-slate-900 dark:text-white hover:text-slate-500 dark:hover:text-sky-500"
              @click="(e) => toggleLocales()"
            >
              <carbon:language class="h-6 w-6" />
            </button>
            <a
              href="https://twitter.com/one-tab-group"
              class="flex items-center block text-slate-900 dark:text-white hover:text-slate-500 dark:hover:text-sky-500"
            >
              <span class="sr-only hidden">OneTabGroup on Twitter</span>
              <carbon:logo-twitter class="h-6 w-6" />
            </a>
            <a
              href="https://github.com/one-tab-group"
              class="flex items-center block text-slate-900 dark:text-white hover:text-slate-500 dark:hover:text-sky-500"
            >
              <span class="sr-only hidden">OneTabGroup on GitHub</span>
              <carbon:logo-github class="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- hero -->
  <section class="hero">
    <div
      class="max-w-screen-xl px-4 py-64 mx-auto h-auto lg:h-screen lg:items-center lg:flex"
    >
      <div class="max-w-4xl mx-auto text-center z-10">
        <h1
          class="relative font-bold tracking-tight space-y-4"
          text="4xl slate-900 dark:slate-200 sm:5xl md:6xl lg:7xl center"
        >
          <p>
            Your <span class="text-neon">all-in-one</span> tab manager for
            chrome
          </p>
        </h1>

        <p
          class="max-w-xl mx-auto mt-8 mb-16 text-xl font-medium sm:leading-relaxed sm:text-xl text-slate-600 dark:text-slate-200"
        >
          <span class="text-neon">onetab.group</span> is a chrome extension that
          allows you to manage your tabs & tab groups in one place. One-click to
          aggregate all tabs & tab groups into one session.
        </p>

        <div class="flex flex-wrap justify-center items-center sm:space-x-4">
          <a
            class="flex items-center px-6 py-3 mb-4 text-sm font-medium text-white bg-sky-500 border border-sky-500 rounded-lg sm:w-auto active:text-opacity-75"
            hover="bg-sky-400 text-white"
            focus="outline-none ring"
            href="#"
          >
            <carbon:download class="h-5 w-5 mr-2" /> <span>Get extension</span>
          </a>

          <a
            class="flex items-center px-6 py-3 mb-4 text-sm font-medium text-slate-900 bg-slate-200 rounded-lg sm:w-auto active:bg-sky-400"
            hover="bg-sky-500 text-white border-slate-200 outline-none"
            border="~ slate-200 opacity-30 hover:opacity-10"
            dark="bg-white text-slate-200 backdrop-filter backdrop-blur-sm backdrop-saturate-[180%] bg-opacity-33 hover:bg-opacity-10"
            href="https://github.com/sponsors/xiaoluoboding"
          >
            <carbon:logo-github class="h-5 w-5 mr-2" />
            <span>Sponsor on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- end hero -->

  <!-- sections -->
  <main
    class="max-w-screen-xl lg:mx-auto features space-y-20 pt-20 sm:pt-24 lg:pt-32"
  >
    <!-- 1. Organise tabs & tab groups efficiently -->
    <section class="left-desc">
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 text-center sm:text-left"
        >
          <div
            class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
          >
            <img
              class="rounded-lg shadow-lg border-slate-50 mx-auto sm:mx-0"
              src="https://picsum.photos/640/360"
              alt=""
            />
          </div>

          <div class="lg:pb-20">
            <h2
              class="text-4xl font-semibold text-slate-900 dark:text-slate-200"
            >
              Organise tabs &
              <span class="text-sky-500">tab groups</span> efficiently
            </h2>
            <p
              class="text-slate-700 dark:text-slate-400 text-lg font-semibold mt-8"
            >
              You can drag & drop tabs or tab groups in your sessions to reorder
              them. Even could drag the opened tabs into the sessions.
            </p>

            <a class="btn btn-secondary btn-blur" href="/extension">
              <carbon:download class="h-5 w-5 mr-2" />
              <span>Get extension</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="feature-divider feature-divider--left"></div>

    <!-- 2. Sync with your opened tabs & tab groups-->

    <section class="right-desc">
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 text-center sm:text-left"
        >
          <div
            class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full"
          >
            <img
              class="rounded-lg shadow-lg border-slate-50 mx-auto sm:mx-0"
              src="https://picsum.photos/640/360"
              alt=""
            />
          </div>

          <div class="lg:pb-20">
            <h2
              class="text-4xl font-semibold text-slate-900 dark:text-slate-200"
            >
              Sync with your opened tabs &
              <span class="text-sky-500">tab groups</span>
            </h2>
            <p
              class="text-slate-700 dark:text-slate-400 text-lg font-semibold mt-8"
            >
              Are you struggling to find the tab you're looking for after
              opening huge amount of tabs? We have synchronized the tabs and tab
              groups you are browsing in chrome, so you can easily manage your
              open tabs and tab groups.
            </p>

            <a class="btn btn-secondary btn-blur" href="/extension">
              <carbon:download class="h-5 w-5 mr-2" />
              <span>Get extension</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="feature-divider feature-divider--right"></div>

    <!-- 3. Save/Restore/Reorganise tabs, even tab groups -->

    <section class="left-desc">
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 text-center sm:text-left"
        >
          <div
            class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
          >
            <img
              class="rounded-lg shadow-lg border-slate-50 mx-auto sm:mx-0"
              src="https://picsum.photos/640/360"
              alt=""
            />
          </div>

          <div class="lg:pb-20">
            <h2
              class="text-4xl font-semibold text-slate-900 dark:text-slate-200"
            >
              Save/Restore/Reorganise tabs
              <p class="text-sky-500">Even tab groups</p>
            </h2>
            <p
              class="text-slate-700 dark:text-slate-400 text-lg font-semibold mt-8"
            >
              One-click to aggregate all tabs & tab groups into one session. You
              can restore all your tabs & tab groups later as they are. Also you
              can reorganise the session and restore it with ease.
            </p>

            <a class="btn btn-secondary btn-blur" href="/extension">
              <carbon:download class="h-5 w-5 mr-2" />
              <span>Get extension</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="feature-divider feature-divider--left"></div>

    <!-- 4. Turn any tab as a visual web bookmark -->
    <section class="right-desc">
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 text-center sm:text-left"
        >
          <div
            class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full"
          >
            <img
              class="rounded-lg shadow-lg border-slate-50 mx-auto sm:mx-0"
              src="https://picsum.photos/640/360"
              alt=""
            />
          </div>

          <div class="lg:pb-20">
            <h2
              class="text-4xl font-semibold text-slate-900 dark:text-slate-200"
            >
              Turn any tab as a
              <span class="text-neon">visual web bookmark</span>
            </h2>
            <p
              class="text-slate-700 dark:text-slate-400 text-lg font-semibold mt-8"
            >
              By hovering over the tab in the session, you can use the link as a
              <span class="text-neon">visual web bookmark</span>, like a Twitter
              card or Notion web bookmark. You can preview the website via the
              information like a website's title, description, logo, author,
              thumbnails.
            </p>

            <a class="btn btn-secondary btn-blur" href="/extension">
              <carbon:download class="h-5 w-5 mr-2" />
              <span>Get extension</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="feature-divider feature-divider--right"></div>

    <!-- 5. Save/Restore/Reorganise tabs, even tab groups -->

    <section class="left-desc">
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 text-center sm:text-left"
        >
          <div
            class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
          >
            <img
              class="rounded-lg shadow-lg border-slate-50 mx-auto sm:mx-0"
              src="https://picsum.photos/640/360"
              alt=""
            />
          </div>

          <div class="lg:pb-20">
            <h2
              class="text-4xl font-semibold text-slate-900 dark:text-slate-200"
            >
              Never miss your tabs &
              <span class="text-sky-500">tab groups</span>
            </h2>
            <p
              class="text-slate-700 dark:text-slate-400 text-lg font-semibold mt-8"
            >
              You can export the sessions into a JSON file, and import back to
              <span class="text-neon">onetab.group</span> later. Even could
              import from one-tab's exported data.
            </p>

            <a class="btn btn-secondary btn-blur" href="/extension">
              <carbon:download class="h-5 w-5 mr-2" />
              <span>Get extension</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="feature-divider feature-divider--left"></div>

    <!-- 6. Explore the tabs using the KBar-->
    <section class="right-desc">
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 text-center sm:text-left"
        >
          <div
            class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full"
          >
            <img
              class="rounded-lg shadow-lg border-slate-50 mx-auto sm:mx-0"
              src="https://picsum.photos/640/360"
              alt=""
            />
          </div>

          <div class="lg:pb-20">
            <h2
              class="text-4xl font-semibold text-slate-900 dark:text-slate-200"
            >
              Explore the tabs using the <span class="text-neon">KBar</span>
            </h2>
            <p
              class="text-slate-700 dark:text-slate-400 text-lg font-semibold mt-8"
            >
              With the KBar (CMD + K), you can easily switch、 search your
              opened tabs in seconds. Even you can drill down to find out tab in
              the tab groups
            </p>

            <a class="btn btn-secondary btn-blur" href="/extension">
              <carbon:download class="h-5 w-5 mr-2" />
              <span>Get extension</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="feature-divider feature-divider--between"></div>

    <!-- 7. supercharge features -->
    <section class="relative text-slate-900 dark:text-white">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">
            <span class="text-neon">Supercharge</span> your tab mangement for
            Chrome
          </h2>

          <p class="mt-4 text-slate-700 dark:text-slate-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            class="card-blur block p-8 transition shadow-xl rounded-xl z-10"
            bg="white/75 dark:slate-900/75"
            border="~ slate-200 dark:slate-800"
            hover="shadow-sky-500/10 border-sky-500/10"
            href="/services/digital-campaigns"
          >
            <bx:bx-window-open class="h-8 w-8 text-sky-500" />

            <h3 class="mt-4 text-xl font-bold text-slate-70 dark:text-white">
              Restore all your tabs
            </h3>

            <p class="mt-1 text-sm text-slate-500 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            class="card-blur block p-8 transition shadow-xl rounded-xl z-10"
            bg="white/75 dark:slate-900/75"
            border="~ slate-200 dark:slate-800"
            hover="shadow-sky-500/10 border-sky-500/10"
            href="/services/digital-campaigns"
          >
            <mdi:open-in-new class="h-8 w-8 text-sky-500" />

            <h3 class="mt-4 text-xl font-bold text-slate-70 dark:text-white">
              Restore tabs in new window
            </h3>

            <p class="mt-1 text-sm text-slate-500 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            class="card-blur block p-8 transition shadow-xl rounded-xl z-10"
            bg="white/75 dark:slate-900/75"
            border="~ slate-200 dark:slate-800"
            hover="shadow-sky-500/10 border-sky-500/10"
            href="/services/digital-campaigns"
          >
            <mdi:content-copy class="h-8 w-8 text-sky-500" />

            <h3 class="mt-4 text-xl font-bold text-slate-70 dark:text-white">
              Copy links to your clipboard
            </h3>

            <p class="mt-1 text-sm text-slate-500 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            class="card-blur block p-8 transition shadow-xl rounded-xl z-10"
            bg="white/75 dark:slate-900/75"
            border="~ slate-200 dark:slate-800"
            hover="shadow-sky-500/10 border-sky-500/10"
            href="/services/digital-campaigns"
          >
            <bx:bx-windows class="h-8 w-8 text-sky-500" />

            <h3 class="mt-4 text-xl font-bold text-slate-70 dark:text-white">
              Restore tabs with group
            </h3>

            <p class="mt-1 text-sm text-slate-500 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            class="card-blur block p-8 transition shadow-xl rounded-xl z-10"
            bg="white/75 dark:slate-900/75"
            border="~ slate-200 dark:slate-800"
            hover="shadow-sky-500/10 border-sky-500/10"
            href="/services/digital-campaigns"
          >
            <mdi:group class="h-8 w-8 text-sky-500" />

            <h3 class="mt-4 text-xl font-bold text-slate-70 dark:text-white">
              Create a new group
            </h3>

            <p class="mt-1 text-sm text-slate-500 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            class="card-blur block p-8 transition shadow-xl rounded-xl z-10"
            bg="white/75 dark:slate-900/75"
            border="~ slate-200 dark:slate-800"
            hover="shadow-sky-500/10 border-sky-500/10"
            href="/services/digital-campaigns"
          >
            <mdi:ungroup class="h-8 w-8 text-sky-500" />

            <h3 class="mt-4 text-xl font-bold text-slate-70 dark:text-white">
              Ungroup
            </h3>

            <p class="mt-1 text-sm text-slate-500 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            class="card-blur block p-8 transition shadow-xl rounded-xl z-10"
            bg="white/75 dark:slate-900/75"
            border="~ slate-200 dark:slate-800"
            hover="shadow-sky-500/10 border-sky-500/10"
            href="/services/digital-campaigns"
          >
            <carbon:moon class="h-8 w-8 text-sky-500" />

            <h3 class="mt-4 text-xl font-bold text-slate-70 dark:text-white">
              Dark mode
            </h3>

            <p class="mt-1 text-sm text-slate-500 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            class="card-blur block p-8 transition shadow-xl rounded-xl z-10"
            bg="white/75 dark:slate-900/75"
            border="~ slate-200 dark:slate-800"
            hover="shadow-sky-500/10 border-sky-500/10"
            href="/services/digital-campaigns"
          >
            <carbon:language class="h-8 w-8 text-sky-500" />

            <h3 class="mt-4 text-xl font-bold text-slate-70 dark:text-white">
              i18n support
            </h3>

            <p class="mt-1 text-sm text-slate-500 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>

          <a
            class="card-blur block p-8 transition shadow-xl rounded-xl z-10"
            bg="white/75 dark:slate-900/75"
            border="~ slate-200 dark:slate-800"
            hover="shadow-sky-500/10 border-sky-500/10"
            href="/services/digital-campaigns"
          >
            <carbon:keyboard class="h-8 w-8 text-sky-500" />

            <h3 class="mt-4 text-xl font-bold text-slate-70 dark:text-white">
              Keyboard shortcuts
            </h3>

            <p class="mt-1 text-sm text-slate-500 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </a>
        </div>
      </div>
      <img
        class="bg-glow pointer-events-none hidden sm:block !max-w-screen-xl"
        :src="isDark ? bgGlowDark : bgGlowLight"
      />
    </section>

    <div class="feature-divider feature-divider--between"></div>

    <!-- 8. Ready to get started? -->
    <section class="my-16 mx-auto px-8">
      <div
        class="bg-point relative px-8 py-16 mx-auto sm:px-6 lg:px-8 flex flex-col justify-center items-center rounded-lg"
      >
        <div
          class="text-5xl text-slate-200 dark:text-slate-900 mb-8 font-semibold"
        >
          Ready to get started?
        </div>
        <p
          class="text-lg pb-8 text-center max-w-3xl mx-auto text-slate-200 dark:text-slate-700 font-medium"
        >
          Manage your tabs & tab groups in one place.
        </p>
        <a
          class="bg-sky-500 highlight-white/20 hover:bg-sky-400 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center sm:w-auto"
          focus="outline-none ring-2 ring-slate-400 ring-offset-2 ring-offset-slate-50"
          dark="bg-slate-900 highlight-white/20 hover:bg-slate-700"
          href="/extension"
        >
          <carbon:download class="h-5 w-5 mr-2" /> <span>Get extension</span>
        </a>
      </div>
    </section>
  </main>

  <!-- footer -->
  <footer
    class="mt-20 py-16 px-8 bg-slate-900 text-slate-200 sm:py-16 lg:py-20"
  >
    <div class="max-w-screen-xl mx-auto w-full">
      <div
        class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left sm:p-0 py-20"
      >
        <section>
          <figcaption class="text-3xl font-semibold mb-4">
            onetab.group
          </figcaption>
          <p class="max-w-xs mt-8 text-sm text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            accusantium.
          </p>
          <figure class="text-slate-400 mt-8">
            <ul class="space-x-6 flex justify-center sm:justify-start">
              <li class="flex items-center">
                <carbon:logo-twitter class="h-6 w-6" />
              </li>
              <li class="flex items-center">
                <carbon:logo-github class="h-6 w-6" />
              </li>
            </ul>
          </figure>
        </section>
        <div>
          <p class="text-xl font-semibold">Getting Started</p>

          <nav class="flex flex-col mt-4 space-y-2 text-md text-slate-400">
            <a class="hover:opacity-75 text-neon" href=""> Get extension </a>
            <a class="hover:opacity-75" href=""> Keyboard shortcuts </a>
            <a class="hover:opacity-75" href=""> Migration from OneTab </a>
            <a class="hover:opacity-75" href=""> Help Center </a>
          </nav>
        </div>

        <div>
          <p class="text-xl font-semibold">Features</p>

          <nav class="flex flex-col mt-4 space-y-2 text-md text-slate-400">
            <a class="hover:opacity-75" href=""> Save all tabs & tab groups </a>
            <a class="hover:opacity-75" href=""> Sync Opened Tabs </a>
            <a class="hover:opacity-75" href="">
              Drag & Drop opened tabs into session
            </a>
            <a class="hover:opacity-75" href="">
              Restore all tabs with tab group
            </a>
            <a class="hover:opacity-75" href=""> Visualization web bookmark </a>
            <a class="hover:opacity-75" href=""> KBar support </a>
          </nav>
        </div>

        <div>
          <p class="text-xl font-semibold">Support</p>

          <nav class="flex flex-col mt-4 space-y-2 text-md text-slate-400">
            <a class="hover:opacity-75" href=""> Chrome Extension </a>
            <a class="hover:opacity-75" href=""> IndieHackers </a>
            <a class="hover:opacity-75" href=""> ProductHunt </a>
            <a class="hover:opacity-75" href=""> Contact </a>
            <a class="hover:opacity-75" href=""> Changelog </a>
          </nav>
        </div>
      </div>
      <div class="feature-divider feature-divider--between"></div>
      <div
        class="flex justify-between items-center flex-col lg:flex-row py-8 lg:p-0"
      >
        <div class="text-center sm:text-left">
          One Tab Group © 2022 <span class="text-neon">onetab.group</span>. All
          rights reserved.
        </div>
        <div class="divide-x divide-slate-200">
          <a href="/terms-of-services" class="px-2">Terms of Services</a>
          <a href="/privacy-policy" class="px-2">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>

  <img class="bg-grid pointer-events-none" :src="bgGridDark" v-if="isDark" />
  <img class="bg-grid pointer-events-none" :src="bgGridLight" v-else />
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useDark, useToggle } from '@vueuse/core'

import bgGridDark from '@/assets/bg_grid_dark.svg'
import bgGridLight from '@/assets/bg_grid_light.svg'
import bgGlowDark from '@/assets/bg_glow_dark.svg'
import bgGlowLight from '@/assets/bg_glow_light.svg'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const { locale, availableLocales } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  console.log(locale.value)
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<style>
.bg-point {
  background-image: radial-gradient(#0ea5e9 1px, #0f172a 1px);
  background-size: 20px 20px;
}
.dark .bg-point {
  background-image: radial-gradient(#94a3b8 1px, #f8fafc 1px);
}

.feature-divider {
  @apply h-[2px] max-w-screen-xl mx-auto my-16;
}

.feature-divider--left {
  background: linear-gradient(
    90deg,
    rgba(14, 165, 233, 0.66),
    rgba(179, 132, 201, 0)
  );
}
.feature-divider--right {
  background: linear-gradient(
    90deg,
    rgba(179, 132, 201, 0),
    rgba(14, 165, 233, 0.66)
  );
}
.feature-divider--between {
  background: linear-gradient(
    90deg,
    rgba(179, 132, 201, 0),
    rgba(14, 165, 233, 0.66),
    rgba(179, 132, 201, 0)
  );
}

.bg-grid {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  margin: 0 auto;
  z-index: 0;
  transform: translate(-50%, -50%);
}

.bg-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  max-width: none;
  height: auto;
  z-index: 0;
  transform: translate(-50%, -50%);
}
</style>
