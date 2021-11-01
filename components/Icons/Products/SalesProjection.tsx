import React, { memo } from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const SalesProjection: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;

	return (
        <svg
            xmlns="http://www.w3.org/2000/svg" 
            width={width} height={height}
            viewBox="0 0 25 21.875"
        >
			{isRainbow && <defs>
				<linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
				<stop offset="0" stopColor="#ff61df"/>
				<stop offset="1" stopColor="#04f1ff"/>
				</linearGradient>
			</defs>}
            <path
				fill={isRainbow ? "url(#linear-gradient)" : fill}
                // eslint-disable-next-line max-len
                d="M3.125,35.125H0A10.938,10.938,0,0,0,10.938,46.062v7.031a.784.784,0,0,0,.781.781h1.563a.784.784,0,0,0,.781-.781V46.062A10.938,10.938,0,0,0,3.125,35.125ZM21.875,32a10.928,10.928,0,0,0-9.556,5.625A12.518,12.518,0,0,1,15.2,42.879,10.941,10.941,0,0,0,25,32Z" transform="translate(0 -32)"
            />
		</svg>
	);
};

export default memo(SalesProjection);
