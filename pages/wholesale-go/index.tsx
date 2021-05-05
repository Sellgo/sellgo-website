/* Containers */
import HeroBox from '../../containers/WholesaleGo/HeroBox';
import InfoSection from '../../containers/WholesaleGo/InfoSection';
import BenefitsSection from '../../containers/WholesaleGo/BenefitsSection';
import BannerCTASection from '../../containers/WholesaleGo/BannerCTASection';
import PlansSection from '../../containers/WholesaleGo/PlansSection';
import OtherInfoSection from '../../containers/WholesaleGo/OtherInfoSection';
import FAQSection from '../../containers/WholesaleGo/FAQSection';
import RecommendationSection from '../../containers/WholesaleGo/RecommendationSection';

/* Styling */
import styles from './index.module.scss';

const WholesaleGoPage = () => {
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

export default WholesaleGoPage;
