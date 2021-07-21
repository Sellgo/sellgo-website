import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

/* Data */
import { productsLabels, productsDetails } from './data';

/* Components */
import ProductCard from '../../../components/ProductCard';
import Stepper from '../../../components/Stepper';

/* Styling */
import styles from './index.module.scss';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface Props {}

const StepperInfoSection: React.FC<Props> = () => {
	const [activeStep, setActiveStep] = useState(0);
	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	return (
		<section className={`page-container ${styles.stepperInfoSectionWrapper}`}>
			<h2 className="secondary-heading">
				The Amazon Opportunity Finder Your Business Will Love
			</h2>
			<div className={styles.stepperWrapper}>
				<Stepper
					steps={productsLabels}
					handleStepChange={handleStepChange}
					activeStep={activeStep}
				/>
			</div>

			<div>
				<AutoPlaySwipeableViews
					index={activeStep}
					onChangeIndex={handleStepChange}
					interval={5000} // = 5seconds
					enableMouseEvents
				>
					{productsDetails.map((productDetail: any, index: number) => {
						return (
							<ProductCard
								key={index}
								{...productDetail}
								reversed={(index + 1) % 2 === 0}
							/>
						);
					})}
				</AutoPlaySwipeableViews>
			</div>
		</section>
	);
};

export default StepperInfoSection;
