import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import ExpandedNavbarIcons from '../Icons/ExpandedNavbarIcons';
import ProductCard from '../ProductCard';

/* Interfaces */
import { StepDetail } from '../../interfaces/Stepper';

interface Props {
	steps: StepDetail[];
}

const Stepper: React.FC<Props> = (props) => {
	const { steps } = props;
	const stepsLength = steps.length;
	const [activeStep, setActiveStep] = React.useState(0);
	const [startIndex, setStartIndex] = React.useState(0);
	const [endIndex, setEndIndex] = React.useState(stepsLength);
	React.useEffect(() => {
		if (stepsLength > 7) {
			const overflowLength = stepsLength - 7;
			setEndIndex(stepsLength - overflowLength - 1);
		}
	}, [steps]);

	const handleStepChange = (step: number) => {
		if (step === startIndex && startIndex > 0) {
			setStartIndex(startIndex - 1);
			setEndIndex(endIndex - 1);
		} else if (step === endIndex && endIndex < stepsLength - 1) {
			setStartIndex(startIndex + 1);
			setEndIndex(endIndex + 1);
		}

		setActiveStep(step);
	};

	const handleLeftArrow = () => {
		if (activeStep > 0) {
			setActiveStep(activeStep - 1);
		}

		/* Only shift the parameter indexes if the active step is the first step */
		if (
			(activeStep === startIndex || activeStep - 1 === startIndex) &&
			startIndex > 0
		) {
			setStartIndex(startIndex - 1);
			setEndIndex(endIndex - 1);
		}
	};

	const handleRightArrow = () => {
		if (activeStep < stepsLength - 1) {
			setActiveStep(activeStep + 1);
		}

		/* Only shift the parameter indexes if the active step is the last step */
		if (
			(activeStep === endIndex || activeStep + 1 === endIndex) &&
			endIndex < stepsLength - 1
		) {
			setEndIndex(endIndex + 1);
			setStartIndex(startIndex + 1);
		}
	};

	const isActiveStep = (index: number) => index === activeStep;

	return (
		<div>
			<div className={styles.stepperGrid}>
				{!(startIndex === 0 && activeStep === 0) ? (
					<button className={styles.arrowButton} onClick={handleLeftArrow}>
						<Image src="/leftArrow.svg" width={25} height={25} />
					</button>
				) : (
					<div />
				)}
				<div className={styles.stepperWrapper}>
					{steps.map((product: StepDetail, index: number) => {
						if (index >= startIndex && index <= endIndex) {
							return (
								<div key={uuid()} className={styles.stepWrapper}>
									<div
										onClick={() => handleStepChange(index)}
										onKeyPress={() => handleStepChange(index)}
										className={`${styles.step} 
										${
											(index === startIndex || index === endIndex) &&
											activeStep !== index
												? styles.translucent
												: ''
										}`}
									>
										<ExpandedNavbarIcons
											width={25}
											height={25}
											fill={'#95a1ac'}
											name={product.icon}
											isRainbow={isActiveStep(index)}
										/>
										<h3
											className={`${styles.stepTitle} 
											${isActiveStep(index) ? styles.stepTitle__selected : ''}`}
										>
											{product.title}
										</h3>
									</div>
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
				{!(activeStep === steps.length - 1 && endIndex === steps.length - 1) ? (
					<button className={styles.arrowButton} onClick={handleRightArrow}>
						<Image src="/rightArrow.svg" width={25} height={25} />
					</button>
				) : (
					<div />
				)}
			</div>
			<div>
				<SwipeableViews
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents
				>
					{steps.map((step: StepDetail, index: number) => {
						return (
							<ProductCard
								key={index}
								{...step}
								reversed={(index + 1) % 2 === 0}
								isStepper
							/>
						);
					})}
				</SwipeableViews>
			</div>
		</div>
	);
};

export default Stepper;
