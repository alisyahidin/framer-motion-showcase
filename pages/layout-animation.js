import React, { useState } from 'react';
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
              <div className="flex items-center justify-between">
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

const ReorderList = () => {
  const [layout, setLayout] = useState(true);
  const [list, setList] = useState(['white', 'red', 'yellow', 'green', 'blue']);

  const getCode = (list, layout) => `
<ul className="flex flex-col">
  <motion.li className="${list[0]}" ${layout ? 'layout' : 'layout={false}'} />
  <motion.li className="${list[1]}" ${layout ? 'layout' : 'layout={false}'} />
  <motion.li className="${list[2]}" ${layout ? 'layout' : 'layout={false}'} />
  <motion.li className="${list[3]}" ${layout ? 'layout' : 'layout={false}'} />
  <motion.li className="${list[4]}" ${layout ? 'layout' : 'layout={false}'} />
</ul>`.trim()

  const reorder = (direction = 'up') => {
    const selectedIndex = list.indexOf('white')
    if ((direction === 'up' && selectedIndex === 0) ||
      (direction === 'down' && selectedIndex === list.length)) return

    const selectedItem = list.splice(selectedIndex, 1);
    list.splice(direction === 'up' ? selectedIndex - 1 : selectedIndex + 1, 0, selectedItem[0]);
    setList([...list])
  }

  return (
    <div className="w-4/5">
      <h1 className="text-white text-3xl mb-4">Reorder List</h1>
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 h-96 blur">
        <div className="flex items-center justify-center w-full overflow-hidden relative">
          <ul className="flex flex-col gap-3 p-4 bg-white bg-opacity-25 w-64 rounded-lg cursor-pointer">
            <motion.li layout={layout} style={{ order: list.indexOf('white') + 1 }} className={`w-full h-12 rounded-lg bg-white`} />
            <motion.li layout={layout} style={{ order: list.indexOf('red') + 1 }} className={`w-full h-12 rounded-lg bg-red-400`} />
            <motion.li layout={layout} style={{ order: list.indexOf('yellow') + 1 }} className={`w-full h-12 rounded-lg bg-yellow-400`} />
            <motion.li layout={layout} style={{ order: list.indexOf('green') + 1 }} className={`w-full h-12 rounded-lg bg-green-400`} />
            <motion.li layout={layout} style={{ order: list.indexOf('blue') + 1 }} className={`w-full h-12 rounded-lg bg-blue-400`} />
          </ul>
          <div className="absolute bottom-3 right-3">
            <div className="flex flex-col">
              <button onClick={() => reorder('up')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 292.362 292.361"
                >
                  <path fill="#FFF" d="M286.935 197.287L159.028 69.381c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233 1.807-12.85 5.424L5.424 197.287C1.807 200.904 0 205.186 0 210.134s1.807 9.233 5.424 12.847c3.621 3.617 7.902 5.425 12.85 5.425h255.813c4.949 0 9.233-1.808 12.848-5.425 3.613-3.613 5.427-7.898 5.427-12.847s-1.814-9.23-5.427-12.847z" />
                </svg>
              </button>
              <button onClick={() => reorder('down')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  style={{ transform: 'rotate(180deg)' }}
                  viewBox="0 0 292.362 292.361"
                >
                  <path fill="#FFF" d="M286.935 197.287L159.028 69.381c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233 1.807-12.85 5.424L5.424 197.287C1.807 200.904 0 205.186 0 210.134s1.807 9.233 5.424 12.847c3.621 3.617 7.902 5.425 12.85 5.425h255.813c4.949 0 9.233-1.808 12.848-5.425 3.613-3.613 5.427-7.898 5.427-12.847s-1.814-9.23-5.427-12.847z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex bg-gray-900 rounded-r-xl text-white">
          <div className="flex p-4">
            <Highlight language="jsx">
              {getCode(list, layout)}
            </Highlight>
          </div>
          <div className="p-3 w-32 border-l-2 border-gray-700">
            <div>
              <div className="flex items-center justify-between">
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
      <ReorderList />
    </div>
  </>)
}