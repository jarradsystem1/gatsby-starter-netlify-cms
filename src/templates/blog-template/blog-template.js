import React from 'react';
import PropTypes from 'prop-types';
import { DiscussionEmbed, CommentCount } from 'disqus-react';
import marked from 'marked';

import SEO from '../../components/seo';
import Layout from '../../containers/layout/layout';
import Heading from '../../components/shared/heading';
import Text from '../../components/shared/text';
import {
  BlogDetailsWrap,
  BlogDetailsHeader,
  BlogDetailsMetaWrap,
  BlogDetailsMeta,
  BlogDetailsContent,
  CommentWrap,
  CommentFormWrap
} from './blog-template.stc';

function BlogTemplate({ pageContext }) {
  const post = pageContext;
  const imageData = post.image;
  const disqusShortname = 'thern';
  const disqusConfig = {
    url: post.path,
    identifier: post.id,
    title: post.title
  };

  return (
    <Layout>
      <SEO title={post.title} />
      <BlogDetailsWrap>
        <BlogDetailsHeader location={imageData}>
          <div className='row align-items-center'>
            <div className='col-2 offset-1'>
              <div className='rn-blog-details-meta-inner'>
                <Heading style={{ color: 'white' }}>{post.title}</Heading>
              </div>
            </div>
            <div className='col-1 offset-1'>
              <BlogDetailsMetaWrap style={{ color: 'white' }}>
                <BlogDetailsMeta>
                  <Text>Publish Date:</Text>
                  <Heading style={{ color: 'white' }}>{post.date}</Heading>
                </BlogDetailsMeta>
                <BlogDetailsMeta>
                  <Text>Author:</Text>
                  <Heading style={{ color: 'white' }}>{post.author}</Heading>
                </BlogDetailsMeta>
                <BlogDetailsMeta>
                  <Text>Comments:</Text>
                  <Heading>
                    <CommentCount
                      shortname={disqusShortname}
                      config={disqusConfig}
                    />
                  </Heading>
                </BlogDetailsMeta>
              </BlogDetailsMetaWrap>
            </div>
          </div>
        </BlogDetailsHeader>
        <BlogDetailsContent>
          <div
            id='blog-details-content'
            className='container'
            dangerouslySetInnerHTML={{ __html: marked(post.content) }}
          />
        </BlogDetailsContent>
        <CommentWrap>
          <CommentFormWrap>
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </CommentFormWrap>
        </CommentWrap>
      </BlogDetailsWrap>
    </Layout>
  );
}

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         id
//         title
//         date(formatString: "MMM Do, YYYY")
//         author
//         image {
//           childImageSharp {
//             fluid(maxWidth: 1920, maxHeight: 800, quality: 100) {
//               ...GatsbyImageSharpFluid_withWebp
//               presentationWidth
//               presentationHeight
//             }
//           }
//         }
//       }
//       html
//     }
//   }
// `;

BlogTemplate.propTypes = {
  metaHeadingStyle: PropTypes.object,
  metaTextStyle: PropTypes.object,
  titleStyle: PropTypes.object
};

BlogTemplate.defaultProps = {
  titleStyle: {
    as: 'h1',
    color: '#fff',
    responsive: {
      small: {
        mb: '22px'
      }
    }
  },
  metaBoxStyle: {
    mb: '30px',
    responsive: {
      small: {
        mb: 0,
        pt: '11px',
        pb: '11px'
      }
    }
  },
  metaHeadingStyle: {
    as: 'h6',
    color: '#fff',
    fontSize: '12px',
    fontweight: 700,
    letterspacing: '2px',
    mb: '12px'
  },
  metaTextStyle: {
    m: 0,
    fontSize: '12px',
    color: '#fff',
    letterspacing: '1px'
  }
};

export default BlogTemplate;
