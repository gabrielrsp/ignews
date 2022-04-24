import Head from 'next/head' // this is a react component
import { SubscribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss'

export default function Home () {
  return (
    <>
      {/* the title can be passed dynamically on each page */}
      <Head>
        {/* Everything  here will be attached to the head of _document.tsx */}
        <title>Início | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero} >
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world,</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton/>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>

    </>
  )
}
