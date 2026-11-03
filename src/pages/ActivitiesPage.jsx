import { Icon } from '../components/common/Icon'
import { useLanguage } from '../context/useLanguage'
import { getTranslation } from '../i18n/translations'

export function ActivitiesPage() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <div className="editorial-page activities-page">
      <section className="editorial-hero activities-hero">
        <div className="container editorial-hero-content">
          <p className="catalog-kicker">{t.activitiesPage.kicker}</p>
          <h1>{t.activitiesPage.title}</h1>
          <p>{t.activitiesPage.subtitle}</p>
        </div>
      </section>
      <section className="editorial-section activities-section">
        <div className="container">
          <div className="editorial-section-heading">
            <div>
              <p className="eyebrow">{t.activitiesPage.introEyebrow}</p>
              <h2>{t.activitiesPage.introTitle}</h2>
            </div>
            <p>{t.activitiesPage.introText}</p>
          </div>
          <div className="activity-grid">
            {t.activitiesPage.items.map((item, index) => (
              <article className="activity-card" key={item.title}>
                <span className="activity-index">0{index + 1}</span>
                <span className="activity-icon"><Icon name={item.icon} size={30} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section cta-section-activities">
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
    </div>
  )
}
