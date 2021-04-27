import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const ContactInfo: React.FC<Props> = () => {
	return (
		<div className={styles.contactInfo}>
			<h2>
				Not sure which plan is right for you?
				<br />
				Give us a call.
			</h2>

			<div className={styles.capsule}></div>
		</div>
	);
};

export default ContactInfo;
