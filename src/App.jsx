import {Routes,Route,useLocation} from 'react-router-dom'
import {useEffect} from 'react'
import {AnimatePresence,motion,useReducedMotion} from 'framer-motion'
import Navbar from './components/Navbar';import Footer from './components/Footer'
import Home from './pages/Home';import Story from './pages/Story';import Pillars from './pages/Pillars';import CommunityHub from './pages/CommunityHub';import LiveBoard from './pages/LiveBoard'
export default function App(){const loc=useLocation();const reduceMotion=useReducedMotion()
 useEffect(()=>{window.scrollTo(0,0)},[loc.pathname])
 return(<><a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] bg-white p-2 rounded">Skip to content</a>
 <Navbar/><AnimatePresence mode="wait"><motion.main id="main" key={loc.pathname} initial={reduceMotion?false:{opacity:0}} animate={{opacity:1}} exit={reduceMotion?undefined:{opacity:0}} transition={{duration:reduceMotion?0:.35}}>
 <Routes location={loc}><Route path="/" element={<Home/>}/><Route path="/story" element={<Story/>}/><Route path="/pillars" element={<Pillars/>}/><Route path="/platform" element={<CommunityHub/>}/><Route path="/board" element={<LiveBoard/>}/><Route path="*" element={<Home/>}/></Routes>
 </motion.main></AnimatePresence><Footer/></>)}
