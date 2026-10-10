import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {ChevronLeft,ChevronRight,Pause,Play} from 'lucide-react'
import {motion} from 'framer-motion'
import {siteImages} from '../data/siteImages'
import useReducedMotion from '../hooks/useReducedMotion'
export const HERO_INTERVAL=5000
export default function HeroSlideshow(){const s=siteImages.hero,n=s.length;const rm=useReducedMotion()
 const [i,setI]=useState(0),[paused,setPaused]=useState(false),[hidden,setHidden]=useState(document.hidden),[failed,setFailed]=useState({})
 const go=d=>setI(x=>(x+d+n)%n)
 useEffect(()=>{const f=()=>setHidden(document.hidden);document.addEventListener('visibilitychange',f);return()=>document.removeEventListener('visibilitychange',f)},[])
 useEffect(()=>{if(n<2||paused||hidden||rm)return;const t=setInterval(()=>setI(x=>(x+1)%n),HERO_INTERVAL);return()=>clearInterval(t)},[n,paused,hidden,rm,i])
 useEffect(()=>{const p=new Image();p.src=s[(i+1)%n]?.src},[i,s,n])
 return(<section className="relative min-h-[100svh] flex items-center overflow-hidden bg-midnight" aria-roledescription="carousel" aria-label="Aaroh landscapes">
 {s.map((im,k)=>(<div key={im.src} aria-hidden={k!==i} className="absolute inset-0 transition-opacity ease-in-out" style={{opacity:k===i?1:0,transitionDuration:rm?'0ms':'1200ms'}}>
  {!failed[k]&&<img src={im.src} alt={k===i?im.alt:''} loading={k===0?'eager':'lazy'} fetchpriority={k===0?'high':'auto'} onError={()=>setFailed(f=>({...f,[k]:1}))} style={{objectPosition:im.position}} className="h-full w-full object-cover"/>}</div>))}
 <div className="absolute inset-0 bg-gradient-to-br from-forest/90 via-midnight/75 to-midnight/90"/>
 <div className="wrap relative z-10 pt-28 pb-32 text-center">
  <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="text-[clamp(2.5rem,9vw,6rem)] font-bold leading-[1.05] tracking-tight text-white">Together We Ascend</motion.h1>
  <p className="glass-dark mx-auto mt-6 max-w-3xl px-6 py-4 text-lg md:text-xl font-light text-emerald-50">A community-driven digital initiative balancing environmental health with human progress. We share resources, solve local challenges, and grow collectively.</p>
  <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center"><Link to="/pillars" className="btn btn-amber w-full sm:w-auto">Explore Our Work</Link><Link to="/platform" className="btn btn-glass w-full sm:w-auto">Access Platform</Link></div></div>
 {n>1&&<div className="glass-dark absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 !rounded-full px-2 py-1">
  <button className="p-2.5" aria-label="Previous slide" onClick={()=>go(-1)}><ChevronLeft size={20}/></button>
  <button className="p-2.5" aria-label={paused?'Resume autoplay':'Pause autoplay'} onClick={()=>setPaused(p=>!p)}>{paused?<Play size={18}/>:<Pause size={18}/>}</button>
  <div className="flex">{s.map((im,k)=><button key={k} aria-label={`Show slide ${k+1}`} aria-current={k===i} onClick={()=>setI(k)} className="p-2.5"><span className={`block h-2 rounded-full transition-all ${k===i?'w-6 bg-amber':'w-2 bg-white/50'}`}/></button>)}</div>
  <button className="p-2.5" aria-label="Next slide" onClick={()=>go(1)}><ChevronRight size={20}/></button></div>}
 </section>)}
