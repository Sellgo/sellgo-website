/* Containers */
import HeroBox from '../../containers/ProductTracker/HeroBox';
import InfoSection from '../../containers/ProductTracker/InfoSection';
import BenefitsSection from '../../containers/ProductTracker/BenefitsSection';

/* Styling */
import styles from './index.module.scss';

const ProductTracker = () => {
	return (
		<>
			<HeroBox />
			<section className={styles.banner} />
			<InfoSection />
			<BenefitsSection />
		</>
	);
};

export default ProductTracker;
