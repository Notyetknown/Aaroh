import {useState} from 'react'
export default function Img({img,className='',eager=false}){const [bad,setBad]=useState(false)
 if(!img||bad)return <div role="img" aria-label={img?.alt||'Image unavailable'} className={`bg-gradient-to-br from-forest to-midnight ${className}`}/>
 return <img src={img.src} alt={img.alt} loading={eager?'eager':'lazy'} onError={()=>setBad(true)} style={{objectPosition:img.position}} className={`object-cover ${className}`}/>}
