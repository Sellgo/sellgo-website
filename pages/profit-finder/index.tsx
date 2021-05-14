import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/ProfitFinderCont/HeroBox';
import InfoSection from '../../containers/ProfitFinderCont/InfoSection';
import NewBenefitsSection from '../../containers/ProfitFinderCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/ProfitFinderCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/ProfitFinderCont/BannerCTASection';
import PlansSection from '../../containers/ProfitFinderCont/PlansSection';
import OtherInfoSection from '../../containers/ProfitFinderCont/OtherInfoSection';
import FAQSection from '../../containers/ProfitFinderCont/FAQSection';
import RecommendationSection from '../../containers/ProfitFinderCont/RecommendationSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/profitFinder';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

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
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				keywords={seoData.keywords.join(',')}
				imageUrl={seoData.imageUrl}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<HeroBox />
			<InfoSection />
			<NewBenefitsSection />
			<section className={styles.Newbanner} />
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
