import React from 'react';
import Image from 'next/image';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const ProductRankTracker: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;
	if (isRainbow) {
		return <Image src="/products-productRankTracker.svg" width={width} height={height} />;
	}
	return (
        <svg
            xmlns="http://www.w3.org/2000/svg" 
            width={width} height={height}
            viewBox="0 0 25 22.222"
        >
            <path
                fill={fill}
                // eslint-disable-next-line max-len
                d="M22.162,4.02a2.08,2.08,0,1,0-1.329-1.937,2.112,2.112,0,0,0,.031.308L16.726,5.7a2.018,2.018,0,0,0-1.509,0L11.08,2.391a2.059,2.059,0,0,0,.031-.308,2.083,2.083,0,0,0-4.167,0,2.078,2.078,0,0,0,.077.533L2.616,7.022a2.078,2.078,0,0,0-.533-.077,2.119,2.119,0,1,0,2.006,1.55L8.495,4.089A1.958,1.958,0,0,0,9.782,4.02l4.138,3.31a2.059,2.059,0,0,0-.031.308,2.083,2.083,0,0,0,4.167,0,2.112,2.112,0,0,0-.031-.308L22.162,4.02Zm-4.8,9.868H14.583a.694.694,0,0,0-.694.694v6.944a.694.694,0,0,0,.694.694h2.778a.694.694,0,0,0,.694-.694V14.583A.694.694,0,0,0,17.361,13.889Zm6.944-5.556H21.528a.694.694,0,0,0-.694.694v12.5a.694.694,0,0,0,.694.694h2.778A.694.694,0,0,0,25,21.528V9.028A.694.694,0,0,0,24.306,8.333Zm-13.889,0H7.639a.694.694,0,0,0-.694.694v12.5a.694.694,0,0,0,.694.694h2.778a.694.694,0,0,0,.694-.694V9.028A.694.694,0,0,0,10.417,8.333ZM3.472,15.278H.694A.694.694,0,0,0,0,15.972v5.556a.694.694,0,0,0,.694.694H3.472a.694.694,0,0,0,.694-.694V15.972A.694.694,0,0,0,3.472,15.278Z" 
            />
		</svg>
	);
};

export default ProductRankTracker;
