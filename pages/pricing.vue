<template>
  <NuxtLayout name="pricing">
    <header>
      <h2 class="text-primary text-xl lg:text-2xl font-bold text-center">
        Upgrade to start using
        <span class="text-neon">One Tab Group</span> at its Fullest
      </h2>
      <p class="text-secondary text-lg lg:text-xl text-center mt-4">
        Start for free, no credit card required. Upgrade anytime.
      </p>
    </header>
    <main class="my-8">
      <div class="w-full space-y-4 mx-auto py-6">
        <div class="flex gap-4">
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

            <div class="space-x-2 mb-4 h-[50px]">
              <span class="text-shark-100 text-3xl 2xl:text-4xl font-bold"
                >$0</span
              >
            </div>

            <a
              href="https://chrome.google.com/webstore/detail/one-tab-group-tabtab-grou/lajbajamkpmkmldodfbljkjihppdclbm?hl=en-GB&authuser=0"
              target="_blank"
              class="block bg-lochmara-200 bg-opacity-50 hover:bg-lochmara-300 active:bg-lochmara-400 focus-visible:ring ring-lochmara-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Getting Started
            </a>

            <ul
              class="text-shark-200 space-y-2 my-6 lg:text-xs 2xl:text-[14px]"
            >
              <FreeFeatures />

              <!-- feat - start -->
              <li class="flex items-center gap-1.5 font-semibold">
                <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                <span>Basic support</span>
              </li>
              <!-- feat - end -->
            </ul>
          </div>
          <!-- left side - end -->

          <!-- center side - start -->
          <div
            class="w-full bg-gradient-to-br from-lochmara-400 to-lochmara-600 rounded-lg shadow-xl p-6 sm:p-8"
          >
            <div
              class="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4"
            >
              <div>
                <h3 class="text-white text-3xl 2xl:text-4xl font-semibold mb-4">
                  Pro
                </h3>
                <div class="flex gap-2">
                  <p
                    class="inline-block order-first lg:order-none bg-lochmara-200/50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1"
                  >
                    Free updates included
                  </p>
                  <p
                    class="flex items-center inline-block order-first lg:order-none bg-lochmara-200/50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1"
                  >
                    <tabler:discount-2 class="w-4 h-4 mr-1" />
                    <span>Save 30%</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="space-x-2 mb-4 w-full grid grid-cols-2">
              <div
                class="text-white text-base font-bold px-6 py-2 rounded-2xl border border-2 border-white"
              >
                <span class="text-2xl">$2.99</span>
                <span>/month</span>
              </div>
              <div
                class="text-white text-base font-bold px-6 py-2 rounded-2xl border border-2 border-white"
              >
                <span class="text-2xl">$24.9</span>
                <span>/year</span>
              </div>
            </div>

            <!-- <a
              href="https://xiaoluoboding.gumroad.com/l/otg"
              target="_blank"
              class="block bg-lochmara-200 bg-opacity-50 hover:bg-lochmara-300 active:bg-lochmara-400 focus-visible:ring ring-lochmara-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Get Pro License
            </a> -->
            <a
              href="https://otg.lemonsqueezy.com/checkout/buy/073e5834-75af-41b3-bd39-004e83240180?embed=1&dark=1"
              class="lemonsqueezy-button block bg-lochmara-200 bg-opacity-50 hover:bg-lochmara-300 active:bg-lochmara-400 focus-visible:ring ring-lochmara-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Get Pro License
            </a>

            <ul
              class="text-lochmara-50 space-y-2 my-6 lg:text-xs 2xl:text-[14px]"
            >
              <!-- feat - start -->
              <li class="flex items-center gap-1.5 font-semibold">
                <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                <span>All Free Features +</span>
              </li>
              <!-- feat - end -->

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
                <a
                  class="font-semibold"
                  href="/blog/sync-your-browser-tabs-to-notion"
                >
                  Sync browser tabs to Notion (v1.2.0)
                </a>
              </li>
              <!-- feat - end -->

              <!-- feat - start -->
              <li class="flex items-center gap-1.5 font-semibold">
                <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                <a
                  class="font-semibold"
                  href="/blog/search-saved-browser-tabs-and-tab-groups-in-raycast"
                >
                  Search browser tabs in Raycast (v1.3.0)
                </a>
              </li>
              <!-- feat - end -->
            </ul>
          </div>
          <!-- center side - end -->

          <!-- left side - start -->
          <div
            class="w-full bg-gradient-to-br from-shark-600 to-shark-800 rounded-lg shadow-xl p-6 sm:p-8"
          >
            <div
              class="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4"
            >
              <div>
                <h3 class="text-white text-3xl 2xl:text-4xl font-semibold mb-4">
                  Lifetime
                </h3>
                <div class="flex gap-2">
                  <p
                    class="inline-block order-first lg:order-none bg-lochmara-500/50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1"
                  >
                    Pay once, own it forever
                  </p>
                </div>
              </div>
            </div>

            <div class="space-x-2 mb-4 w-full h-[50px]">
              <div class="text-white text-base font-bold rounded-2xl">
                <span class="text-2xl line-through text-opacity-80">$49.9</span>
                <span class="text-3xl">$39.9</span>
                / <span class="text-sm">Limited Time Offer</span>
              </div>
            </div>

            <!-- <a
              href="https://xiaoluoboding.gumroad.com/l/otg_lifetime"
              target="_blank"
              class="relative block bg-lochmara-200 bg-opacity-50 hover:bg-lochmara-300 active:bg-lochmara-400 focus-visible:ring ring-lochmara-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Get Lifetime License
            </a> -->

            <a
              href="https://otg.lemonsqueezy.com/checkout/buy/a79788cc-8ca3-4781-a929-d393517e77d9?embed=1&dark=1"
              class="lemonsqueezy-button relative block bg-lochmara-200 bg-opacity-50 hover:bg-lochmara-300 active:bg-lochmara-400 focus-visible:ring ring-lochmara-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Get Lifetime License
            </a>

            <div class="text-center p-4 text-lochmara-50 text-sm">
              20% off with code <span class="text-neon">7vn673t</span>
            </div>

            <ul
              class="text-lochmara-50 space-y-2 mb-6 lg:text-xs 2xl:text-[14px]"
            >
              <!-- feat - start -->
              <li class="flex items-center gap-1.5 font-semibold">
                <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                <span>All Pro Features +</span>
              </li>
              <!-- feat - end -->

              <!-- feat - start -->
              <li class="flex items-center gap-1.5 font-semibold">
                <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                <span>Lifetime Premium support</span>
              </li>
              <!-- feat - end -->

              <!-- feat - start -->
              <li class="flex items-center gap-1.5 font-semibold">
                <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                <span>Access the beta features</span>
              </li>
              <!-- feat - end -->

              <!-- feat - start -->
              <li class="flex items-center gap-1.5 font-semibold">
                <carbon:checkmark-filled class="w-5 h-5 shrink-0" />
                <span>Future updates included</span>
              </li>
              <!-- feat - end -->
            </ul>
          </div>
          <!-- left side - end -->
        </div>
      </div>
    </main>
    <footer>
      <div class="flex justify-center items-center gap-4">
        <div class="flex items-center gap-4">
          <img src="/logo.svg" class="h-8" alt="" />
        </div>
        <div>
          <p>
            Each new purchase is granted
            <span class="text-neon">100% money back within 7 days</span>
            from purchase date.
          </p>
          <p>
            After you have purchased a license,
            <span class="text-neon">sign in</span> and
            <span class="text-neon">register the license</span> to unlock all
            features.
          </p>
        </div>
      </div>
    </footer>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { isDark } from '~/composables/useDarkMode'

const LTDUrl = computed(() => {
  const url =
    'https://otg.lemonsqueezy.com/checkout/buy/ef730d5f-6f6c-4b15-b766-e9beddd26222?embed=1'
  return isDark.value ? `${url}&dark=1` : url
})
</script>
