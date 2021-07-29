import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/Affliate-Signup/HeroBox';
import ApplicationForm from '../../containers/Affliate-Signup/ApplicationForm';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/affliateSignup';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const PartnersSignup: React.FC<Props> = () => {
	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<section className={`${styles.partnersSignupWrapper}`}>
				<div className={styles.blueBG} />
				<div className={`page-container ${styles.partnersSignupBox}`}>
					<HeroBox />
					<ApplicationForm />
				</div>
			</section>
		</>
	);
};

export default PartnersSignup;
