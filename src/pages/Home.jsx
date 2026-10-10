import {Link} from 'react-router-dom'
import HeroSlideshow from '../components/HeroSlideshow';import GrassrootsGallery from '../components/GrassrootsGallery'
import {pillars} from '../data/pillars';import {usePageTitle} from '../hooks/useReducedMotion'
export default function Home(){usePageTitle('आरोह | Together We Ascend','A community-driven digital initiative balancing environmental health with human progress.')
 return(<><HeroSlideshow/>
 <section className="py-20"><div className="wrap grid gap-10 lg:grid-cols-2 items-center"><div><h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-forest">Bridging Grassroots Development</h2>
  <p className="mt-4 text-lg text-slate-600 max-w-prose">True development cannot happen in isolation. As our communities rapidly evolve, we often face a disconnect between environmental sustainability and educational or technological advancement.</p>
  <Link to="/story" className="btn btn-amber mt-6">Read Our Story</Link></div><GrassrootsGallery/></div></section>
 <section className="py-20 bg-gradient-to-b from-forest to-midnight text-white"><div className="wrap"><h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center">Our Core Pillars</h2>
  <div className="mt-10 grid gap-6 md:grid-cols-3">{pillars.map(({icon:I,title,text})=><div key={title} className="glass p-6 transition hover:-translate-y-1"><span className="inline-flex rounded-xl bg-amber/20 p-3 text-amber"><I/></span><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-2 text-emerald-50/90">{text}</p></div>)}</div>
  <div className="mt-8 text-center"><Link to="/pillars" className="btn btn-glass">See all pillars</Link></div></div></section>
 <section className="py-20"><div className="wrap"><div className="glass-light p-8 md:p-12 text-center"><h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-forest">Community Resource Hub</h2>
  <p className="mx-auto mt-4 max-w-2xl text-slate-600">Submit an educational resource request, share knowledge, or flag an environmental concern in your area.</p>
  <Link to="/platform" className="btn btn-amber mt-6">Join the Mission</Link></div></div></section></>)}
