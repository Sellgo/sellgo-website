import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const FAQSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.faqSection}`}>
			<h2>Frequently Asked Questions</h2>
		</section>
	);
};

export default FAQSection;
