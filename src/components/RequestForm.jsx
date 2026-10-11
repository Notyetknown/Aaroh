import {useState} from 'react'
import {RefreshCw,CheckCircle2,AlertCircle} from 'lucide-react'
import {categories} from '../data/pillars';import {validate} from '../utils/validation';import {addRequest} from '../services/requestService';import {sendRequestEmail} from '../services/emailService'
const newQ=()=>{const a=2+Math.floor(Math.random()*8),b=2+Math.floor(Math.random()*8);return{q:`What is ${a} + ${b}?`,expected:a+b}}
const init={name:'',email:'',category:categories[0],message:''}
export default function RequestForm({initialCategory}){const [v,setV]=useState(()=>({...init,category:categories.includes(initialCategory)?initialCategory:init.category})),[cap,setCap]=useState(newQ),[ans,setAns]=useState(''),[err,setErr]=useState({}),[busy,setBusy]=useState(false),[st,setSt]=useState(null)
 const set=k=>e=>setV(x=>({...x,[k]:e.target.value}))
 const Err=({k})=>err[k]?<p id={`${k}-e`} className="mt-1 flex gap-1 text-sm text-amber-200"><AlertCircle size={16} className="mt-0.5 shrink-0"/>{err[k]}</p>:null
 const lab="block text-sm font-medium mb-1 text-emerald-50"
 const p=k=>({id:k,'aria-invalid':!!err[k],'aria-describedby':err[k]?`${k}-e`:undefined,className:'field'})
 async function submit(e){e.preventDefault();if(busy)return;setSt(null)
  const er=validate(v,{answer:ans,expected:cap.expected});setErr(er);if(Object.keys(er).length)return
  setBusy(true)
  try{const req={name:v.name.trim(),email:v.email.trim(),category:v.category,message:v.message.trim()}
   await sendRequestEmail(req);try{await addRequest(req)}catch{}
   setV(init);setAns('');setCap(newQ());setSt({ok:true})}
  catch(error){setSt({ok:false,message:error instanceof Error?error.message:'Your request could not be sent. Please try again.'})}finally{setBusy(false)}}
 return(<form onSubmit={submit} noValidate className="glass-dark p-6 sm:p-8 space-y-4" aria-labelledby="form-h">
  <h2 id="form-h" className="text-2xl font-bold">Log a Request</h2>
  <div><label htmlFor="name" className={lab}>Name</label><input {...p('name')} value={v.name} onChange={set('name')} maxLength={100} autoComplete="name"/><Err k="name"/></div>
  <div><label htmlFor="email" className={lab}>Email</label><input {...p('email')} type="email" value={v.email} onChange={set('email')} autoComplete="email" placeholder="you@example.com"/><p className="text-xs text-emerald-100/70 mt-1">Never shown on the board.</p><Err k="email"/></div>
  <div><label htmlFor="category" className={lab}>Category</label><select {...p('category')} value={v.category} onChange={set('category')}>{categories.map(c=><option key={c}>{c}</option>)}</select></div>
  <div><label htmlFor="message" className={lab}>Message / Detail</label><textarea {...p('message')} rows={4} value={v.message} onChange={set('message')} maxLength={500} placeholder="Describe the resource you need, knowledge you can share, or the concern you noticed."/>
   <div className="flex justify-between"><Err k="message"/><span className="ml-auto text-xs text-emerald-100/70">{v.message.length}/500</span></div></div>
  <div className="glass !rounded-2xl p-4"><label htmlFor="captcha" className={lab}>Human check (browser-only demo, not real security): {cap.q}</label>
   <div className="flex gap-2"><input {...p('captcha')} inputMode="numeric" value={ans} onChange={e=>setAns(e.target.value)}/><button type="button" onClick={()=>{setCap(newQ());setAns('')}} className="btn btn-glass !px-3" aria-label="Get a new question"><RefreshCw size={18}/></button></div><Err k="captcha"/></div>
  <button type="submit" disabled={busy} className="btn btn-amber w-full disabled:opacity-60">{busy?'Saving…':'Submit to Network'}</button>
  <p className="text-xs text-emerald-100/70">Your request is emailed to the Aaroh team and also shown on this browser's board. Your email address is never displayed publicly.</p>
  <div role="status" aria-live="polite">{st?.ok&&<p className="flex gap-2 rounded-xl bg-emerald/40 p-3 text-sm"><CheckCircle2 size={18} className="shrink-0"/>Thank you. Your request has been sent to the Aaroh team and added to this browser's board.</p>}
   {st&&!st.ok&&<p className="flex gap-2 rounded-xl bg-red-900/60 p-3 text-sm"><AlertCircle size={18} className="shrink-0"/>{st.message||'Your request could not be sent. Your entries are still here; check your connection and try again.'}</p>}</div></form>)}
