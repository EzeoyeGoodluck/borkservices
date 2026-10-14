import { CONFIG } from '../config'
import useSeo from '../components/useSeo'
import Icon from '../components/Icon'
import ReviewsWidget from '../components/ReviewsWidget'
import { PageHero, Section, CtaBand } from '../components/ui'

export default function Reviews() {
  useSeo({ title: 'Customer Reviews | Bork Services Ltd', description: 'Read verified Google reviews from Bork Services customers across the UK. Domestic, commercial and industrial cleaning rated by real clients.', path: '/reviews' })
  return (
    <>
      <PageHero icon="reviews" kicker="Customer reviews" title="What our customers say" lead="Every review shown here comes directly from our Google Business Profile. We do not write, edit or filter them." />
      <Section>
        <ReviewsWidget limit={30} showLink={false} />
        <div className="text-center mt-10"><a href={CONFIG.googleReviewUrl} className="inline-flex items-center gap-2 bg-primary text-on-primary text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-primary-container">Leave a review on Google<Icon name="open_in_new" className="text-base" /></a></div>
      </Section>
      <CtaBand />
    </>
  )
}
