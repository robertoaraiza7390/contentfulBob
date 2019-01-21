import React from 'react'
import Link from 'gatsby-link'
import styles from './footer.module.css'

export default () => (
  <footer role="footer">
    <ul className={styles.footer}>
      <li className={styles.footerItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.footerItem}>
        <Link to="/blog/">Blog</Link>
      </li>
      <li className={styles.footerItem}>
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  </footer>
)
