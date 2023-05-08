import React from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
}

const Link17h21w: React.FC<Props> = (props) => {
	const { width, height, fill } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox={`0 0 100 100`}
		>
			<path
				d="M38.138,29.768A5.227,5.227,0,0,0,31.4,21.819l-.058.04a1.156,1.156,
				0,1,0,1.345,1.88l.058-.04A2.913,2.913,0,0,1,36.5,28.13l-4.056,
				4.063a2.913,2.913,0,0,1-4.432-3.752l.04-.058a1.156,1.156,0,1,
				0-1.88-1.345l-.04.058a5.224,5.224,0,0,0,7.945,6.73Zm-18.782-.846a5.227,5.227,
				0,0,0,6.734,7.949l.058-.04a1.156,1.156,0,0,0-1.345-1.88l-.058.04a2.915,
				2.915,0,0,1-3.752-4.435L25.05,26.5a2.914,2.914,0,0,1,4.432,
				3.756l-.04.058a1.156,1.156,0,1,0,1.88,1.345l.04-.058a5.225,5.225,0,0,
				0-7.945-6.734Z"
				transform="translate(-17.825 -20.845)"
				fill={fill}
			/>
		</svg>
	);
};

export default Link17h21w;
