import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import ExpandedNavbarIcons from '../Icons/ExpandedNavbarIcons';

/* Interfaces */
import { StepDetail } from '../../interfaces/Stepper';

interface Props {
	steps: StepDetail[];
	handleStepChange: (step: number) => void;
	activeStep: number;
}

const TextLoader: React.FC<Props> = (props) => {
	const { steps, handleStepChange, activeStep } = props;
	const isFirstStep = (index: number) => index === 0;
	const isActiveStep = (index: number) => index === activeStep;

	return (
		<div className={styles.stepperWrapper}>
			{steps.map((product: StepDetail, index: number) => {
				const fillColour = isActiveStep(index) ? '#ef7818' : '#ced4d9';
				return (
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
						{!isFirstStep(index) ? <div className={styles.line} /> : <div />}
					</div>
				);
			})}
		</div>
	);
};

export default TextLoader;
