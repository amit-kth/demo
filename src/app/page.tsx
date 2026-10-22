import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { HeroOrbit } from "@/components/hero-orbit";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SpotlightPanel } from "@/components/spotlight-panel";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { whatsappHref } from "@/lib/site-config";

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
    <main className="overflow-x-hidden bg-background text-foreground">
      <section
        className="relative isolate flex min-h-[max(790px,100svh)] overflow-hidden bg-gradient-to-br from-[#080f1d] via-[#091426] to-[#080f1d] text-slate-50 max-[680px]:min-h-0"
        id="top"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(191,212,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(191,212,255,.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_76%_76%_at_64%_47%,#000_7%,transparent_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-[3%] top-[8%] -z-10 aspect-square w-[min(660px,59vw)] rounded-full bg-[radial-gradient(circle,rgba(54,93,255,.17),rgba(43,75,174,.08)_34%,transparent_68%)] motion-safe:animate-ping-soft motion-reduce:animate-none"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-[26%] right-[27%] -z-10 h-[360px] w-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(32,145,255,.09),transparent_68%)] blur-2xl"
          aria-hidden="true"
        />
        <SiteHeader />

        <Container className="relative z-10 grid flex-1 grid-cols-1 grid-rows-[1fr_auto] items-center pt-[126px] pb-[34px] lg:grid-cols-[minmax(0,1.02fr)_minmax(0,.98fr)] max-[680px]:grid-rows-[auto_auto_auto] max-[680px]:pt-[132px] max-[680px]:pb-[21px]">
          <Reveal className="relative z-10 py-[35px] pb-[55px] max-[680px]:pt-[14px] max-[680px]:pb-0">
            <p className="mb-7 flex items-center gap-2.5 text-[10px] font-semibold tracking-[.13em] text-blue-50/70 max-[680px]:mb-[21px] max-[680px]:text-[8px] max-[680px]:tracking-[.12em]">
              <span className="relative size-[7px] shrink-0 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(93,214,255,.85)] after:absolute after:-inset-1 after:rounded-full after:border after:border-cyan-100/30" />
              SLASH LOGIC <span className="text-blue-300">/</span> DIGITAL SERVICES
            </p>
            <h1 className="m-0 max-w-[790px] text-[clamp(4.7rem,7.35vw,7.45rem)] font-medium leading-[.91] tracking-[-.09em] max-[1100px]:text-[clamp(4.4rem,7vw,6.3rem)] max-[860px]:text-[clamp(4.1rem,8vw,6rem)] max-[680px]:text-[clamp(3.65rem,13.7vw,5.3rem)] max-[380px]:text-[3.35rem]">
              Everything
              <br />
              your business
              <br />
              <span className="bg-gradient-to-r from-slate-50 via-blue-200 to-indigo-300 bg-clip-text text-transparent">needs online.</span>
            </h1>
            <p className="mt-7 max-w-[480px] text-[clamp(15px,1.3vw,17px)] leading-[1.58] text-blue-50/70 max-[680px]:mt-[21px] max-[680px]:text-sm">
              Websites, e-commerce, web and mobile apps, and digital marketing services for
              businesses of every kind.
            </p>
            <div className="mt-[34px] flex flex-wrap items-center gap-6 max-[680px]:mt-[25px] max-[680px]:gap-[17px]">
              <a
                className="group inline-flex min-h-14 items-center justify-center gap-6 rounded-full bg-slate-50 py-2 pl-[22px] pr-2 text-[13px] font-semibold text-slate-950 shadow-[0_8px_32px_rgba(102,149,255,.13)] transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_38px_rgba(100,167,255,.24)] active:scale-[.98] max-[680px]:min-h-[52px] max-[680px]:gap-4 max-[680px]:pl-[18px] max-[680px]:text-xs"
                href="#services"
              >
                Explore services
                <span className="grid size-[39px] place-items-center rounded-full bg-blue-600 text-white transition group-hover:translate-y-0.5 max-[680px]:size-9">
                  <ArrowDownRight className="size-[17px]" strokeWidth={1.8} aria-hidden="true" />
                </span>
              </a>
              <a
                className="group inline-flex items-center gap-2 text-xs text-blue-50/80 transition hover:gap-3 hover:text-white max-[680px]:text-[11px]"
                href="#contact"
              >
                Start a conversation
                <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal className="relative z-0 -my-2 -mr-5 -ml-6 flex min-w-0 items-center justify-center max-[860px]:-mx-9 max-[680px]:mx-auto max-[680px]:my-0 max-[680px]:w-full max-[680px]:max-w-[485px]">
            <HeroOrbit />
          </Reveal>

          <div className="col-span-full flex items-center justify-between border-t border-blue-100/10 pt-2.5 max-[680px]:min-h-[38px]">
            <span className="text-[8px] font-semibold tracking-[.13em] text-blue-100/40 max-[680px]:hidden">DIGITAL, CONNECTED.</span>
            <a className="group mx-auto inline-flex items-center gap-3 text-[10px] text-blue-50/70 transition hover:text-white lg:mx-0" href="#services">
              Scroll to explore
              <span className="grid size-7 place-items-center rounded-full border border-blue-100/20 text-cyan-100 transition group-hover:translate-y-0.5 group-hover:bg-blue-300/10">
                <ArrowDown className="size-[15px]" aria-hidden="true" />
              </span>
            </a>
            <span className="text-[8px] font-semibold tracking-[.13em] text-blue-100/40 max-[860px]:hidden">WEB <i className="mx-1 not-italic text-blue-300">/</i> APPS <i className="mx-1 not-italic text-blue-300">/</i> GROWTH</span>
          </div>
        </Container>
        <div className="pointer-events-none absolute bottom-[15%] right-[22px] hidden text-[9px] font-semibold tracking-[.14em] text-blue-100/30 [writing-mode:vertical-rl] lg:block" aria-hidden="true">
          SL<span className="text-blue-300">/</span>01
        </div>
      </section>

      <div className="overflow-hidden bg-[#385dff] py-5 text-slate-50" aria-label="Slash Logic services">
        <span className="sr-only">{marqueeServices.join(", ")}</span>
        <div className="flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="flex shrink-0 items-center" key={copy}>
              {marqueeServices.map((service) => (
                <span className="flex items-center gap-[34px] px-5 text-[11px] font-medium uppercase tracking-[.09em] max-[680px]:gap-[22px] max-[680px]:px-[13px] max-[680px]:text-[9px]" key={service}>
                  {service}<i className="text-[17px] font-light not-italic text-cyan-200">/</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="overflow-hidden bg-background py-36 max-[860px]:py-28 max-[680px]:py-[88px]" id="services">
        <Container>
          <Reveal className="grid items-end gap-[22px] md:grid-cols-[minmax(150px,.7fr)_minmax(0,2fr)_minmax(160px,.8fr)] max-[680px]:gap-[18px]">
            <p className="m-0 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[.13em] text-slate-500 max-[680px]:text-[9px]">
              <span className="text-blue-600">01</span> / CAPABILITIES
            </p>
            <h2 className="m-0 max-w-[730px] text-[clamp(3.15rem,5.35vw,5.35rem)] font-medium leading-[.98] tracking-[-.08em] text-slate-950 max-[680px]:text-[clamp(2.8rem,10vw,4.3rem)]">
              From digital foundation <span className="text-blue-600">to audience.</span>
            </h2>
            <p className="m-0 justify-self-end pb-[7px] whitespace-nowrap text-[9px] font-semibold tracking-[.12em] text-slate-400 max-[860px]:col-start-2 max-[860px]:justify-self-start max-[680px]:col-start-auto">
              WEB <i className="mx-1 not-italic text-blue-600">·</i> APPS <i className="mx-1 not-italic text-blue-600">·</i> MARKETING
            </p>
          </Reveal>

          <div className="mt-[60px] grid grid-cols-1 gap-[18px] md:grid-cols-12 max-[680px]:mt-[38px] max-[680px]:gap-[13px]">
            <Reveal className="md:col-span-7">
              <SpotlightPanel className="min-h-[450px] bg-[radial-gradient(ellipse_at_8%_98%,rgba(59,97,210,.21),transparent_44%),linear-gradient(135deg,#101c34,#0c1529)] p-[26px] text-slate-50 max-[680px]:min-h-[430px] max-[680px]:rounded-[22px] max-[680px]:p-5 lg:min-h-[516px]">
                <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[.13em] text-blue-100/60">
                  <span>01 <i className="mx-1 not-italic text-cyan-200">/</i> WEB DEVELOPMENT</span>
                  <span className="grid size-[30px] place-items-center rounded-full border border-blue-100/20 text-sm text-blue-100 transition group-hover:rotate-45 group-hover:bg-blue-300/15">↗</span>
                </div>
                <div className="grid min-h-[364px] grid-cols-[minmax(185px,.8fr)_minmax(0,1.2fr)] items-center gap-1 max-[860px]:min-h-[330px] max-[860px]:grid-cols-1 max-[860px]:gap-[15px] max-[680px]:min-h-[354px] max-[680px]:gap-[17px] max-[680px]:pt-[19px]">
                  <div className="relative z-10">
                    <h3 className="m-0 text-[clamp(2.35rem,3.4vw,3.55rem)] font-medium leading-[.96] tracking-[-.075em] max-[860px]:text-[2.65rem] max-[680px]:text-[2.6rem]">Digital<br />foundations.</h3>
                    <p className="mb-[18px] mt-[15px] text-xs leading-relaxed text-blue-50/65 max-[860px]:my-3">Choose what you need built.</p>
                    <ul className="m-0 flex list-none flex-wrap gap-[7px] p-0">
                      {[
                        "Websites",
                        "E-commerce",
                        "Web apps",
                      ].map((service) => (
                        <li className="whitespace-nowrap rounded-full border border-blue-50/20 bg-white/[.03] px-[11px] py-2 text-[10px] text-blue-50/90 max-[680px]:px-[9px] max-[680px]:py-[7px] max-[680px]:text-[9px]" key={service}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-[114%] min-w-[280px] max-w-[440px] -translate-y-[-9%] rotate-[-5deg] overflow-hidden rounded-[13px] border border-blue-100/30 bg-indigo-50 shadow-[0_30px_70px_rgba(0,0,0,.38),0_0_0_7px_rgba(195,221,255,.04)] transition duration-500 group-hover:rotate-[-2deg] group-hover:translate-x-[4%] group-hover:translate-y-[5%] max-[1100px]:min-w-[250px] max-[860px]:ml-auto max-[860px]:w-[86%] max-[860px]:min-w-0 max-[860px]:rotate-[-4deg] max-[680px]:w-[96%] max-[680px]:translate-x-[3%] max-[680px]:translate-y-0">
                    <div className="flex h-[34px] items-center justify-between bg-slate-50 px-[11px] text-[7px] text-slate-500 max-[680px]:h-7">
                      <span className="flex gap-1"><i className="size-[5px] rounded-full bg-red-300" /><i className="size-[5px] rounded-full bg-amber-300" /><i className="size-[5px] rounded-full bg-emerald-300" /></span>
                      <span className="w-[46%] rounded-full bg-slate-200 px-2 py-1 text-center text-[6px]">yourbusiness.site</span>
                      <span className="tracking-[2px]">•••</span>
                    </div>
                    <div className="relative grid min-h-[244px] grid-cols-2 grid-rows-[35px_1fr_28px] gap-x-1 overflow-hidden bg-[radial-gradient(circle_at_77%_59%,rgba(95,138,255,.16),transparent_30%),linear-gradient(130deg,#fff,#e6edff)] px-[15px] pb-[13px] max-[860px]:min-h-[185px] max-[680px]:min-h-[175px]">
                      <div className="col-span-full flex items-center justify-between">
                        <span className="text-[11px] font-bold text-indigo-900">S<span className="text-blue-600">/</span></span>
                        <span className="flex gap-[5px]"><i className="h-[3px] w-[18px] rounded bg-slate-300" /><i className="h-[3px] w-[18px] rounded bg-slate-300" /><i className="h-[3px] w-[26px] rounded bg-blue-600" /></span>
                      </div>
                      <div className="flex flex-col justify-center gap-[9px] pl-[5px]">
                        <i className="h-[10px] w-[90%] rounded-[3px] bg-slate-700" />
                        <i className="h-[7px] w-[62%] rounded-[3px] bg-slate-400" />
                        <i className="mt-[3px] h-3 w-[42px] rounded-full bg-blue-600" />
                      </div>
                      <div className="relative grid place-items-center overflow-hidden rounded-[10px] bg-gradient-to-br from-indigo-900 via-blue-500 to-sky-300">
                        <span className="absolute w-[77%] rounded-full border border-white/50 shadow-[0_0_30px_rgba(194,239,255,.32)] aspect-square" />
                        <span className="relative text-[78px] font-light leading-[.6] text-white drop-shadow-[0_0_28px_rgba(219,249,255,.65)]">/</span>
                        <span className="absolute right-[18%] top-[19%] size-1.5 rounded-full bg-cyan-50 shadow-[0_0_12px_#b4f2ff]" />
                      </div>
                      <div className="col-span-full flex items-end gap-[7px]"><i className="h-1 w-1/4 rounded bg-indigo-300" /><i className="h-1 w-1/4 rounded bg-slate-300" /><i className="h-1 w-1/4 rounded bg-slate-300" /></div>
                    </div>
                  </div>
                </div>
              </SpotlightPanel>
            </Reveal>

            <Reveal className="md:col-span-5" delay={90}>
              <SpotlightPanel className="min-h-[450px] bg-[radial-gradient(circle_at_81%_47%,rgba(99,139,255,.2),transparent_42%),linear-gradient(142deg,#e8efff,#dbe6ff)] p-[26px] text-slate-950 max-[680px]:min-h-[445px] max-[680px]:rounded-[22px] max-[680px]:p-5 lg:min-h-[516px]">
                <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[.13em] text-slate-700/60">
                  <span>02 <i className="mx-1 not-italic text-blue-600">/</i> APP DEVELOPMENT</span>
                  <span className="grid size-[30px] place-items-center rounded-full border border-slate-800/20 text-sm text-blue-700 transition group-hover:rotate-45 group-hover:bg-white/50">↗</span>
                </div>
                <div className="relative flex min-h-[364px] items-end pb-2 max-[860px]:min-h-[335px] max-[680px]:min-h-[365px]">
                  <div className="relative z-10 max-w-[220px] pb-[5px] max-[680px]:max-w-[190px]">
                    <h3 className="m-0 text-[clamp(2.35rem,3.4vw,3.55rem)] font-medium leading-[.96] tracking-[-.075em] max-[860px]:text-[2.65rem] max-[680px]:text-[2.75rem]">Made for<br />mobile.</h3>
                    <p className="mb-3 mt-[15px] text-xs text-slate-600 max-[860px]:my-3">App development for</p>
                    <ul className="m-0 flex list-none flex-wrap gap-[7px] p-0">
                      {["Android", "iOS"].map((service) => (
                        <li className="whitespace-nowrap rounded-full border border-slate-800/15 bg-white/35 px-[11px] py-2 text-[10px] text-blue-950/85 max-[680px]:px-[9px] max-[680px]:py-[7px] max-[680px]:text-[9px]" key={service}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pointer-events-none absolute -right-[8%] -top-2 h-full w-[60%] max-[860px]:-right-[25%] max-[860px]:top-[18px] max-[860px]:w-[95%] max-[680px]:-right-[14%] max-[680px]:top-[5px] max-[680px]:w-[84%]">
                    <div className="absolute right-[3%] top-[12%] aspect-[.49] w-[clamp(112px,12vw,158px)] rotate-[13deg] rounded-[27px] border border-white/55 bg-gradient-to-br from-slate-800 to-slate-950 p-[7px] opacity-70 shadow-[0_24px_50px_rgba(40,60,126,.3)]">
                      <div className="relative flex h-full flex-col items-center rounded-[21px] bg-gradient-to-br from-indigo-900 to-slate-950 pt-[45%]">
                        <span className="aspect-square w-[58%] rounded-full border border-white/40 shadow-[0_0_28px_rgba(124,185,255,.43)]" />
                        <span className="mt-3 h-1 w-[55%] rounded bg-white/60" />
                      </div>
                    </div>
                    <div className="absolute right-[27%] top-[6%] aspect-[.49] w-[clamp(112px,12vw,158px)] animate-device rounded-[27px] border border-white/55 bg-gradient-to-br from-slate-800 to-slate-950 p-[7px] shadow-[0_24px_50px_rgba(40,60,126,.3),inset_0_0_0_1px_rgba(126,162,255,.23)] motion-reduce:animate-none">
                      <div className="relative flex h-full flex-col items-center overflow-hidden rounded-[21px] bg-[radial-gradient(circle_at_50%_35%,rgba(67,110,248,.53),transparent_33%),linear-gradient(150deg,#182b59,#10172e_80%)]">
                        <span className="absolute left-1/2 top-[9px] h-[7px] w-[30%] -translate-x-1/2 rounded-full bg-slate-950" />
                        <div className="flex w-full items-center justify-between px-3 pt-[22px] text-[8px] font-bold text-blue-100"><span>SL/</span><i className="not-italic tracking-[2px]">•••</i></div>
                        <span className="mt-[25%] grid aspect-square w-[56%] place-items-center rounded-full border border-blue-100/40 bg-[radial-gradient(circle,rgba(127,202,255,.49),rgba(63,91,219,.2)_62%,transparent_70%)] text-[57px] font-light leading-none text-blue-50 shadow-[0_0_34px_rgba(87,143,255,.32)]">/</span>
                        <i className="mt-5 h-1 w-[72%] rounded bg-blue-50" />
                        <i className="mt-[7px] h-1 w-[47%] rounded bg-blue-100/50" />
                        <i className="mt-[18px] h-[18px] w-[47%] rounded-full bg-gradient-to-r from-blue-500 to-sky-300 shadow-[0_0_14px_rgba(91,153,255,.48)]" />
                      </div>
                    </div>
                    <span className="absolute right-[-3%] top-[28%] h-[29%] w-[88%] rotate-[-23deg] rounded-[50%] border border-blue-900/20" />
                    <span className="absolute -right-[13%] top-[35%] h-[34%] w-[103%] rotate-[35deg] rounded-[50%] border border-blue-900/20" />
                  </div>
                </div>
              </SpotlightPanel>
            </Reveal>

            <Reveal className="md:col-span-12" delay={140}>
              <SpotlightPanel className="min-h-[330px] bg-[radial-gradient(ellipse_at_74%_47%,rgba(108,153,255,.26),transparent_43%),linear-gradient(109deg,#365bf5,#2a43b5_56%,#1a2b69)] px-[30px] pb-7 pt-[25px] text-slate-50 max-[680px]:min-h-[502px] max-[680px]:rounded-[22px] max-[680px]:px-5 max-[680px]:pb-[22px] max-[680px]:pt-5">
                <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[.13em] text-blue-50/60">
                  <span>03 <i className="mx-1 not-italic text-cyan-200">/</i> DIGITAL MARKETING</span>
                  <span className="grid size-[30px] place-items-center rounded-full border border-white/20 text-sm text-blue-50 transition group-hover:rotate-45 group-hover:bg-white/10">↗</span>
                </div>
                <div className="grid min-h-[257px] grid-cols-[minmax(250px,.68fr)_minmax(0,1.32fr)] items-center gap-8 max-[860px]:grid-cols-[minmax(220px,.75fr)_minmax(0,1.25fr)] max-[680px]:grid-cols-1 max-[680px]:gap-5 max-[680px]:pt-[19px]">
                  <div>
                    <h3 className="m-0 text-[clamp(2.25rem,3.5vw,3.5rem)] font-medium leading-[.96] tracking-[-.075em] max-[680px]:text-[2.7rem]">Reach across<br />channels.</h3>
                    <ul className="mt-[19px] flex list-none flex-wrap gap-[7px] p-0 max-[680px]:mt-[15px] max-[680px]:gap-[6px]">
                      {["SEO", "Social media", "Paid ads", "Content marketing"].map((service) => (
                        <li className="whitespace-nowrap rounded-full border border-white/25 bg-white/[.06] px-[10px] py-2 text-[10px] text-blue-50/90 transition hover:-translate-y-0.5 hover:bg-white/15 max-[680px]:px-[9px] max-[680px]:py-[7px] max-[680px]:text-[9px]" key={service}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative min-h-[229px] overflow-hidden rounded-[18px] border border-blue-50/15 bg-slate-950/15 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] max-[680px]:min-h-[220px] max-[680px]:rounded-[15px]">
                    <span className="pointer-events-none absolute inset-[12%_20%] rounded-full border border-blue-50/10" />
                    <span className="pointer-events-none absolute inset-[25%_32%] rounded-full border border-dashed border-blue-50/10 motion-safe:animate-orbit-reverse motion-reduce:animate-none" />
                    <svg className="absolute inset-0 size-full overflow-visible" viewBox="0 0 600 300" fill="none" aria-hidden="true">
                      <path d="M300 150 116 63M300 150l-184 174M300 150 484 63M300 150l184 174" stroke="rgba(221,236,255,.38)" strokeWidth="1" strokeDasharray="3 7" />
                      <path d="M116 63c90 44 92 42 184 87 92 45 94 47 184 87" stroke="#b6eeff" strokeWidth="1.5" strokeDasharray="4 14" className="motion-safe:animate-flow motion-reduce:animate-none" />
                      <circle cx="116" cy="63" r="3" fill="#c7f5ff" /><circle cx="116" cy="324" r="3" fill="#c7f5ff" />
                      <circle cx="484" cy="63" r="3" fill="#c7f5ff" /><circle cx="484" cy="324" r="3" fill="#c7f5ff" />
                    </svg>
                    <div className="absolute left-1/2 top-1/2 flex size-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-px rounded-full border border-white/40 bg-gradient-to-br from-sky-200/35 to-white/10 text-[13px] font-bold text-white shadow-[0_0_28px_rgba(124,200,255,.41)] backdrop-blur-xl">
                      SL<i className="not-italic text-cyan-100">/</i>
                    </div>
                    <div className="absolute left-[12%] top-[12%] flex min-w-[89px] items-center gap-[7px] rounded-full border border-white/20 bg-blue-950/45 px-[9px] py-[7px] text-[8px] font-semibold tracking-[.1em] text-blue-50 shadow-lg backdrop-blur-lg max-[680px]:left-[7%] max-[680px]:text-[6px]">
                      <span className="grid size-[19px] place-items-center rounded-full bg-white/15 text-xs text-cyan-100">↗</span> SEARCH
                    </div>
                    <div className="absolute right-[11%] top-[12%] flex min-w-[89px] items-center gap-[7px] rounded-full border border-white/20 bg-blue-950/45 px-[9px] py-[7px] text-[8px] font-semibold tracking-[.1em] text-blue-50 shadow-lg backdrop-blur-lg max-[680px]:right-[6%] max-[680px]:text-[6px]">
                      <span className="grid size-[19px] place-items-center rounded-full bg-white/15 text-xs text-cyan-100">◌</span> SOCIAL
                    </div>
                    <div className="absolute bottom-[12%] left-[12%] flex min-w-[89px] items-center gap-[7px] rounded-full border border-white/20 bg-blue-950/45 px-[9px] py-[7px] text-[8px] font-semibold tracking-[.1em] text-blue-50 shadow-lg backdrop-blur-lg max-[680px]:bottom-[10%] max-[680px]:left-[7%] max-[680px]:text-[6px]">
                      <span className="grid size-[19px] place-items-center rounded-full bg-white/15 text-xs text-cyan-100">＋</span> PAID
                    </div>
                    <div className="absolute bottom-[12%] right-[9%] flex min-w-[89px] items-center gap-[7px] rounded-full border border-white/20 bg-blue-950/45 px-[9px] py-[7px] text-[8px] font-semibold tracking-[.1em] text-blue-50 shadow-lg backdrop-blur-lg max-[680px]:bottom-[10%] max-[680px]:right-[6%] max-[680px]:text-[6px]">
                      <span className="grid size-[19px] place-items-center rounded-full bg-white/15 text-xs text-cyan-100">≋</span> CONTENT
                    </div>
                    <span className="absolute bottom-[5%] right-[5%] text-[7px] font-semibold tracking-[.17em] text-blue-50/60">CHANNEL MAP · 04</span>
                  </div>
                </div>
              </SpotlightPanel>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#080f1d] py-36 text-slate-50 max-[860px]:py-28 max-[680px]:py-[88px]" id="work">
        <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_74%_43%,rgba(28,50,104,.22),transparent_38%)]" />
        <Container className="relative z-10">
          <Reveal className="flex items-end justify-between gap-[50px] max-[680px]:block">
            <div>
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[.13em] text-blue-100/50 max-[680px]:text-[9px]">
                <span className="text-blue-300">02</span> / WORK ARCHIVE
              </p>
              <h2 className="mb-0 mt-[27px] text-[clamp(4rem,8vw,7.5rem)] font-medium leading-[.87] tracking-[-.09em] text-slate-50 max-[860px]:text-[clamp(4rem,9vw,6.5rem)] max-[680px]:mt-[22px] max-[680px]:text-[clamp(3.8rem,14vw,6rem)] max-[380px]:text-[3.55rem]">
                Your work,<br /><span className="text-indigo-300">up front.</span>
              </h2>
            </div>
            <p className="mb-[6px] mt-0 max-w-[325px] text-sm leading-[1.65] text-blue-50/65 max-[680px]:mt-[23px] max-[680px]:text-[13px]">
              Space reserved for past clients and portfolio projects. We’ll add the real work here when you share it.
            </p>
          </Reveal>

          <Reveal className="mt-[58px] max-[680px]:mt-9" delay={100}>
            <div className="relative isolate min-h-[550px] overflow-hidden rounded-[28px] border border-blue-100/15 bg-[radial-gradient(ellipse_at_48%_47%,rgba(33,71,169,.27),transparent_47%),linear-gradient(135deg,#0e1a32,#101a2c_55%,#0c1425)] shadow-[inset_0_1px_0_rgba(255,255,255,.05),0_35px_90px_rgba(0,0,0,.18)] max-[860px]:min-h-[500px] max-[680px]:min-h-[490px] max-[680px]:rounded-[21px] max-[380px]:min-h-[440px]">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(196,218,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(196,218,255,.05)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(ellipse_75%_88%_at_54%_51%,#000_2%,transparent_100%)]" />
              <div className="pointer-events-none absolute left-[34%] top-[19%] -z-10 aspect-square w-[420px] rounded-full bg-[radial-gradient(circle,rgba(67,107,255,.24),rgba(73,139,255,.06)_44%,transparent_70%)] blur-xl" />
              <span className="absolute left-[30px] top-[27px] text-[8px] font-semibold uppercase tracking-[.13em] text-blue-50/55 max-[680px]:left-5 max-[680px]:top-[21px] max-[680px]:max-w-[160px] max-[680px]:leading-relaxed max-[680px]:text-[7px]">
                SL / WORK ARCHIVE <i className="px-[5px] not-italic text-indigo-300">—</i> CLIENT PROJECTS
              </span>
              <span className="absolute right-[30px] top-[31px] text-right text-[8px] font-semibold uppercase leading-[1.7] tracking-[.13em] text-indigo-200 max-[680px]:right-[19px] max-[680px]:top-[18px] max-[680px]:text-[6px]">
                PROJECT SPACE<br />RESERVED
              </span>

              <div className="absolute left-[10%] top-[17%] h-[66%] w-[54%] rotate-[-3.5deg] overflow-hidden rounded-[11px] border border-blue-100/30 bg-slate-900/75 shadow-[0_32px_70px_rgba(0,0,0,.35),inset_0_1px_0_rgba(255,255,255,.1)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:rotate-[-2deg] max-[860px]:left-[6%] max-[860px]:w-[57%] max-[680px]:left-[7%] max-[680px]:top-[18%] max-[680px]:h-[51%] max-[680px]:w-[83%] max-[680px]:rotate-[-3deg]">
                <div className="flex min-h-[34px] items-center gap-2.5 border-b border-blue-100/15 bg-white/[.04] px-[13px] text-[7px] font-semibold uppercase tracking-[.11em] text-blue-50/70 max-[680px]:min-h-[29px] max-[680px]:gap-[7px] max-[680px]:px-[9px] max-[680px]:text-[6px]">
                  <span className="text-[9px] text-indigo-200">01</span><span>CLIENT PROJECT</span>
                  <span className="ml-auto inline-flex items-center gap-[7px] whitespace-nowrap text-[6px] text-blue-50/50"><i className="size-[5px] rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(93,214,255,.85)]" /> CONTENT TO BE ADDED</span>
                </div>
                <div className="relative h-[calc(100%-34px)] overflow-hidden bg-[radial-gradient(ellipse_at_53%_56%,rgba(103,151,255,.24),transparent_41%),linear-gradient(147deg,#101d37,#111a2d_61%,#162d60)] max-[680px]:h-[calc(100%-29px)]">
                  <span className="absolute -left-[8%] right-0 bottom-[13%] h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent shadow-[0_0_32px_rgba(101,180,255,.44)]" />
                  <span className="absolute left-[29%] top-[9%] aspect-square w-[45%] rounded-full border border-blue-100/20 shadow-[0_0_46px_rgba(88,152,255,.17),inset_0_0_38px_rgba(120,183,255,.12)]" />
                  <span className="absolute left-[39%] top-[22%] aspect-square w-[24%] rotate-x-[68deg] rotate-[-30deg] rounded-full border border-blue-100/25" />
                  <span className="absolute left-[25%] top-[27%] h-[20%] w-[53%] rotate-[-31deg] rounded-[50%] border border-blue-100/30" />
                  <span className="absolute left-[19%] top-[37%] h-[22%] w-[64%] rotate-[-31deg] rounded-[50%] border border-dashed border-blue-100/30 motion-safe:animate-orbit-reverse motion-reduce:animate-none" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%] rotate-[5deg] text-[clamp(11rem,25vw,19rem)] font-light leading-[.7] text-cyan-100 drop-shadow-[0_0_38px_rgba(115,200,255,.63)]">/</span>
                  <span className="absolute left-[17px] top-[17px] h-[17px] w-[17px] border-l border-t border-blue-100/50" />
                  <span className="absolute bottom-[17px] right-[17px] h-[17px] w-[17px] border-b border-r border-blue-100/50" />
                  <span className="absolute bottom-3 right-[13px] text-[6px] font-semibold tracking-[.15em] text-blue-50/55">PROJECT IMAGE / TO BE ADDED</span>
                </div>
              </div>

              <div className="absolute right-[9%] top-[23%] h-[54%] w-[29%] rotate-[4deg] overflow-hidden rounded-[11px] border border-blue-100/30 bg-slate-900/75 shadow-[0_32px_70px_rgba(0,0,0,.35),inset_0_1px_0_rgba(255,255,255,.1)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:rotate-[3deg] max-[860px]:right-[6%] max-[860px]:w-[31%] max-[680px]:right-[5%] max-[680px]:top-[51%] max-[680px]:h-[31%] max-[680px]:w-[49%] max-[680px]:rotate-[3deg]">
                <div className="flex min-h-[34px] items-center gap-2.5 border-b border-blue-100/15 bg-white/[.04] px-[13px] text-[7px] font-semibold uppercase tracking-[.11em] text-blue-50/70 max-[680px]:min-h-[29px] max-[680px]:px-[9px] max-[680px]:text-[6px]">
                  <span className="text-[9px] text-indigo-200">02</span><span>CLIENT STORY</span>
                </div>
                <div className="relative h-[calc(100%-34px)] overflow-hidden bg-[radial-gradient(circle_at_69%_36%,rgba(110,152,255,.27),transparent_35%),linear-gradient(150deg,#22366f,#121d39_65%,#10172a)] max-[680px]:h-[calc(100%-29px)]">
                  <span className="absolute left-[18%] top-[17%] aspect-square w-[64%] rounded-full border border-blue-100/30 shadow-[0_0_28px_rgba(91,160,255,.26)]" />
                  <div className="absolute left-[26%] top-[30%] flex w-[47%] rotate-[-8deg] flex-col gap-2">
                    <i className="h-[3px] rounded bg-blue-50/60" /><i className="h-[3px] w-[76%] rounded bg-indigo-300/80" /><i className="h-[3px] w-[52%] rounded bg-blue-50/35" />
                  </div>
                  <span className="absolute bottom-[21%] right-[17%] text-[27px] font-medium tracking-[-.12em] text-blue-50/90">S<span className="text-cyan-200">/</span>L</span>
                  <span className="absolute bottom-3 right-3 text-[6px] font-semibold tracking-[.15em] text-blue-50/55">PROJECT DETAILS / TO BE ADDED</span>
                </div>
              </div>

              <div className="absolute bottom-[22px] left-8 right-8 flex items-center gap-[11px] text-[7px] font-semibold tracking-[.15em] text-blue-50/50 max-[680px]:bottom-[15px] max-[680px]:left-[18px] max-[680px]:right-[18px] max-[680px]:gap-[7px] max-[680px]:text-[5px]">
                <span>PAST CLIENTS</span><i className="size-[3px] rounded-full bg-indigo-300" /><span>PROJECT DETAILS</span><i className="size-[3px] rounded-full bg-indigo-300" /><span>PORTFOLIO</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#070d19] via-[#0a1427] to-[#0a1220] text-slate-50" id="contact">
        <div className="pointer-events-none absolute -right-[3%] -top-[43%] -z-10 aspect-square w-[66vw] rounded-full bg-[radial-gradient(circle,rgba(55,97,248,.23),rgba(35,65,146,.09)_42%,transparent_68%)] blur-2xl" />
        <div className="pointer-events-none absolute -bottom-[53%] right-[32%] -z-10 aspect-square w-[40vw] rounded-full bg-[radial-gradient(circle,rgba(22,149,219,.15),transparent_69%)]" />
        <Container className="relative isolate py-[75px] pb-7 max-[680px]:py-12 max-[680px]:pb-[21px]">
          <Reveal className="flex min-h-[25px] items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[.13em] text-blue-100/50 max-[680px]:text-[9px]"><i className="not-italic text-blue-300">03</i> / CONTACT</span>
            <span className="text-[8px] font-semibold uppercase tracking-[.13em] text-blue-100/45 max-[680px]:text-[6px] max-[680px]:tracking-[.1em]">THE NEXT STEP IS A CONVERSATION</span>
          </Reveal>
          <div className="grid grid-cols-[minmax(0,1.25fr)_minmax(310px,.75fr)] items-end gap-[54px] py-[100px] pb-[117px] max-[860px]:grid-cols-[minmax(0,1.15fr)_minmax(270px,.85fr)] max-[860px]:gap-8 max-[680px]:grid-cols-1 max-[680px]:gap-[35px] max-[680px]:py-[73px] max-[680px]:pb-[74px]">
            <Reveal>
              <h2 className="m-0 text-[clamp(4.5rem,9vw,8.6rem)] font-medium leading-[.85] tracking-[-.095em] text-slate-50 max-[860px]:text-[clamp(4.4rem,9vw,7rem)] max-[680px]:text-[clamp(4.25rem,15vw,6.8rem)]">
                Tell us what<br /><span className="text-indigo-300">you need.</span>
              </h2>
            </Reveal>
            <Reveal className="relative z-10" delay={100}>
              <p className="mb-[25px] mt-0 max-w-[390px] text-[15px] leading-[1.65] text-blue-50/70 max-[680px]:mb-[19px] max-[680px]:text-[13px]">
                Web, apps, e-commerce, or digital marketing. Start with a WhatsApp message to Slash Logic.
              </p>
              <WhatsAppButton href={whatsappHref} />
            </Reveal>
          </div>
          <div className="relative z-10 flex items-center gap-[13px] border-t border-blue-100/15 pt-[19px] text-[8px] font-semibold uppercase tracking-[.13em] text-blue-100/50 max-[680px]:flex-wrap max-[680px]:gap-2 max-[680px]:text-[6px]">
            <span>SLASH LOGIC</span><span className="text-[15px] font-light text-indigo-300">/</span>
            <span className="max-[680px]:order-1 max-[680px]:mt-[7px] max-[680px]:basis-[calc(100%-24px)]">DIGITAL SERVICES FOR EVERY KIND OF BUSINESS</span>
            <a className="group ml-auto inline-flex items-center gap-1.5 text-blue-50/70 transition hover:text-white max-[680px]:text-[6px]" href="#top">
              BACK TO TOP <ArrowUpRight className="size-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
          <div className="pointer-events-none absolute -bottom-[40%] right-[7%] -z-10 rotate-[11deg] select-none text-[min(71vw,900px)] font-light leading-[.8] text-indigo-200/[.04] max-[680px]:-bottom-[1%] max-[680px]:-right-[13%] max-[680px]:text-[120vw]" aria-hidden="true">/</div>
        </Container>
      </section>

      <footer className="bg-background text-slate-950">
        <Container className="flex min-h-[89px] items-center justify-between gap-5 max-[680px]:min-h-[112px] max-[680px]:flex-wrap max-[680px]:gap-x-4 max-[680px]:gap-y-1.5 max-[680px]:py-[18px]">
          <BrandMark tone="dark" />
          <p className="m-0 text-[10px] text-slate-500 max-[680px]:order-3 max-[680px]:basis-full max-[680px]:text-[9px]">
            Websites <i className="mx-[5px] not-italic text-blue-600">/</i> Apps <i className="mx-[5px] not-italic text-blue-600">/</i> Digital marketing
          </p>
          <span className="text-[10px] text-slate-500 max-[680px]:text-[8px]">© {new Date().getFullYear()} Slash Logic</span>
        </Container>
      </footer>
    </main>
  );
}
