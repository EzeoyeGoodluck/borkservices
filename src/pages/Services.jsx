import { Link } from 'react-router-dom'
import { PHOTOS } from '../config'
import useSeo from '../components/useSeo'
import Icon from '../components/Icon'
import ServiceCards from '../components/ServiceCards'
import { PageHero, Section, H2, Checklist, CtaBand } from '../components/ui'

export default function Services() {
  useSeo({ title: 'Cleaning Services | Domestic, Commercial and Industrial | Bork Services Ltd', description: "Explore Bork Services' domestic, commercial, industrial and end of tenancy cleaning services, available across the UK with itemised quotes and an inspection-pass guarantee.", path: '/services' })
  return (
    <>
      <PageHero icon="view_list" kicker="Our services" title="Cleaning services for every property type" lead="Domestic, commercial and industrial cleaning delivered UK-wide. Pick a service below or contact us for a bespoke scope." photo={PHOTOS.tenancy} alt="Housekeeping trolley ready for a property turnover" />
      <Section><ServiceCards /></Section>
      <Section bg="bg-surface-subtle" id="end-of-tenancy"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div><H2 sub="Our original specialism. For landlords, letting agents, student accommodation providers and build-to-rent operators who need a property inventory-ready between occupants.">End of tenancy and property turnover</H2><div className="mt-6"><Checklist items={[
          'Full kitchen degrease including inside oven, hob, extractor and fridge', 'Bathrooms descaled, grout cleaned, sanitaryware disinfected', 'Skirting, doors, switches, sockets and light fittings wiped', 'Inside windows, sills and frames cleaned', 'Carpets vacuumed with optional professional carpet cleaning', 'Key collection and return, inventory checklist sign-off',
        ]} /></div></div>
        <div className="bg-surface-pure border border-border-subtle rounded-xl p-8 shadow-clean"><H2>Add-on services</H2><div className="mt-5"><Checklist items={[
          'Carpet and upholstery cleaning', 'Oven deep clean', 'Window cleaning, internal and external', 'Pressure washing of paths, patios and forecourts', 'Waste removal and void property clearance', 'After-builders clean', 'Laundry and linen change for serviced accommodation',
        ]} /></div><Link to="/pricing" className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-6 hover:underline">See pricing overview<Icon name="arrow_forward" className="text-base" /></Link></div>
      </div></Section>
      <CtaBand />
    </>
  )
}
