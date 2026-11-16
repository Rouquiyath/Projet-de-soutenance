import { useEffect, useRef, useState } from 'react'
import { Icon } from '../components/common/Icon'
import { useLanguage } from '../context/useLanguage'
import { getTranslation } from '../i18n/translations'
import imageOne from '../assets/Images/472954159_612013734633753_5307435507371565481_n.jpg'
import imageTwo from '../assets/Images/472995461_612013587967101_7236678340406480037_n.jpg'
import imageThree from '../assets/Images/473079184_612013824633744_2292827569597831335_n.jpg'
import imageFour from '../assets/Images/473123738_612013874633739_8327928572156525620_n.jpg'
import imageFive from '../assets/Images/475016426_1125577919212533_8409583480296543718_n.jpg'
import imageSix from '../assets/Images/475045812_1125578105879181_541911185402279048_n.jpg'
import imageSeven from '../assets/Images/IMG_5857.jpeg'
import imageEight from '../assets/Images/IMG_5860.jpeg'

const galleryImages = [
  imageOne, imageTwo, imageThree, imageFour,
  imageFive, imageSix, imageSeven, imageEight,
]

export function AboutPage() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const [selectedImage, setSelectedImage] = useState(null)
  const lightboxRef = useRef(null)
  const closeButtonRef = useRef(null)
  const galleryTriggerRef = useRef(null)

  useEffect(() => {
    if (!selectedImage) return undefined

    const previousFocus = galleryTriggerRef.current
    lightboxRef.current?.focus()

    return () => previousFocus instanceof HTMLElement && previousFocus.focus()
  }, [selectedImage])

  function handleLightboxKeyDown(event) {
    if (event.key === 'Escape') {
      setSelectedImage(null)
      return
    }

    if (event.key === 'Tab') {
      event.preventDefault()
      closeButtonRef.current?.focus()
    }
  }

  return (
    <div className="about-page">
      <section className="about-page-hero">
        <div className="container about-page-hero-content">
          <h1>{t.aboutPage.title}</h1>
          <p>{t.aboutPage.subtitle}</p>
        </div>
      </section>

      <section className="about-story-section" id="about">
        <div className="container about-story-layout">
          <div className="about-story-heading">
            <p className="eyebrow">{t.aboutPage.storyEyebrow}</p>
            <h2>{t.aboutPage.storyTitle}</h2>
          </div>
          <div className="about-story-copy">
            <p className="about-story-lead">{t.aboutPage.storyLead}</p>
            <p>{t.aboutPage.storyText}</p>
            <a className="text-link" href="/circuits">{t.aboutPage.storyCta} <Icon name="arrow" size={16} /></a>
          </div>
        </div>
        <div className="container about-values-grid">
          {t.aboutPage.values.map((value, index) => (
            <article className="about-value-card" key={value.title}>
              <span>0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="container">
          <div className="gallery-heading">
            <div>
              <p className="eyebrow">{t.galleryPage.eyebrow}</p>
              <h2>{t.galleryPage.title}</h2>
            </div>
            <p>{t.galleryPage.subtitle}</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <button
                className={`gallery-item gallery-item-${index + 1}`}
                type="button"
                key={image}
                onClick={(event) => {
                  galleryTriggerRef.current = event.currentTarget
                  setSelectedImage(image)
                }}
              >
                <img src={image} alt={`${t.galleryPage.imageAlt} ${index + 1}`} loading="lazy" />
                <span>{t.galleryPage.view}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section cta-section-gallery">
        <div className="container">
          <div className="cta-frame">
            <div className="cta-content">
              <p className="eyebrow">{t.cta.title}</p>
              <h2>{t.cta.title}</h2>
              <p>{t.cta.text}</p>
              <a className="button" href="/reserver">{t.cta.button} <Icon name="arrow" size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-lightbox-title"
          tabIndex="-1"
          ref={lightboxRef}
          onKeyDown={handleLightboxKeyDown}
        >
          <h2 id="gallery-lightbox-title" className="sr-only">{t.galleryPage.title}</h2>
          <button
            className="gallery-lightbox-close"
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label={t.galleryPage.close}
            ref={closeButtonRef}
          >
            ×
          </button>
          <img src={selectedImage} alt={t.galleryPage.imageAlt} />
        </div>
      )}
    </div>
  )
}
