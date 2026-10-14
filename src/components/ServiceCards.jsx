import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services'
import Icon from './Icon'

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {SERVICES.map((s) => (
        <Link key={s.slug} to={`/services/${s.slug}`} className="group bg-surface-pure border border-border-subtle rounded-xl overflow-hidden shadow-clean hover:shadow-active hover:border-primary/40 transition-all flex flex-col">
          <div className="aspect-[16/10] overflow-hidden bg-surface-subtle"><img src={s.photo} alt={s.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" loading="lazy" /></div>
          <div className="p-7 flex flex-col flex-1">
            <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center mb-5"><Icon name={s.icon} /></div>
            <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-5">{s.summary}</p>
            <ul className="space-y-2 mb-6">{s.bullets.map((b) => <li key={b} className="flex items-center gap-2 text-sm text-on-surface-variant"><Icon name="check" className="text-success-emerald text-base" />{b}</li>)}</ul>
            <span className="mt-auto inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:underline">Learn more<Icon name="arrow_forward" className="text-base" /></span>
          </div>
        </Link>
      ))}
    </div>
  )
}
