import React from 'react';
import axios from 'axios';
import { GetStaticProps } from 'next';

/* Containers */
import HeroBox from '../../containers/SellerDatabaseCont/HeroBox';
import InfoSection from '../../containers/SellerDatabaseCont/InfoSection';
import NewBenefitsSection from '../../containers/SellerDatabaseCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/SellerDatabaseCont/CommomFeaturesSection';
import RecommendationSection from '../../containers/SellerDatabaseCont/RecommendationSection';
import FAQSection from '../../containers/SellerDatabaseCont/FAQSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/sellerDatabase';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

/* Config */
import AppConfig from '../../config';

/* Types */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails;
}
const SellerDatabaseContPage: React.FC<Props> = (props:Props) => {
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
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/sellerDatabase.json`);
	const { data } = response;
	return {
		props: {
			faqDetails: data
		},
		revalidate: 60 * 15 // 15 minutes
	};
};

export default SellerDatabaseContPage;
