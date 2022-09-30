import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {
	heading: string;
	body: string;
}

const PartnershipFormSubmitConfirm: React.FC<Props> = (props) => {
	const { heading, body } = props;

	return (
		<div className={styles.partnershipFormSubmitConfirm}>
			<h1>{heading}</h1>
			<div>
				<p>{body}</p>
			</div>
		</div>
	);
};

export default PartnershipFormSubmitConfirm;
