import React, { memo } from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const KeywordDatabase: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 20 20.742"
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
				d="M35.975,39.914l-2.827-7.408a.741.741,0,0,0-.7-.507H30.689a.737.737,0,0,0-.7.507l-2.827,7.408a.741.741,0,0,0,.7.975h.777a.738.738,0,0,0,.7-.507l.487-1.345h3.486l.487,1.345a.738.738,0,0,0,.7.507h.777a.741.741,0,0,0,.7-.975Zm-5.345-3.1.938-2.593.938,2.593Zm3.9,7.037H28.606a.741.741,0,0,0-.741.741v.741a.741.741,0,0,0,.741.741h3.57l-3.894,4.014a1.482,1.482,0,0,0-.417,1.033V52a.741.741,0,0,0,.741.741h5.926A.741.741,0,0,0,35.273,52V51.26a.741.741,0,0,0-.741-.741h-3.57L34.856,46.5a1.482,1.482,0,0,0,.417-1.032v-.88A.741.741,0,0,0,34.532,43.852ZM16.568,36.445h2.037V52a.741.741,0,0,0,.741.741h.741A.741.741,0,0,0,20.828,52V36.445h2.037a.556.556,0,0,0,.4-.937l-3.148-3.333a.556.556,0,0,0-.807,0l-3.148,3.333a.556.556,0,0,0,.4.937Z"
				transform="translate(-16.013 -32)"
			/>
		</svg>
	);
};

export default memo(KeywordDatabase);
