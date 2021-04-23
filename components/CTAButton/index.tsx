import React from 'react';
import Link from 'next/link';

interface Props {
	type: 'primary' | 'secondary';
	size: 'small' | 'medium' | 'large';
	navigateTo: string;
	children: React.ReactNode;
}

const CTAButton: React.FC<Props> = (props) => {
	const { navigateTo, type, size, children } = props;

	const sizeClassName = `ctabutton--${size}`;
	const typeClassName = `ctabutton--${type}`;
	return (
		<Link href={navigateTo} passHref>
			<a className={`ctabutton ${typeClassName} ${sizeClassName}`}>
				{children}
			</a>
		</Link>
	);
};

export default CTAButton;
