import Image from 'next/image';

import { checkPricingLink } from '../../utils/Referral';

export const CTA_1A = {
	title: (
		<h3>
			Reach &nbsp;
			<Image src="/every.png" width={62} height={47} alt="access" />
			&nbsp; Amazon seller on the planet
		</h3>
	),
	subtitle: (
		<p>
			{' '}
			Search, engage, and close deals with Sellgo 30+ million verified Amazon
			seller* decision makers.{' '}
		</p>
	),
	asterisk: <span> *emails, phones, website, social media links, etc. </span>,
	linkLabel: 'Create free account',
	link: checkPricingLink()
};

export const CTA_1B = {
	title: (
		<h3>
			Reach &nbsp;
			<Image src="/every.png" width={62} height={47} alt="access" />
			&nbsp; Amazon seller on the planet
		</h3>
	),
	subtitle: (
		<p>
			{' '}
			Search, engage, and close deals with Sellgo 30+ million verified Amazon
			seller* decision makers.{' '}
		</p>
	),
	asterisk: <span> *emails, phones, website, social media links, etc. </span>,
	linkLabel: 'Learn more',
	link: checkPricingLink()
};
