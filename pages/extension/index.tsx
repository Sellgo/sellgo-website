import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Containers */
import HeroBox from '../../containers/ExtensionCont/HeroBox';
import InfoSection from '../../containers/ExtensionCont/InfoSection';
import NewBenefitsSection from '../../containers/ExtensionCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/ExtensionCont/CommomFeaturesSection';
import FAQSection from '../../containers/ExtensionCont/FAQSection';
import RecommendationSection from '../../containers/ExtensionCont/RecommendationSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* App Config */
import AppConfig from '../../config';

/* Data */
import { seoData } from '../../data/SEO/extension';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

/* Types */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails;
}

const ExtensionContPage: React.FC<Props> = (props) => {
	const { faqDetails } = props;

	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				keywords={seoData.keywords.join(',')}
				imageUrl={seoData.imageUrl}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<HeroBox />
			<InfoSection />
			<NewBenefitsSection />
			<CommonFeaturesSection />
			{faqDetails.data.length > 0 && <FAQSection faqData={faqDetails.data} />}
			<RecommendationSection />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/extension.json`);

	const { data } = response;
	return {
		props: {
			faqDetails: data
		},
		revalidate: 1
	};
};
export default ExtensionContPage;
