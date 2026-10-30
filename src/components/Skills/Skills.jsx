const skillCategories = [
  {
    num: '01',
    title: (
      <>
        Website Design &amp;<br />AI-Assisted Development
      </>
    ),
    desc: 'Translating abstract visions into functional, polished, and responsive web properties.',
    skills: [
      'Website Concept Development',
      'Website Layout and Visual Design',
      'UI Design and Visual Hierarchy',
      'Colour Palette Selection',
      'Brand Identity Concepts',
      'AI-Assisted Website Development',
      'Website Deployment Using AI-Assisted Workflows',
    ],
  },
  {
    num: '02',
    title: 'Creative Direction',
    desc: 'Harmonizing type, structure, and chromatic balance for cohesive visual impact.',
    skills: [
      'Visual Design Direction',
      'Brand Aesthetics',
      'Typography and Colour Coordination',
      'Creative Concept Development',
      'Digital Portfolio Presentation',
    ],
  },
  {
    num: '03',
    title: 'Short-Form Video Editing',
    desc: 'Editorial motion narratives designed for high retention and clear brand expression.',
    skills: [
      'Instagram Reels Editing',
      'Promotional Video Editing',
      'Visual Storytelling',
      'Music Synchronisation and Transitions',
      'Pacing and Visual Composition',
      'Social Media Video Editing',
    ],
  },
]

export default function Skills() {
  return (
    <section
      className="w-full py-space-3xl px-margin md:px-margin-tablet lg:px-margin-desktop bg-surface border-t border-primary-container/10"
      id="skills"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between pb-space-md mb-space-2xl border-b border-primary-container/10">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
              02 / CAPABILITIES
            </span>
          </div>
          <span className="font-metadata text-metadata uppercase tracking-widest text-outline">
            WHAT I WORK ON
          </span>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter lg:gap-gutter-desktop">
          {skillCategories.map((category) => (
            <div
              key={category.num}
              className="border-t border-primary-container pt-space-lg flex flex-col justify-between space-y-space-xl"
            >
              <div className="space-y-space-md">
                <span className="font-headline-lg text-headline-lg text-secondary/40 block font-normal leading-none">
                  {category.num}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary-container uppercase tracking-tight font-medium">
                  {category.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{category.desc}</p>
              </div>
              <ul className="divide-y divide-primary-container/10 pt-space-md">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="py-space-sm font-body-sm text-body-sm text-on-surface flex items-center justify-between"
                  >
                    <span>{skill}</span>
                    <span className="font-metadata text-metadata text-outline">→</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

