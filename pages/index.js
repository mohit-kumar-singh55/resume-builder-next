import Head from 'next/head'
import Header from '../components/Header/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Resume.MKS</title>
        <meta name="description" content="A quick and free resume builder. So build your resume quickly, easily and for free." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

    </div>
  )
}