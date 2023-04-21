/* Utils */
import { isSSR } from '..';

/* Config */
import AppConfig from '../../config';

/* Extract referralID from localStorage */
export const extractTheReferralID = () => {
	// @ts-ignore
	return (!isSSR && window.Rewardful && window.Rewardful.referral) || '';
};

/* Append referral Code if applicable */
export const appendReferralCode = (currentBuyLink: string) => {
	const referralID = extractTheReferralID();

	if (!referralID) {
		return currentBuyLink;
	} else {
		return `${currentBuyLink}&referral=${referralID}`;
	}
};

/* Create checkout link for webapp */
export const createCheckoutLink = (
	paymentMode: string,
	name: string,
	email?: string
) => {
	let webCheckOutLink = `${
		AppConfig.WEB_URL
	}/subscription?mode=${paymentMode}&type=${name
		.split(' ')
		.join('')
		.toLowerCase()}`;
	if (name === 'free') {
		webCheckOutLink = `${AppConfig.APP_URL}/signup${
			email ? `?email=${email}` : ''
		}`;
	}
	return appendReferralCode(webCheckOutLink);
};

/* Create free trial link for webapp */
export const createFreeTrialLink = () => {
	const webFreeTrialLink = `${AppConfig.WEB_URL}/select-plan`;

	const freeTrialLink = appendReferralCode(webFreeTrialLink);
	return freeTrialLink;
};

export const createSignupLink = (plan: string, td?: string) => {
	let webFreeTrialLink = `${AppConfig.APP_URL}/signup?plan=${plan}`;

	if (td) {
		webFreeTrialLink += `&td=${td}`;
	}

	const freeTrialLink = appendReferralCode(webFreeTrialLink);
	return freeTrialLink;
};

export const checkPricingLink = () => {
	const webPricingLink = `${AppConfig.WEB_URL}/pricing`;

	const pricingLink = appendReferralCode(webPricingLink);
	return pricingLink;
};
