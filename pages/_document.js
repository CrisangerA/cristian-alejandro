import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="software developer develop software with emphasys in web development" />
          <meta name="keywords" content="software,developer,development,web,application,mobile,development" />
          <meta name="author" content="Cristian Alejandro" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
