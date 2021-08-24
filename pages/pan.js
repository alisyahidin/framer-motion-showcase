import Head from 'next/head'
import { motion, useAnimation } from 'framer-motion'
import Highlight from 'components/Highlight'

const template = ({ rotateY, rotateX }) => {
  return `perspective(500px) rotateX(${rotateX}) rotateY(${rotateY}) `;
};

function OnPan() {
  const controls = useAnimation()
  const handlePan = (_, info) => {
    controls.set({
      rotateY: info.offset.x / 2,
      rotateX: -info.offset.y / 2
    });
  };

  const handlePanEnd = () => {
    controls.start({
      rotateY: 0,
      rotateX: 0
    });
  };

  const getCode = () => `
const controls = useAnimation()
const handlePan = (_, info) => {
  controls.set({
    rotateY: info.offset.x / 2,
    rotateX: -info.offset.y / 2
  });
};

const handlePanEnd = () => {
  controls.start({
    rotateY: 0,
    rotateX: 0
  });
};

<motion.div
  onPan={handlePan}
  onPanEnd={handlePanEnd}
  animate={controls}
/>`.trim()

  return (
    <div className="w-4/5">
      <h1 className="text-white text-3xl mb-4">Gesture Pan</h1>
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 blur">
        <div className="flex items-center justify-center w-full overflow-hidden relative">
          <motion.div
            onPan={handlePan}
            onPanEnd={handlePanEnd}
            animate={controls}
            transformTemplate={template}
            className="w-24 h-24 bg-white rounded-lg active:cursor-grab"
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

const Pan = () => {
  return (<>
    <Head>
      <title>Framer Motion</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col justify-center items-center h-screen">
      <OnPan />
    </div>
  </>)
}

export default Pan