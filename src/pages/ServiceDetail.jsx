import { useParams, Link, Navigate } from 'react-router-dom'
import { SERVICES } from '../data/services'
import { WA_LINK } from '../config'
import useSeo from '../components/useSeo'
import Icon from '../components/Icon'
import { PageHero, Section, H2, Checklist, CtaBand } from '../components/ui'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = SERVICES.find((x) => x.slug === slug)
  useSeo({ title: s?.title || 'Service', description: s?.description || '', path: `/services/${slug}` })
  if (!s) return <Navigate to="/services" replace />
  return (
    <>
      <PageHero icon={s.icon} kicker={s.name} title={s.h1} lead={s.lead} photo={s.photo} alt={s.h1} />
      <Section><div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="rounded-xl overflow-hidden aspect-[16/9] mb-10"><img src={s.photo2} alt={s.name} className="w-full h-full object-cover" loading="lazy" /></div>
          <H2>What we do</H2>
          <div className="space-y-4 mt-5 text-base text-on-surface-variant leading-relaxed">{s.intro.map((p) => <p key={p}>{p}</p>)}</div>
          <h3 className="text-xl font-semibold mt-10 mb-5">What is included</h3>
          <Checklist items={s.includes} />
        </div>
        <div className="lg:col-span-5"><div className="bg-surface-pure border border-border-subtle rounded-xl p-8 shadow-clean sticky top-28">
          <h3 className="text-xl font-semibold mb-4">Who this is for</h3>
          <Checklist items={s.who} />
          <Link to={`/contact?service=${s.key}`} className="mt-7 w-full inline-flex items-center justify-center gap-2 bg-primary text-on-primary text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-primary-container">Get a free quote</Link>
          <p className="text-xs text-on-surface-variant text-center mt-3">Or <a href={WA_LINK} className="underline">message us on WhatsApp</a></p>
        </div></div>
      </div></Section>
      <Section bg="bg-surface-subtle"><H2>Frequently asked questions</H2><div className="space-y-3 mt-8 max-w-3xl">
        {s.faqs.map(([q, a]) => (
          <details key={q} className="group bg-surface-pure border border-border-subtle rounded-lg p-5">
            <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold list-none">{q}<Icon name="expand_more" className="group-open:rotate-180 transition-transform" /></summary>
            <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">{a}</p>
          </details>
        ))}
      </div></Section>
      <CtaBand />
    </>
  )
}
