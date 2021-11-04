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
			viewBox="0 0 25 22.222"
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
				d="M20.833,4.167H4.167v6.944H8.548a.347.347,0,0,1,.31.192l.864,1.727,2.157-4.313a.694.694,0,0,1,1.242,0l1.2,2.394h3.043a.694.694,0,1,1,0,1.389h-3.9l-.96-1.919-2.157,4.313a.694.694,0,0,1-1.242,0L7.9,12.5H4.167v5.556H20.833ZM22.917,0H2.083A2.083,2.083,0,0,0,0,2.083V20.139a2.083,2.083,0,0,0,2.083,2.083H22.917A2.083,2.083,0,0,0,25,20.139V2.083A2.083,2.083,0,0,0,22.917,0Zm-.694,19.444H2.778V2.778H22.222Z"
			/>
		</svg>
	);
};

Dashboard.defaultProps = {
	isRainbow: false
};

export default memo(Dashboard);
