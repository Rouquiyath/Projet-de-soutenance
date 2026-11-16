import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/useLanguage'
import { getTranslation } from '../i18n/translations'
import { Icon } from '../components/common/Icon'

function formatPrice(amount, language) {
  return new Intl.NumberFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
    maximumFractionDigits: 0,
  }).format(amount)
}

function formatGuestCount(count, bookingText) {
  const amount = Number(count) || 1
  const unit = amount === 1 ? bookingText.person : bookingText.people
  return `${amount} ${unit}`
}

function getToday() {
  const date = new Date()
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
  return date.toISOString().slice(0, 10)
}

const mobileOperators = [
  { value: 'mtn', label: 'MTN Mobile Money', icon: 'mtn' },
  { value: 'moov', label: 'Moov Money', icon: 'moov' },
  { value: 'celtiis', label: 'Celtiis Cash', icon: 'celtiis' },
]

export function BookingPage() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const stepHeadingRef = useRef(null)
  const circuits = t.catalog.items
  const [circuitId, setCircuitId] = useState(() => {
    const requestedId = new URLSearchParams(window.location.search).get('circuit')
    return circuits.some((circuit) => circuit.id === requestedId) ? requestedId : ''
  })
  const [guestCount, setGuestCount] = useState('2')
  const [step, setStep] = useState('details')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [mobileOperator, setMobileOperator] = useState('mtn')
  const [reservation, setReservation] = useState(null)
  const selectedCircuit = circuits.find((circuit) => circuit.id === circuitId)
  const totalAmount = selectedCircuit
    ? selectedCircuit.priceValue * Math.max(1, Number(guestCount) || 1)
    : 0
  const stepLabels = {
    details: t.bookingPage.stepDetails,
    payment: t.bookingPage.stepPayment,
    complete: t.bookingPage.stepComplete,
  }

  useEffect(() => {
    if (step !== 'details') stepHeadingRef.current?.focus()
  }, [step])

  function handleDetailsSubmit(event) {
    event.preventDefault()

    if (!selectedCircuit) return

    const formData = new FormData(event.currentTarget)
    setReservation({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      date: formData.get('date'),
      guests: Number(formData.get('guests')),
      message: formData.get('message'),
      circuitId: selectedCircuit.id,
    })
    setStep('payment')
  }

  function handlePaymentSubmit(event) {
    event.preventDefault()

    if (!reservation) return

    setReservation((current) => ({
      circuitId: current.circuitId,
      guests: current.guests,
    }))
    setStep('complete')
  }

  function startNewReservation() {
    setCircuitId('')
    setGuestCount('2')
    setPaymentMethod('card')
    setMobileOperator('mtn')
    setReservation(null)
    setStep('details')
  }

  return (
    <div className="editorial-page booking-page">
      <section className="editorial-hero booking-hero">
        <div className="container editorial-hero-content">
          <h1>{t.bookingPage.title}</h1>
          <p>{t.bookingPage.subtitle}</p>
        </div>
      </section>
      <section className="editorial-section booking-section" aria-label={t.bookingPage.formTitle}>
        <div className="container booking-layout">
          <div className="booking-flow">
            <ol className="booking-progress" aria-label={t.bookingPage.progressLabel}>
              {['details', 'payment', 'complete'].map((stepName, index) => (
                <li
                  className={step === stepName ? 'is-current' : ''}
                  aria-current={step === stepName ? 'step' : undefined}
                  key={stepName}
                >
                  <span aria-hidden="true">{index + 1}</span>
                  {stepLabels[stepName]}
                </li>
              ))}
            </ol>

            {step === 'details' && (
              <form
                className="editorial-form booking-form"
                onSubmit={handleDetailsSubmit}
                aria-labelledby="booking-form-title"
              >
                <h2 id="booking-form-title">{t.bookingPage.formTitle}</h2>

                {selectedCircuit ? (
                  <div className="booking-circuit-summary">
                    <img src={selectedCircuit.homeImage || selectedCircuit.image} alt="" />
                    <div className="booking-circuit-details">
                      <strong>{selectedCircuit.title}</strong>
                      <span className="booking-circuit-tag">{selectedCircuit.label}</span>
                      <span>{selectedCircuit.duration} · {formatGuestCount(guestCount, t.bookingPage)}</span>
                    </div>
                    <div className="booking-circuit-price">
                      <strong>{formatPrice(selectedCircuit.priceValue, language)}</strong>
                      <span>FCFA</span>
                      <small>{t.bookingPage.perPerson}</small>
                    </div>
                    <p className="booking-estimated-total">
                      {t.bookingPage.estimatedTotal}: <strong>{formatPrice(totalAmount, language)} FCFA</strong>
                    </p>
                  </div>
                ) : (
                  <label htmlFor="booking-tour">
                    {t.bookingPage.tour}
                    <select
                      id="booking-tour"
                      name="tour"
                      required
                      value={circuitId}
                      onChange={(event) => setCircuitId(event.target.value)}
                    >
                      <option value="" disabled>{t.bookingPage.tourPlaceholder}</option>
                      {circuits.map((circuit) => (
                        <option key={circuit.id} value={circuit.id}>{circuit.title}</option>
                      ))}
                    </select>
                  </label>
                )}

                <label htmlFor="booking-name">
                  {t.bookingPage.name}
                  <input
                    id="booking-name"
                    required
                    name="name"
                    type="text"
                    maxLength={120}
                    autoComplete="name"
                    defaultValue={reservation?.name || ''}
                  />
                </label>
                <div className="form-row">
                  <label htmlFor="booking-date">
                    {t.bookingPage.date}
                    <input
                      id="booking-date"
                      required
                      name="date"
                      type="date"
                      min={getToday()}
                      defaultValue={reservation?.date || ''}
                    />
                  </label>
                  <label htmlFor="booking-guests">
                    {t.bookingPage.guests}
                    <input
                      id="booking-guests"
                      required
                      name="guests"
                      type="number"
                      min="1"
                      max="30"
                      inputMode="numeric"
                      value={guestCount}
                      onChange={(event) => setGuestCount(event.target.value)}
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label htmlFor="booking-phone">
                    {t.bookingPage.phone}
                    <input
                      id="booking-phone"
                      required
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      maxLength={40}
                      defaultValue={reservation?.phone || ''}
                    />
                  </label>
                  <label htmlFor="booking-email">
                    {t.bookingPage.email}
                    <input
                      id="booking-email"
                      required
                      name="email"
                      type="email"
                      maxLength={254}
                      autoComplete="email"
                      defaultValue={reservation?.email || ''}
                    />
                  </label>
                </div>
                <label htmlFor="booking-message">
                  {t.bookingPage.message}
                  <textarea
                    id="booking-message"
                    name="message"
                    rows="4"
                    maxLength={1500}
                    placeholder={t.bookingPage.messagePlaceholder}
                    defaultValue={reservation?.message || ''}
                  />
                </label>
                <div className="booking-consent">
                  <input
                    id="booking-consent"
                    required
                    name="privacyAcknowledged"
                    type="checkbox"
                    aria-label={`${t.bookingPage.privacyAcknowledgement} ${t.bookingPage.privacyLink} ${t.bookingPage.confirmAccuracy}`}
                  />
                  <div>
                    <label htmlFor="booking-consent">{t.bookingPage.privacyAcknowledgement}</label>{' '}
                    <a href="/confidentialite">{t.bookingPage.privacyLink}</a>{' '}
                    {t.bookingPage.confirmAccuracy}
                  </div>
                </div>
                <p className="booking-note">{t.bookingPage.detailsNotice}</p>
                <button className="button" type="submit">{t.bookingPage.continueToPayment}</button>
              </form>
            )}

            {step === 'payment' && reservation && selectedCircuit && (
              <form
                className="editorial-form booking-payment"
                onSubmit={handlePaymentSubmit}
                aria-labelledby="booking-payment-title"
              >
                <h2 id="booking-payment-title" ref={stepHeadingRef} tabIndex="-1">{t.bookingPage.paymentTitle}</h2>
                <div className="booking-payment-summary">
                  <span>{selectedCircuit.title}</span>
                  <span>{formatGuestCount(reservation.guests, t.bookingPage)}</span>
                  <strong>{formatPrice(totalAmount, language)} FCFA</strong>
                </div>
                <fieldset className="payment-method-cards">
                  <legend>{t.bookingPage.paymentMethod}</legend>
                  <label className={`payment-method-card${paymentMethod === 'card' ? ' is-selected' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(event) => setPaymentMethod(event.target.value)}
                    />
                    <Icon name="creditCard" size={28} />
                    <span>{t.bookingPage.cardPayment}</span>
                  </label>
                  <label className={`payment-method-card${paymentMethod === 'mobile-money' ? ' is-selected' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mobile-money"
                      checked={paymentMethod === 'mobile-money'}
                      onChange={(event) => setPaymentMethod(event.target.value)}
                    />
                    <Icon name="smartphone" size={28} />
                    <span>{t.bookingPage.mobileMoneyPayment}</span>
                  </label>
                </fieldset>

                {paymentMethod === 'card' ? (
                  <div className="payment-panel">
                    <label htmlFor="payment-card-number">
                      {t.bookingPage.cardNumber}
                      <input
                        id="payment-card-number"
                        name="cardNumber"
                        required
                        inputMode="numeric"
                        autoComplete="cc-number"
                        maxLength={23}
                        placeholder="1234 5678 9012 3456"
                        pattern="[0-9 ]{12,23}"
                        title={t.bookingPage.cardNumberHint}
                      />
                    </label>
                    <label htmlFor="payment-card-name">
                      {t.bookingPage.cardName}
                      <input
                        id="payment-card-name"
                        name="cardName"
                        required
                        type="text"
                        autoComplete="cc-name"
                        maxLength={90}
                      />
                    </label>
                    <div className="form-row">
                      <label htmlFor="payment-card-expiry">
                        {t.bookingPage.cardExpiry}
                        <input
                          id="payment-card-expiry"
                          name="cardExpiry"
                          required
                          inputMode="numeric"
                          autoComplete="cc-exp"
                          maxLength={5}
                          placeholder={t.bookingPage.cardExpiryPlaceholder}
                          pattern="(0[1-9]|1[0-2])/[0-9]{2}"
                          title={t.bookingPage.cardExpiryHint}
                        />
                      </label>
                      <label htmlFor="payment-card-cvv">
                        {t.bookingPage.cardCvv}
                        <input
                          id="payment-card-cvv"
                          name="cardCvv"
                          required
                          inputMode="numeric"
                          autoComplete="cc-csc"
                          maxLength={4}
                          pattern="[0-9]{3,4}"
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="payment-panel">
                    <fieldset className="operator-cards">
                      <legend>{t.bookingPage.mobileOperator}</legend>
                      {mobileOperators.map((operator) => (
                        <label
                          key={operator.value}
                          className={`operator-card${mobileOperator === operator.value ? ' is-selected' : ''}`}
                        >
                          <input
                            type="radio"
                            name="mobileOperator"
                            value={operator.value}
                            checked={mobileOperator === operator.value}
                            onChange={(event) => setMobileOperator(event.target.value)}
                          />
                          <Icon name={operator.icon} size={36} />
                          <span>{operator.label}</span>
                        </label>
                      ))}
                    </fieldset>
                    <label htmlFor="payment-mobile-number">
                      {t.bookingPage.mobileNumber}
                      <input
                        id="payment-mobile-number"
                        name="mobileNumber"
                        required
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        maxLength={40}
                      />
                    </label>
                    <label htmlFor="payment-mobile-name">
                      {t.bookingPage.mobileAccountName}
                      <input
                        id="payment-mobile-name"
                        name="mobileAccountName"
                        required
                        type="text"
                        autoComplete="name"
                        maxLength={90}
                      />
                    </label>
                  </div>
                )}

                <p className="booking-note" role="note">{t.bookingPage.paymentActivationNotice}</p>
                <div className="booking-payment-actions">
                  <button className="button button-secondary" type="button" onClick={() => setStep('details')}>
                    {t.bookingPage.backToDetails}
                  </button>
                  <button className="button" type="submit">
                    {t.bookingPage.payNow} · {formatPrice(totalAmount, language)} FCFA
                  </button>
                </div>
              </form>
            )}

            {step === 'complete' && reservation && selectedCircuit && (
              <section className="editorial-form booking-complete" aria-labelledby="booking-complete-title">
                <div className="booking-success-icon" aria-hidden="true">
                  <Icon name="checkBadge" size={56} />
                </div>
                <h2 id="booking-complete-title" ref={stepHeadingRef} tabIndex="-1">{t.bookingPage.successTitle}</h2>
                <p className="form-success" role="status">{t.bookingPage.successMessage}</p>
                <div className="booking-payment-summary">
                  <span>{selectedCircuit.title}</span>
                  <span>{formatGuestCount(reservation.guests, t.bookingPage)}</span>
                  <strong>{formatPrice(totalAmount, language)} FCFA</strong>
                </div>
                <button className="button" type="button" onClick={startNewReservation}>
                  {t.bookingPage.newReservation}
                </button>
              </section>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
