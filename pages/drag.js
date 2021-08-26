import { useRef } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Highlight from 'components/Highlight'

function OnDrag() {
  const constraintRef = useRef()

  const getCode = () => `
const constraintRef = useRef()

<motion.div ref={constraintRef}>
  <motion.div
    drag
    dragConstraints={constraintRef}
    dragTransition={{
      bounceStiffness: 600,
      bounceDamping: 10
    }}
    dragElastic={0.3}
  />
</motion.div>
`.trim()

  return (
    <div className="w-4/5">
      <h1 className="text-white text-3xl mb-4">Gesture Drag</h1>
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 h-96 blur">
        <motion.div ref={constraintRef} className="flex items-center justify-center w-full overflow-hidden relative">
          <motion.div
            drag
            dragConstraints={constraintRef}
            dragElastic={0.3}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            whileTap={{
              scale: 1.3,
            }}
            whileDrag={{
              scale: 1.2,
            }}
            className="w-24 h-24 bg-white rounded-lg cursor-grab active:cursor-grabbing"
          />
        </motion.div>
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

const Pan = () => {
  return (<>
    <Head>
      <title>Framer Motion</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col justify-center items-center h-screen">
      <OnDrag />
    </div>
  </>)
}

export default Pan