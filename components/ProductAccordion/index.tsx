import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemState
} from 'react-accessible-accordion';

/* Styling */
import styles from './index.module.scss';

interface Props {
	data: any;
}

const ProductAccordion: React.FC<Props> = (props) => {
	const { data } = props;
	return (
		<>
			<Accordion className={styles.productAccordion} allowZeroExpanded>
				{data.map((accordionData: any, index: number) => {
					return (
						<AccordionItem className={styles.productAccordionItem} key={index}>
							<AccordionItemHeading className={styles.productAccordionHeading}>
								<AccordionItemButton className={styles.productAccordionButton}>
									<p>
										{accordionData.title}
										<AccordionItemState>
											{({ expanded }) => {
												console.log(expanded);
												return expanded ? (
													<span>&#8722;</span>
												) : (
													<span>&#43;</span>
												);
											}}
										</AccordionItemState>
									</p>
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel className={styles.productAccordionPanel}>
								<p>{accordionData.description}</p>
							</AccordionItemPanel>
						</AccordionItem>
					);
				})}
			</Accordion>
		</>
	);
};

export default ProductAccordion;
