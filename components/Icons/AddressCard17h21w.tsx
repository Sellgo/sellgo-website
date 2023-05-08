import React from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
}

const AddressCard17h21w: React.FC<Props> = (props) => {
	const { width, height, fill } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
		>
			<path
				d="M2.429,32A2.431,2.431,0,0,0,0,34.429V46.571A2.431,2.431,0,0,0,
				2.429,49h17a2.431,2.431,0,0,0,2.429-2.429V34.429A2.431,2.431,0,0,0,
				19.429,32Zm3.036,9.714H7.893a3.035,3.035,0,0,1,3.036,3.036.609.609,
				0,0,1-.607.607H3.036a.609.609,0,0,1-.607-.607A3.035,3.035,0,0,1,5.464,
				41.714ZM4.25,38.071A2.429,2.429,0,1,1,6.679,40.5,2.429,2.429,0,0,1,4.25,
				38.071Zm9.714-1.214h4.857a.607.607,0,0,1,0,1.214H13.964a.607.607,0,0,1,
				0-1.214Zm0,2.429h4.857a.607.607,0,0,1,0,1.214H13.964a.607.607,0,0,1,
				0-1.214Zm0,2.429h4.857a.607.607,0,1,1,0,1.214H13.964a.607.607,0,1,1,
				0-1.214Z"
				transform="translate(511.632 1399)"
				fill={fill}
			/>
		</svg>
	);
};

export default AddressCard17h21w;
