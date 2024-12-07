import {defineNuxtPlugin} from '#app';
import {Configuration, PagesApi, BlogApi, ProjectsApi} from '@mhauri/cms.hauri.dev';

export default defineNuxtPlugin(() => {
    const config = new Configuration({
        basePath: 'https://cms.hauri.dev',
    });

    const pagesApi = new PagesApi(config);
    const blogApi = new BlogApi(config);
    const projectsApi = new ProjectsApi(config);

    return {
        provide: {
            pagesApi,
            projectsApi,
            blogApi,
        },
    };
});