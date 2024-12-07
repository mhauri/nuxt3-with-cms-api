<template>
  <div>
    <div v-html="page?.content || 'No content available.'"></div>

    <h2>All Blog Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/blog/${post.slug}`">{{ post.title }}</nuxt-link>
        <p>{{ post.lead }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useNuxtApp, useRuntimeConfig } from '#app';

const { $pagesApi, $blogApi } = useNuxtApp(); // Access PagesApi and BlogApi
const runtimeConfig = useRuntimeConfig();
const tenantId = runtimeConfig.public.tenantId;

let page = null;
let posts = [];

try {
  page = await $pagesApi.pageShow({ tenant: tenantId, slug: 'blog' });

  const categoryResponse = await $blogApi.categoryShow({ tenant: tenantId, slug: 'blog' });
  posts = categoryResponse.posts || [];
} catch (error) {
  console.error('Failed to fetch data:', error);
}
</script>
