import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { HomePage } from './pages/HomePage'
import { CircuitsPage } from './pages/CircuitsPage'
import { AboutPage } from './pages/AboutPage'
import { ActivitiesPage } from './pages/ActivitiesPage'
import { ContactPage } from './pages/ContactPage'
import { BookingPage } from './pages/BookingPage'
import { CircuitDetailPage } from './pages/CircuitDetailPage'
import { FaqPage } from './pages/FaqPage'
import { LegalPage } from './pages/LegalPage'
import { LanguageProvider } from './context/LanguageProvider'
import { useLanguage } from './context/useLanguage'
import { getTranslation } from './i18n/translations'

const staticPages = {
  '/': HomePage,
  '/circuits': CircuitsPage,
  '/a-propos': AboutPage,
  '/activites': ActivitiesPage,
  '/contact': ContactPage,
  '/reserver': BookingPage,
  '/faq': FaqPage,
  '/mentions-legales': LegalPage,
  '/confidentialite': LegalPage,
}

function SkipLink() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return <a className="skip-link" href="#main-content">{t.navigation.skipToContent}</a>
}

function NotFoundPage() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <div className="editorial-page">
      <section className="editorial-hero">
        <div className="container editorial-hero-content">
          <h1>{t.notFoundPage.title}</h1>
          <p>{t.notFoundPage.message}</p>
          <a className="button" href="/">{t.notFoundPage.backHome}</a>
        </div>
      </section>
    </div>
  )
}

function RouteContent() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const Page = staticPages[pathname]
    || (/^\/circuits\/[^/]+$/.test(pathname) ? CircuitDetailPage : NotFoundPage)

  return <Page />
}

function App() {
  return (
    <LanguageProvider>
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex="-1">
        <RouteContent />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
