import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <link
        rel='preaload'
        href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
        />
        <link 
        rel='preaload'
        href='/asset/Oree/Oree-Bold.ttf'
        as='font'
        type='font/ttf'
        crossOrigin=''
        />
         <link 
        rel='preaload'
        href='/asset/Oree/Oree-Regular.ttf'
        as='font'
        type='font/ttf'
        crossOrigin=''
        />
         <link 
        rel='preaload'
        href='/asset/Oree/Oree-Italic.ttf'
        as='font'
        type='font/ttf'
        crossOrigin=''
        />
            <link rel="icont" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument