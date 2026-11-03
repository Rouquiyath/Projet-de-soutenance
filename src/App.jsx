import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { HomePage } from './pages/HomePage'
import { CircuitsPage } from './pages/CircuitsPage'
import { AboutPage } from './pages/AboutPage'
import { ActivitiesPage } from './pages/ActivitiesPage'
import { ContactPage } from './pages/ContactPage'
import { BookingPage } from './pages/BookingPage'
import { LanguageProvider } from './context/LanguageProvider'

function App() {
  const isCircuitsPage = window.location.pathname === '/circuits'
  const isAboutPage = window.location.pathname === '/a-propos'
  const isActivitiesPage = window.location.pathname === '/activites'
  const isContactPage = window.location.pathname === '/contact'
  const isBookingPage = window.location.pathname === '/reserver'

  return (
    <LanguageProvider>
      <Header />
      <main>
        {isCircuitsPage ? <CircuitsPage /> : isAboutPage ? <AboutPage /> : isActivitiesPage ? <ActivitiesPage /> : isContactPage ? <ContactPage /> : isBookingPage ? <BookingPage /> : <HomePage />}
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
