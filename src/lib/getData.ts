import {sanityClient} from "sanity:client";
import {successStoriesPageQuery, siteSettingsQuery} from './queries';
import type {SuccessStoriesPage, SiteSettings} from "./types";

export async function getSuccessStoriesPage(): Promise<SuccessStoriesPage>{
    let data: SuccessStoriesPage | null;

    try {
        data = await sanityClient.fetch<SuccessStoriesPage | null>(successStoriesPageQuery);
    }catch (err: unknown) {
        throw new Error(
            'Failed to fetch Success Stories page from Sanity.',
            {cause: err}
        );
    }

    if (!data) {
        throw new Error(
            'Success Stories page document not found. create it in Sanity Studio.'
        );
    }
    return data;
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
    try {
        const data = await sanityClient.fetch<SiteSettings | null>(
            siteSettingsQuery
        );

        if (!data) {
            console.warn("Site settings document not found in Sanity.");
        }

        return data;
    } catch (err: unknown) {
        console.error(
            "Failed to fetch site settings from Sanity:",
            err
        );

        return null;
    }
}
