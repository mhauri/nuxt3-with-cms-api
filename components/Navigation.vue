<template>
  <div>
    <h1>All Pages</h1>
    <ul>
      <li v-for="page in pages" :key="page.id">
        <nuxt-link :to="`/${page.slug}`">{{ page.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {useNuxtApp, useRuntimeConfig} from '#app';

const { $pagesApi } = useNuxtApp(); // Access the injected PagesApi
const runtimeConfig = useRuntimeConfig();
const tenantId = runtimeConfig.public.tenantId;

let pages = [];

try {
  pages = await $pagesApi.pageList({tenant: tenantId});
} catch (error) {
  console.error('Failed to fetch pages:', error);
}
</script>