/* Containers */
import HeroBox from '../../containers/ProductTracker/HeroBox';
import InfoSection from '../../containers/ProductTracker/InfoSection';
import BenefitsSection from '../../containers/ProductTracker/BenefitsSection';
import PlansSection from '../../containers/ProductTracker/PlansSection';
import OtherInfoSection from '../../containers/ProductTracker/OtherInfoSection';

/* Styling */
import styles from './index.module.scss';

const ProductTracker = () => {
	return (
		<>
			<HeroBox />
			<section className={styles.banner} />
			<InfoSection />
			<BenefitsSection />
			<PlansSection />
			<OtherInfoSection />
		</>
	);
};

export default ProductTracker;
