// types/nuxt.d.ts
import {BlogApi, PagesApi, ProjectsApi} from '@mhauri/cms.hauri.dev';

declare module '#app' {
    interface NuxtApp {
        $pagesApi: PagesApi;
        $blogApi: BlogApi;
        $projectsApi: ProjectsApi;
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $pagesApi: PagesApi;
        $blogApi: BlogApi;
        $projectsApi: ProjectsApi;
    }
}