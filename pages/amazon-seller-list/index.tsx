import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Containers */
import HeroBox from '../../containers/AmazonSellerList/HeroBox';
import TopSellersSection from '../../containers/AmazonSellerList/TopSellersSection';
import FAQSection from '../../containers/AmazonSellerList/FAQSection';
import StepperInfoSection from '../../containers/AmazonSellerList/StepperInfoSection';
import StatisticsFirstSection from '../../containers/AmazonSellerList/StatisticsFirstSection';
import StatisticsSecondSection from '../../containers/AmazonSellerList/StatisticsSecondSection';
import TestimonialsSection from '../../containers/AmazonSellerList/TestimonialsSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/amazonSellerList';

/* Utils */
import { generatePageURL } from '../../utils/SEO';
import AppConfig from '../../config';

/* Constants */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails;
}

const AmazonSellerDownloadPage: React.FC<Props> = (props) => {
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
				<StatisticsFirstSection />
				<TopSellersSection />
				<StatisticsSecondSection />
				<StepperInfoSection />
				<TestimonialsSection />
				{faqDetails.data.length > 0 && <FAQSection faqData={faqDetails.data} />}
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/sellerList.json`);
	const { data } = response;

	return {
		props: {
			faqDetails: data
		},
		revalidate: 60 * 10 // 10 minutes
	};
};

export default AmazonSellerDownloadPage;
