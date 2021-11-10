import React, { memo } from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const ProductTracker: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512.06"
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
						d="M506.11 203.59a24 24 0 00-47 9.81l.12.53c4.71 21.41 4.91 37.41 4.7 61.6a24 24 
						0 0023.8 24.2h.2a24 24 0 0024-23.8c.18-22.18.4-44.11-5.83-72.34zM256.12 246a24 24 0 00-24 
						24 731.08 731.08 0 01-27.7 211.55c-2.73 9.72 2.15 30.49 23.12 30.49a24 24 0 
						0023.09-17.52A774.14 	774.14 0 00280.11 270a24 24 0 00-24-24zM144.57 144.47a24 24 
						0 00-33.76 3.53 173.43 173.43 0 00-38.75 112A580.79 580.79 0 0163 372a24 24 0 0019.36 
						27.87c20.11 3.5 27.07-14.81 27.89-19.36a629.41 629.41 0 009.86-121.33 123.55 123.55 0 0128-81 
						24 24 0 00-3.54-33.71z"
						style={{
							isolation: 'isolate'
						}}
						opacity={0.4}
					/>
					<path
						d="M466 112.87A266 266 0 00252.81 0C183-.8 118.47 24.93 70.46 73A238.52 
					238.52 0 00.14 246.67L0 268.14a24 24 0 0023.28 24.69H24a24 24 0 0024-23.3l.16-23.64a190.77
					 190.77 0 0156.28-139C143.19 68.11 195.77 47.24 252.11 48a217.85 217.85 0 01174.62 92.39 24 
					 24 0 1040.21-26.21c-.29-.44-.6-.88-.94-1.31zM254 82.14a178.67 178.67 0 00-45.78 5 24 24 0 
					 1011.06 46.72 143.56 143.56 0 0134-3.69c75.43 1.13 137.73 61.5 138.88 134.58a880.34 880.34
					  0 01-5.58 113.63A24 24 0 00407.7 405c16.72 2 25.51-11.88 26.58-21.11A929.74 929.74 0 00440.2 
						264C438.64 165.22 355.13 83.64 254 82.14zm1.22 82.11c-61.26-.07-104 47.07-103.16 101.09a656.15 
						656.15 0 01-13.36 142.55 24 24 0 1046.85 10.43c.06-.24.11-.47.15-.71a703.74 703.74 0 
						0014.37-153c-.41-26 19.92-52.49 54.45-52.34 31.31.47 57.15 25.34 57.62 55.47a804.39 804.39 
						0 01-10.61 143.55 24 24 0 0019.76 27.58c20 3.33 26.81-15.1 27.58-19.77a853.14 853.14 0 
						0011.3-152.1c-.88-55.85-47.94-101.93-104.91-102.77z"
					/>
				</g>
			</g>
		</svg>
	);
};

ProductTracker.defaultProps = {
	isRainbow: false
};

export default memo(ProductTracker);
