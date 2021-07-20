import React from 'react';

/* Libraries */
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

/* Data */
import { productsLabels, productsDetails } from './data';

/* Components */
import ProductCard from '../../../components/ProductCard';
import Stepper from '../../../components/Stepper';

/* Styling */
import styles from './index.module.scss';

/* Components */
import ExpandedNavbarIcons from '../../../components/Icons/ExpandedNavbarIcons';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface Props {}

const StepperInfoSection: React.FC<Props> = () => {
	const [activeStep, setActiveStep] = React.useState(0);
	const stepperIcon = (props: any) => {
		const {active, icon} = props;
		const fillColour = active ? '#ef7818' : '#2f8ddf';

		return (
			<ExpandedNavbarIcons
				width={30}
				height={30}
				fill={fillColour}
				name={productsLabels[icon - 1].icon}
			/>
		);
	};

	const stepperLine = <div className={styles.stepperLine} />;

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
				{/* <Stepper
					alternativeLabel
					nonLinear
					activeStep={activeStep}
					connector={stepperLine}
				>
					{productsLabels.map((product, index) => {
						return (
							<Step key={product.title} onClick={() => handleStepChange(index)}>
								<StepLabel StepIconComponent={stepperIcon} />
								<h3 className={styles.stepperLabel}> {product.title} </h3>
							</Step>
						);
					})}
				</Stepper> */}
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
