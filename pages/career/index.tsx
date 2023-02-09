import React from 'react';

/* Containers */
import HeroBox from '../../containers/Career/HeroBox';
import WhyWorkHereSection from '../../containers/Career/WhyWorkHereSection';
import JoinUsSection from '../../containers/Career/JoinUsSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/career';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const CareerPage: React.FC<Props> = () => {
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
				<WhyWorkHereSection />
				<JoinUsSection />
			</main>
		</>
	);
};

export default CareerPage;
