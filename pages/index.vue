<template>
  <div class="gradient-header absolute left-0 top-0 overflow-hidden"></div>
  <img class="bg-grid pointer-events-none hidden sm:block" :src="isDark ? bgGridDark : bgGridLight" />

  <!-- header -->
  <header class="px-4 sm:px-6 md:px-8">
    <div
      class="relative pt-6 lg:pt-8 flex items-center justify-between font-semibold leading-6"
      text="slate-700 dark:slate-200 sm"
    >
      <!-- <h1 class="text-xl text-neon">onetab.group</h1> -->
      <h1 class="">
        <img :src="isDark ? '/favicon.svg' : '/favicon-dark.svg'" class="h-8" alt="">
      </h1>
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
      class="max-w-screen-xl px-4 py-48 mx-auto h-auto lg:h-screen lg:items-center lg:flex"
    >
      <div class="max-w-[1120px] mx-auto relative">
        <svg width="1120px" height="630px" viewBox="0 0 1120 630" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="chrome-frame" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="编组" transform="translate(1.000000, 1.000000)">
                  <rect id="矩形" stroke="#FFFFFF" stroke-width="2" x="0" y="0" width="1118" height="628" rx="11"></rect>
                  <path d="M1118,39 L1118,73 L0,73 L0,39 L116,39 C118.386948,39 119.676134,38.0517884 121.363961,36.363961 C123.051788,34.6761336 124,32.3869484 124,30 L124,12 C124,8.13400675 127.134007,5 131,5 L340,5 C343.865993,5 346,8.13400675 346,12 L346,30 C346,34.9705627 351.029437,39 356,39 L958,39 L1118,39 Z" id="路径" stroke="#FFFFFF" stroke-width="2"></path>
                  <path d="M101.5,39 L116,39 C118.386948,39 119.676134,38.0517884 121.363961,36.363961 C123.051788,34.6761336 124,32.3869484 124,30 L124,12 C124,8.13400675 127.134007,5 131,5 L340,5 C343.865993,5 346,8.13400675 346,12 L346,30 C346,34.9705627 351.029437,39 356,39 L772,39" id="路径" stroke="#0EA5E9" stroke-width="2"></path>
                  <rect id="矩形" fill-opacity="0.2" fill="#FFFFFF" fill-rule="nonzero" x="109" y="44" width="660" height="24" rx="12"></rect>
                  <path d="M84,62 C86.3760667,61.9997092 88.4240266,60.3279051 88.9,58 L90.93,58 C90.404805,61.633706 87.1617457,64.2444407 83.4997055,63.981552 C79.8376654,63.7186632 77.000775,60.671464 77,57 C76.9997957,54.1686074 78.7052934,51.6159212 81.3211476,50.5323665 C83.9370019,49.4488118 86.9480052,50.0478009 88.95,52.05 L91,50 L91,56 L85,56 L87.535,53.465 C85.9348792,51.864396 83.459129,51.5382301 81.49906,52.6697994 C79.538991,53.8013688 78.5834479,56.108458 79.1694224,58.2945398 C79.7553968,60.4806216 81.7367458,62.0004833 84,62 L84,62 Z" id="路径" fill="#FFFFFF" fill-rule="nonzero"></path>
                  <polygon id="路径" fill="#FFFFFF" fill-rule="nonzero" opacity="0.3" points="52.333 50 51 51.4 55.381 56 45 56 45 58 55.381 58 51 62.6 52.333 64 59 57"></polygon>
                  <polygon id="路径" fill="#FFFFFF" fill-rule="nonzero" points="19.667 50 21 51.4 16.619 56 27 56 27 58 16.619 58 21 62.6 19.667 64 13 57"></polygon>
                  <g opacity="0.4" transform="translate(591.111111, 16.000000)" fill="#FFFFFF" fill-rule="nonzero">
                      <polygon id="路径" points="163.024398 1 161.851852 2.333 164.197824 5 161.851852 7.667 163.024398 9 165.37037 6.333 167.716343 9 168.888889 7.667 166.542917 5 168.888889 2.333 167.716343 1 165.37037 3.667"></polygon>
                      <rect id="矩形" x="2.84217094e-14" y="0" width="87.962963" height="10" rx="5"></rect>
                  </g>
                  <g opacity="0.4" transform="translate(377.000000, 16.000000)" fill="#FFFFFF" fill-rule="nonzero">
                      <polygon id="路径" points="163.166375 1 162 2.333 164.333625 5 162 7.667 163.166375 9 165.5 6.333 167.833625 9 169 7.667 166.666375 5 169 2.333 167.833625 1 165.5 3.667"></polygon>
                      <rect id="矩形" x="0" y="0" width="88" height="10" rx="5"></rect>
                  </g>
                  <polygon id="路径" fill="#FFFFFF" fill-rule="nonzero" points="328.333 17 327 18.333 329.667 21 327 23.667 328.333 25 331 22.333 333.667 25 335 23.667 332.333 21 335 18.333 333.667 17 331 19.667"></polygon>
                  <rect id="矩形" fill="#FFFFFF" fill-rule="nonzero" x="133" y="16" width="100" height="10" rx="5"></rect>
                  <polygon id="路径" fill="#FFFFFF" fill-rule="nonzero" points="788 15 786 15 786 20 781 20 781 22 786 22 786 27 788 27 788 22 793 22 793 20 788 20"></polygon>
                  <circle id="group-dot" fill="#0EA5E9" cx="109.5" cy="21.5" r="8"></circle>
                  <circle id="group-dot" fill-opacity="0.99" fill="#777879" cx="363.5" cy="20.5" r="8"></circle>
                  <circle id="group-dot" fill-opacity="0.99" fill="#777879" cx="577.5" cy="20.5" r="8"></circle>
                  <polygon id="路径" fill="#FFFFFF" fill-rule="nonzero" points="772 8 773 8 773 34 772 34"></polygon>
                  <polygon id="路径" fill="#FFFFFF" fill-rule="nonzero" points="557 8 558 8 558 34 557 34"></polygon>
                  <circle id="椭圆形" stroke="#FFFFFF" cx="24" cy="19" r="5.5"></circle>
                  <circle id="椭圆形" stroke="#FFFFFF" cx="44" cy="19" r="5.5"></circle>
                  <circle id="椭圆形" stroke="#FFFFFF" cx="64" cy="19" r="5.5"></circle>
              </g>
          </g>
      </svg>
        <div class="max-w-[1120px] mx-auto text-center z-10 absolute left-0 top-0 mt-40">
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
    </div>
  </section>
  <!-- end hero -->

  <!-- sections -->
  <main
    class="max-w-screen-xl lg:mx-auto features space-y-20 pt-20 sm:pt-24 lg:pt-32"
  >
    <div class="feature-divider feature-divider--between sm:hidden"></div>

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
              class="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-200"
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
              class="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-200"
            >
              Syncronizes your browser tabs &
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
              class="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-200"
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
              class="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-200"
            >
              Turn any tab into a
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
              class="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-200"
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

    <!-- 6. Explore the tabs using the command line-->
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
              class="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-200"
            >
              Explore the tabs using the <span class="text-neon">command line</span>
            </h2>
            <p
              class="text-slate-700 dark:text-slate-400 text-lg font-semibold mt-8"
            >
              With the KBar (CMD + K), you can easily switch、 search your
              opened tabs in seconds with the command menu. Even you can drill down to find out tab in
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
  <!-- end sections-->

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
            <img src="/logo.svg" class="h-12" alt="">
            <img src="/logo-text-light.svg" class="h-8 mt-4" alt="">
          </figcaption>
          <p class="max-w-xs text-sm text-slate-400">
            Manage your tabs & tab groups in one place.
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
  <!--  end footer -->
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

<style scoped>
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

.gradient-header {
  width: 100vw;
  height: 33vh;
  /* background-image: radial-gradient(circle at 50% -100%,rgba(94,163,184, 1),rgba(255, 255, 255, 1) 66%); */
  background-image: linear-gradient(180deg ,#f0f9ff 80px,rgb(255, 255, 255) 33vh);
}

.dark .gradient-header {
  background-image: linear-gradient(180deg ,rgb(30, 41, 59) 80px,rgb(15, 23, 42) 33vh);
  /* background-image: radial-gradient(circle at 50% -100%,rgba(30,41,59, 1),rgba(15,23,42, 1) 66%); */
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
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 0;
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

.chrome-frame {
  transform: translate(-50%, -50%);
}
</style>
