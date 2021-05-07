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

/* Styling */
import styles from './index.module.scss';

const ExtensionContPage = () => {
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
			<FAQSection />
			<RecommendationSection />
		</>
	);
};

export default ExtensionContPage;
