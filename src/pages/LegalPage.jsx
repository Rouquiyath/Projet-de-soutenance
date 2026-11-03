import { useLanguage } from '../context/useLanguage'
import { getTranslation } from '../i18n/translations'

export function LegalPage() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const isPrivacy = window.location.pathname === '/confidentialite'
  const page = isPrivacy ? t.legalPages.privacy : t.legalPages.legal

  return (
    <div className="editorial-page legal-page">
      <section className="editorial-hero legal-hero">
        <div className="container editorial-hero-content">
          <p className="catalog-kicker">VISIT DASSA</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </section>
      <section className="editorial-section legal-section">
        <div className="container legal-content">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      </section>
    </div>
  )
}
