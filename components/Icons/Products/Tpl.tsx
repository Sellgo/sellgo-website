import React, { memo } from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const Tpl: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 25 20"
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
				d="M8.125,3.75a.627.627,0,0,1,.625.625V6.25h.625a.625.625,0,0,1,0,1.25H8.125A.627.627,0,0,1,7.5,6.875v-2.5A.627.627,0,0,1,8.125,3.75ZM0,1.875A1.875,1.875,0,0,1,1.875,0h12.5A1.875,1.875,0,0,1,16.25,1.875V3.75h1.98A2.563,2.563,0,0,1,20,4.48L23.02,7.5a2.5,2.5,0,0,1,.73,1.77v4.48a1.25,1.25,0,0,1,0,2.5H22.5a3.75,3.75,0,0,1-7.5,0H10a3.75,3.75,0,0,1-7.5,0H1.875A1.875,1.875,0,0,1,0,14.375ZM21.25,10V9.27L18.23,6.25H16.25V10Zm-15,8.125A1.875,1.875,0,1,0,4.375,16.25,1.875,1.875,0,0,0,6.25,18.125Zm12.5-3.75a1.875,1.875,0,1,0,1.875,1.875A1.875,1.875,0,0,0,18.75,14.375ZM8.125,2.5A4.375,4.375,0,1,0,12.5,6.875,4.373,4.373,0,0,0,8.125,2.5Z"
			/>
		</svg>
	);
};

Tpl.defaultProps = {
	isRainbow: false
};

export default memo(Tpl);
