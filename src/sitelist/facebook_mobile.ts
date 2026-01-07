import { type Site, siteId, regionId } from "../types/sitelist";

export const facebook_mobile: Site = {
    id: siteId('facebook_mobile'),
    title: 'Facebook Mobile',
    hosts: ['m.facebook.com'],
    paths: ['/', '/**'],
    regions: [
        {
            id: regionId('body'),
            title: 'Body',
            type: 'remove',
            paths: '*',
            selectors: [
                'body'
            ],
        },
    ],
}
