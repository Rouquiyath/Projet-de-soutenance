import { useMemo, useState } from 'react'
import { Icon } from '../components/common/Icon'
import { useLanguage } from '../context/useLanguage'
import { getTranslation } from '../i18n/translations'

export function CircuitsPage() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const [category, setCategory] = useState('all')
  const [duration, setDuration] = useState('all')
  const [sort, setSort] = useState('default')

  const circuits = useMemo(() => {
    let filtered = t.catalog.items.filter((item) => {
      const categoryMatches = category === 'all' || item.category === category
      const durationMatches = duration === 'all' || item.durationValue === Number(duration)
      return categoryMatches && durationMatches
    })

    if (sort === 'ascending') {
      filtered = [...filtered].sort((a, b) => a.priceValue - b.priceValue)
    }

    if (sort === 'descending') {
      filtered = [...filtered].sort((a, b) => b.priceValue - a.priceValue)
    }

    return filtered
  }, [category, duration, sort, t])

  return (
    <>
      <section className="catalog-hero">
        <div className="container">
          <h1>{t.catalog.title}</h1>
          <p>{t.catalog.subtitle}</p>
        </div>
      </section>

      <section className="catalog-section">
        <div className="container">
          <div className="catalog-toolbar">
            <div className="filter-group">
              <label>
                <span className="sr-only">{t.catalog.category}</span>
                <select value={category} onChange={(event) => setCategory(event.target.value)}>
                  <option value="all">{t.catalog.allCategories}</option>
                  <option value="nature">{t.catalog.categories.nature}</option>
                  <option value="culture">{t.catalog.categories.culture}</option>
                  <option value="discovery">{t.catalog.categories.discovery}</option>
                  <option value="adventure">{t.catalog.categories.adventure}</option>
                </select>
              </label>
              <label>
                <span className="sr-only">{t.catalog.duration}</span>
                <select value={duration} onChange={(event) => setDuration(event.target.value)}>
                  <option value="all">{t.catalog.allDurations}</option>
                  <option value="1">1 {t.catalog.day}</option>
                  <option value="2">2 {t.catalog.days}</option>
                  <option value="3">3 {t.catalog.days}</option>
                </select>
              </label>
            </div>
            <label className="sort-control">
              <span>{t.catalog.sortBy}</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="default">{t.catalog.defaultSort}</option>
                <option value="ascending">{t.catalog.priceAscending}</option>
                <option value="descending">{t.catalog.priceDescending}</option>
              </select>
            </label>
          </div>

          <div className="catalog-grid">
            {circuits.map((circuit) => (
              <article className="catalog-card" key={circuit.title}>
                <div className="catalog-card-image">
                  <img src={circuit.image} alt="" />
                  <span>{circuit.label}</span>
                </div>
                <div className="catalog-card-content">
                  <h2>{circuit.title}</h2>
                  <p>{circuit.description}</p>
                  <div className="catalog-card-meta">
                    <span><Icon name="clock" size={15} /> {circuit.duration}</span>
                    <strong>{circuit.price} <small>FCFA</small></strong>
                  </div>
                  <a className="catalog-card-button" href="#contact">
                    {t.catalog.details}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
