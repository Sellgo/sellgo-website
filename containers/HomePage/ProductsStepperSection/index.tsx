import React from 'react';
// @ts-ignore : don't have the type declartions on npm for this
import Stepper from 'react-stepper-horizontal';

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
				<Stepper
					steps={[
						{ title: 'Step One' },
						{ title: 'Step Two' },
						{ title: 'Step Three' },
						{ title: 'Step Four' }
					]}
					activeStep={1}
				/>
			</div>
		</section>
	);
};

export default ProductsStepperSection;
