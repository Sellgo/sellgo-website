import { gql } from '@apollo/client';

export const GET_ALL_BLOGS = gql`
	query MyQuery {
		posts {
			nodes {
				content
				title
				slug
			}
		}
	}
`;

export const GET_ALL_SLUGS = gql`
	query getAllSlugs {
		blogsCollection {
			items {
				slug
			}
		}
	}
`;

export const GET_BLOG_BY_SLUG = gql`
	query getBlogBySlug($slug: String!) {
		blogsCollection(where: { slug: $slug }) {
			items {
				title
				slug
				keywords
				featuredImage {
					title
					description
					width
					height
					url
				}
				content {
					json
				}
			}
		}
	}
`;

export const GET_PAGE_BY_URI = gql`
	query getPageByURI($uri: String!) {
		pageBy(uri: $uri) {
			title
			seo {
				metaDesc
				metaKeywords
				canonical
				title
			}
			content
		}
	}
`;
