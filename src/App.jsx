import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { HomePage } from './pages/HomePage'
import { CircuitsPage } from './pages/CircuitsPage'
import { LanguageProvider } from './context/LanguageProvider'

function App() {
  const isCircuitsPage = window.location.pathname === '/circuits'

  return (
    <LanguageProvider>
      <Header />
      <main>
        {isCircuitsPage ? <CircuitsPage /> : <HomePage />}
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
