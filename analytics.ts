import Analytics from 'analytics';

// @ts-ignore
import googleAnalytics from '@analytics/google-analytics';

const analytics = Analytics({
	debug: process.env.NODE_ENV === 'development',
	plugins: [
		googleAnalytics({
			trackingId: String(process.env.NEXT_PUBLIC_GA_ID)
		})
	]
});

export default analytics;
