import { CONFIG, PHOTOS } from "../config";
import useSeo from "../components/useSeo";
import { PageHero, Section, H2, FeatureGrid, CtaBand } from "../components/ui";

export default function About() {
  useSeo({
    title: "About Bork Services Ltd | UK Cleaning Company Since 2014",
    description:
      "Bork Services Ltd is a UK-registered cleaning company headquartered in Leicester, delivering domestic, commercial and industrial cleaning nationwide with over 10 years of experience.",
    path: "/about",
  });
  return (
    <>
      <PageHero
        icon="info"
        kicker="About us"
        title="A cleaning company built on checklists, not promises"
        lead="Bork Services started in Leicester over a decade ago cleaning rental properties between tenancies. Today we run domestic, commercial and industrial contracts across the UK with the same discipline: a written scope, a vetted team and an inspected handover."
        photo={PHOTOS.about}
        alt="Bork Services cleaner detailing furniture"
      />
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <H2>Who we are</H2>
            <div className="space-y-4 mt-5 text-base text-on-surface-variant leading-relaxed">
              <p>
                Bork Services Ltd is a registered UK company (Company No.{" "}
                {CONFIG.regNo}) headquartered in Leicester. We began with
                property turnover cleaning for landlords and letting agents,
                where a missed detail costs someone their deposit. That
                inspection-first mindset now runs through everything we do.
              </p>
              <p>
                Our teams work across three divisions: domestic cleaning for
                homes and HMOs, commercial cleaning for offices and managed
                premises, and industrial cleaning for warehouses, factories and
                construction sites. Each division has its own trained staff,
                equipment and compliance documentation.
              </p>
              <p>
                We are fully insured, our staff are background checked, and we
                use eco-friendly products wherever the job allows.
              </p>
            </div>
          </div>
          <FeatureGrid
            cols={2}
            items={[
              [
                "workspace_premium",
                "Established",
                "From Leicester to nationwide.",
              ],
              [
                "security",
                "Fully insured",
                "Public and employer liability cover for every contract.",
              ],
              [
                "policy",
                "Documented",
                "RAMS, COSHH and site-specific checklists on request.",
              ],
              [
                "eco",
                "Eco-aware",
                "Low-impact, hypoallergenic products as the default.",
              ],
            ]}
          />
        </div>
      </Section>
      <Section bg="bg-surface-subtle">
        <H2>Our values</H2>
        <div className="mt-10">
          <FeatureGrid
            items={[
              [
                "fact_check",
                "Do it to the checklist",
                "Every job has a written scope. The team signs it off, then you do.",
              ],
              [
                "handshake",
                "Say what it costs",
                "Quotes are itemised up front. If the scope changes, the price is agreed before work continues.",
              ],
              [
                "schedule",
                "Turn up when agreed",
                "Property turnovers and contract visits run to time. If we are late, you hear from us first.",
              ],
              [
                "replay",
                "Fix what we miss",
                "If anything fails inspection, we return and correct it free of charge.",
              ],
            ]}
          />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
