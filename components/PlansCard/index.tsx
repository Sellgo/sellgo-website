import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {
	name: string;
	startingPrice: number;
}

const PlansCard: React.FC<Props> = (props) => {
	const { name, startingPrice } = props;

	return (
		<div className={styles.plansCard}>
			<h3>{name}</h3>

			{startingPrice === 0 ? (
				<>
					<small>100% free</small>
					<p>No credit card required</p>
				</>
			) : (
				<p>{`Starting at $${startingPrice}/month`}</p>
			)}

			<button>
				Popular Features <span>&#43;</span>
			</button>
		</div>
	);
};

export default PlansCard;
