import Image from 'next/image';

export const CTA_1A = {
	title: (
		<h3>
			Want &nbsp;
			<Image src="/instantdownload.png" width={148} height={30} alt="access" />
			&nbsp; of the top 1M+ sellers on Amazon?
		</h3>
	),
	subtitle: (
		<p>
			{' '}
			Get the B2B data* of the top Amazon sellers on 8 marketplaces - updated
			regularly.{' '}
		</p>
	),
	asterisk: <span> *email, phone, website, LinkedIn, etc. </span>,
	linkLabel: 'View seller lists',
	link: `/amazon-seller-list`
};

export const CTA_1B = {
	title: (
		<h3>
			Want &nbsp;
			<Image src="/download.png" width={53} height={30} alt="access" />
			&nbsp; of the top 1M+ sellers on Amazon?
		</h3>
	),
	subtitle: (
		<p>
			{' '}
			Get the B2B data of the top 1M+ Amazon sellers on 8 marketplaces - updated
			regularly.{' '}
		</p>
	),
	linkLabel: 'View seller lists',
	link: `/amazon-seller-list`
};
