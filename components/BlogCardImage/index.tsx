import React from 'react';
import Image from 'next/image';

/* Types */
import { FeaturedImage } from '../../interfaces/Blogs';

/* Utils */
import {
	fallBackImageURL,
	imageLoaderForBlogs
} from '../../utils/Blogs';

interface Props {
    placeholder: string;
    featuredImage: FeaturedImage;
    priority: boolean;
}

const BlogCardImage = (props:Props) => {
    const { placeholder, featuredImage, priority } = props;
	return (
        <Image
            loader={imageLoaderForBlogs}
            placeholder='blur'
            blurDataURL={placeholder}
            src={featuredImage?.node?.sourceUrl || fallBackImageURL}
            alt={featuredImage?.node?.altText}
            layout="fill"
            objectFit="cover"
            priority={priority}
        />
	);
};

export default BlogCardImage;
