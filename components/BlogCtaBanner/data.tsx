import Image from 'next/image';
import AppConfig from '../../config';

export const CTA_1A = {
	title: (
		<h3>
			Wanna &nbsp;
			<Image src="/access.png" width={53} height={30} alt="access" />
			&nbsp; 1M+ sellers today in seconds?
		</h3>
	),
	subtitle: (
		<p>
			{' '}
			Find million of Amazon sellers today for free in our database, first 1,000
			is on us ...{' '}
		</p>
	),
	linkLabel: 'Try for FREE',
	link: `${AppConfig.APP_URL}/signup`
};

export const CTA_1B = {
	title: (
		<h3>
			Wanna &nbsp;
			<Image src="/access.png" width={53} height={30} alt="access" />
			&nbsp; 1M+ sellers today in seconds?
		</h3>
	),
	subtitle: (
		<p>
			{' '}
			Find million of Amazon sellers today for free in our database, first 1,000
			is on us ...{' '}
		</p>
	),
	linkLabel: 'Sign up for free',
	link: `${AppConfig.APP_URL}/signup`
};
