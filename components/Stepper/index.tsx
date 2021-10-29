import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
/* Styling */
import styles from './index.module.scss';

/* Components */
import ExpandedNavbarIcons from '../Icons/ExpandedNavbarIcons';
import ProductCard from '../ProductCard';

/* Interfaces */
import { StepDetail } from '../../interfaces/Stepper';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface Props {
	steps: StepDetail[];
}

const Stepper: React.FC<Props> = (props) => {
	const { steps } = props;

	const [activeStep, setActiveStep] = React.useState(0);
	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	const isFirstStep = (index: number) => index === 0;
	const isActiveStep = (index: number) => index === activeStep;

	return (
		<div>
			<div className={styles.stepperWrapper}>
				{steps.map((product: StepDetail, index: number) => {
					const fillColour = isActiveStep(index) ? '#b318f1' : '#ced4d9';
					return (
						<>
							{!isFirstStep(index) ? <div className={styles.line} /> : null}
							<div key={index} className={styles.stepWrapper}>
								<div
									key={product.title}
									onClick={() => handleStepChange(index)}
									onKeyPress={() => handleStepChange(index)}
									className={styles.step}
								>
									<ExpandedNavbarIcons
										width={30}
										height={30}
										fill={fillColour}
										name={product.icon}
									/>
									<h3 className={styles.stepTitle}> {product.title} </h3>
								</div>
							</div>
						</>
					);
				})}
			</div>
			<div>
				<AutoPlaySwipeableViews
					index={activeStep}
					onChangeIndex={handleStepChange}
					interval={5000} // = 5seconds
					enableMouseEvents
				>
					{steps.map((step: StepDetail, index: number) => {
						return (
							<ProductCard
								key={index}
								{...step}
								reversed={(index + 1) % 2 === 0}
							/>
						);
					})}
				</AutoPlaySwipeableViews>
			</div>
		</div>
	);
};

export default Stepper;
