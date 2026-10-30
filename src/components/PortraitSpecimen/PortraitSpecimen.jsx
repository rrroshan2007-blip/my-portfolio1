import { useState, useRef, useCallback } from 'react'
import roshanPortrait from '../../assets/roshan-portrait.jpg'

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

export default function PortraitSpecimen() {
  const [portrait, setPortrait] = useState(roshanPortrait)
  const [error, setError] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef(null)

  const validateAndSetFile = useCallback((file) => {
    setError('')
    if (!file) return

    const validTypes = ['image/png', 'image/jpeg', 'image/webp']
    if (!validTypes.includes(file.type)) {
      setError('Please select a JPG, PNG, or WebP image.')
      return
    }
    if (file.size > MAX_FILE_SIZE) {
      setError('File must be under 10 MB.')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => setPortrait(e.target.result)
    reader.readAsDataURL(file)
  }, [])

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) validateAndSetFile(e.target.files[0])
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }
  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }
  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer?.files?.[0]) validateAndSetFile(e.dataTransfer.files[0])
  }

  const handleReplace = (e) => {
    e.stopPropagation()
    inputRef.current?.click()
  }

  const handleDropzoneClick = (e) => {
    if (!portrait && !e.target.closest('label') && !e.target.closest('button')) {
      inputRef.current?.click()
    }
  }

  return (
    <section
      className="w-full py-space-3xl px-margin md:px-margin-tablet lg:px-margin-desktop bg-surface border-t border-primary-container/10"
      id="portrait-specimen"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-space-md mb-space-2xl border-b border-primary-container/10">
          <div className="flex items-center gap-space-sm">
            <span className="w-2 h-2 bg-primary-container"></span>
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
              PORTRAIT / IDENTITY SPECIMEN
            </span>
          </div>
          <span className="font-metadata text-metadata uppercase tracking-widest text-outline">
            VISUAL RECORD · 2024–2025
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-center">
          {/* Portrait Upload Panel */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative bg-surface-container-low border border-primary-container/10 p-space-md sm:p-space-lg">
              <div
                className={`relative aspect-[4/5] w-full bg-surface-container border border-dashed flex flex-col items-center justify-center overflow-hidden transition-all duration-300 group cursor-pointer ${
                  isDragging
                    ? 'border-primary'
                    : 'border-primary-container/30 hover:border-primary-container'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleDropzoneClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    if (!portrait) inputRef.current?.click()
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="Upload or replace portrait image"
              >
                {/* Preview Image */}
                {portrait && (
                  <img
                    src={portrait}
                    alt="Roshan - Creative Technologist & Engineering Student"
                    className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-300"
                  />
                )}

                {/* Upload Prompt */}
                {!portrait && (
                  <div className="flex flex-col items-center justify-center p-space-lg text-center space-y-space-sm z-20 group-hover:scale-[1.02] transition-transform duration-200">
                    <div className="w-16 h-16 rounded-full bg-surface-container-lowest border border-primary-container/10 flex items-center justify-center text-primary-container shadow-sm group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-200">
                      <span className="material-symbols-outlined text-[28px]">add_a_photo</span>
                    </div>
                    <div className="space-y-space-xs">
                      <span className="font-headline-sm text-body-md font-medium text-primary-container block uppercase tracking-tight">
                        Upload Personal Picture
                      </span>
                      <p className="font-metadata text-metadata text-on-surface-variant max-w-[240px] leading-relaxed">
                        Drag and drop portrait or browse local device files
                      </p>
                    </div>
                    <label
                      htmlFor="portrait-file-input"
                      className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-primary-container text-on-primary font-label-caps text-[10px] uppercase tracking-widest cursor-pointer hover:bg-surface-tint transition-colors duration-200 mt-space-xs"
                    >
                      <span className="material-symbols-outlined text-[15px]">file_upload</span>
                      <span>Select High-Res File</span>
                    </label>
                    {error && (
                      <p className="font-metadata text-metadata text-error mt-space-xs" role="alert">
                        {error}
                      </p>
                    )}
                    <div className="pt-space-xs border-t border-primary-container/10 w-full">
                      <span className="font-metadata text-[10px] text-outline uppercase tracking-wider block">
                        JPG, PNG or WEBP · Max 10MB
                      </span>
                    </div>
                  </div>
                )}

                {/* Replace Button */}
                {portrait && (
                  <div className="absolute top-space-sm right-space-sm z-30">
                    <button
                      aria-label="Replace Portrait"
                      className="p-1.5 bg-surface/90 backdrop-blur-md border border-primary-container/20 rounded-full text-primary-container hover:bg-primary hover:text-on-primary transition-colors shadow-sm"
                      type="button"
                      onClick={handleReplace}
                      title="Replace Portrait"
                    >
                      <span className="material-symbols-outlined text-[16px] block">cached</span>
                    </button>
                  </div>
                )}

                <input
                  ref={inputRef}
                  accept="image/png, image/jpeg, image/webp"
                  className="hidden"
                  id="portrait-file-input"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>

              {/* Specimen Metadata */}
              <div className="mt-space-sm pt-space-xs border-t border-primary-container/10 flex items-center justify-between text-secondary font-metadata text-metadata">
                <span>SPECIMEN ID: RSH-01</span>
                <span className="uppercase">FORMAT: 4:5 PROPORTION</span>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="lg:col-span-7 space-y-space-xl lg:pl-gutter-desktop">
            <div className="space-y-space-md">
              <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest block">
                CREATIVE TECHNOLOGIST PROFILE
              </span>
              <h2 className="font-headline-lg text-headline-md lg:text-headline-lg text-primary-container uppercase tracking-tight leading-tight">
                Roshan<br />
                <span className="font-editorial-serif italic lowercase font-normal text-secondary">
                  engineering student.
                </span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed pt-space-xs">
                A high-fidelity editorial visual record bridging intentional digital presence with
                architectural computational discipline. Upload your personal portrait above to see
                the specimen identity activate in real time.
              </p>
            </div>

            {/* Profile Badge */}
            <div className="bg-secondary-container/40 p-space-lg border border-secondary-fixed space-y-space-md">
              <div className="flex items-center justify-between pb-space-xs border-b border-primary-container/10">
                <span className="font-metadata text-metadata uppercase tracking-wider text-secondary">
                  PROFILE BADGE
                </span>
                <span className="font-metadata text-metadata text-primary-container font-semibold">
                  ACTIVE PORTFOLIO SPECIMEN
                </span>
              </div>
              <p className="font-editorial-serif text-editorial-serif-mobile lg:text-headline-sm text-primary-container italic leading-snug">
                "Creativity sharpened through technology, intentional structure, and curious
                exploration."
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-space-xs font-metadata text-metadata text-on-surface-variant border-t border-primary-container/10">
                <div>
                  <span className="text-secondary block text-[10px] uppercase">Role</span>
                  <span className="text-primary-container font-medium">Student &amp; Creator</span>
                </div>
                <div>
                  <span className="text-secondary block text-[10px] uppercase">Focus</span>
                  <span className="text-primary-container font-medium">Web &amp; AI Workflows</span>
                </div>
                <div>
                  <span className="text-secondary block text-[10px] uppercase">Venture</span>
                  <span className="text-primary-container font-medium">WibzZite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
