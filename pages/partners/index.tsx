import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/Partners/HeroBox';
import FirstCTASection from '../../containers/Partners/FirstCTASection';
import BenefitsSection from '../../containers/Partners/BenefitsSection';
import ApprovalProcessSection from '../../containers/Partners/ApprovalProcessSection';
import ClosingCTASection from '../../containers/Partners/ClosingCTASection';
import FAQSection from '../../containers/Partners/FAQSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/affliate';

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
			<main className={styles.demoPage}>
				<HeroBox />
				<FirstCTASection />
				<BenefitsSection />
				<ApprovalProcessSection />
				<ClosingCTASection />
				<FAQSection />
			</main>
		</>
	);
};

export default Partners;
