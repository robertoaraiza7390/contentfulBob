import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './video.module.css'
import VideoPreview from '../components/video-preview'

class VideoIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulVideoPost.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>
          Video
        </div>
        <div className="wrapper">
          <h2 className="section-headline">Recent Videos</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <VideoPreview video={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default VideoIndex

export const pageQuery = graphql`
  query VideoIndexQuery {
    allContentfulVideoPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
