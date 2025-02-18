import React from 'react';
import Image from 'next/image';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const SalesEstimator: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;
	if (isRainbow) {
		return (
			<Image
				src="/resources-salesEstimator.svg"
				width={width}
				height={height}
			/>
		);
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 18.751 25"
			width={width}
			height={height}
		>
			<g data-name="Layer 2">
				<path
					// eslint-disable-next-line max-len
					d="M82.537,6.805A2.086,2.086,0,0,0,80.921,5.79a1.85,1.85,0,0,0-.016-1.828,2.094,2.094,0,0,0-2.224-.985A1.97,1.97,0,0,0,77.265,1.15a2.117,2.117,0,0,0-1.911.313.207.207,0,0,0-.033-.094,2.084,2.084,0,0,0-2.6-1.247,2.034,2.034,0,0,0-1.334,1.328,2.119,2.119,0,0,0-1.9-.3A1.97,1.97,0,0,0,68.071,2.98a2.092,2.092,0,0,0-2.225.982,1.816,1.816,0,0,0-.016,1.828,2.06,2.06,0,0,0-1.614,1.015,1.754,1.754,0,0,0-.209,1.031H82.744A1.75,1.75,0,0,0,82.537,6.805ZM78.766,9.4,77.4,21.9H75.2L76.256,9.4H70.5L71.55,21.9h-2.2L67.983,9.4H64l2.144,14.3a1.563,1.563,0,0,0,1.545,1.331H79.061a1.563,1.563,0,0,0,1.546-1.331L82.751,9.4Z"
					transform="translate(-64 -0.025)"
					fill={fill}
					data-name="Layer 1"
				/>
			</g>
		</svg>
	);
};

SalesEstimator.defaultProps = {
	isRainbow: false
};

export default SalesEstimator;
