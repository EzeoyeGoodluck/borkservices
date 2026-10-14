import { Link } from 'react-router-dom'
import { WA_LINK, CONFIG } from '../config'
import Icon from './Icon'

export const Section = ({ children, bg = '', id }) => (
  <section className={bg} id={id}><div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">{children}</div></section>
)

export const H2 = ({ children, sub }) => (
  <>
    <h2 className="text-3xl font-bold tracking-tight">{children}</h2>
    {sub && <p className="text-base text-on-surface-variant max-w-2xl mt-3">{sub}</p>}
  </>
)

export const BtnPrimary = ({ to, href, children, className = '' }) => {
  const c = `inline-flex items-center justify-center gap-2 bg-primary text-on-primary text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-primary-container shadow-sm active:scale-95 transition-all ${className}`
  return to ? <Link to={to} className={c}>{children}</Link> : <a href={href} className={c}>{children}</a>
}
export const BtnOutline = ({ to, href, children, className = '' }) => {
  const c = `inline-flex items-center justify-center gap-2 border-2 border-on-surface bg-surface-pure text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-surface-subtle active:scale-95 transition-all ${className}`
  return to ? <Link to={to} className={c}>{children}</Link> : <a href={href} className={c}>{children}</a>
}

export function PageHero({ icon, kicker, title, lead, cta = 'Get a Free Quote', photo, alt = '' }) {
  return (
    <section className="bg-surface-subtle border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className={photo ? 'lg:col-span-7' : 'lg:col-span-12'}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/60 border border-border-subtle text-xs font-semibold text-on-secondary-fixed mb-5">
            <Icon name={icon} className="text-primary text-base" />{kicker}
          </div>
          <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight max-w-4xl leading-tight">{title}</h1>
          <p className="text-base text-on-surface-variant max-w-2xl mt-5">{lead}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <BtnPrimary to="/contact">{cta}<Icon name="arrow_forward" className="text-base" /></BtnPrimary>
            <BtnOutline href={WA_LINK}><Icon name="chat" className="text-primary" />Message on WhatsApp</BtnOutline>
          </div>
        </div>
        {photo && <div className="lg:col-span-5"><div className="rounded-xl overflow-hidden shadow-active aspect-[4/3] lg:aspect-[5/4]"><img src={photo} alt={alt} className="w-full h-full object-cover" /></div></div>}
      </div>
    </section>
  )
}

export const FeatureGrid = ({ items, cols = 4 }) => (
  <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-4'} gap-6`}>
    {items.map(([icon, title, body]) => (
      <div key={title} className="bg-surface-pure border border-border-subtle rounded-xl p-6 shadow-clean">
        <div className="w-11 h-11 rounded-lg bg-secondary-container/70 flex items-center justify-center text-primary mb-4"><Icon name={icon} /></div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-on-surface-variant leading-relaxed">{body}</p>
      </div>
    ))}
  </div>
)

export const Checklist = ({ items }) => (
  <ul className="space-y-3">{items.map((i) => (
    <li key={i} className="flex items-start gap-3 text-sm"><Icon name="check_circle" className="text-success-emerald text-xl shrink-0" /><span>{i}</span></li>
  ))}</ul>
)

export const CtaBand = ({ title = 'Ready for a spotless result?', body = 'Tell us about the property or site and we will send a clear, itemised quote. No obligation, no hidden fees.' }) => (
  <section className="bg-primary text-on-primary">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
      <div><h2 className="text-3xl font-bold">{title}</h2><p className="text-base text-on-primary/80 mt-2 max-w-xl">{body}</p></div>
      <div className="flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-surface-pure text-primary text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-surface-subtle">Request a quote</Link>
        <a href={WA_LINK} className="inline-flex items-center gap-2 border-2 border-on-primary/50 text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-primary-container">WhatsApp us</a>
      </div>
    </div>
  </section>
)

export const ContactList = ({ large }) => {
  const Tel = ({ num, label }) => num ? <a href={`tel:${num}`} className="hover:text-primary">{label}</a> : <span>{label}</span>
  return (
    <ul className={`space-y-4 ${large ? 'text-base' : 'text-sm'}`}>
      <li className="flex items-center gap-3"><Icon name="call" className="text-primary" />Office: <Tel num={CONFIG.officeTel} label={CONFIG.officePhone} /></li>
      <li className="flex items-center gap-3"><Icon name="smartphone" className="text-primary" />Mobile: <Tel num={CONFIG.mobileTel} label={CONFIG.mobilePhone} /></li>
      <li className="flex items-center gap-3"><Icon name="chat" className="text-primary" /><a href={WA_LINK} className="hover:text-primary">WhatsApp {CONFIG.whatsapp}</a></li>
      <li className="flex items-center gap-3"><Icon name="mail" className="text-primary" /><a href={`mailto:${CONFIG.email}`} className="hover:text-primary">{CONFIG.email}</a></li>
    </ul>
  )
}
