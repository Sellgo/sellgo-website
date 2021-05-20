import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import Herobox from '../../containers/ContactSales/HeroBox';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/contactSales';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const ContactSalesPage: React.FC<Props> = () => {
	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<main className={styles.contactSalesPage}>
				<Herobox />
			</main>
		</>
	);
};

export default ContactSalesPage;
