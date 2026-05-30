import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    { name: 'XIAOHONGSHU', icon: 'north_east', href: '#' },
    { name: 'WECHAT', icon: 'north_east', href: '#' },
    { name: 'GITHUB', icon: 'north_east', href: '#' }
  ]

  return (
    <section className="py-section-padding-v px-gutter" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
        <div className="space-y-stack-lg">
          <h2 className="font-display-lg text-display-lg uppercase">
            LET&apos;S BUILD
            <br />
            THE FUTURE.
          </h2>
          <form className="space-y-12" onSubmit={handleSubmit}>
            <div className="group">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-t-0 border-x-0 border-b-2 border-surface-container-highest focus:border-tertiary focus:ring-0 text-display-lg font-display-lg uppercase placeholder:text-surface-container-highest transition-all duration-300 py-4"
                placeholder="NAME"
                type="text"
              />
            </div>
            <div className="group">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-t-0 border-x-0 border-b-2 border-surface-container-highest focus:border-tertiary focus:ring-0 text-display-lg font-display-lg uppercase placeholder:text-surface-container-highest transition-all duration-300 py-4"
                placeholder="EMAIL"
                type="email"
              />
            </div>
            <div className="group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-t-0 border-x-0 border-b-2 border-surface-container-highest focus:border-tertiary focus:ring-0 text-display-lg font-display-lg uppercase placeholder:text-surface-container-highest transition-all duration-300 py-4 resize-none"
                placeholder="MESSAGE"
                rows="1"
              ></textarea>
            </div>
            <button
              className="bg-tertiary text-black px-12 py-6 font-display-lg text-headline-md uppercase sharp-border hover:bg-on-surface hover:text-surface transition-all duration-300 mt-stack-lg border-2 border-black"
              type="submit"
            >
              SEND INQUIRY
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-end gap-stack-md">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className="sharp-border p-stack-lg flex justify-between items-center hover:translate-x-4 transition-transform duration-300 bg-surface-container hover:bg-tertiary hover:text-black group"
              href={link.href}
            >
              <span className="font-display-lg text-headline-md uppercase">
                {link.name}
              </span>
              <span
                className="material-symbols-outlined text-4xl group-hover:rotate-45 transition-transform"
                data-icon={link.icon}
              >
                {link.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
