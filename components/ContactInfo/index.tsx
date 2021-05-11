import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const ContactInfo: React.FC<Props> = () => {
	return (
		<div className={styles.contactInfo}>
			<h2>
				Not sure what plan is right for your business?
				<br />
				Send us a message!
			</h2>

			<div className={styles.capsule}></div>
		</div>
	);
};

export default ContactInfo;
