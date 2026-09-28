// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://rdgcc.netlify.app/success-stories/',
    integrations: [
        sanity({
            projectId: 'ge7glcjb',
            dataset: 'production',
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