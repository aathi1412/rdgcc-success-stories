import { createClient, type SanityClient } from "@sanity/client";
import {  type SanityImageSource, createImageUrlBuilder } from "@sanity/image-url";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
const apiVersion =
    import.meta.env.PUBLIC_SANITY_API_VERSION || "2024-01-01";

if (!projectId || !dataset) {
    throw new Error(
        "Missing Sanity env vars. Copy .env.example to .env and set PUBLIC_SANITY_PROJECT_ID / PUBLIC_SANITY_DATASET."
    );
}

export const sanityClient: SanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
    return builder.image(source).auto("format");
}