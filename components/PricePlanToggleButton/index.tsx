import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {
	className?: string;
	isMonthly: boolean;
	handleChange: () => void;
}

const PricePlanToggleButton: React.FC<Props> = (props) => {
	const { className, isMonthly, handleChange } = props;

	const monthlyToggleTextClass = `${styles.priceToggleText} ${
		isMonthly ? styles.priceToggleText__Active : ''
	}`;

	const annualToggleTextClass = `${styles.priceToggleText} ${
		!isMonthly ? styles.priceToggleText__Active : ''
	}`;

	return (
		<div
			className={`${styles.pricePlanToggleWrapper} ${className}`}
			role="button"
			onClick={handleChange}
			tabIndex={0}
			onKeyPress={() => {}}
		>
			<div className={monthlyToggleTextClass}>
				<p>Pay monthly</p>
				{/* <small>Commit Monthly</small> */}
			</div>

			<div className={annualToggleTextClass}>
				<p>Pay annually</p>
				{/* <small>Commit Anually</small> */}
			</div>
		</div>
	);
};

PricePlanToggleButton.defaultProps = {
	className: ''
};

export default PricePlanToggleButton;
