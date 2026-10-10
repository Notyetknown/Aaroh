import RequestForm from '../components/RequestForm';import {usePageTitle} from '../hooks/useReducedMotion';import {Check} from 'lucide-react'
export default function CommunityHub(){usePageTitle('Community Hub | आरोह','Submit resource requests, share knowledge, or flag an environmental concern.')
 return(<section className="min-h-screen bg-gradient-to-br from-midnight via-forest to-midnight pt-32 pb-20 text-white"><div className="wrap grid gap-12 lg:grid-cols-2 items-start">
 <div><h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold">Community Resource Hub</h1>
  <p className="mt-5 text-lg text-emerald-100">This interface is the operational core of आरोह. Submit a resource request, share knowledge, or flag an environmental concern in your area.</p>
  <ul className="mt-6 space-y-3">{['Submit resource requests seamlessly','Community-driven participation','Open-source and accessible to all'].map(t=><li key={t} className="flex gap-2"><Check className="text-amber shrink-0"/>{t}</li>)}</ul></div>
 <RequestForm/></div></section>)}
