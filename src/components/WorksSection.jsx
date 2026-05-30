export default function WorksSection() {
  const projects = [
    {
      number: '01',
      category: 'GEN-AI WORKFLOWS',
      title: 'NEURAL CANVAS SUITE',
      description:
        'DEVELOPED A SUITE OF GENERATIVE AI TOOLS FOR ENTERPRISE CREATIVE TEAMS, REDUCING ASSET PRODUCTION TIME BY 75%.',
      stats: [
        { value: '75%', label: 'EFFICIENCY GAIN' },
        { value: '2.4M', label: 'ASSETS GENERATED' }
      ],
      icon: 'cloud_done',
      topOffset: '8rem'
    },
    {
      number: '02',
      category: 'AI PREDICTIVE ANALYTICS',
      title: 'SENTINEL FORECAST',
      description:
        'A REAL-TIME PREDICTIVE ENGINE FOR SUPPLY CHAIN OPTIMIZATION POWERED BY CUSTOM TRANSFORMER MODELS.',
      stats: [
        { value: '92%', label: 'FORECAST ACCURACY' },
        { value: '$14M', label: 'COST SAVINGS' }
      ],
      icon: 'monitoring',
      topOffset: '10rem'
    },
    {
      number: '03',
      category: 'HUMAN-AI INTERACTION',
      title: 'VOICE COGNITION 2.0',
      description:
        'REIMAGINING VOICE ASSISTANTS WITH EMOTIONAL INTELLIGENCE AND CONTEXT-AWARE MEMORY RETRIEVAL.',
      stats: [
        { value: '4.8/5', label: 'USER SATISFACTION' },
        { value: '12ms', label: 'LATENCY REDUCTION' }
      ],
      icon: 'record_voice_over',
      topOffset: '12rem'
    }
  ]

  return (
    <section className="py-section-padding-v px-gutter bg-surface-container" id="works">
      <h2 className="font-display-lg text-display-lg uppercase mb-32">
        SELECTED WORKS
      </h2>
      <div className="space-y-32">
        {projects.map((project, index) => (
          <div
            key={index}
            className="sticky-card bg-surface sharp-border p-12 md:p-20 grid grid-cols-1 md:grid-cols-12 gap-gutter shadow-2xl hover-invert transition-all duration-500 group"
            style={{ top: project.topOffset }}
          >
            <div className="col-span-12 md:col-span-1 flex flex-col justify-between">
              <span className="font-display-xl text-headline-md text-tertiary group-hover:text-black">
                {project.number}
              </span>
            </div>
            <div className="col-span-12 md:col-span-7">
              <span className="font-label-mono text-label-mono uppercase text-tertiary group-hover:text-black font-bold">
                {project.category}
              </span>
              <h3 className="font-display-lg text-headline-md uppercase mt-4 mb-stack-lg group-hover:text-black">
                {project.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg group-hover:text-black">
                {project.description}
              </p>
              <div className="flex gap-20">
                {project.stats.map((stat, statIndex) => (
                  <div key={statIndex}>
                    <span className="block font-display-lg text-display-lg leading-none group-hover:text-black">
                      {stat.value}
                    </span>
                    <span className="font-label-mono text-label-mono uppercase opacity-50 group-hover:text-black group-hover:opacity-80">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
              <div className="space-y-stack-sm">
                <span className="font-label-mono text-label-mono text-tertiary uppercase block group-hover:text-black">
                  BACKGROUND
                </span>
                <div className="bg-surface-container-highest h-[200px] w-full flex items-center justify-center overflow-hidden sharp-border skeleton-pulse group-hover:border-black group-hover:bg-black/10">
                  <div className="p-8 text-center">
                    <span
                      className="material-symbols-outlined text-6xl opacity-20 group-hover:text-black"
                      data-icon={project.icon}
                    >
                      {project.icon}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
