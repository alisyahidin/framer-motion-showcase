import { useState } from 'react';
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import Highlight from 'components/Highlight'
import ValueSlider from 'components/ValueSlider'

function AnimationProps() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [exitX, setExitX] = useState(0);
  const [exitY, setExitY] = useState(0);
  const [exitScale, setExitScale] = useState(0);
  const [exitRotate, setExitRotate] = useState(0);

  const [initial, setinitial] = useState(true);
  const [withExit, setWithExit] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  const getCode = (
    { x, y, scale, rotate, exitX, exitY, exitScale, exitRotate, },
    withExit,
    initial,
    isMounted
  ) => withExit ?
      `<AnimatePresence>
  {${isMounted} && <motion.div
    key="box"
    ${initial ? 'initial' : 'initial={false}'}
    animate={{
      x: ${x},
      y: ${y},
      scale: ${scale},
      rotate: ${rotate}
    }}
    exit={{
      x: ${exitX},
      y: ${exitY},
      scale: ${exitScale},
      rotate: ${exitRotate}
    }}
  />}
</AnimatePresence>` : `<motion.div
  ${initial ? 'initial' : 'initial={false}'}
  animate={{
    x: ${x},
    y: ${y},
    scale: ${scale},
    rotate: ${rotate}
  }}
/>`.trim()

  return (
    <div className="w-4/5">
      <h1 className="text-white text-3xl mb-4">Animation Props</h1>
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 blur">
        <div className="flex items-center justify-center w-full overflow-hidden relative">
          <button onClick={() => setIsMounted(!isMounted)} className="absolute bg-black bg-opacity-20 text-white py-1 px-2 bottom-3 right-3 rounded">
            {isMounted ? 'Hide' : 'Show'}
          </button>
          <AnimatePresence>
            {isMounted && <motion.div
              key="box"
              className="w-24 h-24 rounded-lg bg-white"
              initial={initial}
              animate={{ x, y, scale, rotate }}
              exit={withExit ? { x: exitX, y: exitY, scale: exitScale, rotate: exitRotate } : null}
            />}
          </AnimatePresence>
        </div>
        <div className="flex bg-gray-900 rounded-r-xl text-white">
          <div className="flex p-3 w-64">
            <Highlight language="jsx">
              {getCode({ x, y, scale, rotate, exitX, exitY, exitScale, exitRotate }, withExit, initial, isMounted)}
            </Highlight>
          </div>
          <div className="p-3 border-l-2 border-gray-700">
            <div>
              <div className="flex items-center justify-between">
                <strong>Initial</strong>
                <input type="checkbox" onChange={e => setinitial(e.target.checked)} checked={initial} />
              </div>
            </div>
            <div className="pt-5 mt-5 border-t-2">
              <strong>Animate</strong>
              <ValueSlider title="X" value={x} setValue={setX} />
              <ValueSlider title="Y" value={y} setValue={setY} />
              <ValueSlider title="Scale" value={scale} setValue={setScale} min={0.5} max={3} step={0.1} />
              <ValueSlider title="Rotate" value={rotate} setValue={setRotate} min={0} max={360} />
            </div>
            <div className="pt-5 mt-5 border-t-2">
              <div className="flex items-center justify-between">
                <strong>Exit</strong>
                <input type="checkbox" onChange={e => setWithExit(e.target.checked)} checked={withExit} />
              </div>
              <ValueSlider title="X" value={exitX} setValue={setExitX} />
              <ValueSlider title="Y" value={exitY} setValue={setExitY} />
              <ValueSlider title="Scale" value={exitScale} setValue={setExitScale} min={0} max={3} step={0.1} />
              <ValueSlider title="Rotate" value={exitRotate} setValue={setExitRotate} min={0} max={360} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AnimationKeyframes() {

  const [initial, setinitial] = useState(true);

  const getCode = () => `
<motion.div
  className="w-24 h-24 bg-white"
  animate={{
    x: [0, 20, 30, 60, 0],
    y: [0, 35, 70, 50, 0],
    scale: [1, 0.5, 1, 2.5, 1],
    backgroundColor: ['#f87171', '#f87171', '#fbbf24', '#60affa', '#f87171'],
    borderRadius: [70, 30, 14, 40, 70]
  }}
  transition={{ repeat: Infinity, duration: 4 }}
/>`.trim()

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <div className="w-4/5">
      <h1 className="text-white text-3xl mb-4">Animation Keyframes</h1>
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 blur h-96">
        <div className="flex items-center justify-center w-full overflow-hidden relative">
          <motion.div
            className="w-24 h-24 bg-white"
            animate={{
              x: [0, getRandom(10, 30), getRandom(0, 50), getRandom(60, 90), 0],
              y: [0, getRandom(15, 35), getRandom(30, 70), getRandom(-50, 50), 0],
              scale: [1, 0.5, 1, 2.5, 1],
              backgroundColor: ['#f87171', '#f87171', '#fbbf24', '#60affa', '#f87171'],
              borderRadius: [70, 30, 14, 40, 70]
            }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
        </div>
        <div className="flex bg-gray-900 rounded-r-xl text-white">
          <div className="flex p-3">
            <Highlight language="jsx">
              {getCode()}
            </Highlight>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BasicAnimation() {
  return (<>
    <Head>
      <title>Framer Motion</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col justify-center items-center h-screen">
      <AnimationProps />
    </div>
    <div className="flex flex-col justify-center items-center h-screen">
      <AnimationKeyframes />
    </div>
  </>)
}