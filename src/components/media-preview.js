import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './media-preview.module.css'

export default ({ media }) => (
  <div className={styles.preview}>
    <Img alt="" sizes={media.heroImage.sizes} />
    <h3 className={styles.previewTitle}>
      <Link to={`/media/${media.slug}`}>{media.title}</Link>
    </h3>
    <small>{media.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: media.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
