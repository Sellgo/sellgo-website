import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/SellerFinderCont/HeroBox';
import InfoSection from '../../containers/SellerFinderCont/InfoSection';
import NewBenefitsSection from '../../containers/SellerFinderCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/SellerFinderCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/SellerFinderCont/BannerCTASection';
import PlansSection from '../../containers/SellerFinderCont/PlansSection';
import OtherInfoSection from '../../containers/SellerFinderCont/OtherInfoSection';
import FAQSection from '../../containers/SellerFinderCont/FAQSection';
import RecommendationSection from '../../containers/SellerFinderCont/RecommendationSection';

/* App Config */
import AppConfig from '../../config';

/* Types */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails;
}

const SellerFinderContPage: React.FC<Props> = (props) => {
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
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/sellerFinder.json`);

	const { data } = response;
	return {
		props: {
			faqDetails: data
		},
		revalidate: 1
	};
};

export default SellerFinderContPage;
