export default function ProjectCard({
  specimenNum,
  categoryLabel,
  categoryType,
  title,
  tagline,
  description,
  deliverables,
  deliverableLabel,
  framework,
  frameworkLabel,
  link,
  bgColor,
  imgSrc,
  imgAlt,
  metaLeft,
  metaRight,
  reversed,
}) {
  const imageColumn = (
    <div
      className={`${
        reversed ? 'order-1 lg:order-2' : ''
      } lg:col-span-7 relative min-h-[460px] lg:min-h-[580px] p-space-md sm:p-space-xl flex flex-col justify-between overflow-hidden`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Project Header Stamp */}
      <div className="relative z-10 flex items-center justify-between text-on-primary">
        <span className="font-metadata text-metadata tracking-widest uppercase bg-[#14243A]/60 backdrop-blur-sm px-space-sm py-space-xs border border-white/10">
          CASE SPECIMEN {specimenNum}
        </span>
        <span className="font-metadata text-metadata tracking-wider text-[#E9DFC9]">
          {categoryType}
        </span>
      </div>

      {/* Visual Display with Real Project Preview */}
      <div className="relative z-10 my-auto py-space-md flex flex-col items-center justify-center">
        <div
          className="relative w-full max-w-md shadow-2xl border border-white/15 p-2 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300"
          style={{ backgroundColor: bgColor === '#2A1118' ? '#1B0B11' : '#2B1B12' }}
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-auto object-cover max-h-[380px]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Micro metadata overlay footer */}
      <div className="relative z-10 pt-space-sm border-t border-white/10 flex items-center justify-between text-white/70 font-metadata text-metadata">
        <span>{metaLeft}</span>
        <span>{metaRight}</span>
      </div>
    </div>
  )

  const contentColumn = (
    <div
      className={`${
        reversed ? 'order-2 lg:order-1 lg:border-r' : 'lg:border-l'
      } lg:col-span-5 p-space-xl lg:p-space-2xl flex flex-col justify-between border-t lg:border-t-0 border-primary-container/10 bg-surface`}
    >
      <div className="space-y-space-lg">
        <div className="flex items-center justify-between pb-space-sm border-b border-primary-container/10">
          <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">
            {categoryLabel}
          </span>
          <span className="px-space-sm py-space-xs font-metadata text-metadata text-primary-container border border-primary-container/20 uppercase">
            Concept Project
          </span>
        </div>
        <div className="space-y-space-sm">
          <h3 className="font-display-xl text-headline-lg lg:text-display-xl text-primary-container tracking-tight leading-none">
            {title}
          </h3>
          <span className="font-editorial-serif text-editorial-serif text-secondary italic block">
            {tagline}
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {description}
        </p>
        <div className="space-y-space-xs pt-space-xs border-t border-primary-container/10 font-metadata text-metadata text-on-surface-variant">
          <div className="flex justify-between py-space-xs">
            <span className="text-secondary">{deliverableLabel}</span>
            <span className="text-primary-container font-medium">{deliverables}</span>
          </div>
          <div className="flex justify-between py-space-xs">
            <span className="text-secondary">{frameworkLabel}</span>
            <span className="text-primary-container font-medium">{framework}</span>
          </div>
        </div>
      </div>
      <div className="pt-space-xl">
        <a
          className="inline-flex items-center justify-between w-full px-space-lg py-space-md bg-primary-container text-on-primary font-headline-sm text-label-caps uppercase tracking-widest hover:bg-surface-tint transition-colors duration-200"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>EXPLORE PROJECT</span>
          <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
        </a>
      </div>
    </div>
  )

  return (
    <article className="bg-surface border border-primary-container/10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {reversed ? (
          <>
            {contentColumn}
            {imageColumn}
          </>
        ) : (
          <>
            {imageColumn}
            {contentColumn}
          </>
        )}
      </div>
    </article>
  )
}
