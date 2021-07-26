import React from 'react';
import Image from 'next/image';

interface Props {
}

const BlogCardImage: typeof Image = (props:any) => {
	return (
        <Image
            {... props}
        />
	);
};

export default BlogCardImage;
