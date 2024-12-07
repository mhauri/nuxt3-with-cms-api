<template>
  <div>
    <div v-html="page?.content || 'No content available.'"></div>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {useNuxtApp, useRuntimeConfig} from '#app';

const {$pagesApi, $projectsApi} = useNuxtApp(); // Access PagesApi and ProjectsApi
const runtimeConfig = useRuntimeConfig();
const tenantId = runtimeConfig.public.tenantId;

let page = null;
let projects = [];

try {
  // Fetch the 'projects' page content
  page = await $pagesApi.pageShow({tenant: tenantId, slug: 'projects'});

  // Fetch the list of projects
  const projectsResponse = await $projectsApi.projectList({tenant: tenantId}); // Call the correct method
  projects = projectsResponse || [];
} catch (error) {
  console.error('Failed to fetch data:', error);
}
</script>
