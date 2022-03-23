import React from 'react';

/* Data */
import { wholesaleFeatures } from './data';

/* Components */
import Stepper from '../../../components/Stepper';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const StepperInfoSection: React.FC<Props> = () => {
	return (
		<section
			className={`page-container ${styles.stepperInfoSectionWrapper}`}
			id="showCtaNavBar"
		>
			<h2 className={styles.stepperTitle}>Build your healthy cash flow, instantly.</h2>
			<p className={styles.stepperSubtitle}>All-in-one platform for Selling on Amazon</p>
			<Stepper steps={wholesaleFeatures} />
		</section>
	);
};

export default StepperInfoSection;
