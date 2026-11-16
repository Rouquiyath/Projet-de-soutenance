import { useEffect, useRef, useState } from 'react'
import { Icon } from '../common/Icon'
import { useLanguage } from '../../context/useLanguage'
import { getTranslation } from '../../i18n/translations'
import logo from '../../assets/Images/Logo.svg'

export function Header() {
  const { language, toggleLanguage } = useLanguage()
  const t = getTranslation(language)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggleRef = useRef(null)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24 || window.location.pathname !== '/')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      menuToggleRef.current?.focus()
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="Visit Dassa">
          <img className="brand-logo" src={logo} alt="" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? t.navigation.closeMenu : t.navigation.openMenu}
          ref={menuToggleRef}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label={t.navigation.main}>
          <a href="/" onClick={() => setMenuOpen(false)}>{t.navigation.home}</a>
          <a href="/circuits" onClick={() => setMenuOpen(false)}>{t.navigation.circuits}</a>
          <a href="/a-propos#about" onClick={() => setMenuOpen(false)}>{t.navigation.about}</a>
          <a href="/a-propos#gallery" onClick={() => setMenuOpen(false)}>{t.navigation.gallery}</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>{t.navigation.contact}</a>
          <a href="/activites" onClick={() => setMenuOpen(false)}>{t.navigation.activities}</a>
        </nav>
        <div className="header-actions">
          <button
            className="language-switcher"
            type="button"
            onClick={toggleLanguage}
            aria-label={language === 'fr' ? t.navigation.switchToEnglish : t.navigation.switchToFrench}
          >
            <span>文</span> {language.toUpperCase()} <Icon name="chevron" size={13} />
          </button>
          <a className="button button-small" href="/reserver">{t.navigation.reserve}</a>
        </div>
      </div>
    </header>
  )
}
