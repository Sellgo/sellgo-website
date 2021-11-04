import React, { memo } from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const SellerMap: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 25 25"
			width={width}
			height={height}
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
				// eslint-disable-next-line max-len
				d="M12.5,8A12.5,12.5,0,1,0,25,20.5,12.5,12.5,0,0,0,12.5,8Zm4.148,18.024-.57.569a1.2,1.2,0,0,0-.311.54c-.076.285-.138.574-.24.85l-.877,2.361a10.073,10.073,0,0,1-2.15.236V29.2a3.774,3.774,0,0,0-1.141-2.583,1.613,1.613,0,0,1-.472-1.141V23.863a1.608,1.608,0,0,0-.83-1.41c-.724-.4-1.755-.961-2.46-1.316a7.266,7.266,0,0,1-1.6-1.1l-.04-.036a5.786,5.786,0,0,1-.91-1.045c-.473-.694-1.243-1.836-1.743-2.578a10.135,10.135,0,0,1,5.2-5.136l1.21.605a.806.806,0,0,0,1.167-.721v-.57a10.073,10.073,0,0,1,1.229-.122l1.426,1.426a.806.806,0,0,1,0,1.141l-.236.236-.521.521a.4.4,0,0,0,0,.57l.236.236a.4.4,0,0,1,0,.57l-.4.4a.4.4,0,0,1-.285.118H11.88a.4.4,0,0,0-.281.114l-.5.486a.4.4,0,0,0-.08.469L11.8,18.3a.4.4,0,0,1-.36.584H11.16a.4.4,0,0,1-.264-.1l-.468-.406a.807.807,0,0,0-.784-.156l-1.571.524a.6.6,0,0,0-.079,1.11l.558.279a3.413,3.413,0,0,0,1.528.361c.53,0,1.139,1.376,1.613,1.613h3.364a1.614,1.614,0,0,1,1.141.472l.69.69a1.537,1.537,0,0,1,.45,1.087,2.346,2.346,0,0,1-.692,1.662Zm4.37-4.6a1.21,1.21,0,0,1-.713-.5L19.4,19.558a1.208,1.208,0,0,1,0-1.342l.987-1.481a1.208,1.208,0,0,1,.466-.411L21.506,16a9.765,9.765,0,0,1,.983,5.79Z"
				transform="translate(0 -8)"
				fill={isRainbow ? 'url(#linear-gradient)' : fill}
			/>
		</svg>
	);
};

SellerMap.defaultProps = {
	isRainbow: false
};

export default memo(SellerMap);
