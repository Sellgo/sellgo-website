/* Containers */
import HeroBox from '../../containers/ProductTracker/HeroBox';

/* Styling */
import styles from './index.module.scss';

const ProductTracker = () => {
	return (
		<>
			<HeroBox />
			<section className={styles.banner} />
		</>
	);
};

export default ProductTracker;
