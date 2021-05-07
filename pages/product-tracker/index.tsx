/* Containers */
import HeroBox from '../../containers/ProductTrackerCont/HeroBox';
import InfoSection from '../../containers/ProductTrackerCont/InfoSection';
import BenefitsSection from '../../containers/ProductTrackerCont/BenefitsSection';
import CommonFeaturesSection from '../../containers/ProductTrackerCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/ProductTrackerCont/BannerCTASection';
import PlansSection from '../../containers/ProductTrackerCont/PlansSection';
import OtherInfoSection from '../../containers/ProductTrackerCont/OtherInfoSection';
import FAQSection from '../../containers/ProductTrackerCont/FAQSection';
import RecommendationSection from '../../containers/ProductTrackerCont/RecommendationSection';

/* Styling */
import styles from './index.module.scss';

const ProductTrackerContPage = () => {
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

export default ProductTrackerContPage;
