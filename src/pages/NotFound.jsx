import { Link } from 'react-router-dom'
import useSeo from '../components/useSeo'
import { Section } from '../components/ui'

export default function NotFound() {
  useSeo({ title: 'Page not found | Bork Services Ltd', description: 'The page you were looking for does not exist.', path: '/404' })
  return (
    <Section><div className="text-center py-10">
      <h1 className="text-5xl font-extrabold">Page not found</h1>
      <p className="text-base text-on-surface-variant mt-4">That link is out of date. Try one of the pages below.</p>
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        <Link to="/" className="px-5 py-2.5 rounded-full bg-primary text-on-primary text-sm font-semibold">Home</Link>
        <Link to="/services" className="px-5 py-2.5 rounded-full border border-border-subtle text-sm font-semibold">Services</Link>
        <Link to="/contact" className="px-5 py-2.5 rounded-full border border-border-subtle text-sm font-semibold">Contact</Link>
      </div>
    </div></Section>
  )
}
