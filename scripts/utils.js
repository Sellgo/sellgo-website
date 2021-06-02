const prettier = require('prettier');

const pageFrequencyMapper = {
	// means index page
	index: 'weekly',
	'/blogs': 'daily',
	'/blogs/paginated': 'daily'
};

const pagePriorityMapper = {
	index: 1,
	'/pricing': 1,
	'/blogs': 0.8,
	'/blogs/paginated': 0.8
};

// Utility to get the changeFreq value
exports.getPageFrequency = (routePath) => {
	// special index route
	if (routePath === '') {
		return pageFrequencyMapper.index;
	}
	const pageFrequency = pageFrequencyMapper[routePath];
	if (!pageFrequency) {
		return 'weekly';
	}

	return pageFrequency;
};

// Utility to get the priority value
exports.getPagePriority = (routePath) => {
	// special index route
	if (routePath === '') {
		return pagePriorityMapper.index;
	}
	const pagePriority = pagePriorityMapper[routePath];

	if (!pagePriority) {
		return 0.6;
	}

	return pagePriority;
};

// format the sitemap using prettier
exports.formatSitemap = (sitemap) =>
	prettier.format(sitemap, { parser: 'html' });
