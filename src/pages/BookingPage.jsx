import { useState } from 'react'
import { useLanguage } from '../context/useLanguage'
import { getTranslation } from '../i18n/translations'

export function BookingPage() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="editorial-page booking-page">
      <section className="editorial-hero booking-hero">
        <div className="container editorial-hero-content">
          <p className="catalog-kicker">{t.bookingPage.kicker}</p>
          <h1>{t.bookingPage.title}</h1>
          <p>{t.bookingPage.subtitle}</p>
        </div>
      </section>
      <section className="editorial-section booking-section">
        <div className="container booking-layout">
          <div className="booking-reassurance">
            <p className="eyebrow">{t.bookingPage.formTitle}</p>
            <h2>{t.bookingPage.reassuranceTitle}</h2>
            <p>{t.bookingPage.reassuranceText}</p>
            <ul>{t.bookingPage.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
          </div>
          <form className="editorial-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
            <h2>{t.bookingPage.formTitle}</h2>
            <div className="form-row">
              <label htmlFor="booking-name">{t.bookingPage.name}<input id="booking-name" required name="name" type="text" autoComplete="name" /></label>
              <label htmlFor="booking-email">{t.bookingPage.email}<input id="booking-email" required name="email" type="email" autoComplete="email" /></label>
            </div>
            <div className="form-row">
              <label htmlFor="booking-phone">{t.bookingPage.phone}<input id="booking-phone" required name="phone" type="tel" autoComplete="tel" /></label>
              <label htmlFor="booking-date">{t.bookingPage.date}<input id="booking-date" required name="date" type="date" /></label>
            </div>
            <div className="form-row">
              <label htmlFor="booking-guests">{t.bookingPage.guests}<input id="booking-guests" required name="guests" type="number" min="1" defaultValue="2" /></label>
              <label htmlFor="booking-tour">{t.bookingPage.tour}<select id="booking-tour" required name="tour" defaultValue=""><option value="" disabled>{t.bookingPage.tourPlaceholder}</option>{t.circuits.items.map((item) => <option key={item.title} value={item.title}>{item.title}</option>)}</select></label>
            </div>
            <label htmlFor="booking-message">{t.bookingPage.message}<textarea id="booking-message" name="message" rows="5" placeholder={t.bookingPage.messagePlaceholder} /></label>
            <button className="button" type="submit">{t.bookingPage.submit}</button>
            {submitted && <p className="form-success" role="status" aria-live="polite">{t.bookingPage.success}</p>}
          </form>
        </div>
      </section>
    </div>
  )
}
