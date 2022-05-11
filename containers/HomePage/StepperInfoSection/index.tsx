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
			<h2 className={styles.stepperTitle}>
				Access Amazon seller leads at scale
			</h2>
			<p className={styles.stepperSubtitle}>Simply generating more revenue.</p>
			<Stepper steps={wholesaleFeatures} />
		</section>
	);
};

export default StepperInfoSection;
