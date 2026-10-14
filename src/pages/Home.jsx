import { Link } from "react-router-dom";
import { CITIES, PHOTOS } from "../config";
import useSeo from "../components/useSeo";
import Icon from "../components/Icon";
import ServiceCards from "../components/ServiceCards";
import QuoteForm from "../components/QuoteForm";
import ReviewsWidget from "../components/ReviewsWidget";
import {
  Section,
  H2,
  BtnPrimary,
  BtnOutline,
  FeatureGrid,
  ContactList,
} from "../components/ui";

const Stat = ({ icon, title, sub }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-surface-variant/60 flex items-center justify-center text-primary">
      <Icon name={icon} />
    </div>
    <div>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-xs text-on-surface-variant">{sub}</p>
    </div>
  </div>
);
const Step = ({ n, title, body }) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold shrink-0">
      {n}
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-on-surface-variant">{body}</p>
    </div>
  </div>
);

export default function Home() {
  useSeo({
    title:
      "Bork Services Ltd | Domestic, Commercial and Industrial Cleaning Across the UK",
    description:
      "Bork Services is a Leicester-based cleaning company working across the UK. Domestic, commercial and industrial cleaning to a written scope, by a vetted team, inspected before handover. Free quotes.",
    path: "/",
  });
  return (
    <>
      <section className="relative overflow-hidden bg-surface-subtle">
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-secondary-container/40 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary-container/60 border border-border-subtle shadow-sm text-xs font-bold text-on-secondary-fixed">
              <Icon name="location_on" className="text-primary text-base" />
              Started in Leicester, working across the UK
            </div>
            <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Domestic, commercial and industrial cleaning across the UK
            </h1>
            <p className="text-base text-on-surface-variant max-w-2xl leading-relaxed">
              Bork Services cleans homes, offices, warehouses and factories
              anywhere in the UK. Every job runs to a written scope, is done by
              a vetted team, and is inspected before we hand it back.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <BtnPrimary to="/contact">
                Get a free quote
                <Icon name="arrow_forward" className="text-base" />
              </BtnPrimary>
              <BtnOutline to="/services">
                <Icon name="view_list" className="text-primary" />
                See our services
              </BtnOutline>
            </div>
            <div className="pt-8 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Stat icon="public" title="UK-wide" sub="Started in Leicester" />
              <Stat
                icon="badge"
                title="Vetted teams"
                sub="Supervised on every job"
              />
              <Stat
                icon="checklist"
                title="Written scope"
                sub="Agreed before we start"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-active aspect-[4/5]">
              <img
                alt="Professional cleaner arriving at a property"
                className="absolute inset-0 w-full h-full object-cover"
                src={PHOTOS.hero}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-on-surface/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 space-y-3">
                <div className="bg-surface-pure/95 rounded-lg p-4 flex items-center gap-3">
                  <Icon name="description" className="text-primary" />
                  <div>
                    <p className="text-sm font-semibold">Written scope</p>
                    <p className="text-xs text-on-surface-variant">
                      You see what we will do before we do it
                    </p>
                  </div>
                </div>
                <div className="bg-surface-pure/95 rounded-lg p-4 flex items-center gap-3">
                  <Icon name="shield" className="text-primary" />
                  <div>
                    <p className="text-sm font-semibold">Inspected handover</p>
                    <p className="text-xs text-on-surface-variant">
                      Checked against the scope before sign-off
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="services">
        <H2 sub="Homes, offices or industrial sites: the same vetted teams, the same checklists and the same written quote.">
          Three services, one standard
        </H2>
        <div className="mt-10">
          <ServiceCards />
        </div>
      </Section>

      <Section bg="bg-surface-subtle" id="why-choose">
        <H2>Why clients choose Bork Services</H2>
        <div className="mt-10">
          <FeatureGrid
            items={[
              [
                "groups",
                "Vetted, supervised teams",
                "Every cleaner is vetted, trained to our checklists and supervised on site.",
              ],
              [
                "calendar_month",
                "Scheduling that fits you",
                "One-off cleans or regular contracts, scheduled around your household or working day.",
              ],
              [
                "receipt_long",
                "Clear pricing",
                "A written quote before work starts, so you know what you are paying for.",
              ],
              [
                "verified",
                "Inspected handover",
                "Work is checked against the agreed scope before we sign it off with you.",
              ],
            ]}
          />
        </div>
      </Section>

      <Section>
        <H2>How it works</H2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <Step
            n="1"
            title="Request a quote"
            body="Use the form or get in touch and tell us about the property or site. For larger sites we arrange a survey first."
          />
          <Step
            n="2"
            title="We agree the scope"
            body="You get a written scope and price. Once agreed, a vetted team is booked with the right equipment."
          />
          <Step
            n="3"
            title="Inspected handover"
            body="A supervisor checks the work against the scope and signs it off with you."
          />
        </div>
      </Section>

      <Section bg="bg-surface-subtle" id="areas">
        <H2 sub="Started in Leicester and now working across the UK. If your location is not listed, ask: we travel for contracts.">
          Where we work
        </H2>
        <div className="flex flex-wrap gap-3 mt-8">
          {CITIES.map((c) => (
            <Link
              key={c}
              to={`/areas#${c.toLowerCase()}`}
              className="px-4 py-2 rounded-full bg-surface-pure border border-border-subtle text-xs font-semibold hover:border-primary hover:text-primary"
            >
              {c}
            </Link>
          ))}
        </div>
        <Link
          to="/areas"
          className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-6 hover:underline"
        >
          See all areas
          <Icon name="arrow_forward" className="text-base" />
        </Link>
      </Section>

      <Section id="reviews">
        <H2>What our customers say</H2>
        <div className="mt-8">
          <ReviewsWidget />
        </div>
      </Section>

      <Section bg="bg-surface-subtle" id="quote">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <H2 sub="Tell us about the property or site and we will come back with a written price.">
              Request a free quote
            </H2>
            <div className="mt-8">
              <ContactList />
            </div>
          </div>
          <div className="lg:col-span-7 bg-surface-pure border border-border-subtle rounded-xl p-8 shadow-clean">
            <QuoteForm />
          </div>
        </div>
      </Section>
    </>
  );
}
