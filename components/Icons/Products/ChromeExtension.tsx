import React, { memo } from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const ChromeExtension: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 25 24.999"
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
				id="chrome-brands_1_"
				data-name="chrome-brands (1)"
				// eslint-disable-next-line max-len
				d="M6.628,18.554,2.777,12.636a12.5,12.5,0,0,1,20.877,2.223l-10.348-.544A6.57,6.57,0,0,0,6.628,18.554Zm1.658,1.941A4.214,4.214,0,1,0,12.5,16.281,4.212,4.212,0,0,0,8.286,20.494ZM24.159,16l-7.041.363a6.608,6.608,0,0,1,.333,7.924l-5.65,8.69A12.5,12.5,0,0,0,24.159,16Zm-17.42,6.9-4.7-9.249A12.506,12.506,0,0,0,10.56,32.838l3.211-6.29a6.6,6.6,0,0,1-7.031-3.654Z"
				transform="translate(0 -7.994)"
				fill={isRainbow ? 'url(#linear-gradient)' : fill}
			/>
		</svg>
	);
};

ChromeExtension.defaultProps = {
	isRainbow: false
};

export default memo(ChromeExtension);
