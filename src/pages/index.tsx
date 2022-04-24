import Head from 'next/head' // this is a react component

export default function Home() {
  return (
      <>
        {/* the title can be passed dynamically on each page */}
        <Head>
        {/* Everything  here will be attached to the head of _document.tsx */}
          <title>Início | ig.news</title>
        </Head>
        <h1 >
          Hello World  
        </h1>
      </>
  )
}
