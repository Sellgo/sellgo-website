import React from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
}

const Seedling50h50v: React.FC<Props> = (props) => {
	const { width, height, fill } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
		>
			<path
				d="M50,3.125A21.873,21.873,0,0,1,31.035,24.8a24.916,
				24.916,0,0,0-6.377-13.6A21.864,21.864,0,0,1,43.75,
				0h3.125A3.122,3.122,0,0,1,50,3.125ZM0,9.375A3.122,
				3.122,0,0,1,3.125,6.25H6.25A21.876,21.876,0,0,1,28.125,
				28.125v18.75a3.125,3.125,0,0,1-6.25,0V31.25A21.876,
				21.876,0,0,1,0,9.375Z"
				fill={fill}
			/>
		</svg>
	);
};

export default Seedling50h50v;
