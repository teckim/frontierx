import Document, { Html, Head, Main, NextScript } from 'next/document'

class MainDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          className="bg-no-repeat text-white"
          style={{
            background: 'linear-gradient(0deg, #0D0D0D, #0D0D0D), #141417',
          }}
        >
          <div
            className="min-h-screen bg-cover"
            style={{
              backgroundImage: 'url(/background.png)',
            }}
          >
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}

export default MainDocument
