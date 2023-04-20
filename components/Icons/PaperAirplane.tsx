import React from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
}

const PaperAirplane: React.FC<Props> = (props) => {
	const { width, height, fill } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox={`0 0 100 100`}
		>
			<path
				d="M16.529.182a1.062,1.062,0,0,1,.448,1.036L14.852,
				15.031a1.063,1.063,0,0,1-1.461.817L9.42,14.2l-2.274,
				2.46A1.062,1.062,0,0,1,5.3,15.934V13.158a.52.52,0,0,
				1,.139-.355L11.007,6.73a.53.53,0,0,0-.744-.754l-6.754,
				6L.578,10.509a1.058,1.058,0,0,1-.588-.92,1.07,1.07,0,
				0,1,.535-.953L15.4.136a1.066,1.066,0,0,1,1.129.046Z"
				transform="translate(0.011 0.004)"
				fill={fill}
			/>
		</svg>
	);
};

export default PaperAirplane;
