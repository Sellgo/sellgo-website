import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

interface Props {
	className?: string;
	message: string;
}

const ContactInfo: React.FC<Props> = (props) => {
	const { className, message } = props;

	return (
		<div className={`${styles.contactInfo} ${className}`}>
			<h2>
				*Need more sellers/ keywords data with an Enterprise account?
				<br />
				We&apos;d be happy to talk!
			</h2>

			<div className={styles.capsule}>
				<p>{message}</p>
				<Link href="/contact-sales" passHref>
					<a className={styles.navbarLink__sales}>Contact Sales</a>
				</Link>
			</div>
		</div>
	);
};

ContactInfo.defaultProps = {
	className: ''
};

export default ContactInfo;
