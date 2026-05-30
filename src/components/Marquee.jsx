export default function Marquee() {
  const stats = [
    '99% ACCURACY RATIO',
    '•',
    '12M+ ACTIVE USERS',
    '•',
    'NEURAL INTERFACE LEAD',
    '•',
    'DATA-DRIVEN DECISIONS'
  ]

  return (
    <div className="marquee-container py-stack-md bg-tertiary">
      <div className="marquee-content font-display-lg text-headline-md uppercase text-black font-bold flex gap-20">
        {[...stats, ...stats].map((stat, index) => (
          <span key={index}>{stat}</span>
        ))}
      </div>
    </div>
  )
}
