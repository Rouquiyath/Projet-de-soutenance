import { useState } from 'react'
import { useLanguage } from '../context/useLanguage'
import { getTranslation } from '../i18n/translations'

export function ContactPage() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="editorial-page contact-page">
      <section className="editorial-hero contact-hero">
        <div className="container editorial-hero-content">
          <h1>{t.contactPage.title}</h1>
          <p>{t.contactPage.subtitle}</p>
        </div>
      </section>
      <section className="editorial-section contact-section">
        <div className="container contact-layout">
          <div className="contact-details">
            <p className="eyebrow">{t.contactPage.detailsTitle}</p>
            <h2>{t.contactPage.formTitle}</h2>
            <div className="contact-detail-list">
              <div><strong>{t.contactPage.addressLabel}</strong><span>{t.contactPage.address}</span></div>
              <div><strong>{t.contactPage.phoneLabel}</strong><a href="tel:+22997000000">{t.contactPage.phone}</a></div>
              <div><strong>{t.contactPage.emailLabel}</strong><a href="mailto:hello@visite-dassa.bj">{t.contactPage.emailValue}</a></div>
              <div><strong>{t.contactPage.hoursLabel}</strong><span>{t.contactPage.hours}</span></div>
            </div>
          </div>
          <form className="editorial-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
            <h2>{t.contactPage.formTitle}</h2>
            <label htmlFor="contact-name">{t.contactPage.name}<input id="contact-name" required name="name" type="text" autoComplete="name" /></label>
            <label htmlFor="contact-email">{t.contactPage.email}<input id="contact-email" required name="email" type="email" autoComplete="email" /></label>
            <label htmlFor="contact-subject">{t.contactPage.subject}<input id="contact-subject" required name="subject" type="text" placeholder={t.contactPage.subjectPlaceholder} /></label>
            <label htmlFor="contact-message">{t.contactPage.message}<textarea id="contact-message" required name="message" rows="5" placeholder={t.contactPage.messagePlaceholder} /></label>
            <button className="button" type="submit">{t.contactPage.submit}</button>
            {submitted && <p className="form-success" role="status" aria-live="polite">{t.contactPage.success}</p>}
          </form>
        </div>
      </section>
    </div>
  )
}
