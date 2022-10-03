<template>
  <div class="border-lines border-t py-0 text-sm text-tertiary sm:py-1">
    <div class="container flex flex-col items-center sm:flex-row">
      <ul class="flex items-center sm:mr-auto sm:flex-row">
        <li class="mr-0 p-2 sm:mr-5">Reach me at:</li>
        <li class="flex flex-row gap-2 sm:gap-0">
          <span
            v-for="item in footer"
            :key="item.contact"
            class="my-3 mr-0 flex flex-row sm:my-0 sm:mr-2"
          >
            <a :href="item.contact" target="_blank">
              <img
                :src="item.thumbnail"
                width="25"
                class="opacity-80 hover:opacity-100"
              />
            </a>
          </span>
        </li>
      </ul>
      <div class="mb-3 text-tertiary sm:mb-0">
        Zouhair El-Mariami {{ currentYear }} ©
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  data() {
    return {
      footer: null,
    };
  },
  async fetch() {
    this.footer = await this.$content("footer", { deep: true }).fetch();
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
