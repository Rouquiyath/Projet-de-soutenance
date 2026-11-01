import { useEffect, useState } from 'react'

const defaultSlides = [
  {
    id: 'dassa-hills',
    image: '/slider/img1.jpg',
    title: 'Découvrez les collines de Dassa',
    description: 'Une destination authentique entre nature, culture et traditions.',
  },
  {
    id: 'royal-palace',
    image: '/slider/img2.jpg',
    title: 'Une histoire à vivre',
    description: 'Explorez le patrimoine vivant du royaume d’Igbo Idaasha.',
  },
  {
    id: 'nature',
    image: '/slider/img3.jpg',
    title: 'La nature à perte de vue',
    description: 'Laissez-vous surprendre par les paysages des collines béninoises.',
  },
  {
    id: 'culture',
    image: '/slider/img4.jpg',
    title: 'Des rencontres inoubliables',
    description: 'Découvrez les traditions et l’hospitalité de Dassa-Zoumé.',
  },
  {
    id: 'adventure',
    image: '/slider/img5.jpg',
    title: 'Prêt pour l’aventure ?',
    description: 'Des circuits guidés pour découvrir tous les secrets de Dassa.',
  },
  {
    id: 'heritage',
    image: '/slider/img6.jpg',
    title: 'Le patrimoine autrement',
    description: 'Un voyage entre mémoire, culture et grands espaces.',
  },
]

export function HeroSlider({ slides = defaultSlides, labels }) {
  const [items, setItems] = useState(slides)

  useEffect(() => {
    const images = slides.map((slide) => {
      const image = new Image()
      image.src = slide.image
      return image
    })

    return () => images.forEach((image) => image.onload = null)
  }, [slides])

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setItems((current) => [...current.slice(1), current[0]])
    }, 5000)

    return () => window.clearInterval(timerId)
  }, [])

  return (
    <div className="hero-slider">
      <div className="hero-slider-items">
        {items.map((item, index) => (
          <article
            className={[
              'hero-slide',
              index < 2 ? 'hero-slide-main' : '',
              index >= 2 && index < 5 ? 'hero-slide-preview' : '',
              index >= 5 ? 'hero-slide-hidden' : '',
              index === 1 ? 'hero-slide-active' : '',
            ].filter(Boolean).join(' ')}
            key={item.id}
            style={{ backgroundImage: `url("${item.image}")` }}
          >
            <div className="hero-slide-overlay" />
          </article>
        ))}
      </div>
      <div className="hero-slide-content">
        <p className="hero-slide-kicker">VISIT DASSA <span>•</span> BÉNIN</p>
        <h1>{labels.titlePrefix} <span>{labels.titleAccent}</span></h1>
        <p className="hero-slide-subtitle">{labels.subtitle}</p>
        <div className="hero-slide-actions">
          <a className="button" href="#circuits">{labels.discover}</a>
          <a className="button button-outline" href="#contact">{labels.book}</a>
        </div>
        <p className="hero-slide-description">{labels.description}</p>
      </div>
    </div>
  )
}
