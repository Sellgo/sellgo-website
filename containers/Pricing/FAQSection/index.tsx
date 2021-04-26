import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FAQAccordion from '../../../components/FAQAccordion';

/* Data */
import { faqData } from './data';

interface Props {}

const FAQSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.faqSection}`}>
			<h2 className="secondary-heading">Frequently Asked Questions</h2>
			<FAQAccordion data={faqData} />
		</section>
	);
};

export default FAQSection;
