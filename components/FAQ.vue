<template>
  <div class="py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2
          class="text-primary text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          Frequently Asked Questions
        </h2>
      </div>
      <!-- text - end -->

      <div
        class="flex flex-col max-w-screen-lg mx-auto divide-y-1 divide-shark-100 dark:divide-shark-600 border border-shark-100 dark:border-shark-600"
      >
        <!-- question - start Where is your data stored? -->
        <div class="faq-wrapper">
          <div class="faq">
            <span class="md:text-lg font-semibold transition duration-100">
              Where is your data stored?
            </span>
          </div>

          <div class="answer">
            <p>
              First of all we don't read or save any of your data, Your data is
              locally stored in the browser's own data storage solution
              <strong text="lochmara-400">indexed db</strong>.
            </p>
            <p>
              Please don't trust your browser,
              <span class="text-neon">One Tab Group</span>
              provides a data backup solution, please backup your data often to
              ensure that you will not lose it.
            </p>
          </div>
        </div>
        <!-- question - end -->

        <!-- question - start Why do I need to log in? -->
        <div class="faq-wrapper">
          <div class="faq">
            <span class="md:text-lg font-semibold transition duration-100">
              Why do I need to log in?
            </span>
          </div>

          <div class="answer">
            <p>
              <span class="text-neon">One Tab Group</span> currently offers two
              third-party logins: <span text="lochmara-400">Google</span> and
              <span text="lochmara-400">GitHub</span>, but it is not mandatory,
              login with third-party accounts let you access to two features
              below:
            </p>
            <ul>
              <li text="lochmara-400">
                Cloud syncing of settings based on Google account
              </li>
              <li text="lochmara-400">Email-based data backup</li>
            </ul>
            <p>
              We support
              <span text="lochmara-400">Google login-based settings sync</span>,
              which means that if you log in to another device with your Google
              account, the settings in OTG can be synced directly to it.
            </p>

            <p>
              We support
              <span text="lochmara-400">Email-based data backup</span>, you can
              send the backup data in JSON format to your email to ensure your
              data will not be lost.
            </p>

            <p>Please rest assured that we do not read or store your data.</p>

            <p>
              You will also need login with third-party account to sync your
              data to the cloud.
            </p>
          </div>
        </div>
        <!-- question - end -->

        <!-- question - start Does it support cloud sync? -->
        <div class="faq-wrapper">
          <div class="faq">
            <span class="md:text-lg font-semibold transition duration-100">
              Does it support cloud sync?
            </span>
          </div>

          <div class="answer">
            <p>
              Cloud sync is in our
              <a
                href="https://github.com/orgs/one-tab-group/projects/1"
                class="text-neon"
                target="_blank"
                >roadmap</a
              >, but you need to login through a third party account(Google or
              GitHub) to use it.
            </p>
            <p>
              Cloud sync means that your data will be uploaded to the cloud, but
              we guarantee that all data uploaded to the cloud will be encrypted
              server-side using the
              <strong text="lochmara-400">AES-256</strong> algorithm during the
              transfer, so that your data will not be leaked.
            </p>
            <p>Note that this is a paid feature, so stay tuned.</p>
          </div>
        </div>
        <!-- question - end -->

        <!-- question - start Don't have enough features, need new ones?-->
        <div class="faq-wrapper">
          <div class="faq">
            <span class="md:text-lg font-semibold transition duration-100"
              >Don't have enough features, need new ones?</span
            >
          </div>

          <div class="answer">
            <p>
              No problem, <span class="text-neon">One Tab Group</span> follows
              the <span text="lochmara-400">build in public</span> principle and
              listens to the opinions and suggestions of the community users.
            </p>
            <p>
              Because of this,
              <span class="text-neon">One Tab Group</span> grows with you and
              gets better and better!
            </p>
            <p>
              You can
              <a
                href="https://github.com/one-tab-group/onetab.group/issues/new"
                class="text-neon"
              >
                suggest a change
              </a>
              , and we will check on it.
            </p>
          </div>
        </div>
        <!-- question - end -->

        <!-- question - start oes One Tab Group work on Firefox?-->
        <div class="faq-wrapper">
          <div class="faq">
            <span class="md:text-lg font-semibold transition duration-100">
              Does One Tab Group work on Firefox?
            </span>
          </div>

          <div class="answer">
            <p>
              There’s no <span text="lochmara-400">Firefox</span> version and at
              the moment there are no plans on releasing one. Because Firefox
              does not support the creation of Tab Groups at this time. But we
              support
              <a
                class="text-neon"
                href="https://microsoftedge.microsoft.com/addons/detail/one-tab-group-tabtab-g/njmgdlgmnlinpieohfpmiipenmgilpga"
                target="_blank"
                >Microsoft Edge</a
              >
              version.
            </p>
          </div>
        </div>
        <!-- question - end -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.faq {
  @apply flex justify-between cursor-pointer gap-2 p-5;
  @apply text-primary hover:text-lochmara-500 active:text-lochmara-600;
  @apply border-b border-shark-100 dark:border-shark-600;
}
.answer {
  @apply text-secondary flex flex-col gap-4 p-5;
}
</style>
