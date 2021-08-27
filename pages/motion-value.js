import Head from 'next/head'
import { animate, motion, useMotionTemplate, useMotionValue, useTransform, useVelocity } from 'framer-motion'

function MotionValueAnimate() {
  const x = useMotionValue(0);
  const backgroundColor = useTransform(x, [-300, 0, 300], ['#A78BFA', '#FFFFFF', '#F87171'])
  const xVelocity = useVelocity(x)
  const scaleY = useTransform(xVelocity, [-4000, 0, 4000], [0.1, 1, 0.1]);
  const scaleX = useTransform(xVelocity, [-4000, 0, 4000], [1.5, 1, 1.5]);
  const transform = useMotionTemplate`translateX(${x}px) scaleY(${scaleY}) scaleX(${scaleX})`

  const handleTap = (_, info) => {
    const translateX = info.point.x - (window.innerWidth / 2)

    !x.isAnimating() && animate(x, translateX, {
      type: 'spring',
      duration: 0.7
    })
  }
  console.log('test')
  return (
    <div className="flex flex-col justify-center w-4/5 h-screen">
      <h1 className="text-white text-3xl mb-4">Motion Value</h1>
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 h-32 blur">
        <motion.div onTap={handleTap} className="flex items-center justify-center w-full overflow-hidden relative cursor-pointer">
          <motion.div
            key="box"
            className="w-24 h-24 rounded-lg bg-white"
            style={{ transform, backgroundColor }}
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
