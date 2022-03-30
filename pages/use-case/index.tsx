import React from 'react';

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

interface Props {}

const ExtensionContPage: React.FC<Props> = () => {
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

export default ExtensionContPage;
