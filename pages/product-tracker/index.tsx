import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/ProductTrackerCont/HeroBox';
import InfoSection from '../../containers/ProductTrackerCont/InfoSection';
import BenefitsSection from '../../containers/ProductTrackerCont/BenefitsSection';
import CommonFeaturesSection from '../../containers/ProductTrackerCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/ProductTrackerCont/BannerCTASection';
import PlansSection from '../../containers/ProductTrackerCont/PlansSection';
import OtherInfoSection from '../../containers/ProductTrackerCont/OtherInfoSection';
import FAQSection from '../../containers/ProductTrackerCont/FAQSection';
import RecommendationSection from '../../containers/ProductTrackerCont/RecommendationSection';

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
			<HeroBox />
			<section className={styles.banner} />
			<InfoSection />
			<BenefitsSection />
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
