<script setup lang="ts">
import { NotionRenderer,getPageBlocks } from "vue3-notion";
import { ref, onMounted } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { mapPageUrl ,pageLinkOptions} from "../lib/props"

const route = useRoute()
let data = ref()

onMounted(async () => {
  let pageId = route.params.id;
  if(pageId === undefined){
	pageId = 'ac8bed9a5af24ff08ec5b63e28964216'
  }
  data.value = await getPageBlocks(pageId as string)
  console.log(data)
})
onBeforeRouteUpdate(async (to) => {
  let pageId = to.params.id;
  if(pageId === undefined){
	pageId = 'ac8bed9a5af24ff08ec5b63e28964216'
  }
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