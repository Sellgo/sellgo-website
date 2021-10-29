import React from 'react';
import Image from 'next/image';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const SellerDatabase: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;
	if (isRainbow) {
		return <Image src="/products-sellerDatabase.svg" width={width} height={height} />;
	}
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 640 512"
			width={width}
			height={height}
		>
			<g id="prefix__Layer_2" data-name="Layer 2">
				<g id="prefix__Layer_1-2" data-name="Layer 1" fill={fill}>
					<path
						d="M608,288H464V208.67c0-17.44,13.67-32.18,31.1-32.66A32,32,0,0,
					1,528,208h0a16,16,0,0,0,16,16h17a15,15,0,0,0,
					15-15h0c0-43.28-34-79.51-77.26-80.95A80,80,0,0,0,416,208v80H384a32,32,0,
					0,0-32,32V480a32,32,0,0,0,32,32H608a32,32,0,0,0,32-32V320A32,32,0,0,0,608,
					288ZM496,432a32,32,0,1,1,32-32A32,32,0,0,1,496,432Z"
						opacity="0.4"
					/>
					<path
						d="M224,256A128,128,0,1,0,96,128,128,128,0,0,0,224,256Zm96,
					64a63.07,63.07,0,0,1,8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5H296.9a174.1,174.1,
					0,0,1-145.8,0H134.4A134.424,134.424,0,0,0,0,422.37V464a48,48,0,0,0,48,
					48H328.9a63.58,63.58,0,0,1-8.9-32Z"
					/>
				</g>
			</g>
		</svg>
	);
};

export default SellerDatabase;
