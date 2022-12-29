<script setup lang="ts">
import { NotionRenderer,getPageBlocks } from "vue3-notion";
import { ref, onMounted } from "vue";
import { mapPageUrl ,pageLinkOptions} from "../lib/props"

const data = ref()

onMounted(async () => {
	let pageId = 'a7aeea0527a143a389b84208b9811c17'
  data.value = await getPageBlocks(pageId as string)
  console.log(data)
})

// ---- or using Composables ----

// const { data } = useGetPageBlocks("dc319cabd1c44876a3ad18e78f931d32")
</script>

<template>
  <NotionRenderer v-if="data" :blockMap="data" :mapPageUrl="mapPageUrl" :pageLinkOptions="pageLinkOptions" fullPage prism katex/>
</template>

<style>
body {
  margin: 0;
  box-sizing: border-box;
  text-align: left;
}
.notion-text {
    text-align: left;
}
.notion-list li {
    padding: 6px 0;
    white-space: pre-wrap;
    text-align: left;
}
</style>