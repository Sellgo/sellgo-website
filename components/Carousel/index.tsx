import React, { ReactNode } from 'react';
import Image from 'next/image';
import SwipeableViews from 'react-swipeable-views';

/* Styling */
import styles from './index.module.scss';

interface Props {
	items: ReactNode[];
}

const Carousel: React.FC<Props> = (props) => {
	const { items } = props;

	const [activeStep, setActiveStep] = React.useState(0);
	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	const isActiveStep = (index: number) => index === activeStep;

	return (
		<div>
			<div className={styles.mainContentWrapper}>
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
				<div className={styles.itemsWrapper}>
					<SwipeableViews
						index={activeStep}
						onChangeIndex={handleStepChange}
						enableMouseEvents
					>
						{items.map((item: ReactNode, index: number) => {
							return (
								<span key={index}>
									{item}
								</span>
							);
						})}
					</SwipeableViews>
				</div>
				{
					activeStep !== items.length - 1 ?
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

			{items.length > 1 && <div className={styles.stepperWrapper}>
				{items.map((_item: ReactNode, index: number) => {
					return (
						<div
							key={index}
							onClick={() => handleStepChange(index)}
							onKeyPress={() => handleStepChange(index)}
							className={
								`${styles.menuIcon}
								${isActiveStep(index) ? styles.menuIcon__active : ''}`
							}
						/>
					);
				})}
			</div>}
		</div>
	);
};

export default Carousel;
