import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

interface Props {
	label: string;
	blogs?: any;
}

const FilteredBlogs: React.FC<Props> = (props) => {
	const { label } = props;

	return (
		<div className={styles.filteredBlogs}>
			<div className={styles.filterBlogLabel}>
				<p>{label}</p>
			</div>

			<Link passHref href="/">
				<a>
					<div className={styles.blogTeaser}>
						<h3>Lorem Ipsum</h3>
						<p>
							<strong>Lorem | 10 Min Read</strong>
						</p>
					</div>
				</a>
			</Link>

			<Link passHref href="/">
				<a>
					<div className={styles.blogTeaser}>
						<h3>Lorem Ipsum</h3>
						<p>
							<strong>Lorem | 10 Min Read</strong>
						</p>
					</div>
				</a>
			</Link>

			<Link passHref href="/">
				<a>
					<div className={styles.blogTeaser}>
						<h3>Lorem Ipsum</h3>
						<p>
							<strong>Lorem | 10 Min Read</strong>
						</p>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default FilteredBlogs;
