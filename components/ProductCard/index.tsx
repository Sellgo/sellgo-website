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
	navigateTo: string | string[];
	linkLabel: string | string[];
	reversed: boolean;
	imageUrl: string;
	isStepper?: boolean;
}

const ProductCard: React.FC<Props> = (props) => {
	const {
		title,
		subTitle,
		description,
		reversed,
		imageUrl,
		navigateTo,
		linkLabel,
		isStepper,
	} = props;

	const textClass = `${styles.productCard__Text} ${
		reversed ? styles.reversedText : ''
	} ${isStepper ? styles.stepperText : ''}`;

	const imageClass = `${styles.productCard__Image} ${
		reversed ? styles.reversedImage : ''
	}`;

	return (
		<article className={styles.productCard}>
			<div className={`${textClass}`}>
				<small>{title}</small>
				<h3>{subTitle}</h3>
				<p>{description}</p>

				{
					/* If link label is string array */
					Array.isArray(linkLabel) && Array.isArray(navigateTo) && (
						<div className={styles.linkWrapper}>
							{linkLabel.map((label, index) => {
								return (
								<Link href={navigateTo[index]} passHref>
									<a className={styles.multipleLink}>
										{label}
										&nbsp;
										<Image src="/blueLongArrowRight.svg" width={20} height={8} />
									</a>
								</Link>);
							})}
						</div>)
				}

				{!Array.isArray(linkLabel) && !Array.isArray(navigateTo) && linkLabel && navigateTo && (
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
						navigateTo="/extension"
						className={styles.extensionCTA}
					>
						<Image src="/chromeOriginalLogo.svg" width={25} height={25} />
						&nbsp; Get Sellgo Chrome Extension
					</CTAButton>
				)}
			</div>

			<div className={`${imageClass}`}>
				<Image src={imageUrl} alt="Seller Finder" width={600} height={360} />
			</div>
		</article>
	);
};


ProductCard.defaultProps = {
	isStepper: false,
};

export default ProductCard;
