/* Containers */
import HeroBox from '../../containers/PrivatelabelGo/HeroBox';
import InfoSection from '../../containers/PrivatelabelGo/InfoSection';
import BenefitsSection from '../../containers/PrivatelabelGo/BenefitsSection';
import CommonFeaturesSection from '../../containers/PrivatelabelGo/CommomFeaturesSection';
import BannerCTASection from '../../containers/PrivatelabelGo/BannerCTASection';
import PlansSection from '../../containers/PrivatelabelGo/PlansSection';
import OtherInfoSection from '../../containers/PrivatelabelGo/OtherInfoSection';
import FAQSection from '../../containers/PrivatelabelGo/FAQSection';
import RecommendationSection from '../../containers/PrivatelabelGo/RecommendationSection';

/* Styling */
import styles from './index.module.scss';

const PrivateLabelPage = () => {
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

export default PrivateLabelPage;
