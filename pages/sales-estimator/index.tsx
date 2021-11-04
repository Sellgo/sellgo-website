import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Containers */
import BlueBannerSection from '../../containers/Sales-Estimator/BlueBannerSection';
import FreemiumSection from '../../containers/Sales-Estimator/FreemiumSection';
import StandardPlansPricingSection from '../../containers/Sales-Estimator/StandardPlansPricingSection';
import ClosingCTASection from '../../containers/HomePage/ClosingCTASection';
import FAQSection from '../../containers/Sales-Estimator/FAQSection';
import CTABannerSection from '../../containers/Sales-Estimator/CTABannerSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/freemium';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

/* Config */
import AppConfig from '../../config';

/* Styles */
import styles from './index.module.scss';

/* Constants */
import { limitDateForCustomerCount } from '../../constants';

interface Props {
	faqDetails: { products: any; bundles: any };
	customerCount: number;
}

const SalesEstimator: React.FC<Props> = (props) => {
	const { faqDetails, customerCount } = props;
	const [showCTABanner, setShowCTABanner] = React.useState<boolean>(false);

	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<main className={styles.freemiumPage}>
				<BlueBannerSection />
				<FreemiumSection setShowCTABanner={setShowCTABanner} />
				{showCTABanner && <CTABannerSection />}
				<StandardPlansPricingSection />
				<FAQSection faqDetails={faqDetails.products[2]} />
				<ClosingCTASection customerCount={customerCount} />
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/pricing.json`);
	const { data } = response;

	const limitDate = new Date(limitDateForCustomerCount).getTime();
	let customerCount;
	try {
		const customerCountResponse = await axios.get(
			`${AppConfig.API_URL}/customer-count?limit_date=${limitDate}`
		);
		customerCount = customerCountResponse.data.count;
	} catch (error) {
		customerCount = 56; // Random number for now
		console.log(error);
	}

	return {
		props: {
			faqDetails: data,
			customerCount
		},
		revalidate: 60 * 15 // 15 minutes
	};
};

export default SalesEstimator;
