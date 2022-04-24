// import { GetServerSideProps } from 'next' //LIKE API CALL SSR
import { GetStaticProps } from 'next' //STATIC PAGE CALL SSG
import Head from 'next/head' // this is a react component
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

/*
 3 ways to populate a page with data

  - Client Side -> when no need of indexation, or data that doesn't need to be already loaded, or data loaded by an action from user like comments of blog
  - Server Side -> when needed specific data from an user also indexation - Careful, because if there's a lot of processing here, it will took longer to show the page
  - Static Side -> information that are same for everyone and need indexation (home of blog, product page, and indexation needed)

*/

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home ({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>

    </>
  )
}

// /*
//  calling api via SSR
//  must be inside a PAGE and then passed to a component 
// */
// export const getServerSideProps: GetServerSideProps = async () => {
//   const price = await stripe.prices.retrieve('price_1Ks8SaFt5so6u4LnhofTgITM', {
//     expand: ['product']
//   })

//   const product = {
//     priceId: price.id,
//     amount: new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     }).format(price.unit_amount / 100)

//   }

//   return {
//     props: {
//       product,
//     }
//   }
// }

// getServerSideProps is executed on the SERVER SIDE!

/*
getting static page SSG
 must be inside a PAGE and then passed to a component 
 NOTE: THIS STATIC CONTENT WILL BE THE SAME AND RETRIEVED FOR ALL USERS
 SO THIS CAN BE USED ONLY IN PAGES WHERE THE CONTENT WILL BE THE SAME FOR ANYONE
*/
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1Ks8SaFt5so6u4LnhofTgITM', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100)

  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 // 24hours defined for how long in sec the content of page will not revalidate

  }
}