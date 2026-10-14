import { CONFIG, PHOTOS } from '../config'
import useSeo from '../components/useSeo'
import { PageHero, Section, H2, Checklist } from '../components/ui'

export default function Careers() {
  useSeo({ title: 'Careers | Join Bork Services Ltd', description: 'Cleaning jobs across the UK with Bork Services Ltd. Domestic, commercial and industrial cleaning roles with training, fair pay and flexible hours.', path: '/careers' })
  return (
    <>
      <PageHero icon="work" kicker="Careers" title="Join a team that does the job properly" lead="We hire cleaners and supervisors across the UK for domestic, commercial and industrial work. Full training, uniform and equipment provided." cta="Email your CV" photo={PHOTOS.careers} alt="Bork Services team member at work" />
      <Section><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div><H2>What we offer</H2><div className="mt-6"><Checklist items={['Fair hourly pay, paid weekly or monthly', 'Flexible shifts including evenings and weekends', 'Full training, uniform and PPE provided', 'Progression to supervisor and site lead roles', 'Work close to home in your city']} /></div></div>
        <div><H2>What we ask</H2><div className="mt-6"><Checklist items={['Right to work in the UK', 'Willingness to complete a background check', 'Reliability: turning up on time matters more than experience', 'Attention to detail and pride in a finished job']} /></div>
          <p className="text-sm text-on-surface-variant mt-8">Send your CV and the city you want to work in to <a href={`mailto:${CONFIG.email}?subject=Job application`} className="text-primary underline">{CONFIG.email}</a>.</p></div>
      </div></Section>
    </>
  )
}
