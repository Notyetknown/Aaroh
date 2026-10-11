import {siteImages} from '../data/siteImages'
import Img from './Img'
import Reveal from './Reveal'

export default function GrassrootsGallery() {
  const [a, b, c] = siteImages.grassroots
  const Feature = ({ im, className, delay }) => (
    <Reveal className={className} delay={delay}>
      <figure className="group relative h-full min-h-0 w-full overflow-hidden rounded-3xl">
        <Img
          img={im}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <figcaption className="glass-dark absolute bottom-3 left-3 right-3 !rounded-2xl px-4 py-2 text-sm leading-snug sm:bottom-4 sm:left-4 sm:right-4 sm:px-5 sm:py-3">
          {im.caption}
        </figcaption>
      </figure>
    </Reveal>
  )

  return (
    <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-4 md:grid-cols-5 md:grid-rows-2">
      <Feature
        im={a}
        delay={0}
        className="col-span-2 aspect-[4/3] min-w-0 md:col-span-3 md:row-span-2 md:aspect-auto md:min-h-[480px]"
      />
      <Feature
        im={b}
        delay={0.1}
        className="aspect-square min-w-0 md:col-span-2 md:aspect-auto"
      />
      <Feature
        im={c}
        delay={0.2}
        className="aspect-square min-w-0 md:col-span-2 md:aspect-auto"
      />
    </div>
  )
}
