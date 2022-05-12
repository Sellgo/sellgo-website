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
				Access Amazon seller database at scale
			</h2>
			<p className={styles.stepperSubtitle}>Million of leads in a few seconds.</p>
			<Stepper steps={wholesaleFeatures} />
		</section>
	);
};

export default StepperInfoSection;
