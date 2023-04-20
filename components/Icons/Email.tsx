import React from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
}

const Email: React.FC<Props> = (props) => {
	const { width, height, fill } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
		>
			<path
				d="M1.875,64A1.875,1.875,0,0,0,.75,67.375l8.5,
				6.375a1.254,1.254,0,0,0,1.5,0l8.5-6.375A1.875,
				1.875,0,0,0,18.125,64ZM0,68.375V76.5A2.5,2.5,
				0,0,0,2.5,79h15A2.5,2.5,0,0,0,20,76.5V68.375L11.5,
				74.75a2.5,2.5,0,0,1-3,0Z"
				transform="translate(0 -64)"
				fill={fill}
			/>
		</svg>
	);
};

export default Email;
