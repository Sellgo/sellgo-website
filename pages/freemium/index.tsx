import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Containers */
import BlueBannerSection from '../../containers/Freemium/BlueBannerSection';
import FreemiumSection from '../../containers/Freemium/FreemiumSection';
import StandardPlansPricingSection from '../../containers/Freemium/StandardPlansPricingSection';
import ClosingCTASection from '../../containers/HomePage/ClosingCTASection';
import FAQSection from '../../containers/Freemium/FAQSection';
import CTABannerSection from '../../containers/Freemium/CTABannerSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/affiliate';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

/* Config */
import AppConfig from '../../config';

interface Props {
	faqDetails: { products: any; bundles: any };
}

const Freemium: React.FC<Props> = (props) => {
	const { faqDetails } = props;

	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<main>
				<BlueBannerSection />
				<FreemiumSection />
				<CTABannerSection />
				<StandardPlansPricingSection />
				<FAQSection faqDetails={faqDetails.products[2]} />
				<ClosingCTASection />
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/pricing.json`);
	console.log(response);
	const { data } = response;
	return {
		props: {
			faqDetails: data
		},
		revalidate: 60 * 15 // 15 minutes
	};
};

export default Freemium;
