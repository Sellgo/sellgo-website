import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Containers */
import BlueBannerSection from '../../containers/Freemium/BlueBannerSection';
import FreemiumSection from '../../containers/Freemium/FreemiumSection';
import StandardPlansPricingSection from '../../containers/Freemium/StandardPlansPricingSection';
import ClosingCTASection from '../../containers/HomePage/ClosingCTASection';
import FAQSection from '../../containers/Freemium/FAQSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/affiliate';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

/* Config */
import AppConfig from '../../config';

/* Types */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails
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
                <StandardPlansPricingSection/>
                <FAQSection faqDetails={faqDetails} />
				<ClosingCTASection />
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/partners.json`);
	const { data } = response;
	return {
		props: {
			faqDetails: data
		},
		revalidate: 60 * 15 // 15 minutes
	};
};

export default Freemium;
