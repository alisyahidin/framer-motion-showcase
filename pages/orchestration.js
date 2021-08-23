import { useState } from 'react';
import Head from 'next/head'
import { motion } from 'framer-motion'
import Highlight from 'components/Highlight'

function AnimationVariant() {
  const [isMounted, setIsMounted] = useState(false)
  const getCode = () => `
const wrapper = {
  hide: {
    opacity: 0,
    transition: {
      delay: 0.6,
      staggerDirection: -1,
      staggerChildren: 0.1
    }
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15
    }
  },
}

const item = {
  hide: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
}`.trim()

  const wrapper = {
    hide: {
      opacity: 0,
      transition: {
        delay: 0.6,
        staggerDirection: -1,
        staggerChildren: 0.1
      }
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    },
  }

  const item = {
    hide: {
      opacity: 0,
      y: 15
    },
    show: {
      opacity: 1,
      y: 0
    },
  }

  return (
    <div className="w-4/5">
      <h1 className="text-white text-3xl mb-4">Transition Orchestration</h1>
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 blur">
        <div className="flex items-center justify-center w-full overflow-hidden relative">
          <button onClick={() => setIsMounted(!isMounted)} className="absolute bg-black bg-opacity-20 text-white py-1 px-2 bottom-3 right-3 rounded">
            {isMounted ? 'Hide' : 'Show'}
          </button>
          <motion.ul initial={false} variants={wrapper} animate={isMounted ? 'show' : 'hide'} className="flex flex-col gap-3 p-4 bg-gray-100 w-64 rounded-lg">
            <motion.li variants={item} className={`w-full h-12 rounded-lg bg-purple-400`} />
            <motion.li variants={item} className={`w-full h-12 rounded-lg bg-red-400`} />
            <motion.li variants={item} className={`w-full h-12 rounded-lg bg-yellow-400`} />
            <motion.li variants={item} className={`w-full h-12 rounded-lg bg-green-400`} />
            <motion.li variants={item} className={`w-full h-12 rounded-lg bg-blue-400`} />
          </motion.ul>
        </div>
        <div className="flex bg-gray-900 rounded-r-xl">
          <div className="flex p-3" style={{ width: 465 }}>
            <Highlight language="jsx">
              {getCode(isMounted)}
            </Highlight>
          </div>
        </div>
      </div>
    </div>
  )
}

const Orchestration = () => {
  return (<>
    <Head>
      <title>Framer Motion</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col justify-center items-center h-screen">
      <AnimationVariant />
    </div>
  </>)
}

export default Orchestration