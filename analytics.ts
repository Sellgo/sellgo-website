import Analytics from 'analytics';

// @ts-ignore
import fullStoryPlugin from '@analytics/fullstory';

// @ts-ignore
import googleTagManager from '@analytics/google-tag-manager';

// @ts-ignore
import googleAnalytics from '@analytics/google-analytics';

const analytics = Analytics({
	debug: process.env.NODE_ENV === 'development',
	app: 'Sellgo Website',
	plugins: [
		fullStoryPlugin({
			org: String(process.env.NEXT_PUBLIC_FULL_STORY_ID)
		}),
		googleTagManager({
			containerId: String(process.env.NEXT_PUBLIC_GTM_ID)
		}),
		googleAnalytics({
			trackingId: String(process.env.NEXT_PUBLIC_GA_ID)
		})
	]
});

export default analytics;
