<template>
  <NuxtLayout name="pricing">
    <header>
      <h2 class="text-primary text-xl lg:text-2xl font-bold text-center">
        Upgrade to start using
        <span class="text-neon">One Tab Group</span> at its Fullest
      </h2>
    </header>
    <main>
      <div class="w-full space-y-4">
        <div class="py-6">
          <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
            <div class="grid grid-cols-2 gap-4">
              <!-- left side - start -->
              <div class="w-full bg-shark-700 rounded-lg p-6 sm:p-8">
                <div class="mb-4">
                  <h3
                    class="text-shark-100 text-3xl 2xl:text-4xl font-semibold mb-4"
                  >
                    Free
                  </h3>
                  <p
                    class="inline-block order-first lg:order-none bg-lochmara-500/50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1"
                  >
                    No signup needed
                  </p>
                </div>

                <div class="space-x-2 mb-4 py-2">
                  <span class="text-shark-100 text-3xl 2xl:text-4xl font-bold"
                    >$0</span
                  >
                </div>

                <ul
                  class="text-shark-200 space-y-2 mb-6 lg:text-xs 2xl:text-[14px]"
                >
                  <FreeFeatures />

                  <!-- feat - start -->
                  <li class="flex items-center gap-1.5 font-semibold">
                    <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                    <span>Basic support</span>
                  </li>
                  <!-- feat - end -->

                  <!-- feat - start -->
                  <li class="flex items-center gap-1.5 text-shark-400">
                    <carbon:checkmark-outline class="w-5 h-5 shrink-0" />
                    <span>Cloud sync and backup</span>
                  </li>
                  <!-- feat - end -->

                  <!-- feat - start -->
                  <li class="flex items-center gap-1.5 text-shark-400">
                    <carbon:checkmark-outline class="w-5 h-5 shrink-0" />
                    <span>Bookmark your favorite sessions</span>
                  </li>
                  <!-- feat - end -->

                  <!-- feat - start -->
                  <li class="flex items-center gap-1.5 text-shark-400">
                    <carbon:checkmark-outline class="w-5 h-5 shrink-0" />
                    <span>Sharing Session as a link with anyone</span>
                  </li>
                  <!-- feat - end -->
                  <!-- feat - start -->
                  <li class="flex items-center gap-1.5 text-shark-400">
                    <carbon:checkmark-outline class="w-5 h-5 shrink-0" />
                    <span>Clean up duplicate tabs in all sessions</span>
                  </li>
                  <!-- feat - end -->

                  <!-- feat - start -->
                  <li class="flex items-center gap-1.5 text-shark-400">
                    <carbon:checkmark-outline class="w-5 h-5 shrink-0" />
                    <span>
                      Explore all sessions using the command palette
                    </span>
                  </li>
                  <!-- feat - end -->

                  <!-- feat - start -->
                  <li class="flex items-center gap-1.5 text-shark-400">
                    <carbon:checkmark-outline class="w-5 h-5 shrink-0" />
                    <span> Group tabs by domain in Session (v1.2.0)</span>
                  </li>
                  <!-- feat - end -->
                </ul>
              </div>
              <!-- left side - end -->

              <!-- right side - start -->
              <div
                class="w-full bg-gradient-to-tr from-lochmara-500 to-sky-400 rounded-lg shadow-xl p-6 sm:p-8"
              >
                <div
                  class="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4"
                >
                  <div>
                    <h3
                      class="text-white text-3xl 2xl:text-4xl font-semibold mb-4"
                    >
                      Pro
                    </h3>
                    <div class="flex gap-2">
                      <p
                        class="inline-block order-first lg:order-none bg-lochmara-200 bg-opacity-50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1"
                      >
                        Free updates included
                      </p>
                      <p
                        class="flex items-center inline-block order-first lg:order-none bg-lochmara-200 bg-opacity-50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1"
                      >
                        <tabler:discount-2 class="w-4 h-4 mr-1" />
                        <span>Save 17%</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="space-x-2 mb-4 w-full grid grid-cols-2">
                  <div
                    class="text-white text-base font-bold px-6 py-2 rounded-2xl border border-2 border-white"
                  >
                    <span class="text-2xl">$4.9</span>
                    <span>/month</span>
                  </div>
                  <div
                    class="text-white text-base font-bold px-6 py-2 rounded-2xl border border-2 border-white"
                  >
                    <span class="text-2xl">$49</span>
                    <span>/year</span>
                  </div>
                </div>

                <ul
                  class="text-lochmara-50 space-y-2 mb-6 lg:text-xs 2xl:text-[14px]"
                >
                  <FreeFeatures />

                  <!-- feat - start -->
                  <li class="flex items-center gap-1.5 font-semibold">
                    <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                    <span>Premium support</span>
                  </li>
                  <!-- feat - end -->

                  <!-- feat - start -->
                  <li class="flex items-center gap-1.5 font-semibold">
                    <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                    <span>Cloud sync and backup (v1.0.0)</span>
                  </li>
                  <!-- feat - end -->

                  <!-- feat - start -->
                  <li class="flex items-center gap-1.5 font-semibold">
                    <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                    <span>Bookmark your favorite sessions (v1.1.0)</span>
                  </li>
                  <!-- feat - end -->

                  <!-- feat - start -->
                  <li class="flex items-center gap-1.5 font-semibold">
                    <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                    <span>Sharing Session as a link with anyone (v1.1.0)</span>
                  </li>
                  <!-- feat - end -->

                  <!-- feat - start -->
                  <li class="flex items-center gap-1.5 font-semibold">
                    <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                    <span
                      >Clean up duplicate tabs in all sessions (v1.2.0)</span
                    >
                  </li>
                  <!-- feat - end -->

                  <!-- feat - start -->
                  <li class="flex items-center gap-1.5 font-semibold">
                    <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                    <span>
                      Explore all sessions using the command palette (v1.2.0)
                    </span>
                  </li>
                  <!-- feat - end -->

                  <!-- feat - start -->
                  <li class="flex items-center gap-1.5 font-semibold">
                    <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                    <span> Group tabs by domain in Session (v1.2.0)</span>
                  </li>
                  <!-- feat - end -->
                </ul>

                <a
                  href="https://xiaoluoboding.gumroad.com/l/otg"
                  target="_blank"
                  class="block bg-lochmara-200 bg-opacity-50 hover:bg-lochmara-300 active:bg-lochmara-400 focus-visible:ring ring-lochmara-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Get Started
                </a>
              </div>
              <!-- right side - end -->
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="flex justify-center items-center gap-4">
        <div class="flex items-center gap-4">
          <img src="/logo.svg" class="h-8" alt="" />
        </div>
        <p>
          After you have purchased a license,
          <span class="text-neon">sign in</span> and
          <span class="text-neon">register the license</span> to unlock all
          features
        </p>
      </div>
    </footer>
  </NuxtLayout>
</template>

<script lang="ts" setup>
</script>