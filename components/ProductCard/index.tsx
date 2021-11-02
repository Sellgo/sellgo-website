import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';
import CTAButton from '../CTAButton';

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
		reversed,
		imageUrl,
		navigateTo,
		linkLabel
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

				{linkLabel && navigateTo && (
					<Link href={navigateTo} passHref>
						<a className={styles.productCard__Link}>
							{linkLabel}
							&nbsp;
							<Image src="/blueLongArrowRight.svg" width={20} height={8} />
						</a>
					</Link>
				)}

				{title.toUpperCase() === 'EXTENSION' && (
					<CTAButton
						variant="white"
						type="secondary"
						size="medium"
						navigateTo="/"
						className={styles.extensionCTA}
					>
						<Image src="/chromeOriginalLogo.svg" width={25} height={25} />
						&nbsp; Get Sellgo Chrome Extension
					</CTAButton>
				)}
			</div>

			<div className={`${imageClass}`}>
				<Image src={imageUrl} alt="Seller Finder" width={450} height={450} />
			</div>
		</article>
	);
};

export default ProductCard;
