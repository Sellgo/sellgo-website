import { gql } from '@apollo/client';

export const GET_SHOW_CASE_BLOGS = gql`
	query getBlogsForShowcase {
		posts(first: 6, where: { orderby: { field: DATE, order: DESC } }) {
			nodes {
				slug
				title
				featuredImage {
					node {
						altText
						sourceUrl
						mediaDetails {
							width
							height
						}
					}
				}
				categories {
					nodes {
						name
					}
				}
			}
		}
	}
`;

export const GET_ALL_SLUGS = gql`
	query getAllSlugs {
		posts {
			nodes {
				slug
			}
		}
	}
`;

export const GET_BLOG_BY_SLUG = gql`
	query getBlogBySlug($slug: String!) {
		postBy(slug: $slug) {
			author {
				node {
					lastName
					firstName
				}
			}
			title
			slug
			content
			excerpt
			seo {
				metaDesc
				metaKeywords
				title
			}
			featuredImage {
				node {
					altText
					sourceUrl
					mediaDetails {
						width
						height
					}
				}
			}
			categories {
				nodes {
					name
				}
			}
		}
	}
`;
