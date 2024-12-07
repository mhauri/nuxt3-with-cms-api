<template>
  <div>
    <MetaTags v-if="post?.meta" :meta="post.meta" />
    <h1>{{ post?.title }}</h1>
    <div v-html="post?.content || 'Loading ...'"></div>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue';
import {useNuxtApp, useRoute, useRuntimeConfig} from '#app';
import MetaTags from '~/components/MetaTags.vue';

const {$blogApi} = useNuxtApp();
const runtimeConfig = useRuntimeConfig();
const tenantId = runtimeConfig.public.tenantId;
const route = useRoute();

const post = ref(null);

const fetchPost = async () => {
  try {
    // Fetch the blog post using the slug
    post.value = await $blogApi.postShow({tenant: tenantId, slug: route.params.slug});
  } catch (error) {
    console.error('Failed to fetch post data:', error);
  }
};

// Fetch post initially
fetchPost();

// Watch for route changes and fetch new content
watch(() => route.params.slug, fetchPost);
</script>
