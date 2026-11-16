export function Icon({ name, size = 20 }) {
  const paths = {
    arrow: (
      <>
        <path d="M4 12h15" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    chevron: <path d="m7 10 5 5 5-5" />,
    mountain: (
      <>
        <path d="m3 18 6-9 3 4 2-3 7 8" />
        <path d="M3 18h18" />
      </>
    ),
    culture: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M8 12h8M12 8v8" />
      </>
    ),
    heart: <path d="M20.8 8.6c0 5.4-8.8 10-8.8 10s-8.8-4.6-8.8-10A4.6 4.6 0 0 1 12 6a4.6 4.6 0 0 1 8.8 2.6Z" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    pin: (
      <>
        <path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    facebook: (
      <>
        <path d="M14 8h2V5.5h-2c-2.2 0-3.5 1.3-3.5 3.7V11H8v2.5h2.5V19H13v-5.5h2.2L15.6 11H13V9.5c0-.9.3-1.5 1-1.5Z" fill="currentColor" stroke="none" />
      </>
    ),
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.3" cy="6.8" r=".8" fill="currentColor" stroke="none" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M5 19l1.2-3A7.5 7.5 0 1 1 8 18.2L5 19Z" />
        <path d="M9.3 9.5c.2-.5.4-.6.7-.6h.6c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.6.6c.5 1 1.3 1.8 2.4 2.3l.7-.6c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.3.3.6-.2.8-.8 1.3-1.6 1.3-2.1-.1-5.6-3.1-6-5.4-.1-.4.1-.8.5-1.1Z" />
      </>
    ),
    creditCard: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2.5" />
        <path d="M2 10h20" />
        <path d="M6 15h5" />
      </>
    ),
    smartphone: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </>
    ),
    checkBadge: (
      <>
        <path d="M12 2.5 4.5 5.5v5.2c0 4.6 3.2 8.8 7.5 10.3 4.3-1.5 7.5-5.7 7.5-10.3V5.5L12 2.5Z" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </>
    ),
    mtn: (
      <g>
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#FFCC00" stroke="none" />
        <path d="M12 6.5c-2.8 0-5 2.2-5 5v2.2c0 .7.6 1.3 1.3 1.3h7.4c.7 0 1.3-.6 1.3-1.3V11.5c0-2.8-2.2-5-5-5Z" fill="#063b1d" stroke="none" />
        <path d="M9.5 11.5v-.9a2.5 2.5 0 0 1 5 0v.9" stroke="#FFCC00" stroke-width="1.6" fill="none" stroke-linecap="round" />
        <circle cx="12" cy="16.4" r="1.1" fill="#FFCC00" stroke="none" />
      </g>
    ),
    moov: (
      <g>
        <path d="M12 2.5 21.5 12 12 21.5 2.5 12 12 2.5Z" fill="#E85D2C" stroke="none" />
        <path d="M8.5 11.5 12 8l3.5 3.5-3.5 3.5-3.5-3.5Z" fill="#ffffff" stroke="none" />
        <path d="M12 8v7" stroke="#E85D2C" stroke-width="1.6" fill="none" stroke-linecap="round" />
      </g>
    ),
    celtiis: (
      <g>
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#1B2A4E" stroke="none" />
        <path d="M7 14.5c1.6-1.6 4.2-1.6 5.8 0" stroke="#4ADE80" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M9.5 17c.8-.8 2.2-.8 3 0" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <circle cx="12" cy="9.5" r="1.4" fill="#4ADE80" stroke="none" />
      </g>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths[name]}
    </svg>
  )
}
