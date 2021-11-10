import React, { memo } from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const LeadsTracker: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			width={width}
			height={height}
		>
			{isRainbow && (
				<defs>
					<linearGradient
						id="linear-gradient"
						x1="0.5"
						x2="0.5"
						y2="1"
						gradientUnits="objectBoundingBox"
					>
						<stop offset="0" stopColor="#ff61df" />
						<stop offset="1" stopColor="#04f1ff" />
					</linearGradient>
				</defs>
			)}
			<g data-name="Layer 2">
				<g
					data-name="Layer 1"
					fill={isRainbow ? 'url(#linear-gradient)' : fill}
				>
					<path
						d="M304 128H144a32 32 0 0132-32h96a32 32 0 0132 32z"
						style={{
							isolation: 'isolate'
						}}
						opacity={0.4}
					/>
					<path
						d="M325.4 289.2L224 390.6 122.6 289.2C54 295.3 0 352.2 0 422.4V464a48 48 0 
					0048 48h352a48 48 0 0048-48v-41.6c0-70.2-54-127.1-122.6-133.2zM32 192a95.48 95.48
					 0 0069.2-29.7c15.1 53.9 64 93.7 122.8 93.7a128 128 0 000-256c-50.4 0-93.6 
					 29.4-114.5 71.8A95.54 95.54 0 0032 32a95.75 95.75 0 0043.1 80A95.75 95.75 0 
					 0032 192zm144-96h96a32 32 0 0132 32H144a32 32 0 0132-32z"
					/>
				</g>
			</g>
		</svg>
	);
};

LeadsTracker.defaultProps = {
	isRainbow: false
};

export default memo(LeadsTracker);
