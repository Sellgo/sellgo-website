import React from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
}

const Calender: React.FC<Props> = (props) => {
	const { width, height, fill } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox={`0 0 ${width}${height}`}
		>
			<path
				d="M13.214 25.714H9.643a1.075 1.075 0 01-1.071-1.071v-3.572A1.075 1.075 0 019.643 
				20h3.571a1.075 1.075 0 011.071 1.071v3.571a1.075 1.075 0 01-1.071 1.072zm9.643-1.071v-3.572A1.075 
				1.075 0 0021.786 20h-3.572a1.075 1.075 0 00-1.071 1.071v3.571a1.075 1.075 0 001.071 1.071h3.571a1.075 
				1.075 0 001.072-1.07zm8.571 0v-3.572A1.075 1.075 0 0030.357 20h-3.571a1.075 1.075 0 00-1.071 
				1.071v3.571a1.075 1.075 0 001.071 1.071h3.571a1.075 1.075 0 001.072-1.07zm-8.571 8.571v-3.571a1.075 
				1.075 0 00-1.071-1.071h-3.572a1.075 1.075 0 00-1.071 1.071v3.571a1.075 1.075 0 001.071 1.071h3.571a1.075
				 1.075 0 001.072-1.071zm-8.571 0v-3.571a1.075 1.075 0 00-1.071-1.071H9.643a1.075 1.075 0 00-1.071
				  1.071v3.571a1.075 1.075 0 001.071 1.071h3.571a1.075 1.075 0 001.072-1.071zm17.143 0v-3.571a1.075
					 1.075 0 00-1.071-1.071h-3.572a1.075 1.075 0 00-1.071 1.071v3.571a1.075 1.075 
					 0 001.071 1.071h3.571a1.075 1.075 0 001.072-1.071zM40 10v31.429a4.287 4.287 0 01-4.286 
					 4.286H4.286A4.287 4.287 0 010 41.429V10a4.287 4.287 0 014.286-4.286h4.285V1.071A1.075 
					 1.075 0 019.643 0h3.571a1.075 1.075 0 011.071 1.071v4.643h11.429V1.071A1.075 1.075 0
					  0126.786 0h3.571a1.075 1.075 0 011.071 1.071v4.643h4.286A4.287 4.287 0 0140 10zm-4.286 
						30.893V14.286H4.286v26.607a.537.537 0 00.536.536h30.357a.537.537 0 00.535-.536z"
				fill={fill}
			/>
		</svg>
	);
};

export default Calender;
