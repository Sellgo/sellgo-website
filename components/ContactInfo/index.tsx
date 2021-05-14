import React from 'react';
import Link from 'next/link';

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

			<div className={styles.capsule}>
				<p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
				<Link href="/contact-sales" passHref>
					<a className="anchor">Contact sales</a>
				</Link>
			</div>
		</div>
	);
};

export default ContactInfo;
