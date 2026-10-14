import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CONFIG } from '../config'
import Icon from './Icon'

const SERVICES = [['domestic', 'Domestic cleaning'], ['commercial', 'Commercial cleaning'], ['industrial', 'Industrial cleaning'], ['end-of-tenancy', 'End of tenancy / property turnover'], ['other', 'Other']]
const input = 'w-full rounded-lg border border-border-subtle px-3 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none'
const Field = ({ id, label, children }) => <div><label className="block text-xs font-semibold mb-1.5" htmlFor={id}>{label}</label>{children}</div>

export default function QuoteForm() {
  const [params] = useSearchParams()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [service, setService] = useState(params.get('service') || 'domestic')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(CONFIG.formAction, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(e.target) })
      setStatus(res.ok ? 'sent' : 'error')
    } catch { setStatus('error') }
  }

  if (status === 'sent') return (
    <div className="text-center py-10">
      <Icon name="check_circle" className="text-success-emerald text-5xl" />
      <h3 className="text-xl font-semibold mt-3">Quote request sent</h3>
      <p className="text-sm text-on-surface-variant mt-2">We reply within one working day.</p>
    </div>
  )

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="name" label="Full name"><input required id="name" name="name" className={input} /></Field>
        <Field id="phone" label="Phone number"><input required id="phone" name="phone" type="tel" className={input} /></Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="email" label="Email address"><input required id="email" name="email" type="email" className={input} /></Field>
        <Field id="postcode" label="Property postcode or town"><input id="postcode" name="postcode" className={input} /></Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="service" label="Service type">
          <select id="service" name="service" className={input} value={service} onChange={(e) => setService(e.target.value)}>
            {SERVICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </Field>
        <Field id="date" label="Preferred date"><input id="date" name="preferred_date" type="date" className={input} /></Field>
      </div>
      <Field id="message" label="Tell us about the job"><textarea id="message" name="message" rows={4} className={input} placeholder="Property type, size, number of rooms, access, deadline" /></Field>
      <button type="submit" disabled={status === 'sending'} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-primary-container shadow-sm disabled:opacity-60">
        {status === 'sending' ? 'Sending' : 'Send quote request'}<Icon name="send" className="text-base" />
      </button>
      {status === 'error' && <p className="text-xs text-alert-coral">Something went wrong. Please try again or message us on WhatsApp.</p>}
      <p className="text-xs text-on-surface-variant">We reply within one working day. Your details are only used to respond to this enquiry. See our <Link to="/privacy" className="underline">privacy policy</Link>.</p>
    </form>
  )
}
