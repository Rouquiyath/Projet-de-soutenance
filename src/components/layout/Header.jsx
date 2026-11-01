import { useEffect, useState } from 'react'
import { Icon } from '../common/Icon'
import { useLanguage } from '../../context/useLanguage'
import { getTranslation } from '../../i18n/translations'
import logo from '../../assets/Images/Logo.svg'

export function Header() {
  const { language, toggleLanguage } = useLanguage()
  const t = getTranslation(language)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24 || window.location.pathname !== '/')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Visit Dassa">
          <img className="brand-logo" src={logo} alt="Visit Dassa" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href="#top" onClick={() => setMenuOpen(false)}>{t.navigation.home}</a>
          <a href="/circuits" onClick={() => setMenuOpen(false)}>{t.navigation.circuits}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t.navigation.about}</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>{t.navigation.gallery}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t.navigation.contact}</a>
          <a href="#activities" onClick={() => setMenuOpen(false)}>{t.navigation.activities}</a>
        </nav>
        <div className="header-actions">
          <button className="language-switcher" type="button" onClick={toggleLanguage}>
            <span>文</span> {language.toUpperCase()} <Icon name="chevron" size={13} />
          </button>
          <a className="button button-small" href="#contact">{t.navigation.reserve}</a>
        </div>
      </div>
    </header>
  )
}
