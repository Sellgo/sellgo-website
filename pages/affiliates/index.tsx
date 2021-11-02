import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Containers */
import HeroBox from '../../containers/Affliate/HeroBox';
import FirstCTASection from '../../containers/Affliate/FirstCTASection';
import BenefitsSection from '../../containers/Affliate/BenefitsSection';
import ApprovalProcessSection from '../../containers/Affliate/ApprovalProcessSection';
import FAQSection from '../../containers/Affliate/FAQSection';

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
	faqDetails: FAQDetails;
}

const Partners: React.FC<Props> = (props) => {
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
				<HeroBox />
				<FirstCTASection />
				<BenefitsSection />
				<ApprovalProcessSection />
				<FAQSection faqDetails={faqDetails} />
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

export default Partners;
