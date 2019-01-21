import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './video-preview.module.css'

export default ({ video }) => (
  <div className={styles.preview}>
    <Img alt="" sizes={video.heroImage.sizes} />
    <h3 className={styles.previewTitle}>
      <Link to={`/video/${video.slug}`}>{video.title}</Link>
    </h3>
    <small>{video.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: video.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
