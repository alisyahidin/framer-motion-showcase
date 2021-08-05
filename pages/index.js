import { useState } from 'react';
import Head from 'next/head'
import { motion } from 'framer-motion'
import Highlight from 'components/Highlight'

const ValueSlider = ({ title, value, setValue, min = -100, max = 100, step = 1 }) => {
  return (
    <div className="flex items-center gap-4 p-2">
      <p className="text-white flex-1">{title}</p>
      <input className="w-16 rounded pl-2 py-1 bg-gray-700 text-white" type="number" step={step} min={min} max={max} value={value} onChange={e => setValue(parseFloat(e.target.value))} />
      <input className="flex-1" type="range" step={step} min={min} max={max} value={value} onChange={e => setValue(parseFloat(e.target.value))} />
    </div>
  )
}

const getCode = ({ x, y, scale, rotate }) => `<motion.div
  animate={{
    x: ${x},
    y: ${y},
    scale: ${scale},
    rotate: ${rotate}
  }}
/>`

export default function Home() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);

  return (<>
    <Head>
      <title>Framer Motion</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex justify-center items-center h-full">
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 blur">
        <div className="p-52 overflow-hidden">
          <motion.div className="w-24 h-24 rounded-lg bg-white" initial={false} animate={{ x, y, scale, rotate }}></motion.div>
        </div>
        <div className="flex flex-col justify-around bg-gray-900 rounded-r-xl p-3">
          <div className="p-2">
            <Highlight language="jsx">
              {getCode({ x, y, scale, rotate })}
            </Highlight>
          </div>
          <div>
            <ValueSlider title="X" value={x} setValue={setX} />
            <ValueSlider title="Y" value={y} setValue={setY} />
            <ValueSlider title="Scale" value={scale} setValue={setScale} min={0.5} max={3} step={0.1} />
            <ValueSlider title="Rotate" value={rotate} setValue={setRotate} min={0} max={360} />
          </div>
        </div>
      </div>
    </div>
  </>)
}