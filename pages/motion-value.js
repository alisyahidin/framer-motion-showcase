import { useEffect } from 'react';
import Head from 'next/head'
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { snap } from 'popmotion'

function MotionValueAnimate() {
  const x = useMotionValue(0);
  const scale = useMotionValue(1);
  const transform = useMotionTemplate`translateX(${x}px) scale(${scale})`

  const handleTap = (_, info) => {
    const translateX = info.point.x - (window.innerWidth / 2)

    animate(x, translateX, {
      type: 'spring',
      duration: 0.7
    })
  }

  useEffect(() => {
    x.onChange(() => {
      const newScale = Math.abs(x.getVelocity()) > 5000
        ? 1
        : 1 - Math.abs(x.getVelocity() / 300)
      animate(scale, newScale, {
        type: 'tween'
      })
    })
  }, [])

  return (
    <div className="flex flex-col justify-center w-4/5 h-screen">
      <h1 className="text-white text-3xl mb-4">Motion Value</h1>
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 h-32 blur">
        <motion.div onTap={handleTap} className="flex items-center justify-center w-full overflow-hidden relative cursor-pointer">
          <motion.div
            key="box"
            className="w-24 h-24 rounded-lg bg-white"
            style={{ transform }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default function MotionValue() {
  return (<>
    <Head>
      <title>Framer Motion</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col justify-center items-center h-screen">
      <MotionValueAnimate />
    </div>
  </>)
}
