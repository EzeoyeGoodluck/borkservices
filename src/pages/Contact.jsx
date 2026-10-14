import { CONFIG, WA_LINK, PHOTOS } from '../config'
import useSeo from '../components/useSeo'
import Icon from '../components/Icon'
import QuoteForm from '../components/QuoteForm'
import { PageHero, Section } from '../components/ui'

const Row = ({ icon, label, children }) => <li className="flex items-start gap-3"><Icon name={icon} className="text-primary mt-0.5" /><div><p className="text-xs font-semibold text-on-surface-variant">{label}</p>{children}</div></li>
const Tel = ({ num, label }) => num ? <a href={`tel:${num}`} className="hover:text-primary">{label}</a> : <span>{label}</span>

export default function Contact() {
  useSeo({ title: 'Contact Bork Services Ltd | Free Cleaning Quote UK', description: 'Contact Bork Services for a free, itemised cleaning quote. Call the office, send a message or WhatsApp us. Domestic, commercial and industrial cleaning across the UK.', path: '/contact' })
  return (
    <>
      <PageHero icon="mail" kicker="Contact us" title="Get a free, itemised quote" lead="Tell us about the property or site and we reply within one working day. For larger commercial and industrial jobs we arrange a free survey." cta="Send an enquiry" photo={PHOTOS.contact} alt="Floor cleaning in progress" />
      <Section bg="bg-surface-subtle"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 bg-surface-pure border border-border-subtle rounded-xl p-8 shadow-clean"><h2 className="text-xl font-semibold mb-6">Send your enquiry</h2><QuoteForm /></div>
        <div className="lg:col-span-5 space-y-8">
          <div><h2 className="text-xl font-semibold mb-4">Talk to us</h2><ul className="space-y-4 text-base">
            <Row icon="call" label="Office"><Tel num={CONFIG.officeTel} label={CONFIG.officePhone} /></Row>
            <Row icon="smartphone" label="Mobile"><Tel num={CONFIG.mobileTel} label={CONFIG.mobilePhone} /></Row>
            <Row icon="chat" label="WhatsApp (messages only)"><a href={WA_LINK} className="hover:text-primary">{CONFIG.whatsapp}</a></Row>
            <Row icon="mail" label="Email"><a href={`mailto:${CONFIG.email}`} className="hover:text-primary">{CONFIG.email}</a></Row>
            <Row icon="location_on" label="Registered office"><p>{CONFIG.company}<br />{CONFIG.addressLines.map((a) => <span key={a}>{a}<br /></span>)}</p></Row>
            <Row icon="schedule" label="Office hours"><p>Monday to Friday, 8am to 6pm<br />Cleaning teams operate 7 days a week</p></Row>
          </ul></div>
          {/* MAP TODO: replace with the correct Google Maps embed once the address is confirmed */}
          <div className="rounded-xl overflow-hidden border border-border-subtle bg-surface-subtle aspect-video flex items-center justify-center text-on-surface-variant text-sm">Map will be added once the registered address is confirmed</div>
        </div>
      </div></Section>
    </>
  )
}
