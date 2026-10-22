export function HeroOrbit() {
  return (
    <div className="relative isolate mx-auto aspect-square w-full max-w-[640px]">
      <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(68,108,255,.2),rgba(53,99,232,.08)_37%,transparent_69%)] blur-2xl motion-safe:animate-ping-soft motion-reduce:animate-none" />

      <svg className="absolute inset-0 size-full" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="orbit-gradient" x1="111" y1="96" x2="498" y2="493" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8EDFFF" stopOpacity=".7" />
            <stop offset=".52" stopColor="#5B78FF" stopOpacity=".4" />
            <stop offset="1" stopColor="#687BFF" stopOpacity=".08" />
          </linearGradient>
          <filter id="orbit-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="300" cy="300" r="245" stroke="url(#orbit-gradient)" strokeOpacity=".44" />
        <circle cx="300" cy="300" r="193" stroke="white" strokeOpacity=".11" strokeDasharray="2 10" />
        <circle cx="300" cy="300" r="137" stroke="white" strokeOpacity=".14" />
        <path d="M115 180c76 14 121 62 172 120 43 49 98 108 192 121" stroke="url(#orbit-gradient)" strokeOpacity=".55" />
        <path d="M474 135c-30 60-75 113-139 150-52 30-117 65-202 154" stroke="white" strokeOpacity=".2" strokeDasharray="3 8" />
        <circle cx="115" cy="180" r="4" fill="#9DE8FF" filter="url(#orbit-glow)" />
        <circle cx="479" cy="420" r="4" fill="#6F8BFF" filter="url(#orbit-glow)" />
        <circle cx="335" cy="285" r="3" fill="#C6F2FF" filter="url(#orbit-glow)" />
      </svg>

      <div className="absolute inset-[8%] rounded-full border border-blue-100/10 motion-safe:animate-orbit motion-reduce:animate-none">
        <span className="absolute left-[21%] top-[13%] size-1.5 rounded-full bg-cyan-100 shadow-[0_0_16px_4px_rgba(90,190,255,.47)]" />
      </div>
      <div className="absolute inset-[17%] rounded-full border border-dashed border-blue-100/15 motion-safe:animate-orbit-reverse motion-reduce:animate-none">
        <span className="absolute left-[63%] top-[8%] size-1 rounded-full bg-indigo-400 shadow-[0_0_15px_5px_rgba(78,106,255,.45)]" />
      </div>
      <div className="absolute inset-[27%] rounded-full border border-blue-100/10">
        <span className="absolute -left-0.5 top-[62%] size-1 rounded-full bg-cyan-100 shadow-[0_0_15px_5px_rgba(78,106,255,.45)]" />
      </div>

      <div className="absolute right-[8%] top-[18%] inline-flex animate-float items-center gap-2.5 rounded-full border border-blue-100/20 bg-slate-900/75 px-3.5 py-2.5 text-[9px] font-bold tracking-[.15em] text-slate-100 shadow-xl backdrop-blur-xl motion-reduce:animate-none">
        <span className="text-[8px] font-medium text-cyan-200">01</span> WEB
      </div>
      <div className="absolute bottom-[22%] left-[1%] inline-flex animate-float-slow items-center gap-2.5 rounded-full border border-blue-100/20 bg-slate-900/75 px-3.5 py-2.5 text-[9px] font-bold tracking-[.15em] text-slate-100 shadow-xl backdrop-blur-xl motion-reduce:animate-none">
        <span className="text-[8px] font-medium text-cyan-200">02</span> APPS
      </div>
      <div className="absolute bottom-[19%] right-0 inline-flex animate-float-slow items-center gap-2.5 rounded-full border border-blue-100/20 bg-slate-900/75 px-3.5 py-2.5 text-[9px] font-bold tracking-[.15em] text-slate-100 shadow-xl backdrop-blur-xl motion-reduce:animate-none">
        <span className="text-[8px] font-medium text-cyan-200">03</span> GROWTH
      </div>

      <div className="absolute left-1/2 top-1/2 flex aspect-square w-[40%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-hidden rounded-full border border-blue-100/30 bg-[radial-gradient(circle_at_34%_25%,rgba(134,202,255,.3),transparent_34%),radial-gradient(circle_at_65%_78%,rgba(65,79,255,.3),transparent_42%),linear-gradient(145deg,rgba(32,56,107,.88),rgba(12,23,48,.89)_68%)] shadow-[0_0_100px_rgba(71,102,255,.22),inset_0_0_50px_rgba(133,190,255,.09),0_25px_80px_rgba(0,0,0,.28)] backdrop-blur-xl">
        <div className="absolute inset-[9%] rounded-full border border-white/10" />
        <div className="absolute inset-0 rounded-full [background-image:linear-gradient(rgba(221,237,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(221,237,255,.04)_1px,transparent_1px)] [background-size:19px_19px] [mask-image:radial-gradient(circle,#000,transparent_78%)]" />
        <svg className="relative h-[49%] w-[39%] -translate-y-1.5 drop-shadow-[0_0_11px_rgba(94,206,255,.52)]" viewBox="0 0 80 100" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="slash-gradient" x1="57" y1="7" x2="24" y2="93" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D8F7FF" />
              <stop offset=".45" stopColor="#6CD8FF" />
              <stop offset="1" stopColor="#6376FF" />
            </linearGradient>
          </defs>
          <path d="M57 7 24 93" stroke="url(#slash-gradient)" strokeWidth="10" strokeLinecap="round" />
          <path d="M57 7 24 93" stroke="white" strokeOpacity=".76" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="absolute bottom-[22%] text-center text-[clamp(7px,.8vw,10px)] font-bold leading-[1.45] tracking-[.24em] text-blue-50/75">
          SLASH<br />LOGIC
        </span>
      </div>

      <span className="absolute left-[19%] top-[10%] text-[8px] font-semibold tracking-[.18em] text-blue-100/45">SL / 01</span>
      <span className="absolute bottom-[8%] right-[17%] text-right text-[8px] font-semibold leading-relaxed tracking-[.18em] text-blue-100/45">
        DIGITAL SERVICES<br />BUILT AROUND YOU
      </span>
      <span className="absolute left-[20%] top-[29%] size-1 rounded-full bg-cyan-100 shadow-[0_0_0_5px_rgba(131,220,255,.1),0_0_22px_5px_rgba(107,193,255,.75)] motion-safe:animate-ping-soft motion-reduce:animate-none" />
      <span className="absolute bottom-[30%] right-[19%] size-1 rounded-full bg-cyan-100 shadow-[0_0_0_5px_rgba(131,220,255,.1),0_0_22px_5px_rgba(107,193,255,.75)] motion-safe:animate-ping-soft motion-reduce:animate-none" />
    </div>
  );
}
