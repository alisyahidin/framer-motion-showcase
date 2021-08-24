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
              <Link href="/basic-animation" passHref>
                <a>Basic animation</a>
              </Link>
            </li>
            <li>
              <Link href="/layout-animation" passHref>
                <a>Layout Animation</a>
              </Link>
            </li>
            <li>
              <Link href="/shared-layout-animation" passHref>
                <a>Shared Layout Animation</a>
              </Link>
            </li>
          </ul>
          <strong>Transition</strong>
          <ul className="list-inside list-disc">
            <li>
              <Link href="/orchestration" passHref>
                <a>Orchestration</a>
              </Link>
            </li>
            <li>
              <Link href="/tween" passHref>
                <a>Tween</a>
              </Link>
            </li>
            <li>
              <Link href="/spring" passHref>
                <a>Spring</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a>Inertia</a>
              </Link>
            </li>
            <li>
              <Link href="/miscellaneous" passHref>
                <a>Miscellaneous</a>
              </Link>
            </li>
          </ul>
          <strong>Gestures</strong>
          <ul className="list-inside list-disc">
            <li>
              <Link href="/hover" passHref>
                <a>Hover</a>
              </Link>
            </li>
            <li>
              <Link href="/tap" passHref>
                <a>Tap</a>
              </Link>
            </li>
            <li>
              <Link href="/pan" passHref>
                <a>Pan</a>
              </Link>
            </li>
          </ul>
          <strong>Motion Value</strong>
          <strong>Utilities</strong>
          <ul className="list-inside list-disc">
            <li>
              <Link href="/" passHref>
                <a>useCycle</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a>useAnimation</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a>useReducedMotion</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a>LazyMotion</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a>MotionConfig</a>
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