import React from 'react';
import Image from 'next/image';

const BlogCardImage: typeof Image = (props:any) => {
	return (
        <Image
            placeholder='blur'
            {... props}
        />
	);
};

export default BlogCardImage;
