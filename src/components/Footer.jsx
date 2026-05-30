export default function Footer() {
  return (
    <footer className="w-full py-stack-lg border-t-2 border-surface-container-highest flex flex-col md:flex-row justify-between items-center px-gutter gap-stack-md">
      <div className="font-display-lg text-body-md text-on-surface">
        APM_PORTFOLIO
      </div>
      <div className="font-label-mono text-label-mono uppercase text-on-surface-variant">
        ©2024 AI PM PORTFOLIO. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-stack-md">
        <a
          className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-tertiary underline decoration-2 underline-offset-4"
          href="#"
        >
          LINKEDIN
        </a>
        <a
          className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-tertiary underline decoration-2 underline-offset-4"
          href="#"
        >
          TWITTER
        </a>
        <a
          className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-tertiary underline decoration-2 underline-offset-4"
          href="#"
        >
          EMAIL
        </a>
      </div>
    </footer>
  )
}
