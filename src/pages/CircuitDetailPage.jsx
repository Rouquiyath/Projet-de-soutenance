import { Icon } from '../components/common/Icon'
import { getCircuitById } from '../data/circuits'
import { useLanguage } from '../context/useLanguage'
import { getTranslation } from '../i18n/translations'

export function CircuitDetailPage() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const circuitId = window.location.pathname.split('/').pop()
  const circuit = getCircuitById(circuitId, language)

  if (!circuit) {
    return (
      <section className="editorial-section">
        <div className="container detail-not-found">
          <h1>{t.detailPage.notFound}</h1>
          <a className="button" href="/circuits">{t.detailPage.backToCatalog}</a>
        </div>
      </section>
    )
  }

  const circuitIndex = t.catalog.items.findIndex((item) => item.id === circuit.id)

  return (
    <div className="editorial-page circuit-detail-page">
      <section className="detail-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(1,34,16,.9), rgba(1,34,16,.38)), url("${circuit.image}")` }}>
        <div className="container detail-hero-content">
          <h1>{circuit.title}</h1>
          <div className="detail-hero-meta">
            <span><Icon name="clock" size={15} /> {circuit.duration}</span>
            <span>{circuit.price} FCFA</span>
          </div>
        </div>
      </section>
      <section className="editorial-section detail-section">
        <div className="container detail-layout">
          <div className="detail-main">
            <p className="eyebrow">{t.detailPage.descriptionLabel}</p>
            <h2>{circuit.title}</h2>
            <p>{circuit.description}</p>
            <p className="detail-long-copy">{t.detailPage.overviewText}</p>
            <div className="detail-highlights">
              <div><strong>{t.detailPage.duration}</strong><span>{circuit.duration}</span></div>
              <div><strong>{t.detailPage.price}</strong><span>{circuit.price} FCFA</span></div>
              <div><strong>{t.detailPage.category}</strong><span>{circuit.label}</span></div>
            </div>
            <section className="detail-subsection">
              <p className="eyebrow">{t.detailPage.itineraryTitle}</p>
              <ol className="detail-itinerary">
                {t.detailPage.itinerary.map((step, stepIndex) => (
                  <li key={step.title}>
                    <span>{stepIndex + 1}</span>
                    <div><strong>{step.title}</strong><p>{step.text}</p></div>
                  </li>
                ))}
              </ol>
            </section>
            <section className="detail-subsection">
              <p className="eyebrow">{t.detailPage.pointsTitle}</p>
              <ul className="detail-points">{t.detailPage.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </section>
          </div>
          <aside className="detail-aside">
            <p className="eyebrow">{t.detailPage.practicalTitle}</p>
            <dl className="detail-practical">
              <div><dt>{t.detailPage.meetingPoint}</dt><dd>{t.detailPage.meetingValue}</dd></div>
              <div><dt>{t.detailPage.difficulty}</dt><dd>{t.detailPage.difficultyValue}</dd></div>
              <div><dt>{t.detailPage.group}</dt><dd>{t.detailPage.groupValue}</dd></div>
            </dl>
            <p className="eyebrow">{t.detailPage.includedTitle}</p>
            <ul>{t.detailPage.included.map((item) => <li key={item}>{item}</li>)}</ul>
            <a className="button" href={`/reserver?circuit=${circuit.id}`}>{t.detailPage.book} <Icon name="arrow" size={16} /></a>
          </aside>
        </div>
      </section>
      <section className="detail-preview-section">
        <div className="container">
          <div className="detail-preview-heading">
            <div>
              <p className="eyebrow">{t.detailPage.previewTitle}</p>
              <h2>{circuit.title}</h2>
            </div>
            <p>{t.detailPage.previewText}</p>
          </div>
          <div className="detail-preview-grid">
            {[circuit.image, t.catalog.items[(circuitIndex + 1) % t.catalog.items.length].image, t.catalog.items[(circuitIndex + 2) % t.catalog.items.length].image].map((image, imageIndex) => (
              <img key={`${image}-${imageIndex}`} src={image} alt={`${circuit.title} ${imageIndex + 1}`} loading="lazy" />
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section cta-section-detail">
        <div className="container">
          <div className="cta-frame">
            <div className="cta-content">
              <p className="eyebrow">{t.cta.title}</p>
              <h2>{t.cta.title}</h2>
              <p>{t.cta.text}</p>
              <a className="button" href={`/reserver?circuit=${circuit.id}`}>{t.detailPage.book} <Icon name="arrow" size={16} /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
