/* Containers */
import HeroBox from '../../containers/SellerscoutGo/HeroBox';
import InfoSection from '../../containers/SellerscoutGo/InfoSection';
import BenefitsSection from '../../containers/SellerscoutGo/BenefitsSection';
import BannerCTASection from '../../containers/SellerscoutGo/BannerCTASection';
import PlansSection from '../../containers/SellerscoutGo/PlansSection';
import OtherInfoSection from '../../containers/SellerscoutGo/OtherInfoSection';
import FAQSection from '../../containers/SellerscoutGo/FAQSection';
import RecommendationSection from '../../containers/SellerscoutGo/RecommendationSection';

/* Styling */
import styles from './index.module.scss';

const SellerscoutGo = () => {
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

export default SellerscoutGo;
