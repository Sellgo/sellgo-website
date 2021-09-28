import validator from 'validator';

/* Asin validations */
export const asinRegex = RegExp('([A-Z0-9]{10})');

export const isValidAsin = (asin: string) => {
  const formattedAsin = asin.trim().toUpperCase();

  return (
    asinRegex.test(formattedAsin) &&
    validator.isAlphanumeric(formattedAsin) &&
    formattedAsin.length === 10
  );
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

export const getAsinFromLink = (link: string) => {
    if (supportedStores.test(getDomain(link))) {
        if (link.includes('/dp/')) {
            // https://www.amazon.com/Fresh-Brand-Russet-Potatoes/dp/B07XW1TNXZ/ref=...
            const secondPartOfUrl = link.split('/dp/')[1];
            const asin = secondPartOfUrl.split('/')[0];
            return asin;
        } else if (link.includes('/gp/')) {
            const secondPartOfUrl = link.split('/gp/')[1];
            const asin = secondPartOfUrl.split('/')[0];
            return asin;
        } else {
            return null;
        }
    } else {
        return null;
    }
}