<script lang="ts" setup>
const props = defineProps<{
  currentPage: string;
}>();

const pages = [
  { url: "index", title: "Model Texture Editor" },
  { url: "charset", title: "Charset Editor" },
];
</script>

<template>
  <div class="bg-gray-800">
    <div class="container h-12 items-center text-white text-sm">
      <div class="flex items-center h-12">
        <div class="font-bold mr-6">QuakeWorld Graphics</div>

        <a
          v-for="page in pages"
          :key="page.url"
          :href="`./${page.url}.html`"
          class="px-2 opacity-80 h-full items-center flex hover:text-white hover:opacity-100 transition-colors"
          :class="
            page.url === props.currentPage
              ? 'font-bold text-green-300 opacity-100'
              : ''
          "
          >{{ page.title }}</a
        >
      </div>
    </div>
  </div>
</template>
