import React from 'react';
import Image from 'next/image';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const ProfitFinder: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;
	if (isRainbow) {
		return <Image src="/products-profitFinder.svg" width={width} height={height} />;
	}
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 511.96 512.05"
			width={width}
			height={height}
		>
			<defs>
				<linearGradient id="MyGradient">
					<stop offset="5%" stopColor="#FF61DF" />
					<stop offset="95%" stopColor="#04F1FF" />
				</linearGradient>
			</defs>
			<g data-name="Layer 2">
				<g data-name="Layer 1" fill={fill}>
					<path
						d="M208 80a128 128 0 11-90.51 37.49A128 128 0 01208 80m0-80C93.12 0 0 93.12 0 208s93.12 
						208 208 208 208-93.12 208-208S322.88 0 208 0z"
						style={{
							isolation: 'isolate'
						}}
					/>
					<path
						d="M235.13 199.42l-45-13.5c-5.16-1.55-8.77-6.78-8.77-12.73 0-7.27 5.3-13.19
					 11.8-13.19h28.11a24 
					24 0 0112.82 3.72 8.21 8.21 0 0010.13-.73L256 151.78a8 8 0 00.34-11.31 7.17 7.17 0 00-.91-.83A57.28 
					57.28 0 00224 128.29V112a8 8 0 00-8-8h-16a8 8 0 00-8 8v16.12c-23.63.63-42.68 20.55-42.68 
					45.07 0 20 13 37.81 31.58 43.39l45 13.5c5.16 1.55 8.77 6.78 8.77 12.73 0 7.27-5.3 
					13.19-11.8 13.19H194.8a24.07 24.07 0 01-12.8-3.72 8.21 8.21 0 00-10.13.73l-11.77 
					11.21a8 8 0 00-.34 11.31 7.17 7.17 0 00.91.83A57.2 57.2 0 00192 287.71V304a8 8 0 
					008 8h16a8 8 0 008-8v-16.12c23.63-.63 42.68-20.54 42.68-45.07 0-20-13-37.81-31.55-43.39zM505
					 442.7L405.3 343a24 24 0 00-17-7H372l-36 36v16.3a24 24 0 007 17l99.7 99.7a23.9 23.9
					  0 0033.8.1l.1-.1 28.3-28.3a24.11 24.11 0 00.1-34z"
					/>
				</g>
			</g>
		</svg>
	);
};

export default ProfitFinder;
