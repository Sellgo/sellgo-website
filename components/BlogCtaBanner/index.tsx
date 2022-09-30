import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import CTAButton from '../CTAButton';

/* Data */
import { CTA_1A, CTA_1B } from './data';

interface Props {
	type?: string;
}

const BlogCtaBanner = (props: Props) => {
	const { type } = props;
	const displayData = type === 'freeAccount1' ? CTA_1A : CTA_1B;
	return (
		<div className={styles.blogCtaBannerWrapper}>
			<div className={`${styles.blogCtaBanner} page-container`}>
				<div className={styles.blogCtaText}>
					{displayData.title}
					{displayData.subtitle}
					{displayData.asterisk}
				</div>
				<CTAButton
					type={'primary'}
					size={'medium'}
					variant={'rainbow'}
					navigateTo={displayData.link}
					newTarget
					asExternal
				>
					{displayData.linkLabel}
				</CTAButton>
			</div>
		</div>
	);
};

BlogCtaBanner.defaultProps = {
	type: 'freeAccount1'
};

export default BlogCtaBanner;
