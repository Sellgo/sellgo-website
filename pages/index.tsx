/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../containers/HomePage/HeroBox';
import InfoSection from '../containers/HomePage/InfoSection';

const HomePage = () => {
	return (
		<>
			<HeroBox />
			<InfoSection />
			<section className={styles.homeBanner} />
		</>
	);
};

export default HomePage;
