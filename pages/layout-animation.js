import { useState } from 'react';
import Head from 'next/head'
import { motion, useCycle } from 'framer-motion'
import Highlight from 'components/Highlight'

const ChangeParentLayout = () => {
  const [layout, setLayout] = useState(true);
  const [justifyContent, toggleJustifyContent] = useCycle('flex-start', 'flex-end')

  const getCode = (justifyContent, layout) => `
<div
  style={{
    display: 'flex',
    justifyContent: ${justifyContent}
  }}
>
  <motion.div${layout ? ' layout' : ''} />
</div>`.trim()

  return (
    <div className="w-4/5">
      <h1 className="text-white text-3xl mb-4">Parent layout changed</h1>
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 h-96 blur">
        <div className="flex items-center justify-center w-full overflow-hidden relative">
          <div style={{ justifyContent }} onClick={toggleJustifyContent} className="flex p-2 bg-white bg-opacity-25 w-64 rounded-lg cursor-pointer">
            <motion.div layout={layout} className="w-24 h-24 rounded-lg bg-white" />
          </div>
        </div>
        <div className="flex bg-gray-900 rounded-r-xl text-white">
          <div className="flex p-4 w-80">
            <Highlight language="jsx">
              {getCode(justifyContent, layout)}
            </Highlight>
          </div>
          <div className="p-3 w-64 border-l-2 border-gray-700">
            <div>
              <div className="flex justify-between">
                <strong>Layout</strong>
                <input type="checkbox" onChange={e => setLayout(e.target.checked)} checked={layout} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LayoutAnimation() {
  return (<>
    <Head>
      <title>Framer Motion</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col justify-center items-center py-36 gap-36">
      <ChangeParentLayout />
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 h-96 w-4/5 blur">
        <div className="flex items-center justify-center w-full overflow-hidden relative">
          <div className="flex p-2 bg-white bg-opacity-25 w-64 rounded-lg cursor-pointer">
            <motion.div className="w-24 h-24 rounded-lg bg-white" />
          </div>
        </div>
        <div className="flex bg-gray-900 rounded-r-xl text-white">
          <div className="flex items-center justify-center p-3 w-80">
            <Highlight language="jsx">
              {`const Hello`}
            </Highlight>
          </div>
          <div className="p-3 w-64 border-l-2 border-gray-700">
            <div>
              <div className="flex justify-between">
                <strong>Layout</strong>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}