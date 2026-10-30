export default function Contact() {
  return (
    <section
      className="w-full py-space-3xl px-margin md:px-margin-tablet lg:px-margin-desktop bg-surface border-t border-primary-container/10"
      id="contact"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Label */}
        <div className="flex items-center justify-between pb-space-md mb-space-2xl border-b border-primary-container/10">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
              05 / DIALOGUE
            </span>
          </div>
          <span className="font-metadata text-metadata uppercase tracking-widest text-outline">
            LET'S CONNECT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-start">
          {/* Contact Heading & Context */}
          <div className="lg:col-span-7 space-y-space-xl">
            <div className="space-y-space-sm">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block">
                INQUIRIES &amp; IDEAS
              </span>
              <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary-container uppercase tracking-tight leading-tight">
                HAVE AN IDEA WORTH BRINGING TO LIFE?
              </h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              I'm always interested in exploring creative ideas, learning new things, and
              connecting with people who appreciate thoughtful digital experiences.
            </p>
            <div className="pt-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="w-2 h-2 rounded-full bg-[#344B68] animate-pulse"></span>
                <span className="font-metadata text-metadata uppercase tracking-widest text-primary-container font-semibold">
                  AVAILABLE FOR SELECT COMMISSIONS &amp; CREATIVE COLLABORATION
                </span>
              </div>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-surface-container-low border border-primary-container/10 p-space-xl space-y-space-xl">
            <div className="space-y-space-xs pb-space-md border-b border-primary-container/10">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block">
                COMMUNICATION CHANNELS
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary-container uppercase tracking-tight">
                WibzZite Direct Contact
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Reach out through my official venture accounts for inquiries, collaborations, or
                discussions.
              </p>
            </div>
            <div className="space-y-space-md">
              {/* Email Link */}
              <a
                className="group flex items-center justify-between p-space-md bg-surface border border-primary-container/10 hover:border-primary-container transition-all"
                href="mailto:wibzzite@gmail.com"
              >
                <div className="space-y-space-xs">
                  <span className="font-metadata text-metadata text-secondary uppercase tracking-widest block">
                    EMAIL INQUIRIES
                  </span>
                  <span className="font-headline-sm text-body-lg text-primary-container group-hover:text-surface-tint transition-colors">
                    wibzzite@gmail.com
                  </span>
                </div>
                <span className="material-symbols-outlined text-secondary group-hover:text-primary-container group-hover:translate-x-1 transition-all text-[20px]">
                  arrow_forward
                </span>
              </a>
              {/* Instagram Link */}
              <a
                className="group flex items-center justify-between p-space-md bg-surface border border-primary-container/10 hover:border-primary-container transition-all"
                href="https://www.instagram.com/wibzzite/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="space-y-space-xs">
                  <span className="font-metadata text-metadata text-secondary uppercase tracking-widest block">
                    VISUAL JOURNAL &amp; DM
                  </span>
                  <span className="font-headline-sm text-body-lg text-primary-container group-hover:text-surface-tint transition-colors">
                    @wibzzite
                  </span>
                </div>
                <span className="material-symbols-outlined text-secondary group-hover:text-primary-container group-hover:translate-x-1 transition-all text-[20px]">
                  north_east
                </span>
              </a>
            </div>
            <div className="pt-space-xs border-t border-primary-container/10">
              <p className="font-metadata text-metadata text-outline leading-relaxed">
                Official channels monitored regularly. Whether exploring a new website, video
                project, or creative synergy, every message receives thoughtful attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

