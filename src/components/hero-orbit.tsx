export function HeroOrbit() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art-glow" />
      <div className="hero-orbit-stage">
        <svg className="hero-orbit-lines" viewBox="0 0 600 600" fill="none">
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

        <div className="hero-orbit-ring hero-orbit-ring--one" />
        <div className="hero-orbit-ring hero-orbit-ring--two" />
        <div className="hero-orbit-ring hero-orbit-ring--three" />

        <div className="orbit-node orbit-node--web">
          <span className="orbit-node-index">01</span>
          <span>WEB</span>
        </div>
        <div className="orbit-node orbit-node--apps">
          <span className="orbit-node-index">02</span>
          <span>APPS</span>
        </div>
        <div className="orbit-node orbit-node--growth">
          <span className="orbit-node-index">03</span>
          <span>GROWTH</span>
        </div>

        <div className="orbit-core">
          <span className="orbit-core-grid" />
          <svg className="orbit-core-slash" viewBox="0 0 80 100" fill="none">
            <path d="M57 7 24 93" stroke="url(#slash-gradient)" strokeWidth="10" strokeLinecap="round" />
            <path d="M57 7 24 93" stroke="white" strokeOpacity=".76" strokeWidth="1.5" strokeLinecap="round" />
            <defs>
              <linearGradient id="slash-gradient" x1="57" y1="7" x2="24" y2="93" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D8F7FF" />
                <stop offset=".45" stopColor="#6CD8FF" />
                <stop offset="1" stopColor="#6376FF" />
              </linearGradient>
            </defs>
          </svg>
          <span className="orbit-core-name">SLASH<br />LOGIC</span>
        </div>

        <div className="orbit-coordinate orbit-coordinate--top">SL / 01</div>
        <div className="orbit-coordinate orbit-coordinate--bottom">DIGITAL SERVICES<br />BUILT AROUND YOU</div>
        <span className="orbit-ping orbit-ping--a" />
        <span className="orbit-ping orbit-ping--b" />
      </div>
    </div>
  );
}
