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

	const [activeStep, setActiveStep] = React.useState(0);
	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	const isActiveStep = (index: number) => index === activeStep;

	return (
		<div>
			<div className={styles.stepperGrid}>
				{activeStep !== 0 ?
					<button 
						className={styles.arrowButton}
						onClick={() => setActiveStep(activeStep - 1)}
					>
						<Image
							src='/leftArrow.svg'
							width={25}
							height={25}
						/>
					</button>
					: <div/>
				}
				<div className={styles.stepperWrapper}>
					{steps.map((product: StepDetail, index: number) => {
						return (
							<div key={uuid()} className={styles.stepWrapper}>
								<div
									onClick={() => handleStepChange(index)}
									onKeyPress={() => handleStepChange(index)}
									className={styles.step}
								>
									<ExpandedNavbarIcons
										width={25}
										height={25}
										fill={"#95a1ac"}
										name={product.icon}
										isRainbow={isActiveStep(index)}
									/>
									<h3 className={
										`${styles.stepTitle} 
										${isActiveStep(index) ? styles.stepTitle__selected : ''}`}
									> 
										{product.title} 
									</h3>
								</div>
							</div>
						);
					})}
				</div>
				{
					activeStep !== steps.length - 1 ?
					<button 
						className={styles.arrowButton}
						onClick={() => setActiveStep(activeStep + 1)}
					>
					<Image
						src='/rightArrow.svg'
						width={25}
						height={25}
					/>
				</button>
				: <div/>}
			</div>
			<div>
				<SwipeableViews
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents
				>
					{steps.map((step: StepDetail, index: number) => {
						return (
							<div key={index}>
								<ProductCard
									key={index}
									{...step}
									reversed={(index + 1) % 2 === 0}
								/>
							</div>
						);
					})}
				</SwipeableViews>
			</div>
		</div>
	);
};

export default Stepper;
