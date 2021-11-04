import React, { memo } from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const SeasonalAdjustor: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 25 27.468"
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
				d="M42.356,18.868C42.49,18.734,48,13.911,48,13.911l-.939-.4c-.536-.263-.4-.617-.268-.933.129-.408,1.078-3.611,1.078-3.611s-2.559.536-3.1.671c-.4.129-.536-.134-.671-.4s-.8-1.738-.8-1.738-2.822,3.214-2.956,3.342c-.536.4-1.078,0-.944-.536,0-.536,1.481-6.953,1.481-6.953s-1.615.933-2.151,1.2c-.4.268-.676.268-.944-.268C37.512,3.879,35.495,0,35.495,0s-2.012,3.879-2.28,4.281c-.268.536-.536.536-.944.268-.536-.268-2.151-1.2-2.151-1.2S31.6,9.764,31.6,10.3c.134.536-.4.939-.944.536C30.521,10.7,27.7,7.495,27.7,7.495s-.671,1.465-.8,1.733-.268.531-.671.4c-.542-.134-3.1-.671-3.1-.671s.944,3.2,1.078,3.611c.129.322.268.671-.268.933L23,13.911s5.5,4.823,5.644,4.957c.274.268.536.4.274,1.207s-.542,1.883-.542,1.883,5.107-1.078,5.649-1.212c.467-.048.982.134.982.671s-.311,6.052-.311,6.052H36.3s-.311-5.51-.311-6.052.51-.719.987-.671c.536.134,5.644,1.212,5.644,1.212s-.268-1.078-.536-1.883S42.088,19.136,42.356,18.868Z"
				transform="translate(-23)"
			/>
		</svg>
	);
};

SeasonalAdjustor.defaultProps = {
	isRainbow: false
};

export default memo(SeasonalAdjustor);
