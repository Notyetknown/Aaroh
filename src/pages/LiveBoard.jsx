import {useCallback,useEffect,useState} from 'react'
import {Link} from 'react-router-dom';import {Inbox,RefreshCw} from 'lucide-react'
import RequestCard from '../components/RequestCard';import {categories} from '../data/pillars';import {getRequestsByCategory,subscribe} from '../services/requestService';import {usePageTitle} from '../hooks/useReducedMotion'
const filters=['All Requests',...categories]
export default function LiveBoard(){usePageTitle('Live Board | आरोह','Requests saved in this browser.')
 const [f,setF]=useState(filters[0]),[items,setItems]=useState(null),[err,setErr]=useState(false)
 const load=useCallback(async()=>{try{setErr(false);setItems(await getRequestsByCategory(f))}catch{setErr(true)}},[f])
 useEffect(()=>{setItems(null);load();return subscribe(load)},[load])
 return(<section className="min-h-screen bg-gradient-to-b from-forest via-emerald/30 to-ivory pt-32 pb-20"><div className="wrap max-w-4xl">
 <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white text-center">Live Community Board</h1>
 <p className="mt-3 text-center text-emerald-100">Local demo mode — requests are visible only in this browser.</p>
 <div className="glass-dark mt-8 flex flex-wrap items-center gap-2 p-3" role="group" aria-label="Filter by category">
  {filters.map(c=><button key={c} aria-pressed={f===c} onClick={()=>setF(c)} className={`rounded-full px-4 py-2 text-sm min-h-[44px] transition ${f===c?'bg-amber text-midnight font-semibold':'bg-white/10 hover:bg-white/20'}`}>{c}</button>)}
  <button onClick={load} aria-label="Refresh requests" className="ml-auto p-2.5"><RefreshCw size={18}/></button></div>
 <div className="mt-8" aria-live="polite">
 {err?<p className="glass-light p-6 text-red-800">Requests could not be read from this browser's storage. Refresh the page or clear the saved Aaroh data.</p>
 :items===null?<p className="glass-light p-6 animate-pulse">Loading requests…</p>
 :items.length===0?<div className="glass-light p-10 text-center"><Inbox className="mx-auto text-emerald" size={40}/>
   <h2 className="mt-3 text-xl font-bold text-forest">{f==='All Requests'?'Your community board starts here.':'No requests in this category yet.'}</h2>
   <p className="mt-2 text-slate-600">Submit a resource request or share a community concern to add the first entry to this local demonstration board.</p>
   <Link to="/platform" className="btn btn-amber mt-5">Go to Community Hub</Link></div>
 :<ul className="space-y-4">{items.map(r=><RequestCard key={r.id} r={r}/>)}</ul>}</div></div></section>)}
