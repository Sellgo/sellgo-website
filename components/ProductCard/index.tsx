import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {
	title: string;
	subTitle: string;
	description: string;
	navigateTo: string;
	linkLabel: string;
	reversed: boolean;
	imageUrl: string;
}

const ProductCard: React.FC<Props> = (props) => {
	const {
		title,
		subTitle,
		description,
		navigateTo,
		linkLabel,
		reversed,
		imageUrl
	} = props;

	const textClass = `${styles.productCard__Text} ${
		reversed ? styles.reversedText : ''
	}`;

	const imageClass = `${styles.productCard__Image} ${
		reversed ? styles.reversedImage : ''
	}`;

	return (
		<article className={styles.productCard}>
			<div className={`${textClass}`}>
				<small>{title}</small>
				<h3>{subTitle}</h3>
				<p>{description}</p>

				<Link href={navigateTo} passHref>
					<a className={styles.productCard__Link}>{linkLabel}</a>
				</Link>
			</div>

			<div className={`${imageClass}`}>
				<Image src={imageUrl} alt="Seller Finder" width={440} height={220} />
			</div>
		</article>
	);
};

export default ProductCard;
