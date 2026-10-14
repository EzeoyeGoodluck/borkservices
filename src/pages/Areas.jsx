import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CITIES, PHOTOS } from '../config'
import useSeo from '../components/useSeo'
import Icon from '../components/Icon'
import { PageHero, Section, CtaBand } from '../components/ui'

export default function Areas() {
  useSeo({ title: 'Areas We Cover | UK-Wide Cleaning Services | Bork Services Ltd', description: 'Bork Services provides domestic, commercial and industrial cleaning across the UK, including Leicester, London, Birmingham, Manchester, Nottingham, Coventry and more.', path: '/areas' })
  const { hash } = useLocation()
  useEffect(() => { if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' }) }, [hash])
  return (
    <>
      <PageHero icon="public" kicker="Areas we cover" title="Cleaning teams across the UK" lead="Headquartered in Leicester and operating nationwide. The cities below are where we work most often, but we take on contracts anywhere in England, Scotland and Wales." photo={PHOTOS.areas} alt="Window cleaning at a UK property" />
      <Section><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CITIES.map((c) => (
          <div key={c} id={c.toLowerCase()} className="bg-surface-pure border border-border-subtle rounded-xl p-6 shadow-clean scroll-mt-28">
            <h3 className="text-xl font-semibold mb-2">Cleaning services in {c}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">Domestic, commercial and industrial cleaning in {c} and the surrounding area, including end of tenancy cleans, office contracts and warehouse cleaning. {c === 'Leicester' ? 'Our head office is based here, so same-week slots are usually available.' : 'Local teams, supervised to the same checklist as every Bork Services job.'}</p>
            <Link to="/contact" className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 hover:underline">Get a quote in {c}<Icon name="arrow_forward" className="text-base" /></Link>
          </div>
        ))}
      </div></Section>
      <CtaBand title="Not listed? Ask anyway." body="We regularly travel for commercial and industrial contracts. Tell us the location and we will confirm availability." />
    </>
  )
}
