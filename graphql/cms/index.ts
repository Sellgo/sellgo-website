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
