import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Default Page</title>
      </Head>
      <h1>Default Page</h1>
      <h3>
        <Link href="/projects/backpack">
          <a>Project Backpack</a>
        </Link>
      </h3>
    </Layout>
  )
}
