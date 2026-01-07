import { type Site, siteId, regionId } from "../types/sitelist";

export const youtube_mobile: Site = {
			id: siteId('youtube_mobile'),
			title: 'YouTube Mobile',
			hosts: ['m.youtube.com'],
			paths: ['/', '/gaming**', '/podcasts**', '/shorts**'],
			regions: [
				{
					id: regionId('feed'),
					title: 'Main feed',
					selectors: ['ytm-browse'],
					paths: 'inherit',
					type: 'remove',
				},
				{
					id: regionId('shorts-button'),
					title: 'Shorts button',
					type: 'remove',
					paths: '*',
					selectors: [
						'ytm-pivot-bar-item-renderer:has(div[class="pivot-bar-item-tab pivot-shorts"])',
						'ytm-pivot-bar-item-renderer:has(div[class="pivot-bar-item-tab pivot-subs"])',
					],
				},
				{
					id: regionId('youtube-shorts'),
					title: 'Youtube Shorts',
					type: 'remove',
					paths: 'inherit',
					selectors: ['#player-container-id'],
				},
				{
					id: regionId('watch-next'),
					title: 'Suggested videos below the player',
					type: 'remove',
					paths: '*',
					selectors: ['[section-identifier="related-items"] a.media-item-thumbnail-container'],
				}
			],
		}
