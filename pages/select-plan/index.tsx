import React from 'react';

/* Containers */
import HeroBox from '../../containers/SelectPlan';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/selectPlan';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const SelectPlanPage: React.FC<Props> = () => {
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
			</main>
		</>
	);
};

export default SelectPlanPage;
