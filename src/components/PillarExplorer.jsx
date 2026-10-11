import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Img from './Img'
import Reveal from './Reveal'
import { pillars } from '../data/pillars'
import { siteImages } from '../data/siteImages'

export default function PillarExplorer() {
  const [active, setActive] = useState(0)
  const pillar = pillars[active]
  const Icon = pillar.icon

  return (
    <section className="overflow-hidden bg-gradient-to-b from-forest to-midnight py-20 text-white">
      <div className="wrap">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-50">
              How we create change
            </span>
            <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-bold">
              Our Core Pillars
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-emerald-50/90">
              Healthy ecosystems, shared knowledge and digital access depend on
              each other. Explore how Aaroh brings them together.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)]">
          <Reveal>
            <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-white/15 shadow-2xl sm:min-h-[440px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                >
                  <Img
                    img={siteImages.hero[pillar.img]}
                    eager
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/95 via-midnight/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                    <span className="inline-flex rounded-2xl bg-amber p-3 text-midnight shadow-lg">
                      <Icon size={26} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-emerald-50/90">
                      {pillar.text}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {pillars.map(({ title, text, img, icon: PillarIcon }, index) => (
              <motion.button
                key={title}
                type="button"
                aria-pressed={active === index}
                onClick={() => setActive(index)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={`group flex min-h-24 items-center gap-4 rounded-2xl border p-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber sm:flex-col sm:items-stretch lg:min-h-0 lg:flex-row lg:items-center ${
                  active === index
                    ? 'border-amber/70 bg-white/15 shadow-lg'
                    : 'border-white/15 bg-white/5 hover:bg-white/10'
                }`}
              >
                <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-full lg:h-16 lg:w-24">
                  <Img
                    img={siteImages.hero[img]}
                    className="h-full w-full transition duration-500 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-midnight/15" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 font-bold text-white">
                    <PillarIcon size={17} className="shrink-0 text-amber" aria-hidden="true" />
                    {title}
                  </span>
                  <span className="mt-1 hidden text-sm leading-relaxed text-emerald-50/75 sm:block">
                    {text}
                  </span>
                </span>
                <span className="hidden text-amber lg:block" aria-hidden="true">→</span>
              </motion.button>
            ))}
          </div>
        </div>

        <Reveal className="mt-8 text-center">
          <Link to="/pillars" className="btn btn-glass">
            Explore all our work <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
