import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FAQAccordion from '../../../components/FAQAccordion';

/* Types */
import { FAQDetails } from '../../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails;
}

const FAQSection: React.FC<Props> = (props) => {
	const { faqDetails } = props;

	return (
		<section className={styles.faqWrapper}>
			<div className={`page-container ${styles.faqSection}`}>
				<h2 className="secondary-heading">Frequently Asked Questions</h2>
				{faqDetails.data && faqDetails.data.length > 0 && (
					<FAQAccordion data={faqDetails.data} horizontalFocus />
				)}
			</div>
		</section>
	);
};

export default FAQSection;
