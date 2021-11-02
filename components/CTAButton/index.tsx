import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

interface Props {
	type: 'primary' | 'secondary';
	size: 'small' | 'medium' | 'large';
	navigateTo: string;
	children: React.ReactNode;
	variant?: 'white' | 'rainbow' | 'orange' | 'purplePinkRainbow' | 'green';
	className?: string;
	asExternal?: boolean;
	newTarget?: boolean;
}

const CTAButton: React.FC<Props> = (props) => {
	const {
		navigateTo,
		type,
		size,
		children,
		className,
		asExternal,
		variant = 'orange',
		newTarget
	} = props;

	const baseClassName = styles.ctabutton;
	const sizeClassName = styles[`ctabutton__${size}`];
	const variantAndTypeClassName = styles[`ctabutton__${type}__${variant}`];
	const isRainbowBordered =
		(variant === 'rainbow' || variant === 'purplePinkRainbow') &&
		type === 'secondary';

	// render as normal <a> tag
	if (asExternal) {
		return (
			<a
				className={`${baseClassName} ${sizeClassName} ${variantAndTypeClassName} ${className}`}
				href={navigateTo}
				target={newTarget ? '_blank' : ''}
				rel="noreferrer noopener"
			>
				{isRainbowBordered ? (
					<span className={styles.ctabutton__rainbowWrapper}>{children}</span>
				) : (
					children
				)}
			</a>
		);
	} else {
		return (
			<Link href={navigateTo} passHref>
				<a
					className={`${baseClassName} ${sizeClassName} ${variantAndTypeClassName} ${className}`}
				>
					{isRainbowBordered ? (
						<span className={styles.ctabutton__rainbowWrapper}>{children}</span>
					) : (
						children
					)}
				</a>
			</Link>
		);
	}
};

export default CTAButton;
