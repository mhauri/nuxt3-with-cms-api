<template>
  <div>
    <div v-html="page?.content || 'No content available.'"></div>
  </div>
</template>

<script setup>
import {useNuxtApp, useRoute} from '#app';
import {useRuntimeConfig} from '#app';

const {$pagesApi} = useNuxtApp(); // Access the injected PagesApi
const runtimeConfig = useRuntimeConfig();
const tenantId = runtimeConfig.public.tenantId;
const route = useRoute(); // Access the route parameters

let page = null;

try {
  // Fetch the page using the slug
  page = await $pagesApi.pageShow({tenant: tenantId, slug: route.params.slug});
} catch (error) {
  console.error('Failed to fetch page:', error);
}
</script>
