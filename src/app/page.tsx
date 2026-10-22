import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { HeroOrbit } from "@/components/hero-orbit";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SpotlightPanel } from "@/components/spotlight-panel";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { whatsappHref } from "@/lib/site-config";
import { containerClass } from "@/lib/styles";

const marqueeServices = [
  "Websites",
  "E-commerce",
  "Web apps",
  "Android & iOS apps",
  "SEO",
  "Social media",
  "Paid ads",
  "Content marketing",
];

export default function Home() {
  return (
    <main>
      <section className="hero-section" id="top">
        <div className="hero-backdrop-grid" aria-hidden="true" />
        <div className="hero-backdrop-glow hero-backdrop-glow--one" aria-hidden="true" />
        <div className="hero-backdrop-glow hero-backdrop-glow--two" aria-hidden="true" />
        <SiteHeader />

        <div className={`${containerClass} hero-layout`}>
          <Reveal className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="eyebrow-signal" />
              SLASH LOGIC <span className="eyebrow-divider">/</span> DIGITAL SERVICES
            </p>
            <h1>
              Everything
              <br />
              your business
              <br />
              <span className="hero-heading-accent">needs online.</span>
            </h1>
            <p className="hero-description">
              Websites, e-commerce, web and mobile apps, and digital marketing services for
              businesses of every kind.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">
                <span>Explore services</span>
                <span className="button-icon"><ArrowDownRight size={17} strokeWidth={1.8} /></span>
              </a>
              <a className="text-link text-link--light" href="#contact">
                Start a conversation <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal className="hero-visual-wrap" delay={120}>
            <HeroOrbit />
          </Reveal>

          <div className="hero-floor">
            <span className="hero-floor-note">DIGITAL, CONNECTED.</span>
            <a className="scroll-cue" href="#services">
              <span>Scroll to explore</span>
              <span className="scroll-cue-icon"><ArrowDown size={15} aria-hidden="true" /></span>
            </a>
            <span className="hero-floor-note hero-floor-note--right">WEB <i>/</i> APPS <i>/</i> GROWTH</span>
          </div>
        </div>
        <div className="hero-edge-mark" aria-hidden="true">SL<span>/</span>01</div>
      </section>

      <div className="service-marquee" aria-label="Slash Logic services">
        <span className="sr-only">{marqueeServices.join(", ")}</span>
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {marqueeServices.map((service) => (
                <span className="marquee-item" key={service}>
                  <span>{service}</span>
                  <i aria-hidden="true">/</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="services-section section-padding" id="services">
        <div className={containerClass}>
          <Reveal className="section-heading services-heading">
            <div className="section-kicker"><span>01</span> / CAPABILITIES</div>
            <div className="section-heading-main">
              <h2>From digital foundation <span>to audience.</span></h2>
            </div>
            <div className="section-heading-aside">WEB <i>·</i> APPS <i>·</i> MARKETING</div>
          </Reveal>

          <div className="services-bento">
            <Reveal className="service-reveal service-reveal--web">
              <SpotlightPanel className="service-tile service-tile--web">
                <div className="tile-topline">
                  <span>01 <i>/</i> WEB DEVELOPMENT</span>
                  <span className="tile-index-mark">↗</span>
                </div>
                <div className="web-tile-content">
                  <div className="tile-copy tile-copy--web">
                    <h3>Digital<br />foundations.</h3>
                    <p>Choose what you need built.</p>
                    <ul className="service-chip-list service-chip-list--light">
                      <li>Websites</li>
                      <li>E-commerce</li>
                      <li>Web apps</li>
                    </ul>
                  </div>
                  <div className="web-browser-art" aria-hidden="true">
                    <div className="browser-topbar">
                      <span className="browser-dots"><i /><i /><i /></span>
                      <span className="browser-address">yourbusiness.site</span>
                      <span className="browser-menu-mark">•••</span>
                    </div>
                    <div className="browser-page">
                      <div className="browser-page-nav">
                        <span className="browser-logo-mark">S<span>/</span></span>
                        <span className="browser-nav-lines"><i /><i /><i /></span>
                      </div>
                      <div className="browser-hero-copy">
                        <i className="browser-line browser-line--wide" />
                        <i className="browser-line browser-line--short" />
                        <i className="browser-button-mark" />
                      </div>
                      <div className="browser-picture">
                        <span className="browser-picture-orbit" />
                        <span className="browser-picture-slash">/</span>
                        <span className="browser-picture-dot" />
                      </div>
                      <div className="browser-footer-lines"><i /><i /><i /></div>
                    </div>
                  </div>
                </div>
              </SpotlightPanel>
            </Reveal>

            <Reveal className="service-reveal service-reveal--apps" delay={90}>
              <SpotlightPanel className="service-tile service-tile--apps">
                <div className="tile-topline tile-topline--dark">
                  <span>02 <i>/</i> APP DEVELOPMENT</span>
                  <span className="tile-index-mark">↗</span>
                </div>
                <div className="app-tile-content">
                  <div className="tile-copy tile-copy--apps">
                    <h3>Made for<br />mobile.</h3>
                    <p>App development for</p>
                    <ul className="service-chip-list service-chip-list--dark">
                      <li>Android</li>
                      <li>iOS</li>
                    </ul>
                  </div>
                  <div className="phone-art" aria-hidden="true">
                    <div className="phone-device phone-device--back">
                      <div className="phone-screen phone-screen--back">
                        <span className="phone-back-orb" />
                        <span className="phone-back-line" />
                      </div>
                    </div>
                    <div className="phone-device phone-device--front">
                      <div className="phone-camera" />
                      <div className="phone-screen">
                        <div className="phone-screen-top"><span>SL/</span><i>•••</i></div>
                        <div className="phone-screen-orb"><span>/</span></div>
                        <div className="phone-screen-rule phone-screen-rule--long" />
                        <div className="phone-screen-rule phone-screen-rule--short" />
                        <div className="phone-screen-action" />
                      </div>
                    </div>
                    <span className="phone-orbit phone-orbit--one" />
                    <span className="phone-orbit phone-orbit--two" />
                  </div>
                </div>
              </SpotlightPanel>
            </Reveal>

            <Reveal className="service-reveal service-reveal--growth" delay={140}>
              <SpotlightPanel className="service-tile service-tile--growth">
                <div className="tile-topline tile-topline--dark">
                  <span>03 <i>/</i> DIGITAL MARKETING</span>
                  <span className="tile-index-mark">↗</span>
                </div>
                <div className="growth-tile-content">
                  <div className="tile-copy tile-copy--growth">
                    <h3>Reach across<br />channels.</h3>
                    <ul className="growth-service-list">
                      <li>SEO</li>
                      <li>Social media</li>
                      <li>Paid ads</li>
                      <li>Content marketing</li>
                    </ul>
                  </div>
                  <div className="growth-visual" aria-hidden="true">
                    <svg className="growth-connections" viewBox="0 0 600 300" fill="none">
                      <path d="M300 150 116 63M300 150l-184 174M300 150 484 63M300 150l184 174" />
                      <path d="M116 63c90 44 92 42 184 87 92 45 94 47 184 87" className="growth-flow-line" />
                      <circle cx="116" cy="63" r="3" /><circle cx="116" cy="324" r="3" />
                      <circle cx="484" cy="63" r="3" /><circle cx="484" cy="324" r="3" />
                    </svg>
                    <div className="growth-center"><span>SL</span><i>/</i></div>
                    <div className="growth-node growth-node--seo"><span className="growth-node-icon">↗</span><span>SEARCH</span></div>
                    <div className="growth-node growth-node--social"><span className="growth-node-icon">◌</span><span>SOCIAL</span></div>
                    <div className="growth-node growth-node--paid"><span className="growth-node-icon">＋</span><span>PAID</span></div>
                    <div className="growth-node growth-node--content"><span className="growth-node-icon">≋</span><span>CONTENT</span></div>
                    <span className="growth-data-label growth-data-label--one">CONNECT / DISCOVER</span>
                    <span className="growth-data-label growth-data-label--two">CHANNEL MAP · 04</span>
                  </div>
                </div>
              </SpotlightPanel>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="work-section section-padding" id="work">
        <div className={containerClass}>
          <Reveal className="work-heading">
            <div>
              <div className="section-kicker section-kicker--light"><span>02</span> / WORK ARCHIVE</div>
              <h2>Your work,<br /><span>up front.</span></h2>
            </div>
            <p>Space reserved for past clients and portfolio projects. We’ll add the real work here when you share it.</p>
          </Reveal>

          <Reveal className="archive-reveal" delay={100}>
            <div className="archive-stage">
              <div className="archive-stage-grid" aria-hidden="true" />
              <div className="archive-stage-glow" aria-hidden="true" />
              <div className="archive-label archive-label--top">SL / WORK ARCHIVE <span>—</span> CLIENT PROJECTS</div>
              <div className="archive-label archive-label--side">PROJECT SPACE<br />RESERVED</div>

              <div className="project-window project-window--main">
                <div className="project-window-bar">
                  <span className="project-window-code">01</span>
                  <span>CLIENT PROJECT</span>
                  <span className="project-window-status"><i /> CONTENT TO BE ADDED</span>
                </div>
                <div className="project-art project-art--main">
                  <div className="project-art-horizon" />
                  <div className="project-art-orbit project-art-orbit--one" />
                  <div className="project-art-orbit project-art-orbit--two" />
                  <div className="project-art-slash">/</div>
                  <div className="project-art-corner project-art-corner--one" />
                  <div className="project-art-corner project-art-corner--two" />
                  <span className="project-art-caption">PROJECT IMAGE / TO BE ADDED</span>
                </div>
              </div>

              <div className="project-window project-window--small">
                <div className="project-window-bar">
                  <span className="project-window-code">02</span>
                  <span>CLIENT STORY</span>
                </div>
                <div className="project-art project-art--small">
                  <div className="small-art-lines"><i /><i /><i /></div>
                  <span className="small-art-symbol">S<span>/</span>L</span>
                  <span className="project-art-caption">PROJECT DETAILS / TO BE ADDED</span>
                </div>
              </div>

              <div className="archive-bottom-note">
                <span>PAST CLIENTS</span><i />
                <span>PROJECT DETAILS</span><i />
                <span>PORTFOLIO</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-ambient contact-ambient--one" aria-hidden="true" />
        <div className="contact-ambient contact-ambient--two" aria-hidden="true" />
        <div className={`${containerClass} contact-shell`}>
          <Reveal className="contact-topline">
            <span className="section-kicker section-kicker--light"><span>03</span> / CONTACT</span>
            <span className="contact-topline-note">THE NEXT STEP IS A CONVERSATION</span>
          </Reveal>
          <div className="contact-main">
            <Reveal className="contact-headline-wrap">
              <h2>Tell us what<br /><span>you need.</span></h2>
            </Reveal>
            <Reveal className="contact-copy-wrap" delay={100}>
              <p>Web, apps, e-commerce, or digital marketing. Start with a WhatsApp message to Slash Logic.</p>
              <WhatsAppButton href={whatsappHref} />
            </Reveal>
          </div>
          <div className="contact-bottom-line">
            <span>SLASH LOGIC</span>
            <span className="contact-bottom-slash">/</span>
            <span>DIGITAL SERVICES FOR EVERY KIND OF BUSINESS</span>
            <a href="#top" aria-label="Back to top">BACK TO TOP <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
          <div className="contact-watermark" aria-hidden="true">/</div>
        </div>
      </section>

      <footer className="site-footer">
        <div className={`${containerClass} footer-inner`}>
          <BrandMark tone="dark" />
          <p>Websites <i>/</i> Apps <i>/</i> Digital marketing</p>
          <span>© {new Date().getFullYear()} Slash Logic</span>
        </div>
      </footer>
    </main>
  );
}
