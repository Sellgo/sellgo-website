import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FormInput from '../../../components/FormInput';
import FbaCalculator from './FbaCalculator';

/* Constants */
import { isValidAsin, getAsinFromLink } from '../../../constants/Freemium';

interface Props {}

const FreemiumSection: React.FC<Props> = () => {
	const [productInput, setProductInput] = React.useState<string>('');
	const [isCalculatorOpen, setCalculatorOpen] = React.useState<boolean>(false);
	const [asin, setAsin] = React.useState<string>('');
	const [inputError, setInputError] = React.useState<boolean>(false);

	React.useEffect(() => {
		if (productInput.length > 0) {
			const asinFromLink = getAsinFromLink(productInput);
			/* If is link */
			if (asinFromLink) {
				setInputError(false);
				setAsin(asinFromLink);
			
			/* If is asin */
			} else if (isValidAsin(productInput)) {
				setInputError(false);
				setAsin(productInput);
			
			/* Neither asin nor link */
			} else {
				setInputError(true);
				setAsin('');
			}
		} else {
			setInputError(false);
		}
	}, [productInput])

	const handleGetSalesEstimate = () => {
		console.log(asin);
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
							label="Find your product on Amazon"
							id="asin	"
							type="text"
							name="asin"
							onChange={(e:any) => {setProductInput(e.target.value)}}
							value={productInput}
							className={inputError ? `${styles.formInput} ${styles.formInput__error}` : styles.formInput}
							placeholder="Enter Amazon Link or ASIN or ISBN"
						/>
						<div className={styles.buttonsRow}>
							<button className={styles.estimateButton}>Estimate</button>
						</div>
					</form>
					<button 
						className={styles.showCalculatorLink}
						onClick={() => (setCalculatorOpen(!isCalculatorOpen))}
					>
						{!isCalculatorOpen ? `Show FBA Opportunity calculator >` : `See less >`}
					</button>
					{isCalculatorOpen && <FbaCalculator/>}
				</div>
			</div>
		</section>
	);
};

export default FreemiumSection;
