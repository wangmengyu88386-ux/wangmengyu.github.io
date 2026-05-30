import Navigation from '../components/Navigation'
import CustomCursor from '../components/CustomCursor'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import WorksSection from '../components/WorksSection'
import GallerySection from '../components/GallerySection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <div className="font-body-md selection:bg-tertiary selection:text-surface">
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <Marquee />
        <AboutSection />
        <WorksSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
