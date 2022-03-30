import React from 'react';

/* Containers */
import HeroBox from '../../containers/Partnership/HeroBox';
import BenefitsSection from '../../containers/Partnership/BenefitsSection';
import ApplicationForm from '../../containers/Partnership-Signup/ApplicationForm';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/partnership';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const Partners: React.FC<Props> = () => {
	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<main>
				<HeroBox />
				<BenefitsSection />
				<ApplicationForm />
			</main>
		</>
	);
};

export default Partners;
