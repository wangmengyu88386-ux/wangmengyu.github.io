import CircularGallery from '../components/CircularGallery'

export default function GallerySection() {
  return (
    <section className="py-section-padding-v px-gutter bg-surface" id="gallery">
      <h2 className="font-display-lg text-display-lg uppercase mb-16">
        VISUAL SHOWCASE
      </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-20 max-w-3xl">
        EXPLORE MY WORK THROUGH AN INTERACTIVE 3D GALLERY. DRAG TO NAVIGATE,
        SCROLL TO EXPLORE.
      </p>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          bend={1}
          textColor="#cccd00"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
          font="bold 30px 'Archivo Narrow'"
        />
      </div>
    </section>
  )
}
