import {Link} from 'react-router-dom';import {pillars} from '../data/pillars';import {siteImages} from '../data/siteImages';import Img from '../components/Img';import {usePageTitle} from '../hooks/useReducedMotion'
import Reveal from '../components/Reveal'
export default function Pillars(){usePageTitle('Impact Pillars | आरोह','Environmental Health, Resource Sharing and Human Progress.')
 return(<><section className="bg-gradient-to-br from-forest to-midnight pt-36 pb-16 text-white"><Reveal className="wrap max-w-4xl"><h1 className="text-[clamp(2rem,6vw,4rem)] font-bold">Our Core Pillars</h1>
  <p className="mt-5 text-xl font-light text-emerald-50">Healthy ecosystems, shared knowledge and digital access depend on each other. Aaroh works on all three together.</p></Reveal></section>
 <section className="py-16"><div className="wrap"><div className="grid gap-6 md:grid-cols-3">{pillars.map(({icon:I,title,text,img},index)=><Reveal key={title} delay={index*0.12}><article className="glass-light h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl">
  <Img img={siteImages.hero[img]} className="aspect-[16/10] w-full transition duration-700 hover:scale-[1.03]"/><div className="p-6"><span className="inline-flex rounded-xl bg-emerald/10 p-3 text-emerald"><I/></span><h2 className="mt-4 text-xl font-bold text-forest">{title}</h2><p className="mt-2 text-slate-600">{text}</p></div></article></Reveal>)}</div>
  <Reveal className="mt-10 text-center"><Link to="/platform" className="btn btn-amber">Access Platform</Link></Reveal></div></section></>)}
