import React from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
}

const Phone: React.FC<Props> = (props) => {
	const { width, height, fill } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
		>
			<path
				d="M5.475.795A1.324,1.324,0,0,0,3.9.025L.979.822A1.332,
				1.332,0,0,0,0,2.1,14.875,14.875,0,0,0,14.874,16.977,
				1.332,1.332,0,0,0,16.156,16l.8-2.922a1.324,1.324,0,0,
				0-.77-1.574L13,10.174a1.324,1.324,0,0,0-1.537.385L10.117,
				12.2A11.221,11.221,0,0,1,4.781,6.861L6.418,5.523A1.325,1.325,
				0,0,0,6.8,3.986L5.475.8Z"
				transform="translate(0 0.022)"
				fill={fill}
			/>
		</svg>
	);
};

export default Phone;
