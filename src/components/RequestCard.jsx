import {BookOpen,Leaf,HeartHandshake,Clock} from 'lucide-react'
export const meta={'Educational Resource Sharing':[BookOpen,'bg-teal-100 text-teal-800'],'Environmental Action':[Leaf,'bg-emerald-100 text-emerald-900'],'General Community Support':[HeartHandshake,'bg-amber-100 text-amber-900']}
export default function RequestCard({r}){const [I,c]=meta[r.category]||meta['General Community Support']
 return(<li className="glass-light p-5 transition hover:-translate-y-1"><div className="flex items-center justify-between gap-2 flex-wrap">
  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${c}`}><I size={14}/>{r.category}</span>
  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs capitalize text-slate-600">{r.status}</span></div>
  <p className="mt-3 whitespace-pre-wrap break-words text-slate-800">{r.message}</p>
  <p className="mt-4 flex flex-wrap gap-x-3 text-sm text-slate-500"><span className="font-semibold text-slate-700">{r.name.split(' ')[0]}</span><span className="inline-flex items-center gap-1"><Clock size={14}/>{new Date(r.createdAt).toLocaleString([], {dateStyle:'medium',timeStyle:'short'})}</span></p></li>)}
