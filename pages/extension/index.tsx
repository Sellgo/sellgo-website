import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/ExtensionCont/HeroBox';
import InfoSection from '../../containers/ExtensionCont/InfoSection';
import BenefitsSection from '../../containers/ExtensionCont/BenefitsSection';
import CommonFeaturesSection from '../../containers/ExtensionCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/ExtensionCont/BannerCTASection';
import PlansSection from '../../containers/ExtensionCont/PlansSection';
import OtherInfoSection from '../../containers/ExtensionCont/OtherInfoSection';
import FAQSection from '../../containers/ExtensionCont/FAQSection';
import RecommendationSection from '../../containers/ExtensionCont/RecommendationSection';

/* App Config */
import AppConfig from '../../config';

/* Types */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails;
}

const ExtensionContPage: React.FC<Props> = (props) => {
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
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/extension.json`);

	const { data } = response;
	return {
		props: {
			faqDetails: data
		},
		revalidate: 1
	};
};
export default ExtensionContPage;
