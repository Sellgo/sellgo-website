import React from 'react';
import Image from 'next/image';

/* Utils */
import { toBase64 } from '../../utils/Blogs';
import { shimmerPlaceholder } from '../../constants'

const ShimmeredImage: typeof Image = (props:any) => {
	return (
		<Image
            {...props}
			placeholder="blur"
			blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmerPlaceholder('#fff', '#fcc99e', '#fefeff'))}`}
		/>
	);
};

export default ShimmeredImage;
