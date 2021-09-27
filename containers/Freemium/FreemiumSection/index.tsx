import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FormInput from '../../../components/FormInput';

interface Props {}

const OpportunityBannerSection: React.FC<Props> = () => {
	const handleGetSalesEstimate = () => {
		console.log('Run');
	};

	return (
		<section className={styles.freemiumSectionWrapper}>
			<div className="page-container">
				<div className={styles.headingRow}>
					<h3 className={styles.title}>Amazon Sales Estimator</h3>
					<h3 className={styles.counter}>0</h3>
				</div>
				<div className={styles.freemiumForm}>
					<form onSubmit={handleGetSalesEstimate}>
						<FormInput
							label="Best Seller's Rank #"
							id="bsr"
							type="text"
							name="bsr"
							onChange={() => null}
							value=""
							className={styles.formInput}
							placeholder="Enter BSR here"
						/>
						<FormInput
							label="Best Seller's Rank #"
							id="bsr"
							type="text"
							name="bsr"
							onChange={() => null}
							value=""
							className={styles.formInput}
							placeholder="Enter BSR here"
						/>
						<FormInput
							label="Best Seller's Rank #"
							id="bsr"
							type="text"
							name="bsr"
							onChange={() => null}
							value=""
							className={styles.formInput}
							placeholder="Enter BSR here"
						/>

						<div className={styles.buttonsRow}>
							<button className={styles.resetButton}>Reset</button>

							<button className={styles.estimateButton}>Estimate</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default OpportunityBannerSection;
