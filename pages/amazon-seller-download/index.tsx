import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Containers */
import HeroBox from '../../containers/AmazonSellerDownload/HeroBox';
import TopSellersSection from '../../containers/AmazonSellerDownload/TopSellersSection';
import NewClosingCTASection from "../../containers/AmazonSellerDownload/NewClosingCTA";
import FAQSection from '../../containers/AmazonSellerDownload/FAQSection';
import StepperInfoSection from '../../containers/AmazonSellerDownload/StepperInfoSection';
import StatisticsSection from '../../containers/AmazonSellerDownload/StatisticsSection';
import TestimonialsSection from '../../containers/AmazonSellerDownload/TestimonialsSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/amazonSellerDownload';

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
				<TopSellersSection />
				<StatisticsSection />
				<StepperInfoSection />
				<TestimonialsSection />
				{faqDetails.data.length > 0 && <FAQSection faqData={faqDetails.data} />}
				<NewClosingCTASection />
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/aistock.json`);
	const { data } = response;

	return {
		props: {
			faqDetails: data
		},
		revalidate: 60 * 10 // 10 minutes
	};
};

export default AmazonSellerDownloadPage;
