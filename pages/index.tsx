/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../containers/HomePage/HeroBox';
import InfoSection from '../containers/HomePage/InfoSection';
import ProductsSection from '../containers/HomePage/ProductsSection';
import StatisticsSection from '../containers/HomePage/StatisticsSection';
import TestimonialsSection from '../containers/HomePage/TestimonialsSection';

const HomePage = () => {
	return (
		<>
			<HeroBox />
			<InfoSection />
			<section className={styles.homeBanner} />
			<ProductsSection />
			<StatisticsSection />
			<TestimonialsSection />
		</>
	);
};

export default HomePage;
