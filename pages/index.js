import Head from 'next/head';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Free and Quick Resume Builder - Resume.MKS</title>
        <meta name="description" content="A quick and free resume builder. So build your resume quickly, easily and for free." />
        <meta httpEquiv='content-language' content='en-gb'></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="app">
        <Header />
        <Body />
        <footer className='footer'>
          <Footer />
        </footer>
      </div>

    </div>
  )
}