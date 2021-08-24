import { useState } from 'react'
import Head from 'next/head'
import { motion, useCycle } from 'framer-motion'
import Highlight from 'components/Highlight'
import ValueSlider from 'components/ValueSlider'

function AnimationVariant() {
  const [justifyContent, toggleJustifyContent] = useCycle('flex-start', 'flex-end')
  const [data, setData] = useState({
    duration: 0.6,
    bounce: 0.5
  })

  const getCode = (data) => `
<motion.div
  layout
  transition={{
    type: 'spring',
    duration: ${data.duration},
    bounce: ${data.bounce},
  }}
/>`.trim()

  return (
    <div className="w-4/5">
      <h1 className="text-white text-3xl mb-4">Transition Spring</h1>
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 blur h-96">
        <div className="flex items-center justify-center w-full overflow-hidden relative">
          <div style={{ justifyContent }} onClick={toggleJustifyContent} className="flex p-2 bg-white bg-opacity-25 w-64 rounded-lg cursor-pointer">
            <motion.div
              layout
              transition={{
                type: 'spring',
                duration: data.duration,
                bounce: data.bounce,
              }}
              className="w-24 h-24 rounded-lg bg-white"
            />
          </div>
        </div>
        <div className="flex bg-gray-900 rounded-r-xl text-white">
          <div className="flex p-3" style={{ width: 465 }}>
            <Highlight language="jsx">
              {getCode(data)}
            </Highlight>
          </div>
          <div className="p-3 border-l-2 border-gray-700">
            <div className="mb-5">
              <strong>Duration</strong>
              <ValueSlider title="Duration" min={0.2} max={2} step={0.1} value={data.duration} setValue={val => setData(prev => ({ ...prev, duration: val }))} />
            </div>
            <div className="mb-5">
              <strong>Bounce</strong>
              <ValueSlider title="Ease 1" min={0.35} max={1} step={0.01} value={data.bounce} setValue={val => setData(prev => ({ ...prev, bounce: val }))} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Spring = () => {
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

export default Spring