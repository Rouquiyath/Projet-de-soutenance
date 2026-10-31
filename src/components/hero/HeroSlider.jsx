import { useEffect, useState } from 'react'
import { Icon } from '../common/Icon'

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
  const [controlsVisible, setControlsVisible] = useState(false)

  useEffect(() => {
    const images = slides.map((slide) => {
      const image = new Image()
      image.src = slide.image
      return image
    })

    return () => images.forEach((image) => image.onload = null)
  }, [slides])

  const next = () => {
    setItems((current) => [...current.slice(1), current[0]])
  }

  const previous = () => {
    setItems((current) => [current[current.length - 1], ...current.slice(0, -1)])
  }

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setItems((current) => [...current.slice(1), current[0]])
    }, 10000)

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
            onMouseEnter={() => index >= 2 && index < 5 && setControlsVisible(true)}
            onMouseLeave={() => index >= 2 && index < 5 && setControlsVisible(false)}
            style={{ backgroundImage: `url("${item.image}")` }}
          >
            <div className="hero-slide-overlay" />
            {index === 1 && (
              <div className="hero-slide-content">
                <p className="eyebrow">Dassa Tourisme</p>
                <h1>{item.title}</h1>
                <p className="hero-slide-description">{item.description}</p>
                <a className="button" href="#circuits">
                  {labels.discover} <Icon name="arrow" size={16} />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
      <div
        className={`hero-slider-controls${controlsVisible ? ' is-visible' : ''}`}
        onMouseEnter={() => setControlsVisible(true)}
        onMouseLeave={() => setControlsVisible(false)}
      >
        <button type="button" aria-label={labels.previous} onClick={previous}>
          <span>‹</span>
        </button>
        <button type="button" aria-label={labels.next} onClick={next}>
          <span>›</span>
        </button>
      </div>
    </div>
  )
}
