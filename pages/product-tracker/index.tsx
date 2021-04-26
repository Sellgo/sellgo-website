/* Containers */
import HeroBox from '../../containers/ProductTracker/HeroBox';
import InfoSection from '../../containers/ProductTracker/InfoSection';
import BenefitsSection from '../../containers/ProductTracker/BenefitsSection';
import BannerCTASection from '../../containers/ProductTracker/BannerCTASection';
import PlansSection from '../../containers/ProductTracker/PlansSection';
import OtherInfoSection from '../../containers/ProductTracker/OtherInfoSection';
import FAQSection from '../../containers/ProductTracker/FAQSection';
import RecommendationSection from '../../containers/ProductTracker/RecommendationSection';

/* Styling */
import styles from './index.module.scss';

const ProductTracker = () => {
	return (
		<>
			<HeroBox />
			<section className={styles.banner} />
			<InfoSection />
			<BenefitsSection />
			<BannerCTASection />
			<PlansSection />
			<OtherInfoSection />
			<FAQSection />
			<RecommendationSection />
		</>
	);
};

export default ProductTracker;
