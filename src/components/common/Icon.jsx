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
