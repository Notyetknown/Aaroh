import {Link} from 'react-router-dom';import GrassrootsGallery from '../components/GrassrootsGallery';import {usePageTitle} from '../hooks/useReducedMotion'
export default function Story(){usePageTitle('Our Story | आरोह','How Aaroh bridges environmental sustainability with educational and technological advancement.')
 return(<><section className="bg-gradient-to-br from-forest to-midnight pt-36 pb-16 text-white"><div className="wrap max-w-4xl"><h1 className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight">Bridging Grassroots Development</h1>
  <p className="mt-6 text-xl font-light text-emerald-50">True development cannot happen in isolation. As communities evolve, environmental sustainability must grow alongside educational and technological advancement.</p></div></section>
 <section className="py-16"><div className="wrap"><GrassrootsGallery/>
  <div className="mx-auto mt-14 max-w-prose space-y-5 text-lg leading-relaxed text-slate-700">
   <p>As our communities rapidly evolve, we often face a disconnect between environmental sustainability and educational or technological advancement.</p>
   <p><strong className="text-forest">आरोह</strong> was engineered to bridge this gap. By leveraging accessible web technology, we create a digital ecosystem for community messages, shared resources and shared knowledge, so human progress does not come at the cost of our environment.</p></div>
  <div className="mt-12 text-center"><Link to="/platform" className="btn btn-amber">Join the Mission</Link></div></div></section></>)}
