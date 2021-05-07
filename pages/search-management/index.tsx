/* Containers */
import HeroBox from '../../containers/SearchManagementCont/HeroBox';
import InfoSection from '../../containers/SearchManagementCont/InfoSection';
import BenefitsSection from '../../containers/SearchManagementCont/BenefitsSection';
import CommonFeaturesSection from '../../containers/SearchManagementCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/SearchManagementCont/BannerCTASection';
import PlansSection from '../../containers/SearchManagementCont/PlansSection';
import OtherInfoSection from '../../containers/SearchManagementCont/OtherInfoSection';
import FAQSection from '../../containers/SearchManagementCont/FAQSection';
import RecommendationSection from '../../containers/SearchManagementCont/RecommendationSection';

/* Styling */
import styles from './index.module.scss';

const SearchManagementContPage = () => {
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

export default SearchManagementContPage;
