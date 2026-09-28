import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

const env = loadEnv('development', process.cwd(), '');

export default defineConfig({
    site: 'https://rdgcc.netlify.app',

    integrations: [
        sanity({
            projectId: env.PUBLIC_SANITY_PROJECT_ID,
            dataset: env.PUBLIC_SANITY_DATASET,
            useCdn: false
        })
    ],

    vite: {
        plugins: [tailwindcss()]
    },

    devToolbar: {
        enabled: false
    }
});