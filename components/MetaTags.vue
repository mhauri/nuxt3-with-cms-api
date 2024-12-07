<template>
  <!-- This component does not render anything visible -->
  <div v-if="false"></div>
</template>

<script setup>
import { watch, onMounted } from 'vue';
import { useHead } from '#app';
import { useRuntimeConfig } from '#app';

// Define props using defineProps
const props = defineProps({
  meta: {
    type: Object,
    required: true,
  },
});

// Access runtime config
const runtimeConfig = useRuntimeConfig();
const handle = runtimeConfig.public.handle;

// Destructure meta for better clarity
const {meta} = props;

// Function to update meta tags
const updateMetaTags = (meta) => {
  if (meta && meta.title && meta.description) {
    useHead({
      title: meta.title,
      meta: [
        {name: 'description', content: meta.description},
        {property: 'og:title', content: meta.title},
        {property: 'og:description', content: meta.description},
        {property: 'og:image', content: meta.image},
        {property: 'twitter:card', content: 'summary_large_image'},
        {property: 'twitter:title', content: meta.title},
        {property: 'twitter:description', content: meta.description},
        {property: 'twitter:image', content: meta.image},
        {property: 'twitter:creator', content: handle},
        {property: 'twitter:site', content: handle},
      ],
    });
  } else {
    console.warn('Invalid meta object:', meta);
  }
};

// Watch and update meta tags when the `meta` prop changes
watch(
    () => meta,
    (newMeta) => {
      if (newMeta) {
        updateMetaTags(newMeta);
      }
    },
    {immediate: true} // Trigger watcher immediately on mount
);

// Initial setup for meta
onMounted(() => {
  if (meta) {
    updateMetaTags(meta);
  }
});
</script>
