/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../containers/HomePage/HeroBox';
import InfoSection from '../containers/HomePage/InfoSection';
import ProductsSection from '../containers/HomePage/ProductsSection';

const HomePage = () => {
	return (
		<>
			<HeroBox />
			<InfoSection />
			<section className={styles.homeBanner} />
			<ProductsSection />
		</>
	);
};

export default HomePage;
