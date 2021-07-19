import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {
	heading: string;
	body: string;
	ending: string;
}

const AffliateFormSubmitConfirm: React.FC<Props> = (props) => {
	const { heading, body, ending } = props;

	return (
		<div className={styles.affliateFormSubmitConfirm}>
			<h1>{heading}</h1>
			<div>
				<p>Welcome to the Sellgo Affliate Community.</p>
				<p>{body}</p>
			</div>

			<div>
				<p>Thank you for your application.</p>
				<p>{ending}</p>
			</div>
		</div>
	);
};

export default AffliateFormSubmitConfirm;
