import Cookies from 'js-cookie';

/* Is SSR Support */
export const isSSR = typeof window === 'undefined';

/* Is cookie consent accepted */
const hasAcceptedConsent = () => {
	const cookieConsentValue = Cookies.get('consent');

	if (cookieConsentValue === undefined || cookieConsentValue === 'false') {
		return false;
	}

	return true;
};

export const isCookieConsentAccepted = hasAcceptedConsent();
