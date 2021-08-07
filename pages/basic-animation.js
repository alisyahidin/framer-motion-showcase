import { useState } from 'react';
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import Highlight from 'components/Highlight'
import ValueSlider from 'components/ValueSlider'

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
/>`

export default function BasicAnimation() {
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

  return (<>
    <Head>
      <title>Framer Motion</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex justify-center items-center h-full">
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 w-4/5 blur">
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
          <div className="flex p-3 w-56">
            <Highlight language="jsx">
              {getCode({ x, y, scale, rotate, exitX, exitY, exitScale, exitRotate }, withExit, initial, isMounted)}
            </Highlight>
          </div>
          <div className="p-3 border-l-2 border-gray-700">
            <div>
              <div className="flex justify-between">
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
              <div className="flex justify-between">
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
  </>)
}