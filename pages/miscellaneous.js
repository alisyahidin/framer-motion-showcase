import Head from 'next/head'
import { motion, useCycle } from 'framer-motion'
import Highlight from 'components/Highlight'

function AnimationVariant() {
  const [toggle, setToggle] = useCycle(false, true)

  const getCode = (togle) => `
const variants = {
  right: { x: 145 },
  left: { x: 0 }
}

<motion.div
  variants={variants}
  animate={${toggle} ? 'right' : 'left'}
/>`.trim()

  const variants = {
    right: { x: 145 },
    left: { x: 0 }
  }

  return (
    <div className="w-4/5">
      <h1 className="text-white text-3xl mb-4">Transition Miscellaneous</h1>
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 blur h-96">
        <div className="flex items-center justify-center w-full overflow-hidden relative">
          <div onClick={setToggle} className="flex p-2 bg-white bg-opacity-25 w-64 rounded-lg cursor-pointer">
            <motion.div
              variants={variants}
              animate={toggle ? 'right' : 'left'}
              className="w-24 h-24 rounded-lg bg-white"
            />
          </div>
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

const Miscellaneous = () => {
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

export default Miscellaneous