import ProjectCard from './ProjectCard'
import aadhyaImg from '../../assets/aadhya-preview.jpg'
import orahImg from '../../assets/orah-preview.jpg'

const projects = [
  {
    specimenNum: '01',
    categoryLabel: 'MAKEUP ARTIST WEBSITE CONCEPT',
    categoryType: 'EDITORIAL PORTFOLIO',
    title: 'Aadhya Rao',
    tagline: '"Not a new face. A new feeling."',
    description:
      'A concept website for a makeup artist, exploring portfolio presentation, visual identity, and a distinctive digital presence through an editorial layout and cohesive visual direction.',
    deliverableLabel: 'DELIVERABLES',
    deliverables: 'UI Layout · Typographic Identity · Showcase',
    frameworkLabel: 'FRAMEWORK',
    framework: 'AI-Assisted Workflow · Responsive Web',
    link: 'https://wibzzite-ui.github.io/Aadhya-Rao/',
    bgColor: '#2A1118',
    imgSrc: aadhyaImg,
    imgAlt: 'Aadhya Rao Makeup Artist Concept Website Layout Showcase',
    metaLeft: 'COLOR PALETTE: DEEP BERRY & WARM IVORY',
    metaRight: 'GRID SYSTEM: ASYMMETRIC 8-COL',
    reversed: false,
  },
  {
    specimenNum: '02',
    categoryLabel: 'CAFÉ WEBSITE CONCEPT',
    categoryType: 'CULINARY & AMBIENCE CONCEPT',
    title: 'Orah Brew',
    tagline: '"Good spaces create good memories."',
    description:
      'A café website concept exploring how visual storytelling, thoughtful layout, and brand aesthetics can create a more engaging online presence.',
    deliverableLabel: 'DELIVERABLES',
    deliverables: 'Culinary Editorial · Digital Menu · Spatial Ambience',
    frameworkLabel: 'ATMOSPHERE',
    framework: 'Warm Terracotta · Artisanal Roast · Botanical',
    link: 'https://wibzzite-ui.github.io/orahbrew/',
    bgColor: '#4A3223',
    imgSrc: orahImg,
    imgAlt: 'Orah Brew Garden Café Concept Website Layout Showcase',
    metaLeft: 'COLOR PALETTE: ROASTED OCHRE & SAGE',
    metaRight: 'STRUCTURE: PHOTO-LED BENTO ARCHITECTURE',
    reversed: true,
  },
]

export default function Projects() {
  return (
    <section
      className="w-full py-space-3xl px-margin md:px-margin-tablet lg:px-margin-desktop bg-surface-container-high border-t border-primary-container/10"
      id="projects"
    >
      <div className="max-w-[1600px] mx-auto space-y-space-3xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-md border-b border-primary-container/10 gap-space-md">
          <div className="space-y-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
                03 / ARCHIVE
              </span>
              <span className="text-outline">·</span>
              <span className="font-metadata text-metadata uppercase tracking-widest text-outline">
                SELECTED WORK
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary-container uppercase tracking-tight">
              A FEW IDEAS, BROUGHT TO LIFE.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            A collection of digital concepts exploring design, identity, and online experiences.
          </p>
        </div>

        {/* Project Cards */}
        {projects.map((project) => (
          <ProjectCard key={project.specimenNum} {...project} />
        ))}
      </div>
    </section>
  )
}
