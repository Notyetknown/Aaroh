import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, BookOpen, Leaf, MessageCircle, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const actions = [
  {
    icon: BookOpen,
    title: 'Find a resource',
    short: 'Request learning materials, tools, or local support.',
    detail:
      'Tell us what would help you or your community learn, grow, and thrive. The Aaroh community can help connect you with useful resources.',
    cta: 'Request a resource',
    category: 'Educational Resource Sharing',
  },
  {
    icon: MessageCircle,
    title: 'Share knowledge',
    short: 'Pass along skills, ideas, and helpful information.',
    detail:
      'Your experience can make a difference. Share practical knowledge or a useful resource so others in the community can benefit from it.',
    cta: 'Share with the community',
    category: 'General Community Support',
  },
  {
    icon: Leaf,
    title: 'Care for your environment',
    short: 'Bring a local environmental need or idea forward.',
    detail:
      'Notice an environmental concern or have an idea for positive local action? Bring it to the community and help make it visible.',
    cta: 'Raise an environmental concern',
    category: 'Environmental Action',
  },
]

export default function CommunityActionPanel() {
  const [active, setActive] = useState(0)
  const action = actions[active]
  const Icon = action.icon

  return (
    <section className="py-20">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest via-emerald to-midnight p-6 text-white shadow-2xl sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-amber/20 blur-3xl"
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-50">
                  <Sparkles size={16} className="text-amber" aria-hidden="true" />
                  Small actions. Shared progress.
                </span>
                <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.5rem)] font-bold">
                  Community Resource Hub
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-emerald-50/90">
                  Submit an educational resource request, share knowledge, or
                  flag an environmental concern in your area. Choose a way to
                  take part and see how Aaroh can help.
                </p>
                <Link
                  to={`/platform?category=${encodeURIComponent(action.category)}`}
                  className="btn btn-amber mt-6"
                >
                  Visit the Community Hub <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>

              <div>
                <div className="grid gap-3 sm:grid-cols-3" role="group" aria-label="Choose how to take part">
                  {actions.map(({ icon: ActionIcon, title }, index) => (
                    <motion.button
                      key={title}
                      type="button"
                      aria-pressed={active === index}
                      onClick={() => setActive(index)}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex min-h-28 flex-col items-start justify-between rounded-2xl border p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber ${
                        active === index
                          ? 'border-amber bg-white/20 shadow-xl'
                          : 'border-white/20 bg-white/10 hover:bg-white/15'
                      }`}
                    >
                      <ActionIcon size={23} className="text-amber" aria-hidden="true" />
                      <span className="mt-4 font-semibold leading-snug">{title}</span>
                    </motion.button>
                  ))}
                </div>

                <div
                  className="mt-4 min-h-44 rounded-2xl border border-white/15 bg-midnight/35 p-5 sm:p-6"
                  aria-live="polite"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={action.title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-2 text-amber">
                        <Icon size={18} aria-hidden="true" />
                        <h3 className="font-bold text-white">{action.cta}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-emerald-50/85">
                        {action.detail}
                      </p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-amber/90">
                        {action.short}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
