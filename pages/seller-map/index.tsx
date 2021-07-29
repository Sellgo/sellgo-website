import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Containers */
import HeroBox from '../../containers/SellerMapCont/HeroBox';
import InfoSection from '../../containers/SellerMapCont/InfoSection';
import NewBenefitsSection from '../../containers/SellerMapCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/SellerMapCont/CommomFeaturesSection';
import RecommendationSection from '../../containers/SellerMapCont/RecommendationSection';
import FAQSection from '../../containers/SellerMapCont/FAQSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/sellerMap';

/* Utils */
import { generatePageURL } from '../../utils/SEO';
import AppConfig from '../../config';
import { FAQDetails } from '../../interfaces/FAQ';


interface Props {
	faqDetails: FAQDetails;
}
const SellerMapContPage: React.FC<Props> = (props:Props) => {
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
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/sellerMap.json`);
	const { data } = response;
	return {
		props: {
			faqDetails: data
		},
		revalidate: 60 * 15 // 15 minutes
	};
};

export default SellerMapContPage;
