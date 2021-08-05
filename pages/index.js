import Head from 'next/head'

export default function Home() {
  return (<>
    <Head>
      <title>Framer Motion</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex justify-center items-center h-full">
      <button onClick={() => alert('Test')} className="p-4 bg-red-500 text-white">Test</button>
    </div>
  </>)
}