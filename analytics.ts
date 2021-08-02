import Analytics from 'analytics';

// @ts-ignore
import googleAnalytics from '@analytics/google-analytics';

// @ts-ignore
import fullStoryPlugin from '@analytics/fullstory';

const analytics = Analytics({
	debug: process.env.NODE_ENV === 'development',
	app: 'Sellgo Website',
	plugins: [
		googleAnalytics({
			trackingId: String(process.env.NEXT_PUBLIC_GA_ID),
			enabled: false
		}),
		fullStoryPlugin({
			org: String(process.env.NEXT_PUBLIC_FULL_STORY_ID),
			enabled: false
		})
	]
});

export default analytics;
