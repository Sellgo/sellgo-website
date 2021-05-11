import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/LeadsTrackerCont/HeroBox';
import InfoSection from '../../containers/LeadsTrackerCont/InfoSection';
import BenefitsSection from '../../containers/LeadsTrackerCont/BenefitsSection';
import CommonFeaturesSection from '../../containers/LeadsTrackerCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/LeadsTrackerCont/BannerCTASection';
import PlansSection from '../../containers/LeadsTrackerCont/PlansSection';
import OtherInfoSection from '../../containers/LeadsTrackerCont/OtherInfoSection';
import FAQSection from '../../containers/LeadsTrackerCont/FAQSection';
import RecommendationSection from '../../containers/LeadsTrackerCont/RecommendationSection';

/* App Config */
import AppConfig from '../../config';

/* Types */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails;
}

const LeadsTrackerContPage: React.FC<Props> = (props) => {
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
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/leadsTracker.json`);
	const { data } = response;
	return {
		props: {
			faqDetails: data
		},
		revalidate: 1
	};
};

export default LeadsTrackerContPage;
