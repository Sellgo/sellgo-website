/* Containers */
import HeroBox from '../../containers/SellerFinderCont/HeroBox';
import InfoSection from '../../containers/SellerFinderCont/InfoSection';
import BenefitsSection from '../../containers/SellerFinderCont/BenefitsSection';
import CommonFeaturesSection from '../../containers/SellerFinderCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/SellerFinderCont/BannerCTASection';
import PlansSection from '../../containers/SellerFinderCont/PlansSection';
import OtherInfoSection from '../../containers/SellerFinderCont/OtherInfoSection';
import FAQSection from '../../containers/SellerFinderCont/FAQSection';
import RecommendationSection from '../../containers/SellerFinderCont/RecommendationSection';

/* Styling */
import styles from './index.module.scss';

const SellerFinderContPage = () => {
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

export default SellerFinderContPage;
