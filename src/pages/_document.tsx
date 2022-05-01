// everything in this file is loaded only once, like index.html from CRA.
import Document, { Html, Head, Main, NextScript } from 'next/document'
// this file can't import css files!
export default class myDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
             
        
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
        </Head>
        <body>
          {/* All content rendered is here */}
          <Main />
          {/* Where next puts JS files need do run the application */}
          <NextScript />
        </body>
      </Html>
    )
  }
}