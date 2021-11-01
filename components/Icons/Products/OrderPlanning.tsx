import React, { memo } from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const OrderPlanning: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;
	return (
        <svg
            xmlns="http://www.w3.org/2000/svg" 
            width={width} height={height}
            viewBox="0 0 25 18.75"
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
                d="M.781,67.125H21.094a.781.781,0,0,0,.781-.781V64.781A.781.781,0,0,0,21.094,64H.781A.781.781,0,0,0,0,64.781v1.563A.781.781,0,0,0,.781,67.125Zm23.438,4.688H3.906a.781.781,0,0,0-.781.781v1.563a.781.781,0,0,0,.781.781H24.219A.781.781,0,0,0,25,74.156V72.594A.781.781,0,0,0,24.219,71.813Zm-3.125,7.813H.781A.781.781,0,0,0,0,80.406v1.563a.781.781,0,0,0,.781.781H21.094a.781.781,0,0,0,.781-.781V80.406A.781.781,0,0,0,21.094,79.625Z" transform="translate(0 -64)"
            />
		</svg>
	);
};

export default memo(OrderPlanning);
