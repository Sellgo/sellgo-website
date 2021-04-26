import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemState,
	resetNextUuid
} from 'react-accessible-accordion';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

interface Props {
	data: any;
}

const FAQAccordion: React.FC<Props> = (props) => {
	const { data } = props;

	// Reset UUID for react accordion (server apps)
	resetNextUuid();

	return (
		<Accordion
			allowZeroExpanded
			className={styles.faqAccordion__HorizontalFocus}
		>
			{data.map((faqDetails: any) => {
				return (
					<AccordionItem
						key={uuid()}
						className={styles.faqAccordionItem__HorizontalFocus}
					>
						<AccordionItemHeading className={styles.faqAccordionHeading}>
							<AccordionItemButton className={styles.faqAccordionButton}>
								<p>
									<AccordionItemState>
										{({ expanded }) => {
											return expanded ? <span>&#62;</span> : <span>&#62;</span>;
										}}
									</AccordionItemState>
									{faqDetails.question}
								</p>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel className={styles.faqAccordionPanel}>
							<p>{faqDetails.answer}</p>
						</AccordionItemPanel>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
};

export default FAQAccordion;
