const learningGroups = [
  {
    num: '01',
    title: 'Programming Languages',
    footer: 'FOUNDATIONAL CODE',
    items: [
      {
        name: 'C Programming',
        badge: 'Currently Learning',
        desc: 'Core systems logic, memory layout, algorithmic discipline.',
        hasBadge: true,
      },
      {
        name: 'Python Programming',
        badge: 'Currently Learning',
        desc: 'Automation scripting, computational thinking, and AI scripting.',
        hasBadge: true,
      },
    ],
  },
  {
    num: '02',
    title: 'Web Development',
    footer: 'INTERFACE ENGINEERING',
    items: [
      {
        name: 'Website Development Fundamentals',
        desc: 'DOM hierarchy, semantic layout, and modern CSS engines.',
      },
      {
        name: 'Website Deployment and Maintenance',
        desc: 'Static repository hosting, DNS configuration, and performance checks.',
      },
      {
        name: 'Understanding Website Structure and Functionality',
        desc: 'Responsive behavior across fluid viewports and accessibility.',
      },
    ],
  },
  {
    num: '03',
    title: 'AI & Technology',
    footer: 'INTELLIGENCE TOOLS',
    items: [
      {
        name: 'AI-Assisted Development Workflows',
        desc: 'Integrating LLMs and code generators as precise craft accelerators.',
      },
      {
        name: 'Practical Applications of Artificial Intelligence',
        desc: 'Rapid mockup iteration, image synthesis, and contextual generation.',
      },
      {
        name: 'Exploring AI-Powered Tools for Digital Projects',
        desc: 'Testing emerging creative models for design and production.',
      },
    ],
  },
  {
    num: '04',
    title: 'Creative Exploration',
    footer: 'AESTHETIC CRAFT',
    items: [
      {
        name: 'Website Design and UI Concepts',
        desc: 'Editorial typographic scales, negative space, and compositional discipline.',
      },
      {
        name: 'Visual Branding and Creative Direction',
        desc: 'Holistic storytelling across identity systems and digital touchpoints.',
      },
      {
        name: 'Digital Experience Design',
        desc: 'Interaction choreography and deliberate user journeys.',
      },
    ],
  },
]

export default function LearningExploring() {
  return (
    <section className="w-full py-space-3xl px-margin md:px-margin-tablet lg:px-margin-desktop bg-surface-container-low border-t border-primary-container/10">
      <div className="max-w-[1600px] mx-auto space-y-space-2xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-md border-b border-primary-container/10 gap-space-md">
          <div className="space-y-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
                04 / KNOWLEDGE
              </span>
              <span className="text-outline">·</span>
              <span className="font-metadata text-metadata uppercase tracking-widest text-outline">
                EVOLUTION
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary-container uppercase tracking-tight">
              LEARNING TODAY. BUILDING FOR TOMORROW.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            I'm continuously expanding my technical knowledge, exploring new tools, and learning
            how to turn creative ideas into practical digital experiences.
          </p>
        </div>

        {/* 4 Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter lg:gap-gutter-desktop">
          {learningGroups.map((group) => (
            <div
              key={group.num}
              className="bg-surface p-space-lg border border-primary-container/10 flex flex-col justify-between space-y-space-lg"
            >
              <div className="space-y-space-md">
                <div className="flex items-center justify-between pb-space-xs border-b border-primary-container/10">
                  <span className="font-metadata text-metadata text-secondary">
                    GROUP {group.num}
                  </span>
                  <span className="w-1.5 h-1.5 bg-primary-container"></span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary-container uppercase tracking-tight">
                  {group.title}
                </h3>
                <div className="space-y-space-sm pt-space-xs">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className={`p-space-sm bg-surface-container-low border space-y-space-xs ${
                        item.hasBadge ? 'border-secondary-fixed' : 'border-primary-container/5'
                      }`}
                    >
                      <div className={`flex items-center ${item.hasBadge ? 'justify-between' : ''}`}>
                        <span
                          className={`font-body-sm text-body-sm text-primary-container block ${
                            item.hasBadge ? 'font-semibold' : 'font-medium'
                          }`}
                        >
                          {item.name}
                        </span>
                        {item.hasBadge && (
                          <span className="px-space-xs py-0.5 bg-primary-container text-on-primary font-metadata text-[10px] uppercase tracking-wider">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-metadata text-metadata text-on-surface-variant">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <span className="font-metadata text-metadata text-outline uppercase tracking-wider block pt-space-sm">
                {group.footer}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

