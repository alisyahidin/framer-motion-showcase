import Head from 'next/head'
import { motion } from 'framer-motion'
import Highlight from 'components/Highlight'

function WhileTap() {
  const getCode = () => `
<motion.div
  initial={{
    borderRadius: 10,
    backgroundColor: '#FFFFFF'
  }}
  whileTap={{
    scale: 2.5,
    borderRadius: 60,
    rotate: 90,
    backgroundColor: '#A78BFA'
  }}
/>`.trim()

  return (
    <div className="w-4/5">
      <h1 className="text-white text-3xl mb-4">Gesture Tap</h1>
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 blur h-96">
        <div className="flex items-center justify-center w-full overflow-hidden relative">
          <motion.div
            initial={{
              borderRadius: 10,
              backgroundColor: '#FFFFFF'
            }}
            whileTap={{
              scale: 2.5,
              borderRadius: 60,
              rotate: 90,
              backgroundColor: '#A78BFA'
            }}
            className="w-24 h-24 cursor-pointer"
          />
        </div>
        <div className="flex bg-gray-900 rounded-r-xl text-white">
          <div className="flex p-3" style={{ width: 465 }}>
            <Highlight language="jsx">
              {getCode()}
            </Highlight>
          </div>
        </div>
      </div>
    </div>
  )
}

const Tap = () => {
  return (<>
    <Head>
      <title>Framer Motion</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col justify-center items-center h-screen">
      <WhileTap />
    </div>
  </>)
}

export default Tap