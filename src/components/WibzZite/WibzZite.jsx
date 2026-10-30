export default function WibzZite() {
  return (
    <section
      className="w-full py-space-3xl px-margin md:px-margin-tablet lg:px-margin-desktop bg-primary-container text-[#E9DFC9] border-t border-[#344B68]"
      id="wibzzite"
    >
      <div className="max-w-[1600px] mx-auto space-y-space-2xl">
        {/* Section Label */}
        <div className="flex items-center justify-between pb-space-md border-b border-[#344B68]">
          <div className="flex items-center gap-space-sm">
            <span className="w-2 h-2 bg-[#E9DFC9]"></span>
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-[#E9DFC9]/70">
              BEYOND PERSONAL PROJECTS
            </span>
          </div>
          <span className="font-metadata text-metadata uppercase tracking-widest text-[#E9DFC9]/50">
            DIGITAL VENTURE LAB
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-start">
          <div className="lg:col-span-7 space-y-space-xl">
            <div className="space-y-space-sm">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-[#D5C5A7] block">
                VENTURE IDENTITY
              </span>
              <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-[#F7F4ED] tracking-tight uppercase leading-tight font-medium">
                WIBZZITE — EVERY SITE HAS A STORY.
              </h2>
            </div>
            <p className="font-body-lg text-body-lg text-[#E9DFC9]/90 leading-relaxed max-w-2xl">
              WibzZite is my digital venture, built around the idea that every business deserves a
              thoughtful and distinctive digital presence. The venture explores website design,
              promotional videos, branding, and creative marketing, combining visual creativity
              with AI-assisted workflows to bring ideas to life.
            </p>
            <p className="font-body-md text-body-md text-[#E9DFC9]/75 leading-relaxed max-w-2xl border-l-2 border-[#D5C5A7] pl-space-md italic font-editorial-serif">
              "I'm developing my creative and technical skills through WibzZite, experimenting
              with digital experiences that help ideas take shape."
            </p>
          </div>

          {/* Venture Pillars Panel */}
          <div className="lg:col-span-5 bg-[#0D192B] border border-[#344B68] p-space-xl space-y-space-lg">
            <div className="flex items-center justify-between pb-space-sm border-b border-[#344B68]">
              <span className="font-metadata text-metadata uppercase tracking-widest text-[#D5C5A7]">
                VENTURE PILLARS
              </span>
              <span className="font-metadata text-metadata text-[#E9DFC9]/60">
                CORE DISCIPLINES
              </span>
            </div>
            <div className="space-y-space-md">
              <div className="space-y-space-xs pb-space-sm border-b border-[#344B68]/60">
                <span className="font-headline-sm text-headline-sm text-[#F7F4ED] block">
                  Tailored Digital Presences
                </span>
                <p className="font-body-sm text-body-sm text-[#E9DFC9]/70">
                  Distinct identity for small enterprises and creative practitioners without
                  cookie-cutter templates.
                </p>
              </div>
              <div className="space-y-space-xs pb-space-sm border-b border-[#344B68]/60">
                <span className="font-headline-sm text-headline-sm text-[#F7F4ED] block">
                  Promotional Video &amp; Narrative
                </span>
                <p className="font-body-sm text-body-sm text-[#E9DFC9]/70">
                  Short-form cinematic showcases engineered for audience engagement and visual
                  clarity.
                </p>
              </div>
              <div className="space-y-space-xs">
                <span className="font-headline-sm text-headline-sm text-[#F7F4ED] block">
                  AI-Assisted Efficiency
                </span>
                <p className="font-body-sm text-body-sm text-[#E9DFC9]/70">
                  Iterative execution bringing sophisticated design systems into reality at
                  accelerated speed.
                </p>
              </div>
            </div>
            <div className="pt-space-sm">
              <a
                className="inline-flex items-center justify-between w-full px-space-md py-space-sm border border-[#D5C5A7] text-[#F7F4ED] font-headline-sm text-label-caps uppercase tracking-widest hover:bg-[#D5C5A7] hover:text-primary-container transition-colors duration-200"
                href="https://www.instagram.com/wibzzite/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>CONNECT VIA @WIBZZITE</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

