export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full overflow-hidden pt-space-xl pb-space-3xl px-margin md:px-margin-tablet lg:px-margin-desktop bg-surface">
      {/* Architectural Grid Background Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-[1600px] h-full mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop">
          <div className="border-r border-secondary-fixed/50 h-full"></div>
          <div className="border-r border-secondary-fixed/50 h-full hidden md:block"></div>
          <div className="border-r border-secondary-fixed/50 h-full hidden lg:block"></div>
          <div className="border-r border-secondary-fixed/50 h-full hidden lg:block"></div>
          <div className="border-r border-secondary-fixed/50 h-full hidden lg:block"></div>
          <div className="border-r border-secondary-fixed/50 h-full hidden lg:block"></div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Section Tag / Coordinates */}
        <div className="flex items-center justify-between pb-space-lg mb-space-2xl border-b border-primary-container/10">
          <div className="flex items-center gap-space-sm">
            <span className="w-2 h-2 bg-primary-container"></span>
            <span className="font-label-caps text-label-caps tracking-widest uppercase text-secondary">
              ENGINEERING STUDENT · CREATIVE TECHNOLOGY
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-space-md">
            <span className="font-metadata text-metadata text-outline tracking-wider uppercase">
              PORTFOLIO INDEX / 2024–2025
            </span>
            <span className="font-metadata text-metadata text-primary-container font-semibold">
              EDITION 01
            </span>
          </div>
        </div>

        {/* Hero Asymmetric Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-end pt-space-lg">
          {/* Main Typographic Headline Block (Cols 1-8) */}
          <div className="lg:col-span-8 space-y-space-xl">
            <div className="space-y-space-md">
              <span className="font-metadata text-metadata uppercase tracking-widest text-on-surface-variant block">
                FOUNDATIONAL STATEMENT
              </span>
              <h1 className="font-display-xl text-headline-lg lg:text-display-xl text-primary-container tracking-tighter uppercase font-medium leading-[0.95]">
                TURNING IDEAS<br />
                INTO DIGITAL<br />
                <span className="font-editorial-serif italic font-normal text-secondary lowercase tracking-normal">
                  experiences.
                </span>
              </h1>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              I'm Roshan, an engineering student exploring website design, visual branding, and
              creative possibilities through AI-powered tools.
            </p>
            {/* Interactive Actions */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, '#projects')}
                className="inline-flex items-center justify-center px-space-xl py-space-md bg-primary-container text-on-primary font-headline-sm text-label-caps uppercase tracking-widest hover:bg-surface-tint transition-colors duration-200"
              >
                EXPLORE MY WORK
              </a>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, '#about')}
                className="inline-flex items-center justify-center px-space-xl py-space-md border border-primary-container text-primary-container font-headline-sm text-label-caps uppercase tracking-widest hover:bg-primary-container hover:text-on-primary transition-colors duration-200"
              >
                ABOUT ME
              </a>
            </div>
          </div>

          {/* Architectural Visual Column (Cols 9-12) */}
          <div className="lg:col-span-4 mt-space-2xl lg:mt-0 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-primary-container/10 lg:pl-gutter-desktop pt-space-xl lg:pt-0 space-y-space-lg">
            {/* Status Panel */}
            <div className="bg-surface-container-low border border-primary-container/10 p-space-md sm:p-space-lg space-y-space-md relative overflow-hidden shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between pb-space-xs border-b border-primary-container/10">
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                  <span className="font-metadata text-[10px] uppercase tracking-widest text-primary-container font-semibold">
                    STATUS: EXPLORING &amp; BUILDING
                  </span>
                </div>
                <span className="font-metadata text-[10px] uppercase tracking-wider text-outline">
                  SYS // 0x4F8B
                </span>
              </div>

              {/* Discipline / Register */}
              <div className="flex items-start justify-between gap-space-md">
                <div className="space-y-space-xs">
                  <span className="font-label-caps text-[10px] uppercase text-secondary tracking-widest block">
                    DISCIPLINE // REGISTER
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-primary-container tracking-tight leading-tight uppercase font-medium">
                    Creative<br />Computation
                  </h2>
                </div>
                <div className="w-16 h-16 border border-primary-container/20 bg-surface-container flex items-center justify-center p-1.5 relative shrink-0">
                  <svg
                    className="w-full h-full text-primary-container"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    viewBox="0 0 48 48"
                  >
                    <rect height="32" opacity="0.6" strokeDasharray="2 2" width="32" x="8" y="8" />
                    <circle cx="24" cy="24" r="12" />
                    <line x1="8" x2="40" y1="24" y2="24" />
                    <line x1="24" x2="24" y1="8" y2="40" />
                    <circle cx="24" cy="24" fill="currentColor" r="2.5" />
                  </svg>
                </div>
              </div>

              {/* Manifesto */}
              <div className="space-y-space-xs pt-space-xs border-t border-primary-container/10">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">
                    MANIFESTO
                  </span>
                  <span className="font-metadata text-[10px] text-outline uppercase">NODE 01</span>
                </div>
                <p className="font-headline-sm text-[16px] text-primary-container tracking-tight leading-snug font-medium">
                  "Creativity meets technology."
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Synthesizing rigorous engineering systems with high-tactility visual direction.
                  Every interface treated as an architectural space.
                </p>
              </div>

              {/* Core Capabilities */}
              <div className="space-y-space-xs pt-space-xs border-t border-primary-container/10">
                <div className="flex items-center justify-between pb-space-xs">
                  <span className="font-metadata text-[10px] uppercase tracking-wider text-secondary">
                    CORE CAPABILITIES
                  </span>
                  <span className="font-metadata text-[10px] text-primary-container font-semibold">
                    04 VECTORS
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-space-xs font-metadata text-[10px] text-primary-container uppercase">
                  <div className="px-space-xs py-1 bg-surface-container border border-primary-container/10 text-center tracking-wider">
                    AI Dev Workflows
                  </div>
                  <div className="px-space-xs py-1 bg-surface-container border border-primary-container/10 text-center tracking-wider">
                    Web Direction
                  </div>
                  <div className="px-space-xs py-1 bg-surface-container border border-primary-container/10 text-center tracking-wider">
                    Visual Identity
                  </div>
                  <div className="px-space-xs py-1 bg-surface-container border border-primary-container/10 text-center tracking-wider">
                    Motion Craft
                  </div>
                </div>
              </div>
            </div>

            {/* Archive Badge */}
            <div className="bg-secondary-container/40 p-space-md border border-secondary-fixed flex items-center justify-between text-secondary font-metadata text-[10px] tracking-wider uppercase">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[15px] text-primary-container">
                  token
                </span>
                <span className="text-primary-container font-semibold">ARCHIVE ID: 2024–2025</span>
              </div>
              <span className="text-secondary font-medium">SPECIMEN 01 · ED. 01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

