import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Components */
import User from '../Icons/Person';

interface Props {
	className?: string;
	message: string;
}

const ContactInfo: React.FC<Props> = (props) => {
	const { className, message } = props;

	return (
		<div className={`${styles.contactInfo} ${className}`}>
			<h2>
				Need an enterprise account for your business?
				<br />
				We&apos;d be happy to talk!
			</h2>

			<div className={styles.capsule}>
				<p>{message}</p>
				<Link href="/contact-sales" passHref>
					<a className={styles.navbarLink__sales}>
						<User width={14} height={12} fill="#2e3b4a" />
						<span>Contact Sales</span>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default ContactInfo;
