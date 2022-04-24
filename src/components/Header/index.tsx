// there's no need to make import of images
import styles from './styles.module.scss'

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img src="/images/logo.svg" alt="ig.news" />
          <nav>
            <a className={styles.active}>Home</a>
            <a>Posts</a>
          </nav>
        </div>
      </header>
    </>
  )
}

