import React from 'react';
import Image from 'next/image';

/* Components */
import Check from '../../../../components/Icons/Check';

/* Styling */
import styles from './index.module.scss';
import CTAButton from '../../../../components/CTAButton';

interface Props {
	title: string;
	subTitle: string;
	description: string;
	benefits: string[];
	reversed: boolean;
	imageUrl: string;
	isStepper?: boolean;
	imageWidth?: number;
	imageHeight?: number;
}

const ProductCard: React.FC<Props> = (props) => {
	const {
		title,
		subTitle,
		description,
		reversed,
		imageUrl,
		benefits,
		isStepper,
		imageWidth = 600,
		imageHeight = 360
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
					Array.isArray(benefits) && (
						<div className={styles.linkWrapper}>
							{benefits.map((benefit, index) => {
								return (
									<div className={styles.benefitsContainer} key={index}>
										<Check width={10} height={7} fill="#b318f1" />
										<span>{benefit}</span>
									</div>
								);
							})}
						</div>
					)
				}

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
				<Image
					src={imageUrl}
					alt="Seller Finder"
					width={imageWidth}
					height={imageHeight}
				/>
			</div>
		</article>
	);
};

ProductCard.defaultProps = {
	isStepper: false,
	imageWidth: 600,
	imageHeight: 360
};

export default ProductCard;
