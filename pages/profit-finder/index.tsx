/* Containers */
import HeroBox from '../../containers/ProfitFinderCont/HeroBox';
import InfoSection from '../../containers/ProfitFinderCont/InfoSection';
import BenefitsSection from '../../containers/ProfitFinderCont/BenefitsSection';
import CommonFeaturesSection from '../../containers/ProfitFinderCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/ProfitFinderCont/BannerCTASection';
import PlansSection from '../../containers/ProfitFinderCont/PlansSection';
import OtherInfoSection from '../../containers/ProfitFinderCont/OtherInfoSection';
import FAQSection from '../../containers/ProfitFinderCont/FAQSection';
import RecommendationSection from '../../containers/ProfitFinderCont/RecommendationSection';

/* Styling */
import styles from './index.module.scss';

const ProfitFinderContPage = () => {
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

export default ProfitFinderContPage;
