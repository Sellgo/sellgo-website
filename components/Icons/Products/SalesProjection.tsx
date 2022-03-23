import React, { memo } from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const SalesProjection: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 25 21.875"
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
			<path
				fill={isRainbow ? 'url(#linear-gradient)' : fill}
				// eslint-disable-next-line max-len
				d="M3.125,49.969a.782.782,0,0,0,.781.781H23.438a1.563,1.563,0,0,1,0,3.125H3.906A3.906,3.906,0,0,1,0,49.969V33.563a1.563,1.563,0,0,1,3.125,0Zm18.311-5.908-1.582-1.582-3.906,3.906a1.559,1.559,0,0,1-2.207,0l-3.584-3.579-2.8,2.8A1.561,1.561,0,0,1,5.146,43.4L9.053,39.49a1.559,1.559,0,0,1,2.207,0l3.584,3.579,2.8-2.8-1.626-1.626a1.17,1.17,0,0,1,.869-1.958h5.376a1.169,1.169,0,0,1,1.172,1.172v5.376a1.173,1.173,0,0,1-2,.825Z" transform="translate(0 -32)"
			/>
		</svg>
	);
};

SalesProjection.defaultProps = {
	isRainbow: false
};

export default memo(SalesProjection);
