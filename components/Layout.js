import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'

const Sidebar = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', () => setOpenSidebar(false))
    return () => router.events.off('routeChangeComplete', () => setOpenSidebar(false))
  }, [router.events])

  return <>
    <button onClick={() => setOpenSidebar(prev => !prev)} className="absolute left-4 top-1/2 transform-gpu -translate-y-1/2 p-2 rounded z-10">
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect fill="#FFF" width="100" height="15"></rect>
        <rect fill="#FFF" y="30" width="100" height="15"></rect>
        <rect fill="#FFF" y="60" width="100" height="15"></rect>
      </svg>
    </button>
    <AnimatePresence>
      {openSidebar && <>
        <motion.nav
          key="menu"
          className="fixed h-screen flex flex-col rounded-r-xl p-3 bg-white z-20 overflow-y-scroll"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '-100%' }}
          transition={{ type: 'tween', ease: [0.20, .75, .40, .95] }}
        >
          <p className="p-2 rounded bg-purple-400 mb-2 text-white">motion Component</p>
          <ul className="flex flex-col gap-2 ml-4 mb-2">
            <li>
              <Link href="/basic-animation" passHref>
                <a className="block underline p-2 bg-gray-100 rounded">Basic animation</a>
              </Link>
            </li>
            <li>
              <Link href="/layout-animation" passHref>
                <a className="block underline p-2 bg-gray-100 rounded">Layout Animation</a>
              </Link>
            </li>
            <li>
              <Link href="/shared-layout-animation" passHref>
                <a className="block underline p-2 bg-gray-100 rounded">Shared Layout Animation</a>
              </Link>
            </li>
          </ul>
          <p className="p-2 rounded bg-red-400 mb-2 text-white">Transition</p>
          <ul className="flex flex-col gap-2 ml-4 mb-2">
            <li>
              <Link href="/orchestration" passHref>
                <a className="block underline p-2 bg-gray-100 rounded">Orchestration</a>
              </Link>
            </li>
            <li>
              <Link href="/tween" passHref>
                <a className="block underline p-2 bg-gray-100 rounded">Tween</a>
              </Link>
            </li>
            <li>
              <Link href="/spring" passHref>
                <a className="block underline p-2 bg-gray-100 rounded">Spring</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a className="block underline p-2 bg-gray-100 rounded">Inertia</a>
              </Link>
            </li>
            <li>
              <Link href="/miscellaneous" passHref>
                <a className="block underline p-2 bg-gray-100 rounded">Miscellaneous</a>
              </Link>
            </li>
          </ul>
          <p className="p-2 rounded bg-blue-400 mb-2 text-white">Gestures</p>
          <ul className="flex flex-col gap-2 ml-4 mb-2">
            <li>
              <Link href="/hover" passHref>
                <a className="block underline p-2 bg-gray-100 rounded">Hover</a>
              </Link>
            </li>
            <li>
              <Link href="/tap" passHref>
                <a className="block underline p-2 bg-gray-100 rounded">Tap</a>
              </Link>
            </li>
            <li>
              <Link href="/pan" passHref>
                <a className="block underline p-2 bg-gray-100 rounded">Pan</a>
              </Link>
            </li>
            <li>
              <Link href="/drag" passHref>
                <a className="block underline p-2 bg-gray-100 rounded">Drag</a>
              </Link>
            </li>
          </ul>
          <Link href="/motion-value" passHref>
            <a>
              <p className="p-2 underline rounded bg-green-400 mb-2 text-white">Motion Value</p>
            </a>
          </Link>
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