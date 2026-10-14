import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { CONFIG, WA_LINK } from "../config";
import Icon from "./Icon";
import Logo from "./Logo";

const SERVICES = [
  ["/services", "All services"],
  ["/services/domestic-cleaning", "Domestic Cleaning"],
  ["/services/commercial-cleaning", "Commercial Cleaning"],
  ["/services/industrial-cleaning", "Industrial Cleaning"],
];
const NAV = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["services"],
  ["/pricing", "Pricing"],
  ["/areas", "Areas We Cover"],
  ["/reviews", "Reviews"],
  ["/contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const { pathname } = useLocation();
  const onServices = pathname.startsWith("/services");
  const linkCls = (active) =>
    `text-sm font-semibold transition-colors whitespace-nowrap py-1 ${active ? "text-primary border-b-2 border-primary" : "text-on-surface-variant hover:text-primary border-b-2 border-transparent"}`;

  return (
    <>
      <div className="bg-primary text-on-primary py-2 px-6 lg:px-12 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-electric" />
            UK domestic, commercial and industrial property turnover specialists
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Icon name="verified" className="text-sm" /> Company Reg:{" "}
              {CONFIG.regNo}
            </span>
            <a
              href={WA_LINK}
              className="flex items-center gap-1.5 hover:underline"
            >
              <Icon name="chat" className="text-sm" /> WhatsApp{" "}
              {CONFIG.whatsapp}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 w-full z-50 bg-surface-pure shadow-sm border-b border-border-subtle">
        <div className="flex justify-between items-center px-6 lg:px-12 max-w-7xl mx-auto h-20 gap-6">
          <Link
            to="/"
            className="shrink-0 flex items-center"
            aria-label="Bork Services Ltd home"
          >
            <Logo height={46} />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map(([to, label]) =>
              to === "services" ? (
                <div
                  key="services"
                  className="relative"
                  onMouseEnter={() => setSvcOpen(true)}
                  onMouseLeave={() => setSvcOpen(false)}
                >
                  <button
                    className={`${linkCls(onServices)} inline-flex items-center gap-0.5`}
                    onClick={() => setSvcOpen(!svcOpen)}
                    aria-expanded={svcOpen}
                  >
                    Services
                    <Icon name="expand_more" className="text-base" />
                  </button>
                  {svcOpen && (
                    <div className="absolute left-0 top-full pt-3">
                      <div className="bg-surface-pure border border-border-subtle rounded-xl shadow-active py-2 w-56">
                        {SERVICES.map(([to, label]) => (
                          <NavLink
                            key={to}
                            to={to}
                            end
                            onClick={() => setSvcOpen(false)}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 text-sm font-semibold hover:bg-surface-subtle ${isActive ? "text-primary" : "text-on-surface"}`
                            }
                          >
                            {label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  end
                  className={({ isActive }) => linkCls(isActive)}
                >
                  {label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="hidden xl:flex items-center gap-2 text-sm font-bold hover:text-primary py-2 px-3 rounded-full hover:bg-surface-subtle"
              href={CONFIG.officeTel ? `tel:${CONFIG.officeTel}` : undefined}
            >
              <Icon name="call" className="text-primary" />
              {CONFIG.officePhone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary text-on-primary text-sm font-semibold px-5 py-3 rounded-full hover:bg-primary-container active:scale-95 transition-all shadow-sm whitespace-nowrap"
            >
              Get a Free Quote
            </Link>
            <button
              className="lg:hidden p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border-subtle bg-surface-pure px-6 py-4">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ...SERVICES,
              ["/pricing", "Pricing"],
              ["/areas", "Areas We Cover"],
              ["/reviews", "Reviews"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2.5 font-semibold border-b border-border-subtle/60 ${to.startsWith("/services/") ? "pl-4 text-on-surface-variant" : ""} ${isActive ? "text-primary" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
            <a href={WA_LINK} className="block py-2.5 text-primary font-bold">
              WhatsApp: {CONFIG.whatsapp}
            </a>
          </div>
        )}
      </header>
    </>
  );
}
