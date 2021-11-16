import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

interface Props {
	setModalOpen: (open: boolean) => void;
	isPricingPage?: boolean;
}
const BetaPopupConfirmation = (props: Props) => {
	const { setModalOpen, isPricingPage } = props;

	/* Prevent pricing page from auto-opening modal upon redirect */
	const handleRedirect = () => {
		sessionStorage.setItem('hasShownBetaModal', 'true');
	};

	return (
		<div className={styles.betaPopupModal}>
			<p className={styles.title}> You&apos;re all set. </p>
			<p> Your 50% OFF coupon code has been sent to your email. </p>
			<div className={styles.paperPlaneIcon}>
				<Image src="/pinkPaperPlane.svg" width={70} height={70} />
			</div>
			<p>
				Crush your Amazon selling in 2021 and beyond with
				<br/>
				The next generation Amazon All-In-One tool.
			</p>
			{isPricingPage ? (
				<button
					className={styles.learnMore}
					onClick={() => setModalOpen(false)}
				>
					Learn more&nbsp;
					<Image src="/blueLongArrowRight.svg" width={20} height={11} />
				</button>
			) : (
				<Link href="/pricing" passHref>
					<button className={styles.learnMore} onClick={handleRedirect}>
						Learn more&nbsp;
						<Image src="/blueLongArrowRight.svg" width={20} height={11} />
					</button>
				</Link>
			)}
		</div>
	);
};

BetaPopupConfirmation.defaultProps = {
	isPricingPage: false
};

export default BetaPopupConfirmation;
