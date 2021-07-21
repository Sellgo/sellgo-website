/* Utils */
import { isSSR } from '..';

/* Config */
import AppConfig from '../../config';

/* Extract referralID from localStorage */
export const extractTheReferralID = () => {
	// @ts-ignore
	return (!isSSR && window.Rewardful.referral) || '';
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
export const createCheckoutLink = (isMonthly: boolean, name: string) => {
	const webCheckOutLink = `${AppConfig.APP_URL}/subscription?mode=${
		isMonthly ? 'monthly' : 'yearly'
	}&type=${name.toLowerCase()}`;

	const checkoutLink = appendReferralCode(webCheckOutLink);
	return checkoutLink;
};

/* Create free trial link for webapp */
export const createFreeTrialLink = () => {
	const webFreeTrialLink = `${AppConfig.APP_URL}/signup?type=free`;

	const freeTrialLink = appendReferralCode(webFreeTrialLink);
	return freeTrialLink;
};
