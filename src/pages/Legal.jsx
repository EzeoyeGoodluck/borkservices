import { CONFIG } from '../config'
import useSeo from '../components/useSeo'
import { PageHero, Section } from '../components/ui'

const Wrap = ({ children }) => <Section><article className="prose-bork max-w-3xl">{children}</article></Section>
const E = () => <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>

export function Privacy() {
  useSeo({ title: 'Privacy Policy | Bork Services Ltd', description: 'How Bork Services Ltd collects, uses and protects your personal data.', path: '/privacy' })
  return (
    <>
      <PageHero icon="lock" kicker="Legal" title="Privacy policy" lead="How we collect, use and protect your personal information. Last updated October 2026." />
      <Wrap>
        <h2>Who we are</h2><p>{CONFIG.company} (Company No. {CONFIG.regNo}) is the data controller for personal information collected through this website and in the course of providing our services. You can contact us at <E />.</p>
        <h2>What we collect</h2><p>When you request a quote or contact us we collect your name, phone number, email address, property address or postcode and the details of the work you need. If you become a customer we also hold invoicing details and, where agreed, access arrangements such as key or lockbox information.</p>
        <h2>Why we use it</h2><p>We use your information to respond to enquiries, provide quotes, schedule and deliver cleaning services, invoice for work completed and meet our legal obligations. The lawful bases are performance of a contract, our legitimate interest in running the business, and legal obligation.</p>
        <h2>Who we share it with</h2><p>We share information only with the staff and subcontractors delivering your service, our accounting and form-handling providers, and where required by law. We do not sell personal data.</p>
        <h2>How long we keep it</h2><p>Enquiry details are kept for 12 months. Customer and invoicing records are kept for six years to meet HMRC requirements.</p>
        <h2>Your rights</h2><p>You can ask for a copy of your data, ask us to correct or delete it, or object to how we use it. Email <E />. You can also complain to the Information Commissioner's Office at ico.org.uk.</p>
        <h2>Cookies</h2><p>This website uses only essential cookies and, if enabled, anonymised analytics. Third-party fonts are loaded from Google Fonts, which may record your IP address.</p>
      </Wrap>
    </>
  )
}

export function Terms() {
  useSeo({ title: 'Terms of Service | Bork Services Ltd', description: 'Terms and conditions for cleaning services provided by Bork Services Ltd.', path: '/terms' })
  return (
    <>
      <PageHero icon="gavel" kicker="Legal" title="Terms of service" lead="The terms that apply when you book a cleaning service with us. Last updated October 2026." />
      <Wrap>
        <h2>1. Quotes and booking</h2><p>Quotes are valid for 30 days and are based on the information you provide. If the property or scope differs materially from what was described, we will agree a revised price before continuing. A booking is confirmed when we send written confirmation of the date, scope and price.</p>
        <h2>2. Access and preparation</h2><p>You must provide safe access, working electricity and water. Where keys or codes are provided, we hold them under our keyholder procedure and return them on completion.</p>
        <h2>3. Cancellations</h2><p>You may cancel or reschedule free of charge with at least 48 hours' notice. Cancellations with less notice, or failure to provide access, may be charged at up to 50% of the quoted price.</p>
        <h2>4. Our guarantee</h2><p>If any item on the agreed checklist is not completed to standard, tell us within 48 hours of completion and we will return and correct it at no charge. This guarantee does not cover pre-existing damage, wear or staining that cannot be removed by standard cleaning methods.</p>
        <h2>5. Payment</h2><p>Domestic and one-off work is payable on completion unless agreed otherwise. Commercial and industrial contracts are invoiced monthly on 14-day terms. Late payments may incur statutory interest.</p>
        <h2>6. Liability</h2><p>We hold public and employer liability insurance. Our liability for loss or damage caused by our negligence is limited to the value of the service provided, except where the law does not permit such a limit. We are not liable for items left insecure or for pre-existing defects.</p>
        <h2>7. Staff</h2><p>You agree not to directly employ or engage any Bork Services staff member introduced through our services within 12 months of the last service without our written agreement.</p>
        <h2>8. Governing law</h2><p>These terms are governed by the laws of England and Wales.</p>
      </Wrap>
    </>
  )
}
