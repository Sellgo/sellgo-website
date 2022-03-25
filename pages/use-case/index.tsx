import React from 'react';
import axios from 'axios';
import { GetStaticProps } from 'next';

/* Containers */
import HeroBox from '../../containers/UseCase/HeroBox';
import InfoSection from '../../containers/UseCase/InfoSection';
import CommonFeaturesSection from '../../containers/UseCase/CommonFeaturesSection';
import PlansSection from '../../containers/UseCase/PlansSection';
import TrustedBySection from '../../containers/UseCase/TrustedBySection';
import BenefitsSection from '../../containers/UseCase/BenefitsSection';
import OtherInfoSection from '../../containers/UseCase/OtherInfoSection';
import NewClosingCTASection from '../../containers/UseCase/NewClosingCTA';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/extension';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

/* Config */
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
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				keywords={seoData.keywords.join(',')}
				imageUrl={seoData.imageUrl}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<HeroBox />
			<InfoSection />
			<BenefitsSection />
			<CommonFeaturesSection />
			<PlansSection />
			<OtherInfoSection />
			<TrustedBySection />
			<NewClosingCTASection />
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
		revalidate: 60 * 15 // 15 minutes
	};
};

export default ExtensionContPage;
