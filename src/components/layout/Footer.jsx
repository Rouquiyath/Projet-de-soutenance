import { socialLinks } from '../../data/mockData'
import { useLanguage } from '../../context/useLanguage'
import { getTranslation } from '../../i18n/translations'

export function Footer() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-panel">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand brand-light" href="#top">
              <span className="brand-wordmark">Dassa.</span>
            </a>
            <p>{t.footer.description}</p>
          </div>
          <div>
            <h3>{t.footer.discover}</h3>
            <ul className="footer-links numbered-links">
              {t.footer.discoverLinks.map((link, index) => <li key={link}><span>0{index + 1}</span><a href={link.href}>{link.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h3>{t.footer.information}</h3>
            <ul className="footer-links numbered-links">
              {t.footer.informationLinks.map((link, index) => <li key={link}><span>0{index + 6}</span><a href={link.href}>{link.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h3>{t.footer.contact}</h3>
            <address className="footer-contact">
              <strong>{t.footer.localOffice}</strong>
              <span>{t.footer.address}</span>
              <strong>{t.footer.phoneLabel}</strong>
              <a href="tel:+22997000000">{t.footer.phone}</a>
              <strong>{t.footer.emailLabel}</strong>
              <a href="mailto:hello@visite-dassa.bj">{t.footer.email}</a>
            </address>
          </div>
          <div className="newsletter-card">
            <h3>{t.footer.newsletterTitle}</h3>
            <p>{t.footer.newsletterText}</p>
            <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
              <input type="email" placeholder={t.footer.emailPlaceholder} aria-label={t.footer.emailPlaceholder} />
              <button type="submit">{t.footer.subscribe}</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container footer-bottom-bar">
        <span>{t.footer.rights}</span>
        <div className="social-links">
          {socialLinks.map((social) => (
            <a href={social.href} aria-label={social.label} key={social.label}>{social.shortLabel}</a>
          ))}
        </div>
        <div className="footer-legal">
          <a href="#contact">{t.footer.legal}</a>
          <a href="#contact">{t.footer.privacy}</a>
        </div>
      </div>
    </footer>
  )
}
