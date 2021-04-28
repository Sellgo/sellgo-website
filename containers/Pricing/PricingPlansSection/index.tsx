import React, { useEffect } from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import PricingInfoAlert from '../../../components/PricingInfoAlert';
import PricingPlansCard from '../../../components/PricingPlansCard';
import FreeTrialCTABox from '../../../components/FreeTrialCTABox';
import ContactInfo from '../../../components/ContactInfo';
// import AllFeaturesTable from '../../../components/AllFeaturesTable';

/* Containers */
import MarketplaceSection from '../MarketplaceSection';
import RecommendedBundlesSection from '../RecommendedBundlesSection';
import CalculateYourPriceSection from '../CalculateYourPriceSection';
import ExtraInfoSection from '../ExtraInfoSection';
import FAQSection from '../FAQSection';

interface Props {
	planName: string;
	productsIncluded: any;
	selectedPlanType: number;
}

const PricingPlansSection: React.FC<Props> = (props) => {
	const { planName, productsIncluded, selectedPlanType } = props;

	useEffect(() => {
		Modal.setAppElement('#all-features-modal');
	}, []);

	return (
		<>
			<section className={styles.pricingPlansSectionWrapper}>
				<div className={`big-page-container ${styles.pricingPlansSection}`}>
					<div className={styles.planName}>
						<span></span>
						<h2>{planName}</h2>
					</div>

					<div className={styles.planShortSummary}>
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

						<a href="#calculatePrice" className="anchor">
							Calculate your price
							<Image
								src="/downArrow.svg"
								alt="Select the arrow to move to calculate your price section"
								width={10}
								height={10}
								priority
							/>
						</a>
					</div>

					<PricingInfoAlert />
				</div>

				<div className={`big-page-container ${styles.pricingPlansCardWrapper}`}>
					{productsIncluded.map((product: any) => {
						return <PricingPlansCard key={uuid()} {...product} />;
					})}
				</div>
			</section>

			<FreeTrialCTABox />
			<MarketplaceSection />
			<RecommendedBundlesSection />

			<section className={`big-page-container ${styles.contactInfoSection}`}>
				<ContactInfo />
			</section>

			<CalculateYourPriceSection selectedPlanType={selectedPlanType} />
			<ExtraInfoSection />
			<FAQSection />

			{/* <Modal isOpen overlayClassName="modalOverlay" className="modal">
				<AllFeaturesTable />
			</Modal> */}

			<div id="all-features-modal" />
		</>
	);
};

export default PricingPlansSection;
