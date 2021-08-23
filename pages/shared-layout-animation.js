import { useState } from "react";
import Head from "next/head"
import { AnimatePresence, AnimateSharedLayout, motion, useCycle } from "framer-motion";
import Highlight from 'components/Highlight'

const ListItem = () => {
  const [isOpen, toggleIsOpen] = useCycle(false, true)
  return <motion.li onClick={toggleIsOpen} layout style={{ borderRadius: 6 }} className="flex flex-col gap-3 p-3 w-full bg-white cursor-pointer">
    <motion.div layout className="h-4 bg-gray-300 rounded" />
    <AnimatePresence>
      {isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-10 bg-gray-300 rounded" />}
    </AnimatePresence >
  </motion.li>
}

const List = () => {
  const [layout, setLayout] = useState(true);

  const getCode = (layout) => `
${!layout ? '// ' : ''}<AnimateSharedLayout>
  <motion.ul layout>
    {[0, 1, 2, 3].map(index => (
      <ListItem key={index} />
    ))}
  </motion.ul>
${!layout ? '// ' : ''}</AnimateSharedLayout>

const ListItem = () => {
  const [isOpen, toggleIsOpen] = useCycle(false, true)
  return <motion.li onClick={toggleIsOpen} layout>
    <motion.div layout />
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatePresence >
  </motion.li>
}
`.trim()

  return (
    <div className="flex flex-col justify-center h-5/6 w-4/5">
      <h1 className="text-white text-3xl mb-4">Shared layout child components state</h1>
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 blur">
        <div className="flex items-center justify-center w-full overflow-hidden relative">
          {layout
            ? (
              <AnimateSharedLayout>
                <motion.ul layout className="flex flex-col gap-4 p-4 rounded-lg bg-white bg-opacity-25 w-64">
                  {[0, 1, 2, 3].map(index => (
                    <ListItem key={index} />
                  ))}
                </motion.ul>
              </AnimateSharedLayout>
            ) : (
              <motion.ul layout className="flex flex-col gap-4 p-4 rounded-lg bg-white bg-opacity-25 w-64">
                {[0, 1, 2, 3].map(index => (
                  <ListItem key={index} />
                ))}
              </motion.ul>
            )}
        </div>
        <div className="flex bg-gray-900 rounded-r-xl text-white">
          <div className="flex p-4 w-96">
            <Highlight language="jsx">
              {getCode(layout)}
            </Highlight>
          </div>
          <div className="p-3 w-52">
            <div>
              <div className="flex items-center justify-between">
                <strong>Shared Layout</strong>
                <input type="checkbox" onChange={e => setLayout(e.target.checked)} checked={layout} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MenuItem = ({ index, title, activeMenu, setActiveMenu }) => (
  <li onClick={() => setActiveMenu(index)} className={`w-${index + 2}/5 text-center cursor-pointer`}>
    <p className="my-2">{title}</p>
    {activeMenu === index && <motion.div layoutId="under-line" className="h-2 bg-red-400 w-full" />}
  </li>
)

const NavigationMenu = () => {
  const [layout, setLayout] = useState(true);
  const [activeMenu, setActiveMenu] = useState(0)

  const getCode = (layout) => `
${!layout ? '// ' : ''}<AnimateSharedLayout>
  <ul>
    {menus.map(index => (
      <MenuItem key={index} />
    ))}
  </ul>
${!layout ? '// ' : ''}</AnimateSharedLayout>

const MenuItem = () => (
  <li onClick={() => setActiveMenu(index)}>
    <p>{title}</p>
    {activeMenu === index && (
      <motion.div layoutId="under-line" />
    )}
  </li>
)
`.trim()

  const menus = ['Home', 'About', 'Contact']

  return (
    <div className="flex flex-col justify-center h-5/6 w-4/5">
      <h1 className="text-white text-3xl mb-4">Shared layout component with layoutId</h1>
      <div className="flex shadow rounded-xl bg-white bg-opacity-20 blur">
        <div className="flex items-center justify-center w-full overflow-hidden relative">
          {layout
            ? (
              <AnimateSharedLayout>
                <ul className="flex bg-white w-5/6">
                  {menus.map((title, index) => (
                    <MenuItem key={index} index={index} title={title} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                  ))}
                </ul>
              </AnimateSharedLayout>
            ) : (
              <ul className="flex bg-white w-5/6">
                {menus.map((title, index) => (
                  <MenuItem key={index} index={index} title={title} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                ))}
              </ul>
            )}
        </div>
        <div className="flex bg-gray-900 rounded-r-xl text-white">
          <div className="flex p-4 w-96">
            <Highlight language="jsx">
              {getCode(layout)}
            </Highlight>
          </div>
          <div className="p-3 w-52">
            <div>
              <div className="flex items-center justify-between">
                <strong>Shared Layout</strong>
                <input type="checkbox" onChange={e => setLayout(e.target.checked)} checked={layout} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SharedLayoutAnimation() {
  return (<>
    <Head>
      <title>Framer Motion</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col justify-center items-center h-screen">
      <List />
    </div>
    <div className="flex flex-col justify-center items-center h-screen">
      <NavigationMenu />
    </div>
  </>)
}

export default SharedLayoutAnimation
