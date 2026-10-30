export default function About() {
  const areas = [
    {
      num: '01',
      title: 'Creative Website Design',
      desc: 'Editorial layouts, tactile typography, and bespoke web architecture.',
    },
    {
      num: '02',
      title: 'AI-Assisted Development',
      desc: 'Augmenting engineering pipelines to iterate and deploy modern web solutions.',
    },
    {
      num: '03',
      title: 'Visual Branding',
      desc: 'Harmonious color palettes, identity systems, and conceptual tone.',
    },
    {
      num: '04',
      title: 'Short-Form Video Editing',
      desc: 'Rhythmic pacing, visual compositions, and narrative social media editing.',
    },
  ]

  return (
    <section
      className="w-full py-space-3xl px-margin md:px-margin-tablet lg:px-margin-desktop bg-surface-container-low border-t border-primary-container/10"
      id="about"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between pb-space-md mb-space-2xl border-b border-primary-container/10">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
              01 / PERSPECTIVE
            </span>
          </div>
          <span className="font-metadata text-metadata uppercase tracking-widest text-outline">
            ABOUT ME
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop">
          {/* Editorial Title & Quote */}
          <div className="lg:col-span-5 space-y-space-lg">
            <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest block">
              ETHOS
            </span>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary-container uppercase tracking-tight leading-tight">
              CURIOSITY DRIVES WHAT I CREATE.
            </h2>
            <div className="w-16 h-px bg-secondary"></div>
            <p className="font-editorial-serif text-editorial-serif text-secondary italic leading-relaxed pt-space-sm">
              "Bridging technical problem solving with visual intent."
            </p>
          </div>

          {/* Bio + 4 Interest Quadrants */}
          <div className="lg:col-span-7 space-y-space-2xl">
            <div className="space-y-space-md font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                I'm Roshan, an engineering student interested in the intersection of creativity,
                technology, and artificial intelligence. I use AI-powered tools to transform ideas
                into digital experiences while exploring website design, visual branding, and
                creative projects.
              </p>
              <p>
                Through personal projects and WibzZite, my digital venture, I'm continuously
                developing my creative skills, experimenting with new technologies, and finding
                innovative ways to bring ideas to life.
              </p>
            </div>

            {/* Four Areas of Interest */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-primary-container/10 border border-primary-container/10">
              {areas.map((area) => (
                <div
                  key={area.num}
                  className="p-space-lg bg-surface-container-lowest flex flex-col justify-between space-y-space-md hover:bg-secondary-container/20 transition-colors"
                >
                  <span className="font-metadata text-metadata uppercase tracking-wider text-secondary">
                    AREA {area.num}
                  </span>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary-container uppercase tracking-tight">
                      {area.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                      {area.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

