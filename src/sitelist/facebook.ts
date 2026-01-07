import { type Site, siteId, regionId } from "../types/sitelist";

export const facebook: Site = {
    id: siteId('facebook'),
    title: 'Facebook',
    hosts: ['web.facebook.com', 'facebook.com'],
    paths: ['/', '/watch**', '/marketplace**', '/gaming**', '/reel**'],
    regions: [
        {
            id: regionId('nav-bar'),
            title: 'Navigation bar',
            type: 'remove',
            paths: '*',
            selectors: [
                'div[aria-label="Facebook"]', 
                'div[aria-label="Shortcuts"]', 
                'div[aria-label="Account controls and settings"] > div:nth-child(1)',
                'div[aria-label="Shortcuts within Video"]',
                'div[aria-label="Marketplace sidebar"]',
                'div[aria-label="Games"]',
            ],
        },
        {
            id: regionId('feed'),
            title: 'Main feed',
            type: 'remove',
            paths: 'inherit',
            selectors: [
                'div[role="main"]',
            ],
        },
        {
            id: regionId('sidebar'),
            title: 'Right sidebar',
            type: 'remove',
            paths: '*',
            selectors: [
                'div[role="complementary"]',
            ],
        },
    ],
}
