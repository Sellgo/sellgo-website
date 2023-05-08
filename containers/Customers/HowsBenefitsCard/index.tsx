import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';
import CTAButton from '../../../components/CTAButton';

interface Props {
	title: string;
	subTitle: string;
	description: string;
	navigateTo: string;
	linkLabel: string[];
	reversed: boolean;
	imageUrl: string;
	buttonText: string;
	isStepper?: boolean;
	imageWidth?: number;
	imageHeight?: number;
}

const ProductCardBenefits: React.FC<Props> = (props) => {
	const {
		title,
		subTitle,
		description,
		reversed,
		imageUrl,
		navigateTo,
		linkLabel,
		isStepper,
		buttonText,
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
				<div className={styles.linkWrapper}>
					{linkLabel?.map((label, index) => {
						return (
							<a className={styles.multipleLink} key={index}>
								<Image src="/check-solid.svg" width={25} height={10} />
								&nbsp;{label}
							</a>
						);
					})}
					<CTAButton
						variant="white"
						type="secondary"
						size="small"
						navigateTo={navigateTo}
						className={styles.extensionCTA}
						newTarget
					>
						{buttonText}
					</CTAButton>
				</div>
				)
				{!Array.isArray(linkLabel) &&
					!Array.isArray(navigateTo) &&
					linkLabel &&
					navigateTo && (
						<Link href={navigateTo} passHref>
							<a className={styles.productCard__Link}>
								{linkLabel}
								&nbsp;
								<Image src="/checkSquareBlue.svg" width={20} height={8} />
							</a>
						</Link>
					)}
				{title.toUpperCase() === 'Try for free' && (
					<CTAButton
						variant="white"
						type="secondary"
						size="medium"
						navigateTo="/extension"
						className={styles.extensionCTA}
					>
						<Image src="/chromeOriginalLogo.svg" width={25} height={25} />
						&nbsp; Get AiStock Chrome Extension
					</CTAButton>
				)}
			</div>

			<div className={`${imageClass}`}>
				<Image
					src={imageUrl}
					alt="AiStock"
					width={imageWidth}
					height={imageHeight}
				/>
			</div>
		</article>
	);
};

ProductCardBenefits.defaultProps = {
	isStepper: false,
	imageWidth: 600,
	imageHeight: 360
};

export default ProductCardBenefits;
