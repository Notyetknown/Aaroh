import {useEffect,useRef,useState} from 'react'
import {Link,NavLink,useLocation} from 'react-router-dom'
import {AnimatePresence,motion,useReducedMotion} from 'framer-motion'
import {Menu,X} from 'lucide-react'
export const links=[['/story','Our Story'],['/pillars','Impact Pillars'],['/platform','Community Hub'],['/board','Live Board']]
export default function Navbar(){const [open,setOpen]=useState(false);const btn=useRef(null);const loc=useLocation();const reduceMotion=useReducedMotion()
 useEffect(()=>setOpen(false),[loc.pathname])
 useEffect(()=>{if(!open)return;document.body.style.overflow='hidden';const k=e=>{if(e.key==='Escape'){setOpen(false);btn.current?.focus()}};window.addEventListener('keydown',k)
  return()=>{document.body.style.overflow='';window.removeEventListener('keydown',k)}},[open])
 const cls=({isActive})=>`px-3 py-2 rounded-full text-sm font-medium transition ${isActive?'bg-white/20 text-white':'text-white/80 hover:text-white hover:bg-white/10'}`
 return(<motion.header initial={reduceMotion?false:{opacity:0,y:-16}} animate={{opacity:1,y:0}} transition={{duration:.5,ease:'easeOut'}} className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6 pt-[max(.75rem,env(safe-area-inset-top))]">
 <nav aria-label="Main" className="glass-dark mx-auto max-w-[1280px] flex items-center justify-between px-4 py-2 !rounded-full">
  <Link to="/" className="text-2xl font-bold text-white px-2" aria-label="Aaroh home">आरोह</Link>
  <div className="hidden md:flex gap-1">{links.map(([t,l])=><NavLink key={t} to={t} className={cls}>{l}</NavLink>)}</div>
  <Link to="/platform" className="btn btn-glass !py-2 hidden md:inline-flex">Join the Mission</Link>
  <button ref={btn} className="md:hidden p-2 text-white min-h-[44px] min-w-[44px]" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(o=>!o)}>{open?<X/>:<Menu/>}</button>
 </nav>
 <AnimatePresence>{open&&<motion.div id="mobile-menu" initial={reduceMotion?false:{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={reduceMotion?undefined:{opacity:0,y:-12}} transition={{duration:reduceMotion?0:.2}} className="glass-dark md:hidden mt-2 p-4 flex flex-col gap-1 max-h-[calc(100dvh-5rem)] overflow-y-auto">
  <NavLink to="/" end className={cls}>Home</NavLink>{links.map(([t,l])=><NavLink key={t} to={t} className={cls}>{l}</NavLink>)}
  <Link to="/platform" className="btn btn-amber mt-2">Join the Mission</Link></motion.div>}</AnimatePresence></motion.header>)}
