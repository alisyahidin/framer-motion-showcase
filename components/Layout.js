import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'

const widthSidebar = 80
const Sidebar = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return <>
    <motion.nav
      className="fixed h-screen bg-white bg-opacity-25 z-20"
      initial={{ width: widthSidebar }}
      animate={{ width: openSidebar ? widthSidebar * 2 : widthSidebar }}
    >
      <button onClick={() => setOpenSidebar(prev => !prev)} className="p-2 bg-blue-400 text-white">
        {openSidebar ? 'Close' : 'Open'}
      </button>
    </motion.nav>
    <AnimatePresence>
      {openSidebar && <motion.div
        onClick={() => setOpenSidebar(prev => !prev)}
        className="fixed top-0 left-0 h-screen w-screen z-10"
        animate={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
        exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
      />}
    </AnimatePresence>
    <main style={{ marginLeft: widthSidebar }} className="relative flex-1 h-screen overflow-y-auto">
      {children}
    </main>
  </>
};

export default Sidebar;