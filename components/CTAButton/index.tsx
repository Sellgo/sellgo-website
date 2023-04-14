import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

interface Props {
	type: 'primary' | 'secondary';
	size: 'small' | 'medium' | 'large' | 'productPageBig' | 'productPageSmall';
	navigateTo?: string;
	children: React.ReactNode;
	variant?:
		| 'white'
		| 'rainbow'
		| 'orange'
		| 'purplePinkRainbow'
		| 'green'
		| 'black';
	className?: string;
	asExternal?: boolean;
	newTarget?: boolean;
	disabled?: boolean;
	onClick?: () => void;
}

const CTAButton: React.FC<Props> = (props) => {
	const {
		navigateTo = '',
		type,
		size,
		children,
		className = '',
		asExternal = false,
		variant = 'orange',
		newTarget = false,
		disabled = false,
		onClick
	} = props;

	const baseClassName = styles.ctabutton;
	const sizeClassName = styles[`ctabutton__${size}`];
	const variantAndTypeClassName = styles[`ctabutton__${type}__${variant}`];
	const disabledClassName = disabled ? styles.disabled : '';
	const isRainbowBordered =
		(variant === 'rainbow' || variant === 'purplePinkRainbow') &&
		type === 'secondary';

	if (onClick) {
		return (
			<button
				className={`
					${baseClassName} 
					${sizeClassName} 
					${variantAndTypeClassName} 
					${disabledClassName}
					${className}`}
				onClick={onClick}
			>
				{isRainbowBordered ? (
					<span className={styles.ctabutton__rainbowWrapper}>{children}</span>
				) : (
					children
				)}
			</button>
		);
	}

	// render as normal <a> tag
	if (asExternal) {
		return (
			<a
				className={`
					${baseClassName} 
					${sizeClassName} 
					${variantAndTypeClassName} 
					${disabledClassName}
					${className}`}
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
					className={`
						${baseClassName} 
						${sizeClassName} 
						${variantAndTypeClassName} 
						${disabledClassName}
						${className}`}
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

CTAButton.defaultProps = {
	className: '',
	asExternal: false,
	variant: 'orange',
	newTarget: false,
	disabled: false,
	onClick: undefined,
	navigateTo: ''
};

export default CTAButton;
