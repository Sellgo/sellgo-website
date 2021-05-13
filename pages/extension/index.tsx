import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/ExtensionCont/HeroBox';
import InfoSection from '../../containers/ExtensionCont/InfoSection';
import NewBenefitsSection from '../../containers/ExtensionCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/ExtensionCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/ExtensionCont/BannerCTASection';
import PlansSection from '../../containers/ExtensionCont/PlansSection';
import OtherInfoSection from '../../containers/ExtensionCont/OtherInfoSection';
import FAQSection from '../../containers/ExtensionCont/FAQSection';
import RecommendationSection from '../../containers/ExtensionCont/RecommendationSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* App Config */
import AppConfig from '../../config';

/* Data */
import { seoData } from '../../data/SEO/extension';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

/* Types */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails;
}

const ExtensionContPage: React.FC<Props> = (props) => {
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
