import {Link} from 'react-router-dom'
import HeroSlideshow from '../components/HeroSlideshow';import GrassrootsGallery from '../components/GrassrootsGallery'
import {Handshake,Leaf,MessagesSquare,Users} from 'lucide-react'
import Reveal from '../components/Reveal'
import AnimatedCounter from '../components/AnimatedCounter'
import PillarExplorer from '../components/PillarExplorer'
import CommunityActionPanel from '../components/CommunityActionPanel'
import {usePageTitle} from '../hooks/useReducedMotion'
export default function Home(){usePageTitle('आरोह | Together We Ascend','A community-driven digital initiative balancing environmental health with human progress.')
 return(<><HeroSlideshow/>
 <section className="py-12 sm:py-16" aria-label="Community impact">
  <div className="wrap">
   <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
    {[
    {icon:Users,value:127,label:'Active Community Members'},
    {icon:MessagesSquare,value:342,label:'Resources & Messages Exchanged'},
    {icon:Handshake,value:84,label:'Successful Connections Made'},
    {icon:Leaf,value:1,label:'Shared Mission'}
   ].map(({icon:Icon,value,label},index)=><Reveal key={label} delay={index*0.1}>
    <div className="glass-light flex h-full flex-col items-center p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
    <span className="inline-flex rounded-xl bg-emerald/10 p-3 text-forest"><Icon aria-hidden="true" size={24}/></span>
    <AnimatedCounter value={value}/>
    <h2 className="mt-1 text-sm font-medium leading-snug text-slate-600 sm:text-base">{label}</h2>
    </div>
   </Reveal>)}
  </div>
  </div>
 </section>
 <section className="py-20"><div className="wrap grid gap-10 lg:grid-cols-2 items-center"><Reveal><div><h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-forest">Bridging Grassroots Development</h2>
  <p className="mt-4 text-lg text-slate-600 max-w-prose">True development cannot happen in isolation. As our communities rapidly evolve, we often face a disconnect between environmental sustainability and educational or technological advancement.</p>
  <Link to="/story" className="btn btn-amber mt-6">Read Our Story</Link></div></Reveal><Reveal delay={0.12}><GrassrootsGallery/></Reveal></div></section>
 <PillarExplorer/>
 <CommunityActionPanel/></>)}
