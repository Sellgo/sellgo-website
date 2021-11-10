import React from 'react';

/* Styling */
import styles from './index.module.scss';

import CTAButton from '../CTAButton';

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
				<CTAButton
					type="secondary"
					size="small"
					navigateTo="/contact-sales"
					variant="white"
					className={styles.contactSalesButton}
				>
					Contact Sales
				</CTAButton>
			</div>
		</div>
	);
};

ContactInfo.defaultProps = {
	className: ''
};

export default ContactInfo;
