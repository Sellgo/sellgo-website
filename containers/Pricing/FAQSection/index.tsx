import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FAQAccordion from '../../../components/FAQAccordion';

/* Types */
import { FAQData } from '../../../interfaces/FAQ';

interface Props {
	faqData: FAQData[];
}

const FAQSection: React.FC<Props> = (props) => {
	const { faqData } = props;

	return (
		<section className={`big-page-container ${styles.faqSection}`}>
			<h2 className="secondary-heading">Frequently Asked Questions</h2>
			<FAQAccordion data={faqData} />
		</section>
	);
};

export default FAQSection;
