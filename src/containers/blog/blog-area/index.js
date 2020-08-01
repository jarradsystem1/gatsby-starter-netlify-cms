import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { truncateString } from '../../../utils/utilFunctions';
import BlogHeading from '../blog-heading';
import Blog from '../../../components/blog/layout-one';
import Pagination from '../../../components/pagination';
import { SectionWrap, BlogInner } from './blog-area.stc';

const BlogArea = () => {
  const blogQueryData = useStaticQuery(graphql`
    query BlogDataQuery {
      allMarkdownRemark(limit: 4) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMM Do, YYYY")
              id
              author
              shortDesc
              image {
                childImageSharp {
                  fluid(maxWidth: 600, maxHeight: 630, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                    presentationWidth
                    presentationHeight
                  }
                }
              }
            }
          }
        }
      }
      allStrapiPost {
        nodes {
          Title
          Date
          Image {
            publicURL
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 630, quality: 100) {
                presentationHeight
                presentationWidth
              }
            }
          }
          Content
          Tag
          user {
            username
          }
        }
      }
    }
  `);

  const strapiPosts = blogQueryData.allStrapiPost.nodes;

  const blogs = strapiPosts;
  const totalCount = strapiPosts.length;
  const postsPerPage = 4;
  const numberOfPages = Math.ceil(totalCount / postsPerPage);

  console.log(totalCount);

  return (
    <Fragment>
      <SectionWrap>
        <BlogHeading />
        <BlogInner>
          <div className='col-4 offset-1'>
            <div className='row'>
              {blogs.map((blog, i) => (
                <div className='col-2 blog-wrap' key={`blog-${i}`}>
                  <Blog
                    title={blog.Title}
                    date={blog.Date.toString()}
                    author={blog.user.username}
                    id={i}
                    path={blog.Title.toLowerCase().replace(/\s/g, '-')}
                    excerpt={truncateString(blog.Content, 90)}
                    image={blog.Image.publicURL}
                    tag={blog.Tag}
                  />
                </div>
              ))}
            </div>
          </div>
        </BlogInner>
      </SectionWrap>
      <Pagination currentPage={1} numberOfPages={numberOfPages} />
    </Fragment>
  );
};

export default BlogArea;
