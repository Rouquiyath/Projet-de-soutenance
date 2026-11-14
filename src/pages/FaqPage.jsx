import { useLanguage } from '../context/useLanguage'
import { getTranslation } from '../i18n/translations'

export function FaqPage() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <div className="editorial-page faq-page">
      <section className="editorial-hero faq-hero">
        <div className="container editorial-hero-content">
          <h1>{t.faqPage.title}</h1>
          <p>{t.faqPage.subtitle}</p>
        </div>
      </section>
      <section className="editorial-section faq-section">
        <div className="container faq-list">
          {t.faqPage.items.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span>+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
