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
