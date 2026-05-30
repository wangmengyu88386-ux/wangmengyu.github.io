export default function AboutSection() {
  const philosophyCards = [
    {
      icon: 'bolt',
      title: 'AI AS CAPABILITY AMPLIFIER'
    },
    {
      icon: 'analytics',
      title: 'DATA-DRIVEN STRATEGY'
    },
    {
      icon: 'verified_user',
      title: 'BUILD TRUSTWORTHY AI'
    }
  ]

  const skills = [
    {
      category: 'PRODUCT:',
      items: ['ROADMAPPING', 'UI/UX STRATEGY', 'METRICS ANALYSIS']
    },
    {
      category: 'AI TECH:',
      items: ['PYTORCH', 'NLP', 'VECTOR DATABASES']
    }
  ]

  return (
    <section className="py-section-padding-v px-gutter" id="about">
      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-span-5">
          <h2 className="font-display-lg text-display-lg uppercase mb-stack-lg sticky top-32">
            ABOUT ME
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="space-y-20">
            <div className="font-body-lg text-body-lg leading-relaxed">
              <p className="mb-stack-md">
                AS AN AI PRODUCT MANAGER, I OPERATE AT THE FRONTIER OF MACHINE
                LEARNING AND PRODUCT DESIGN. MY CAREER HAS BEEN DEFINED BY A
                RELENTLESS PURSUIT OF BRIDGING THE GAP BETWEEN THEORETICAL AI
                CAPABILITIES AND PRACTICAL USER VALUE.
              </p>
              <p>
                I SPECIALIZE IN LARGE LANGUAGE MODELS (LLMS), MULTI-MODAL
                INTERACTION, AND ETHICAL AI DEPLOYMENT. I BELIEVE THAT THE MOST
                SUCCESSFUL AI PRODUCTS ARE THOSE THAT EMPOWER HUMANS RATHER
                THAN REPLACE THEM.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
              {philosophyCards.map((card, index) => (
                <div
                  key={index}
                  className="sharp-border p-stack-md hover-invert transition-all duration-500 min-h-[300px] flex flex-col justify-between group"
                >
                  <span
                    className="material-symbols-outlined text-4xl group-hover:text-black"
                    data-icon={card.icon}
                  >
                    {card.icon}
                  </span>
                  <h3 className="font-headline-md text-headline-md uppercase mt-stack-lg group-hover:text-black">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="space-y-stack-md pt-stack-lg">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="flex flex-wrap gap-stack-sm items-center"
                >
                  <span className="font-label-mono text-label-mono text-on-surface-variant mr-4">
                    {skillGroup.category}
                  </span>
                  {skillGroup.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="sharp-border px-4 py-1 font-label-mono text-label-mono hover-invert transition-colors duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
