import {Link} from 'react-router-dom'
export default function Footer(){return(<footer className="bg-midnight text-emerald-100/80 py-12 text-center"><div className="wrap">
 <h2 className="text-3xl font-bold text-white">आरोह</h2><p className="italic mb-6">Together We Ascend</p>
 <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">{[['/','Homepage'],['/story','Our Story'],['/pillars','Impact Pillars'],['/platform','Community Hub'],['/board','Live Board']].map(([t,l])=><Link key={t} to={t} className="py-2 hover:text-amber">{l}</Link>)}</nav>
 <p className="text-sm">© 2026 Aaroh Initiative. Built for the community.</p></div></footer>)}
