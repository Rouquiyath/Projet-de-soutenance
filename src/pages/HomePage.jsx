import { Icon } from '../components/common/Icon'
import { HeroSlider } from '../components/hero/HeroSlider'
import { useLanguage } from '../context/useLanguage'
import { getTranslation } from '../i18n/translations'

export function HomePage() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <>
      <section className="hero-section" id="top">
        <HeroSlider
          labels={{
            titlePrefix: t.hero.titlePrefix,
            titleAccent: t.hero.titleAccent,
            subtitle: t.hero.subtitle,
            discover: t.hero.discover,
            book: t.hero.book,
            description: t.hero.description,
          }}
        />
      </section>

      <section className="about-section" id="about">
        <div className="container about-layout">
          <div className="about-visual">
            <img src="/slider/img1.jpg" alt={t.about.imageAlt} />
            <span className="about-badge"><strong>41</strong><span>{t.about.hills}</span></span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
            <p className="about-intro">{t.about.intro}</p>
            <div className="about-points">
              {t.about.points.map((point) => (
                <article key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="experiences-section" id="circuits">
        <div className="container">
          <div className="experiences-heading">
            <div>
              <p className="eyebrow">{t.experiences.eyebrow}</p>
              <h2>{t.experiences.title}</h2>
            </div>
            <a className="experiences-index" href="/circuits">{t.experiences.all}</a>
          </div>
          <div className="experiences-grid">
            {t.experiences.items.map((experience) => (
              <article className="experience-card" key={experience.title}>
                <div className="experience-image">
                  <img src={experience.image} alt="" />
                  <span className="experience-badge">{experience.tag}</span>
                </div>
                <div className="experience-meta">
                  <span>{experience.duration}</span>
                  <span>{experience.price}</span>
                </div>
                <h3>{experience.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="activities">
        <div className="container">
          <div className="cta-frame">
            <div className="cta-content">
              <p className="eyebrow">{t.cta.title}</p>
              <h2>{t.cta.title}</h2>
              <p>{t.cta.text}</p>
              <a className="button" href="#circuits">{t.cta.button} <Icon name="arrow" size={16} /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
