import React from 'react';
import Image from 'next/image';

interface Props {
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const KeywordFinder: React.FC<Props> = (props) => {
	const { width, height, fill, isRainbow } = props;
	if (isRainbow) {
		return <Image src="/products-keywordFinder.svg" width={width} height={height} />;
	}
	return (
        <svg
            xmlns="http://www.w3.org/2000/svg" 
            width={width} height={height}
            viewBox="0 0 25 22.226"
        >
            <path
                fill={fill}
                // eslint-disable-next-line max-len
                d="M24.875,12.144l-1.227-1.227a.521.521,0,0,0-.738,0l-7.6,7.6-3.441-3.5a.521.521,0,0,0-.738,0L9.9,16.239a.521.521,0,0,0,0,.738l5.035,5.1a.521.521,0,0,0,.738,0l9.2-9.189a.521.521,0,0,0,0-.74ZM6.334.477A.694.694,0,0,0,5.675,0H3.951a.694.694,0,0,0-.659.477L.063,10.2a.694.694,0,0,0,.658.911h.732a.694.694,0,0,0,.659-.477l.534-1.606H7.13l.534,1.606a.694.694,0,0,0,.659.477h.733a.694.694,0,0,0,.659-.911ZM3.339,6.944,4.888,2.554,6.346,6.944Zm8.841,4.167h3.993a3.3,3.3,0,0,0,2-5.917A3.3,3.3,0,0,0,15.479,0h-3.3a1.042,1.042,0,0,0-1.042,1.042V10.07A1.042,1.042,0,0,0,12.18,11.111Zm1.042-9.028h2.257a1.215,1.215,0,1,1,0,2.431H13.222Zm0,4.514h2.951a1.215,1.215,0,1,1,0,2.431H13.222Z" transform="translate(-0.029)"
            />
		</svg>
	);
};

export default KeywordFinder;
