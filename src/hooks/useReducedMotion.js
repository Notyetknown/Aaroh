import {useEffect,useState} from 'react'
export default function useReducedMotion(){const q='(prefers-reduced-motion: reduce)'
 const [r,s]=useState(()=>typeof window!=='undefined'&&window.matchMedia(q).matches)
 useEffect(()=>{const m=window.matchMedia(q),f=()=>s(m.matches);m.addEventListener('change',f);return()=>m.removeEventListener('change',f)},[]);return r}
export const usePageTitle=(t,d)=>{useEffect(()=>{document.title=t;if(d)document.querySelector('meta[name=description]')?.setAttribute('content',d)},[t,d])}
