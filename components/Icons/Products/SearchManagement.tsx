/* eslint-disable max-len */
import React, { memo } from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const SearchManagement: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 26.667"
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
			<path
				d="M17.5,3.333H13.333a3.333,3.333,0,0,0-6.667,0H2.5A2.5,2.5,0,0,0,0,5.833V24.167a2.5,2.5,0,0,0,2.5,2.5h15a2.5,2.5,0,0,0,2.5-2.5V5.833A2.5,2.5,0,0,0,17.5,3.333ZM5,22.083a1.25,1.25,0,1,1,1.25-1.25A1.247,1.247,0,0,1,5,22.083Zm0-5a1.25,1.25,0,1,1,1.25-1.25A1.247,1.247,0,0,1,5,17.083Zm0-5a1.25,1.25,0,1,1,1.25-1.25A1.247,1.247,0,0,1,5,12.083Zm5-10a1.25,1.25,0,1,1-1.25,1.25A1.247,1.247,0,0,1,10,2.083ZM16.667,21.25a.418.418,0,0,1-.417.417H8.75a.418.418,0,0,1-.417-.417v-.833A.418.418,0,0,1,8.75,20h7.5a.418.418,0,0,1,.417.417Zm0-5a.418.418,0,0,1-.417.417H8.75a.418.418,0,0,1-.417-.417v-.833A.418.418,0,0,1,8.75,15h7.5a.418.418,0,0,1,.417.417Zm0-5a.418.418,0,0,1-.417.417H8.75a.418.418,0,0,1-.417-.417v-.833A.418.418,0,0,1,8.75,10h7.5a.418.418,0,0,1,.417.417Z"
				fill={isRainbow ? 'url(#linear-gradient)' : fill}
			/>
		</svg>
	);
};

export default memo(SearchManagement);
