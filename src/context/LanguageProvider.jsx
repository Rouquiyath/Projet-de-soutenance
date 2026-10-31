import { useMemo, useState } from 'react'
import { LanguageContext } from './languageContext'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr')

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === 'fr' ? 'en' : 'fr')),
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
