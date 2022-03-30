import React from 'react';
import axios from 'axios';
import { GetStaticProps } from 'next';

/* Containers */
import HeroBox from '../../containers/TplManagerCont/HeroBox';
import InfoSection from '../../containers/TplManagerCont/InfoSection';
import NewBenefitsSection from '../../containers/TplManagerCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/TplManagerCont/CommonFeaturesSection';
import RecommendationSection from '../../containers/TplManagerCont/RecommendationSection';
import FAQSection from '../../containers/TplManagerCont/FAQSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/tplManager';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

/* Config */
import AppConfig from '../../config';

/* Types */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails;
}

const TplManagerContPage: React.FC<Props> = (props) => {
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
	const response = await axios.get(
		`${AppConfig.FAQ_BUCKET}/productRankTracker.json`
	);
	const { data } = response;
	return {
		props: {
			faqDetails: data
		},
		revalidate: 60 * 15 // 15 minutes
	};
};

export default TplManagerContPage;
