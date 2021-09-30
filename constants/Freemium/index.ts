import validator from 'validator';

/* Asin validations */
export const asinRegex = RegExp('([A-Z0-9]{10})');
export const isbnRegex = RegExp('([0-9]{13})');

export const isValidAsin = (asin: string) => {
	const formattedAsin = asin.trim().toUpperCase();

	return (
		asinRegex.test(formattedAsin) &&
		validator.isAlphanumeric(formattedAsin) &&
		formattedAsin.length === 10
	);
};

export const isValidIsbn = (isbn: string) => {
	const formattedIsbn = isbn.trim().toUpperCase();

	return isbnRegex.test(formattedIsbn) && formattedIsbn.length === 13;
};

export const supportedStores = /(amazon.com(.?)$)/i;

/* Get domain from tab url */
export const getDomain = (url: string) => {
	const returnedUrl = url.replace(/https?:\/\/(www.)?/i, '');
	if (returnedUrl.indexOf('/') === -1) {
		return returnedUrl;
	}
	return returnedUrl.split('/')[0];
};

export const parseAsinFromLink = (link: string) => {
	let asin = '';
	if (supportedStores.test(getDomain(link))) {
		if (link.includes('/dp/')) {
			/* e.g. https://www.amazon.com/Fresh-Brand-Russet-Potatoes/dp/B07XW1TNXZ/ref=... */
			/* secondPartOfUrl = /dp/B07XW1TNXZ/ref=... */
			/* restOfUrl = /B07XW1TNXZ/ref=... */
			const secondPartOfUrl = link.split('/dp/')[1];
			const restOfUrl = secondPartOfUrl.split('/');
			asin = restOfUrl.length > 0 ? restOfUrl[0] : '';
		} else if (link.includes('/gp/')) {
			const secondPartOfUrl = link.split('/gp/')[1];
			const restOfUrl = secondPartOfUrl.split('/');
			asin = restOfUrl.length > 0 ? restOfUrl[0] : '';
		}
	}

	if (isValidAsin(asin)) {
		return asin;
	} else {
		return null;
	}
};
