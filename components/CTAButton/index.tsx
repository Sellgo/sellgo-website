import React from 'react';
import Link from 'next/link';

interface Props {
	type: 'primary' | 'secondary';
	size: 'small' | 'medium' | 'large';
	navigateTo: string;
	children: React.ReactNode;
	className?: string;
}

const CTAButton: React.FC<Props> = (props) => {
	const { navigateTo, type, size, children, className } = props;

	const baseClassName = `ctabutton`;
	const sizeClassName = `ctabutton--${size}`;
	const typeClassName = `ctabutton--${type}`;
	return (
		<Link href={navigateTo} passHref>
			<a
				className={`${baseClassName} ${typeClassName} ${sizeClassName} ${className}`}
			>
				{children}
			</a>
		</Link>
	);
};

export default CTAButton;
