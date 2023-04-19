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
				d="M8.5,9.714a4.857,4.857,0,1,1,4.857-4.857A4.857,4.857,0,0,1,
				8.5,9.714ZM7.935,13.63l-.706-1.176a.606.606,0,0,
				1,.52-.918h1.5a.607.607,0,0,1,.52.918L9.062,13.63l1.267,
				4.7L11.7,12.758a.562.562,0,0,1,.679-.429A6.122,6.122,0,0,
				1,17,18.264a1.165,1.165,0,0,1-1.165,1.165h-5a.6.6,0,0,
				1-.22-.042l.011.042H6.375l.011-.042a.613.613,0,0,
				1-.22.042h-5A1.168,1.168,0,0,1,0,18.264a6.12,6.12,0,0,1,
				4.626-5.935.567.567,0,0,1,.679.429l1.366,5.574,1.267-4.7Z"
				fill={fill}
			/>
		</svg>
	);
};

export default Phone;
