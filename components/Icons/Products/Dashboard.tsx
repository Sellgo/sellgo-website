import React, { memo } from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const Dashboard: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 25 25"
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
				fill={isRainbow ? 'url(#linear-gradient)' : fill}
				// eslint-disable-next-line max-len
				d="M9.373,4.688h6.25l2.314-3.473A.781.781,0,0,0,17.288,0H7.71a.781.781,0,0,0-.65,1.215Zm6.25,1.563H9.373C-.509,11.885,0,19.367,0,20.313,0,22.9,2.4,25,5.358,25H19.639c2.958,0,5.355-2.1,5.355-4.688C24.995,19.385,25.451,11.854,15.623,6.25ZM13.349,19.824v.847a.424.424,0,0,1-.425.421h-.85a.424.424,0,0,1-.425-.421v-.855a3.085,3.085,0,0,1-1.668-.594.417.417,0,0,1-.032-.635L10.575,18a.436.436,0,0,1,.537-.037,1.3,1.3,0,0,0,.68.2h1.493a.663.663,0,0,0,.627-.694.679.679,0,0,0-.468-.667l-2.393-.71A2.382,2.382,0,0,1,9.373,13.8a2.356,2.356,0,0,1,2.269-2.372v-.854a.424.424,0,0,1,.427-.421h.85a.424.424,0,0,1,.425.421v.857a3.082,3.082,0,0,1,1.668.594.417.417,0,0,1,.032.635l-.622.6a.436.436,0,0,1-.537.037,1.308,1.308,0,0,0-.68-.2H11.712a.663.663,0,0,0-.627.694.68.68,0,0,0,.467.668l2.393.71a2.38,2.38,0,0,1-.6,4.652Z" transform="translate(0.002)"
			/>
		</svg>
	);
};

Dashboard.defaultProps = {
	isRainbow: false
};

export default memo(Dashboard);
