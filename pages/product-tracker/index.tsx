import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/ProductTrackerCont/HeroBox';
import InfoSection from '../../containers/ProductTrackerCont/InfoSection';
import NewBenefitsSection from '../../containers/ProductTrackerCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/ProductTrackerCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/ProductTrackerCont/BannerCTASection';
import PlansSection from '../../containers/ProductTrackerCont/PlansSection';
import OtherInfoSection from '../../containers/ProductTrackerCont/OtherInfoSection';
import FAQSection from '../../containers/ProductTrackerCont/FAQSection';
import RecommendationSection from '../../containers/ProductTrackerCont/RecommendationSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/productTracker';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

/* App Config */
import AppConfig from '../../config';

/* Types */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails;
}

const ProductTrackerContPage: React.FC<Props> = (props) => {
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
			<section className={styles.banner} />
			<InfoSection />
			<NewBenefitsSection />
			<section className={styles.newBanner} />
			<CommonFeaturesSection />
			<BannerCTASection />
			<PlansSection />
			<OtherInfoSection />
			{faqDetails.data.length > 0 && <FAQSection faqData={faqDetails.data} />}
			<RecommendationSection />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await axios.get(
		`${AppConfig.FAQ_BUCKET}/productTracker.json`
	);

	const { data } = response;
	return {
		props: {
			faqDetails: data
		},
		revalidate: 1
	};
};
export default ProductTrackerContPage;
