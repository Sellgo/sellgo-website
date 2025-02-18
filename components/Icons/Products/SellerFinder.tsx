import React, { memo } from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const SellerFinder: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 640.76 512"
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
						d="M256,448a32,32,0,0,0,32-32V304.27L205,448ZM368,64H96a95.9,95.9,
						0,1,0-1.7,191.8L6.44,408A48,48,0,0,0,24,473.53l55.4,32A48,48,0,0,0,
						145,488L279,256h89.09a16,16,0,0,0,16-16V80a16,16,0,0,0-16.03-16Z"
					/>
					<path
						d="M632,448H456a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8H632a8,8,0,0,0,8-8V456A8,
						8,0,0,0,632,448Zm0-96H456a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H632a8,8,0,0,
						0,8-8V360A8,8,0,0,0,632,352Zm0-64H456a8,8,0,0,0-8,8v16a8,8,0,0,0,8,
						8H632a8,8,0,0,0,8-8V296A8,8,0,0,0,632,288Zm0-224H456a8,8,0,0,0-8,8v48a8,
						8,0,0,0,8,8H632a8,8,0,0,0,8-8V72A8,8,0,0,0,632,64Zm0,96H456a8,8,0,0,0-8,
						8v48a8,8,0,0,0,8,8H632a8,8,0,0,0,8-8V168A8,8,0,0,0,632,160ZM632,0H456a8,
						8,0,0,0-8,8V24a8,8,0,0,0,8,8H632a8,8,0,0,0,8-8V8A8,8,0,0,0,632,0Z"
					/>
				</g>
			</g>
		</svg>
	);
};

SellerFinder.defaultProps = {
	isRainbow: false
};

export default memo(SellerFinder);
