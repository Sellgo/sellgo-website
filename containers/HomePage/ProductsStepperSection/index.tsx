import React from 'react';
import Steps, { Step } from 'rc-steps';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const ProductsStepperSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.productsStepperSection}`}>
			<h2 className="secondary-heading">
				The Amazon Opportunity Finder Your Business Will Love
			</h2>

			<div className={styles.stepperWrapper}>
				<Steps current={2} className={styles.rcsteps}>
					<Step title="First" style={{ fontSize: 14, fontWeight: 'bold' }} />
					<Step title="Second" style={{ fontSize: 14, fontWeight: 'bold' }} />
					<Step title="Third" style={{ fontSize: 14, fontWeight: 'bold' }} />
				</Steps>
			</div>
		</section>
	);
};

export default ProductsStepperSection;
