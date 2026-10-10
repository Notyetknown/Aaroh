// All demo data access lives here. Swap these functions for API calls later.
export const STORAGE_KEY='aaroh.demo.requests.v1'
const EVT='aaroh:requests'
const read=()=>{const raw=localStorage.getItem(STORAGE_KEY);if(!raw)return[];try{const d=JSON.parse(raw);return Array.isArray(d)?d:[]}catch{throw new Error('Stored requests are unreadable.')}}
export async function getRequests(){const l=read();return l.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))}
export async function getRequestsByCategory(c){const l=await getRequests();return !c||c==='All Requests'?l:l.filter(r=>r.category===c)}
export async function addRequest(r){
 const rec={id:crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`,...r,createdAt:new Date().toISOString(),status:'submitted'}
 const l=read();l.push(rec);localStorage.setItem(STORAGE_KEY,JSON.stringify(l));window.dispatchEvent(new Event(EVT));return rec}
export const subscribe=(fn)=>{window.addEventListener(EVT,fn);window.addEventListener('storage',fn);return()=>{window.removeEventListener(EVT,fn);window.removeEventListener('storage',fn)}}
