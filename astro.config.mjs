// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
    site: "http://localhost:4321",
    integrations: [
        sanity({
            projectId: 'xvqh48jc',
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