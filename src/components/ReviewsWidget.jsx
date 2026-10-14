import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

// After launch: populate /public/assets/reviews.json from the Google Business Profile
// (Places API "reviews" field, or a scheduled export). Shape:
// { "rating": 4.9, "count": 37, "reviews": [ { "author": "Name", "rating": 5, "text": "...", "date": "2026-10-01" } ] }
const Stars = ({ n }) => <div className="flex items-center gap-0.5">{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" fill className={`text-base ${i < n ? 'text-accent-electric' : 'text-outline-variant'}`} />)}</div>

export default function ReviewsWidget({ limit = 6, showLink = true }) {
  const [data, setData] = useState(null)
  useEffect(() => { fetch('/assets/reviews.json', { cache: 'no-store' }).then((r) => (r.ok ? r.json() : null)).then(setData).catch(() => {}) }, [])
  const reviews = data?.reviews || []

  if (!reviews.length) return (
    <div className="bg-surface-pure border border-dashed border-outline-variant rounded-xl p-8 text-center text-on-surface-variant text-sm max-w-2xl mx-auto">
      <Icon name="reviews" className="text-primary text-3xl" />
      <p className="mt-2">Verified Google reviews will appear here once our Google Business Profile is live.</p>
      {showLink && <Link to="/reviews" className="inline-block mt-3 text-primary text-sm font-semibold hover:underline">About our reviews</Link>}
    </div>
  )

  return (
    <>
      {data.rating && <p className="text-lg font-semibold mb-6 flex items-center gap-2"><Stars n={Math.round(data.rating)} />{data.rating.toFixed(1)} from {data.count} Google reviews</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.slice(0, limit).map((r, i) => (
          <figure key={i} className="bg-surface-pure border border-border-subtle rounded-xl p-6 shadow-clean flex flex-col">
            <div className="mb-3"><Stars n={r.rating} /></div>
            <blockquote className="text-sm leading-relaxed flex-1">{r.text}</blockquote>
            <figcaption className="mt-4 text-xs font-semibold text-on-surface-variant">{r.author}{r.date && <span className="opacity-70"> · {r.date}</span>}</figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}
