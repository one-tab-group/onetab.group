<template>
  <div class="gradient-header absolute left-0 top-0 overflow-hidden"></div>
  <img
    class="bg-grid pointer-events-none hidden sm:block"
    :src="isDark ? bgGridDark : bgGridLight"
  />

  <!-- header -->
  <header class="px-4 sm:px-6 md:px-8">
    <div
      class="relative pt-6 lg:pt-8 flex items-center justify-between font-semibold leading-6"
      text="slate-700 dark:slate-200 sm"
    >
      <!-- <h1 class="text-xl text-neon">onetab.group</h1> -->
      <h1 class="">
        <svg
          class="h-8 inline-block"
          viewBox="0 0 3147 512"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              d="M107.9 296.31c-26.007 0-47.172-5.603-63.495-16.808-16.323-11.204-27.39-25.799-33.2-43.782H45.65c4.15 10.237 11.343 18.19 21.58 23.862 10.237 5.672 23.24 8.508 39.01 8.508 23.793 0 41.154-5.602 52.082-16.807 10.929-11.206 16.393-27.46 16.393-48.763v-28.635c-7.747 11.067-17.776 19.99-30.088 26.768-12.311 6.778-27.044 10.167-44.197 10.167-20.197 0-37.834-4.634-52.913-13.903-15.078-9.268-26.767-21.925-35.067-37.972S0 125.053 0 105.41c0-19.92 4.15-37.834 12.45-53.742 8.3-15.909 19.99-28.497 35.067-37.766C62.596 4.634 80.233 0 100.43 0c17.153 0 31.886 3.25 44.197 9.752 12.312 6.502 22.341 15.425 30.088 26.768V3.32h31.125v201.275c0 29.603-8.507 52.29-25.523 68.06-17.014 15.77-41.154 23.655-72.417 23.655zm-3.32-113.71c15.217 0 28.15-3.458 38.802-10.375 10.652-6.917 18.814-16.254 24.486-28.012 5.671-11.759 8.507-24.693 8.507-38.803 0-14.387-2.836-27.39-8.507-39.01-5.672-11.62-13.834-20.888-24.486-27.805-10.651-6.917-23.585-10.375-38.802-10.375-15.217 0-28.358 3.458-39.425 10.375C54.088 45.512 45.65 54.78 39.84 66.4c-5.81 11.62-8.715 24.623-8.715 39.01 0 14.11 2.905 27.044 8.715 38.803 5.81 11.758 14.248 21.095 25.315 28.012 11.067 6.917 24.208 10.375 39.425 10.375z"
              id="a"
            />
            <path
              d="M259.79 210.82V3.32h31.125v51.045c1.107-3.597 3.25-8.37 6.433-14.318 3.181-5.948 7.815-11.965 13.902-18.052 6.087-6.087 13.764-11.274 23.033-15.563C343.55 2.145 354.548 0 367.275 0h2.075v31.125h-3.735c-15.493 0-28.843 4.22-40.048 12.657-11.204 8.439-19.781 19.367-25.73 32.785-5.948 13.419-8.922 27.736-8.922 42.953v91.3H259.79z"
              id="b"
            />
            <path
              d="M487.625 214.14c-21.027 0-39.287-4.772-54.78-14.317-15.493-9.546-27.39-22.48-35.69-38.803-8.3-16.323-12.45-34.307-12.45-53.95 0-19.92 4.15-37.972 12.45-54.157 8.3-16.185 20.197-29.05 35.69-38.595C448.338 4.773 466.598 0 487.625 0c21.303 0 39.633 4.772 54.987 14.318 15.356 9.545 27.183 22.41 35.483 38.594 8.3 16.185 12.45 34.238 12.45 54.158 0 19.643-4.15 37.627-12.45 53.95-8.3 16.323-20.128 29.257-35.483 38.802-15.354 9.546-33.684 14.318-54.987 14.318zm0-28.22c15.493 0 28.566-3.597 39.217-10.79 10.652-7.193 18.745-16.808 24.278-28.843 5.533-12.035 8.3-25.107 8.3-39.217 0-14.387-2.767-27.528-8.3-39.425-5.533-11.897-13.626-21.442-24.278-28.635-10.651-7.193-23.724-10.79-39.217-10.79-15.217 0-28.22 3.597-39.01 10.79s-18.952 16.738-24.485 28.635c-5.533 11.897-8.3 25.038-8.3 39.425 0 14.11 2.767 27.183 8.3 39.218 5.533 12.034 13.695 21.649 24.485 28.842 10.79 7.193 23.793 10.79 39.01 10.79z"
              id="c"
            />
            <path
              d="M712.555 214.14c-14.11 0-27.528-3.39-40.255-10.167-12.727-6.779-23.032-16.877-30.917-30.296-7.886-13.418-11.828-29.949-11.828-49.592V3.32h31.125v119.935c0 18.813 5.464 33.96 16.393 45.442C688 180.18 701.903 185.92 718.78 185.92c11.62 0 22.133-2.697 31.54-8.093 9.407-5.394 16.946-12.795 22.617-22.202 5.672-9.407 8.508-20.335 8.508-32.785V3.32h31.125v207.5h-31.125v-32.37c-7.47 9.96-16.6 18.398-27.39 25.315-10.79 6.917-24.623 10.375-41.5 10.375z"
              id="d"
            />
            <path
              d="M866.52 292.99V3.32h31.125v33.2c7.747-11.343 17.776-20.266 30.087-26.768C940.044 3.251 954.777 0 971.93 0c20.197 0 37.834 4.772 52.913 14.318 15.078 9.545 26.767 22.41 35.067 38.594 8.3 16.185 12.45 34.238 12.45 54.158 0 19.643-4.15 37.627-12.45 53.95-8.3 16.323-19.99 29.257-35.068 38.802-15.078 9.546-32.715 14.318-52.912 14.318-17.153 0-31.886-3.39-44.197-10.167-12.312-6.779-22.341-15.701-30.088-26.768V292.99H866.52zm101.26-107.07c15.493 0 28.704-3.597 39.633-10.79 10.928-7.193 19.297-16.808 25.107-28.843 5.81-12.035 8.715-25.107 8.715-39.217 0-14.387-2.905-27.528-8.715-39.425-5.81-11.897-14.18-21.442-25.107-28.635-10.929-7.193-24.14-10.79-39.633-10.79-15.217 0-28.22 3.597-39.01 10.79s-18.952 16.738-24.485 28.635c-5.533 11.897-8.3 25.038-8.3 39.425 0 14.11 2.767 27.183 8.3 39.218 5.533 12.034 13.695 21.649 24.485 28.842 10.79 7.193 23.793 10.79 39.01 10.79z"
              id="e"
            />
            <path
              d="M102.92 293.82c-21.027 0-39.287-4.772-54.78-14.317-15.493-9.546-27.39-22.48-35.69-38.803C4.15 224.377 0 206.393 0 186.75c0-19.92 4.15-37.972 12.45-54.157 8.3-16.185 20.197-29.05 35.69-38.595 15.493-9.546 33.753-14.318 54.78-14.318 21.303 0 39.633 4.772 54.987 14.317 15.355 9.546 27.183 22.41 35.483 38.596 8.3 16.185 12.45 34.237 12.45 54.157 0 19.643-4.15 37.627-12.45 53.95-8.3 16.323-20.127 29.257-35.482 38.803-15.355 9.545-33.685 14.317-54.988 14.317zm0-28.22c15.493 0 28.566-3.597 39.217-10.79 10.652-7.193 18.745-16.808 24.278-28.843 5.533-12.035 8.3-25.107 8.3-39.217 0-14.387-2.767-27.528-8.3-39.425-5.533-11.897-13.626-21.442-24.278-28.635-10.651-7.193-23.724-10.79-39.217-10.79-15.217 0-28.22 3.597-39.01 10.79s-18.952 16.738-24.485 28.635c-5.533 11.897-8.3 25.038-8.3 39.425 0 14.11 2.767 27.183 8.3 39.218 5.533 12.035 13.695 21.649 24.485 28.842 10.79 7.193 23.793 10.79 39.01 10.79z"
              id="f"
            />
            <path
              d="M246.925 290.5V83h31.125v32.37c7.47-9.96 16.6-18.398 27.39-25.315 10.79-6.917 24.623-10.375 41.5-10.375 14.387 0 27.874 3.39 40.462 10.167 12.589 6.779 22.826 16.877 30.71 30.296 7.885 13.418 11.828 29.949 11.828 49.592V290.5h-31.125V170.565c0-18.813-5.395-33.96-16.185-45.442S357.868 107.9 340.715 107.9c-11.62 0-22.133 2.628-31.54 7.885s-16.946 12.657-22.618 22.203c-5.671 9.544-8.507 20.542-8.507 32.992V290.5h-31.125z"
              id="g"
            />
            <path
              d="M573.945 293.82c-21.027 0-39.425-4.772-55.195-14.317-15.77-9.546-28.012-22.48-36.728-38.803-8.714-16.323-13.072-34.307-13.072-53.95 0-19.92 4.15-37.972 12.45-54.157 8.3-16.185 20.197-29.05 35.69-38.595 15.493-9.546 33.753-14.318 54.78-14.318 21.303 0 39.633 4.772 54.987 14.317 15.356 9.546 27.183 22.41 35.483 38.596 8.3 16.185 12.45 34.237 12.45 54.157v12.45H500.905c1.66 12.173 5.603 23.31 11.827 33.407 6.226 10.099 14.595 18.122 25.108 24.07 10.513 5.949 22.687 8.923 36.52 8.923 14.663 0 26.975-3.25 36.935-9.753 9.96-6.501 17.707-14.87 23.24-25.107h34.03c-7.193 18.537-18.606 33.684-34.238 45.442-15.631 11.759-35.759 17.638-60.382 17.638zM501.32 170.15h141.1c-2.767-17.707-10.237-32.508-22.41-44.405-12.173-11.897-28.22-17.845-48.14-17.845s-35.898 5.948-47.933 17.845c-12.035 11.897-19.574 26.698-22.617 44.405z"
              id="h"
            />
            <path
              id="i"
              d="M735.38 290.5V110.39h-42.33V83h42.33V8.715h31.125V83h47.725v27.39h-47.725V290.5z"
            />
            <path
              d="M931.675 293.82c-20.197 0-37.834-4.772-52.912-14.317-15.079-9.546-26.768-22.48-35.068-38.803-8.3-16.323-12.45-34.307-12.45-53.95 0-19.92 4.15-37.972 12.45-54.157 8.3-16.185 19.99-29.05 35.067-38.595 15.079-9.546 32.716-14.318 52.913-14.318 17.153 0 31.886 3.32 44.197 9.96 12.312 6.64 22.341 15.632 30.088 26.975V83h31.125v207.5h-31.125v-33.2c-7.747 11.067-17.776 19.92-30.088 26.56-12.311 6.64-27.044 9.96-44.197 9.96zm4.15-28.22c15.493 0 28.566-3.597 39.217-10.79 10.652-7.193 18.745-16.808 24.278-28.843 5.533-12.035 8.3-25.107 8.3-39.217 0-14.387-2.767-27.528-8.3-39.425-5.533-11.897-13.626-21.442-24.278-28.635-10.651-7.193-23.724-10.79-39.217-10.79-15.217 0-28.358 3.597-39.425 10.79-11.067 7.193-19.505 16.738-25.315 28.635-5.81 11.897-8.715 25.038-8.715 39.425 0 14.11 2.905 27.183 8.715 39.218 5.81 12.035 14.248 21.649 25.315 28.842 11.067 7.193 24.208 10.79 39.425 10.79z"
              id="j"
            />
            <path
              d="M1196.445 293.82c-17.153 0-31.886-3.32-44.197-9.96-12.312-6.64-22.341-15.493-30.088-26.56v33.2h-31.125V0h31.125v116.615c7.747-11.343 17.776-20.335 30.087-26.975 12.312-6.64 27.045-9.96 44.198-9.96 20.197 0 37.834 4.772 52.913 14.317 15.078 9.546 26.767 22.41 35.067 38.596 8.3 16.185 12.45 34.237 12.45 54.157 0 19.643-4.15 37.627-12.45 53.95-8.3 16.323-19.99 29.257-35.067 38.803-15.079 9.545-32.716 14.317-52.913 14.317zm-4.15-28.22c15.493 0 28.704-3.597 39.632-10.79 10.929-7.193 19.298-16.808 25.108-28.843 5.81-12.035 8.715-25.107 8.715-39.217 0-14.387-2.905-27.528-8.715-39.425-5.81-11.897-14.18-21.442-25.108-28.635-10.928-7.193-24.139-10.79-39.632-10.79-15.217 0-28.22 3.597-39.01 10.79s-18.952 16.738-24.485 28.635c-5.533 11.897-8.3 25.038-8.3 39.425 0 14.11 2.767 27.183 8.3 39.218 5.533 12.035 13.695 21.649 24.485 28.842 10.79 7.193 23.793 10.79 39.01 10.79z"
              id="k"
            />
            <path id="l" d="M1332.98 290.5v-42.33h40.255v42.33z" />
          </defs>
          <g fill="none" fill-rule="evenodd">
            <circle cx="256" cy="256" r="256" fill="#0EA5E9" />
            <path
              d="M136 416h240c13.255 0 24 10.745 24 24s-10.745 24-24 24H136c-13.255 0-24-10.745-24-24s10.745-24 24-24z"
              fill="#FFF"
            />
            <circle fill="#FFF" cx="256" cy="208" r="160" />
            <g fill-rule="nonzero">
              <g transform="translate(2066.11 146.18)">
                <use :fill="SVGColor" xlink:href="#a" />
                <use
                  stroke="#0EA5E9"
                  stroke-width="16"
                  fill="#0EA5E9"
                  xlink:href="#a"
                />
              </g>
              <g transform="translate(2066.11 146.18)">
                <use :fill="SVGColor" xlink:href="#b" />
                <use
                  stroke="#0EA5E9"
                  stroke-width="16"
                  fill="#0EA5E9"
                  xlink:href="#b"
                />
              </g>
              <g transform="translate(2066.11 146.18)">
                <use :fill="SVGColor" xlink:href="#c" />
                <use
                  stroke="#0EA5E9"
                  stroke-width="16"
                  fill="#0EA5E9"
                  xlink:href="#c"
                />
              </g>
              <g transform="translate(2066.11 146.18)">
                <use :fill="SVGColor" xlink:href="#d" />
                <use
                  stroke="#0EA5E9"
                  stroke-width="16"
                  fill="#0EA5E9"
                  xlink:href="#d"
                />
              </g>
              <g transform="translate(2066.11 146.18)">
                <use :fill="SVGColor" xlink:href="#e" />
                <use
                  stroke="#0EA5E9"
                  stroke-width="16"
                  fill="#0EA5E9"
                  xlink:href="#e"
                />
              </g>
              <g :fill="SVGColor">
                <g transform="translate(655.11 68.5)">
                  <use xlink:href="#f" />
                  <use :stroke="SVGColor" stroke-width="16" xlink:href="#f" />
                </g>
                <g transform="translate(655.11 68.5)">
                  <use xlink:href="#g" />
                  <use :stroke="SVGColor" stroke-width="16" xlink:href="#g" />
                </g>
                <g transform="translate(655.11 68.5)">
                  <use xlink:href="#h" />
                  <use :stroke="SVGColor" stroke-width="16" xlink:href="#h" />
                </g>
                <g transform="translate(655.11 68.5)">
                  <use xlink:href="#i" />
                  <use :stroke="SVGColor" stroke-width="16" xlink:href="#i" />
                </g>
                <g transform="translate(655.11 68.5)">
                  <use xlink:href="#j" />
                  <use :stroke="SVGColor" stroke-width="16" xlink:href="#j" />
                </g>
                <g transform="translate(655.11 68.5)">
                  <use xlink:href="#k" />
                  <use :stroke="SVGColor" stroke-width="16" xlink:href="#k" />
                </g>
                <g transform="translate(655.11 68.5)">
                  <use xlink:href="#l" />
                  <use :stroke="SVGColor" stroke-width="16" xlink:href="#l" />
                </g>
              </g>
            </g>
          </g>
        </svg>
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
        <svg
          width="1120"
          height="630"
          viewBox="0 0 1120 630"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(1 1)" fill="none" fill-rule="evenodd">
            <rect
              :stroke="SVGColor"
              stroke-width="2"
              width="1118"
              height="628"
              rx="11"
            />
            <path
              d="M1118 39v34H0V39h116c2.387 0 3.676-.948 5.364-2.636A9 9 0 0 0 124 30V12a7 7 0 0 1 7-7h209c3.866 0 6 3.134 6 7v18c0 4.97 5.03 9 10 9h762z"
              :stroke="SVGColor"
              stroke-width="2"
            />
            <path
              d="M101.5 39H116c2.387 0 3.676-.948 5.364-2.636A9 9 0 0 0 124 30V12a7 7 0 0 1 7-7h209c3.866 0 6 3.134 6 7v18c0 4.97 5.03 9 10 9h416"
              stroke="#0EA5E9"
              stroke-width="2"
            />
            <rect
              fill-opacity=".2"
              :fill="SVGColor"
              fill-rule="nonzero"
              x="109"
              y="44"
              width="660"
              height="24"
              rx="12"
            />
            <path
              d="M84 62a5.002 5.002 0 0 0 4.9-4h2.03a7.001 7.001 0 1 1-1.98-5.95L91 50v6h-6l2.535-2.535A5 5 0 1 0 84 62z"
              :fill="SVGColor"
              fill-rule="nonzero"
            />
            <path
              :fill="SVGColor"
              fill-rule="nonzero"
              opacity=".3"
              d="M52.333 50L51 51.4l4.381 4.6H45v2h10.381L51 62.6l1.333 1.4L59 57z"
            />
            <path
              :fill="SVGColor"
              fill-rule="nonzero"
              d="M19.667 50L21 51.4 16.619 56H27v2H16.619L21 62.6 19.667 64 13 57z"
            />
            <g
              opacity=".4"
              transform="translate(591.111 16)"
              :fill="SVGColor"
              fill-rule="nonzero"
            >
              <path
                d="M163.024 1l-1.172 1.333L164.198 5l-2.346 2.667L163.024 9l2.346-2.667L167.716 9l1.173-1.333L166.543 5l2.346-2.667L167.716 1l-2.346 2.667z"
              />
              <rect width="87.963" height="10" rx="5" />
            </g>
            <g
              opacity=".4"
              transform="translate(377 16)"
              :fill="SVGColor"
              fill-rule="nonzero"
            >
              <path
                d="M163.166 1L162 2.333 164.334 5 162 7.667 163.166 9l2.334-2.667L167.834 9 169 7.667 166.666 5 169 2.333 167.834 1 165.5 3.667z"
              />
              <rect width="88" height="10" rx="5" />
            </g>
            <path
              :fill="SVGColor"
              fill-rule="nonzero"
              d="M328.333 17L327 18.333 329.667 21 327 23.667 328.333 25 331 22.333 333.667 25 335 23.667 332.333 21 335 18.333 333.667 17 331 19.667z"
            />
            <rect
              :fill="SVGColor"
              fill-rule="nonzero"
              x="133"
              y="16"
              width="100"
              height="10"
              rx="5"
            />
            <path
              :fill="SVGColor"
              fill-rule="nonzero"
              d="M788 15h-2v5h-5v2h5v5h2v-5h5v-2h-5z"
            />
            <circle fill="#0EA5E9" cx="109.5" cy="21.5" r="8" />
            <circle
              fill-opacity=".99"
              fill="#777879"
              cx="363.5"
              cy="20.5"
              r="8"
            />
            <circle
              fill-opacity=".99"
              fill="#777879"
              cx="577.5"
              cy="20.5"
              r="8"
            />
            <path
              :fill="SVGColor"
              fill-rule="nonzero"
              d="M772 8h1v26h-1zM557 8h1v26h-1z"
            />
            <circle :stroke="SVGColor" cx="24" cy="19" r="5.5" />
            <circle :stroke="SVGColor" cx="44" cy="19" r="5.5" />
            <circle :stroke="SVGColor" cx="64" cy="19" r="5.5" />
          </g>
        </svg>
        <div
          class="max-w-[1120px] mx-auto text-center z-10 absolute left-0 top-0 mt-40"
        >
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
            <span class="text-neon">onetab.group</span> is a chrome extension
            that allows you to manage your tabs & tab groups in one place.
            One-click to aggregate all tabs & tab groups into one session.
          </p>

          <div class="flex flex-wrap justify-center items-center sm:space-x-4">
            <a
              class="flex items-center px-6 py-3 mb-4 text-sm font-medium text-white bg-sky-500 border border-sky-500 rounded-lg sm:w-auto active:text-opacity-75"
              hover="bg-sky-400 text-white"
              focus="outline-none ring"
              href="#"
            >
              <carbon:download class="h-5 w-5 mr-2" />
              <span>Get extension</span>
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
              Explore the tabs using the
              <span class="text-neon">command line</span>
            </h2>
            <p
              class="text-slate-700 dark:text-slate-400 text-lg font-semibold mt-8"
            >
              With the KBar (CMD + K), you can easily switch、 search your
              opened tabs in seconds with the command menu. Even you can drill
              down to find out tab in the tab groups
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
            <img src="/logo.svg" class="h-12" alt="" />
            <img src="/logo-text-light.svg" class="h-8 mt-4" alt="" />
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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDark, useToggle } from '@vueuse/core'

import bgGridDark from '@/assets/bg_grid_dark.svg'
import bgGridLight from '@/assets/bg_grid_light.svg'
import bgGlowDark from '@/assets/bg_glow_dark.svg'
import bgGlowLight from '@/assets/bg_glow_light.svg'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const { locale, availableLocales } = useI18n()
const SVGColor = computed(() => {
  return isDark.value ? '#fff' : '#0F172A'
})

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
  background-image: linear-gradient(
    180deg,
    #f0f9ff 80px,
    rgb(255, 255, 255) 33vh
  );
}

.dark .gradient-header {
  background-image: linear-gradient(
    180deg,
    rgb(30, 41, 59) 80px,
    rgb(15, 23, 42) 33vh
  );
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
