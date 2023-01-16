import React from 'react';
import styles from './index.module.scss';

interface Props {
	trigger: React.ReactNode;
	text: string;
	className?: string;
}

const Tooltip: React.FC<Props> = (props) => {
	const { trigger, text, className = '' } = props;

	return (
		<div className={`${styles.tooltip} ${className || ''}`}>
			{trigger}
			<span className={styles.tooltiptext}>{text}</span>
		</div>
	);
};

Tooltip.defaultProps = {
	className: null
};

export default Tooltip;
