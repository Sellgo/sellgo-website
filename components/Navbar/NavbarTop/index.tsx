import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import SellerListForm from '../../../containers/Demo/SellerListForm';

interface Props {}

const NavbarTop: React.FC<Props> = () => {
	const router = useRouter();

	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);
	return (
		<div className={styles.navbarTop}>
			{router.pathname !== '/career' && (
				<>
					<Link href="/sales-estimator" passHref>
						<a className={styles.salesEstimator}>
							<span>Free sales estimator</span>
						</a>
					</Link>

					<ul className={styles.navbarTopLinksList}>
						<li className={styles.navbarTopLink}>
							<button
								onClick={() => setIsDemoFormOpen(true)}
								className={styles.demoButton}
							>
								Need customized seller lists?
							</button>
						</li>
					</ul>
				</>
			)}

			<Modal
				isOpen={isDemoFormOpen}
				onRequestClose={() => setIsDemoFormOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<SellerListForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>
		</div>
	);
};

export default NavbarTop;
