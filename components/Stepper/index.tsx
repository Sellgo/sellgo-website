import React from 'react';

/* Styling */
import styles from './index.module.scss';


/* Components */
import ExpandedNavbarIcons from '../Icons/ExpandedNavbarIcons';

interface Props {
	steps: any;
	handleStepChange: (step:number) => void;
	activeStep: number;
}

const TextLoader: React.FC<Props> = (props) => {
	const {steps, handleStepChange, activeStep} = props;
	const isLastStep = (index) => index === steps.length - 1;
	return (
		<div className={styles.stepperWrapper}>
			{steps.map((product, index) => {
				const fillColour = index === activeStep ? '#ef7818' : '#2f8ddf';
				return (
					<span className={styles.stepWrapper}>
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
							<h3 className={styles.stepperLabel}> {product.title} </h3>
						</div>
						{!isLastStep(index) ? <div className={styles.line}/> : <div/>}
					</span>
				);
			})}
		</div>
	);
};

export default TextLoader;
