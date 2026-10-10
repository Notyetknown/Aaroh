import {siteImages} from '../data/siteImages';import Img from './Img'
export default function GrassrootsGallery(){const [a,b,c]=siteImages.grassroots
 const F=({im,cls})=><figure className={`group relative overflow-hidden rounded-3xl ${cls}`}><Img img={im} className="h-full w-full transition duration-700 group-hover:scale-105"/>
  <figcaption className="glass-dark absolute bottom-3 left-3 right-3 !rounded-2xl px-4 py-2 text-sm">{im.caption}</figcaption></figure>
 return <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:grid-rows-2"><F im={a} cls="col-span-2 md:col-span-3 md:row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[480px]"/><F im={b} cls="aspect-square md:col-span-2 md:aspect-auto"/><F im={c} cls="aspect-square md:col-span-2 md:aspect-auto"/></div>}
