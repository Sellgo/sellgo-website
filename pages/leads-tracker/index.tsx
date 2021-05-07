/* Containers */
import HeroBox from '../../containers/LeadsTrackerCont/HeroBox';
import InfoSection from '../../containers/LeadsTrackerCont/InfoSection';
import BenefitsSection from '../../containers/LeadsTrackerCont/BenefitsSection';
import CommonFeaturesSection from '../../containers/LeadsTrackerCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/LeadsTrackerCont/BannerCTASection';
import PlansSection from '../../containers/LeadsTrackerCont/PlansSection';
import OtherInfoSection from '../../containers/LeadsTrackerCont/OtherInfoSection';
import FAQSection from '../../containers/LeadsTrackerCont/FAQSection';
import RecommendationSection from '../../containers/LeadsTrackerCont/RecommendationSection';

/* Styling */
import styles from './index.module.scss';

const LeadsTrackerContPage = () => {
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

export default LeadsTrackerContPage;
