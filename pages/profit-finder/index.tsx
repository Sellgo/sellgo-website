import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/ProfitFinderCont/HeroBox';
import InfoSection from '../../containers/ProfitFinderCont/InfoSection';
import BenefitsSection from '../../containers/ProfitFinderCont/BenefitsSection';
import CommonFeaturesSection from '../../containers/ProfitFinderCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/ProfitFinderCont/BannerCTASection';
import PlansSection from '../../containers/ProfitFinderCont/PlansSection';
import OtherInfoSection from '../../containers/ProfitFinderCont/OtherInfoSection';
import FAQSection from '../../containers/ProfitFinderCont/FAQSection';
import RecommendationSection from '../../containers/ProfitFinderCont/RecommendationSection';

/* App Config */
import AppConfig from '../../config';

/* Types */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails;
}

const ProfitFinderContPage: React.FC<Props> = (props) => {
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
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/profitFinder.json`);

	const { data } = response;
	return {
		props: {
			faqDetails: data
		},
		revalidate: 1
	};
};

export default ProfitFinderContPage;
