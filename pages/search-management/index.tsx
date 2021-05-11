import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/SearchManagementCont/HeroBox';
import InfoSection from '../../containers/SearchManagementCont/InfoSection';
import BenefitsSection from '../../containers/SearchManagementCont/BenefitsSection';
import CommonFeaturesSection from '../../containers/SearchManagementCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/SearchManagementCont/BannerCTASection';
import PlansSection from '../../containers/SearchManagementCont/PlansSection';
import OtherInfoSection from '../../containers/SearchManagementCont/OtherInfoSection';
import FAQSection from '../../containers/SearchManagementCont/FAQSection';
import RecommendationSection from '../../containers/SearchManagementCont/RecommendationSection';

/* App Config */
import AppConfig from '../../config';

/* Types */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails;
}

const SearchManagementContPage: React.FC<Props> = (props) => {
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
		`${AppConfig.FAQ_BUCKET}/searchManagement.json`
	);

	const { data } = response;
	return {
		props: {
			faqDetails: data
		},
		revalidate: 1
	};
};
export default SearchManagementContPage;
