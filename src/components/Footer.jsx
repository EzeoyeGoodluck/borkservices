import { Link } from 'react-router-dom'
import { CONFIG, WA_LINK, CITIES } from '../config'
import Icon from './Icon'
import Logo from './Logo'

const Tel = ({ num, label }) => num ? <a href={`tel:${num}`} className="hover:text-primary">{label}</a> : <span>{label}</span>
const L = ({ to, children }) => <li><Link className="hover:text-on-surface hover:underline" to={to}>{children}</Link></li>

export default function Footer() {
  return (
    <footer className="bg-surface-subtle border-t border-border-subtle mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <Link to="/" className="inline-block"><Logo height={40} /></Link>
          <p className="text-xs text-on-surface-variant leading-relaxed">Professional domestic, commercial and industrial cleaning across the UK. Headquartered in Leicester, operating nationwide.</p>
          <ul className="space-y-2 text-xs text-on-surface-variant pt-2">
            <li className="flex items-center gap-2"><Icon name="call" className="text-primary text-sm" />Office: <Tel num={CONFIG.officeTel} label={CONFIG.officePhone} /></li>
            <li className="flex items-center gap-2"><Icon name="smartphone" className="text-primary text-sm" />Mobile: <Tel num={CONFIG.mobileTel} label={CONFIG.mobilePhone} /></li>
            <li className="flex items-center gap-2"><Icon name="chat" className="text-primary text-sm" />WhatsApp: <a href={WA_LINK} className="hover:text-primary">{CONFIG.whatsapp}</a></li>
            <li className="flex items-center gap-2"><Icon name="mail" className="text-primary text-sm" /><a href={`mailto:${CONFIG.email}`} className="hover:text-primary">{CONFIG.email}</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-lg font-semibold">Services</p>
          <ul className="space-y-2.5 text-xs font-semibold text-on-surface-variant">
            <L to="/services/domestic-cleaning">Domestic Cleaning</L>
            <L to="/services/commercial-cleaning">Commercial Cleaning</L>
            <L to="/services/industrial-cleaning">Industrial Cleaning</L>
            <L to="/services#end-of-tenancy">End of Tenancy and Property Turnover</L>
            <L to="/pricing">Pricing Overview</L>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-lg font-semibold">Company</p>
          <ul className="space-y-2.5 text-xs font-semibold text-on-surface-variant">
            <L to="/about">About Bork Services</L>
            <L to="/reviews">Customer Reviews</L>
            <L to="/areas">Areas We Cover</L>
            <L to="/careers">Careers</L>
            <L to="/contact">Contact and Free Quote</L>
          </ul>
          <p className="pt-3 text-xs text-on-surface-variant leading-relaxed">Serving {CITIES.slice(0, 8).map((c, i) => <span key={c}>{i > 0 && ', '}<Link to={`/areas#${c.toLowerCase()}`} className="hover:underline">{c}</Link></span>)} and more.</p>
        </div>
        <div className="space-y-3">
          <p className="text-lg font-semibold">Legal</p>
          <ul className="space-y-2.5 text-xs font-semibold text-on-surface-variant">
            <L to="/privacy">Privacy Policy</L>
            <L to="/terms">Terms of Service</L>
          </ul>
          <div className="pt-4 border-t border-border-subtle text-xs text-on-surface-variant">
            <p className="font-bold">Registered office</p>
            <p>{CONFIG.company}<br />{CONFIG.addressLines.map((a) => <span key={a}>{a}<br /></span>)}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border-subtle py-6 px-6 lg:px-12 bg-surface-pure">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-on-surface-variant gap-4">
          <p>© {CONFIG.year} {CONFIG.company}. Company Reg No. {CONFIG.regNo}. Registered in England and Wales. All rights reserved.</p>
          <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-success-emerald" /> Operating UK-wide</span>
        </div>
      </div>
    </footer>
  )
}
