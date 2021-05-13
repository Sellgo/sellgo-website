import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/SellerscoutGo/HeroBox';
import InfoSection from '../../containers/SellerscoutGo/InfoSection';
import NewBenefitsSection from '../../containers/SellerscoutGo/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/SellerscoutGo/CommomFeaturesSection';
import BannerCTASection from '../../containers/SellerscoutGo/BannerCTASection';
import PlansSection from '../../containers/SellerscoutGo/PlansSection';
import OtherInfoSection from '../../containers/SellerscoutGo/OtherInfoSection';
import FAQSection from '../../containers/SellerscoutGo/FAQSection';
import RecommendationSection from '../../containers/SellerscoutGo/RecommendationSection';

/* App Config */
import AppConfig from '../../config';

/* Types */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails;
}

const SellerScoutPage: React.FC<Props> = (props) => {
	const { faqDetails } = props;

	return (
		<>
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
		`${AppConfig.FAQ_BUCKET}/sellerScoutGo.json`
	);

	const { data } = response;
	return {
		props: {
			faqDetails: data
		},
		revalidate: 1
	};
};

export default SellerScoutPage;
