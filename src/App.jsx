import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { HomePage } from './pages/HomePage'
import { CircuitsPage } from './pages/CircuitsPage'
import { AboutPage } from './pages/AboutPage'
import { LanguageProvider } from './context/LanguageProvider'

function App() {
  const isCircuitsPage = window.location.pathname === '/circuits'
  const isAboutPage = window.location.pathname === '/a-propos'

  return (
    <LanguageProvider>
      <Header />
      <main>
        {isCircuitsPage ? <CircuitsPage /> : isAboutPage ? <AboutPage /> : <HomePage />}
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
