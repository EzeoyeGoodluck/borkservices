import { PHOTOS } from '../config'
import useSeo from '../components/useSeo'
import { PageHero, Section, H2, FeatureGrid, CtaBand } from '../components/ui'

// PRICES TODO: replace the "£[TBC]" values with the official price list from Chukwudi.
const ROWS = [
  ['Regular domestic clean', 'Weekly or fortnightly, minimum 2 hours', 'From £[TBC] per hour'],
  ['One-off deep clean', 'Whole property including inside oven', 'From £[TBC] (studio / 1 bed)'],
  ['End of tenancy clean', 'Studio or 1 bed', 'From £[TBC]'],
  ['', '2 bed', 'From £[TBC]'],
  ['', '3 bed', 'From £[TBC]'],
  ['', '4+ bed and HMO', 'Quoted per property'],
  ['Commercial contract', 'Offices, retail, hospitality, healthcare', 'From £[TBC] per hour per operative'],
  ['Industrial cleaning', 'Warehouses, factories, sites', 'Quoted after free site survey'],
  ['Add-ons', 'Carpet cleaning, oven, windows, pressure washing', 'From £[TBC] per item'],
]

export default function Pricing() {
  useSeo({ title: 'Cleaning Prices and Pricing Overview UK | Bork Services Ltd', description: 'Transparent guide pricing for domestic, end of tenancy, commercial and industrial cleaning from Bork Services. Itemised quotes, no hidden fees.', path: '/pricing' })
  return (
    <>
      <PageHero icon="receipt_long" kicker="Pricing" title="Clear guide prices, itemised quotes" lead="The figures below are a guide. Every job is confirmed with an itemised quote before work starts, and the price does not change unless you change the scope." photo={PHOTOS.pricing} alt="Cleaning products and equipment" />
      <Section>
        <div className="bg-surface-pure border border-border-subtle rounded-xl overflow-hidden shadow-clean"><div className="overflow-x-auto"><table className="w-full text-left">
          <thead className="bg-surface-subtle"><tr>{['Service', 'Typical scope', 'Guide price'].map((h) => <th key={h} className="px-6 py-4 text-sm font-semibold">{h}</th>)}</tr></thead>
          <tbody className="divide-y divide-border-subtle text-sm">{ROWS.map(([a, b, c], i) => <tr key={i}><td className="px-6 py-4 font-semibold">{a}</td><td className="px-6 py-4 text-on-surface-variant">{b}</td><td className="px-6 py-4 font-bold text-primary">{c}</td></tr>)}</tbody>
        </table></div></div>
        <p className="text-xs text-on-surface-variant mt-4">Guide prices include equipment, products and VAT where applicable. Travel outside our core cities may carry a small charge, confirmed in your quote.</p>
      </Section>
      <Section bg="bg-surface-subtle"><H2>What affects the price</H2><div className="mt-8"><FeatureGrid items={[
        ['square_foot', 'Size and layout', 'Number of rooms, bathrooms and total floor area.'],
        ['cleaning_services', 'Condition', 'A property that has not been cleaned in a while takes longer than a maintained one.'],
        ['add_circle', 'Add-ons', 'Carpets, ovens, external windows and pressure washing are itemised separately.'],
        ['location_on', 'Location and access', 'Distance from our nearest team, parking and any access equipment required.'],
      ]} /></div></Section>
      <CtaBand title="Want an exact price?" body="Send us the property details and we will reply with an itemised quote within one working day." />
    </>
  )
}
