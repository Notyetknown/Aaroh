import { Link } from 'react-router-dom'
import GrassrootsGallery from '../components/GrassrootsGallery'
import Reveal from '../components/Reveal'
import { usePageTitle } from '../hooks/useReducedMotion'

export default function Story() {
  usePageTitle(
    'Our Story | आरोह',
    'How Aaroh brings communities together around environmental health and human progress.'
  )

  return (
    <>
      <section className="bg-gradient-to-br from-forest to-midnight pt-36 pb-16 text-white">
        <Reveal className="wrap max-w-4xl">
          <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight">
            Together We Ascend
          </h1>
          <p className="mt-6 text-xl font-light text-emerald-50">
            Progress shouldn&apos;t cost us our earth or our humanity.
          </p>
        </Reveal>
      </section>
      <section className="py-16">
        <div className="wrap">
          <Reveal><GrassrootsGallery /></Reveal>
          <div className="mx-auto mt-14 max-w-prose space-y-5 text-lg leading-relaxed text-slate-700">
            <Reveal><p>
              As the world accelerates, it is too easy for the vital connection
              between our communities and our environment to fracture. We refuse
              to let that happen.
            </p></Reveal>
            <Reveal delay={0.06}><p>
              At <strong className="text-forest">आरोह</strong>, our mission is
              rooted in the belief that technological advancement and
              environmental health are not opposing forces, but pillars of the
              same foundation.
            </p></Reveal>
            <Reveal delay={0.12}><p>
              Building this platform has been a labor of relentless dedication.
              We have poured our energy into engineering a digital ecosystem
              where shared knowledge and community resources can flow freely to
              those who need them most.
            </p></Reveal>
            <Reveal delay={0.18}><p>
              We are humbled by the tangible benefits we’ve already brought to
              the people we serve, yet we wake up every day knowing the real
              work is still ongoing.
            </p></Reveal>
            <Reveal delay={0.24}><p>
              Progress shouldn&apos;t cost us our earth or our humanity.
              Together We Ascend.
            </p></Reveal>
          </div>
          <Reveal className="mt-12 text-center">
            <Link to="/platform" className="btn btn-amber">
              Join the Mission
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
