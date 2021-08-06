import React, { useState } from 'react';
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const Sidebar = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return <>
    <button onClick={() => setOpenSidebar(prev => !prev)} className="absolute left-4 top-1/2 transform-gpu -translate-y-1/2 h-8 w-8 bg-white rounded z-10">
    </button>
    <AnimatePresence>
      {openSidebar && <>
        <motion.nav
          key="menu"
          className="fixed h-screen flex flex-col rounded-r-xl p-3 bg-white z-20"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '-100%' }}
          transition={{ type: 'tween', ease: [0.20, .75, .40, .95] }}
        >
          <strong>motion Component</strong>
          <ul className="list-inside list-disc">
            <li>
              <Link href="/" passHref>
                <a>Basic animation</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a>Transition</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a>Variants</a>
              </Link>
            </li>
          </ul>
        </motion.nav>
        <motion.div
          key="backdrop-menu"
          onClick={() => setOpenSidebar(prev => !prev)}
          className="fixed top-0 left-0 h-screen w-screen z-10"
          animate={{ backgroundColor: 'rgba(30, 30, 30, 0.3)' }}
          exit={{ backgroundColor: 'rgba(30, 30, 30, 0)' }}
        />
      </>}
    </AnimatePresence>
    <main className="relative flex-1 h-screen overflow-y-auto">
      {children}
    </main>
  </>
};

export default Sidebar;