const circuits = [
  {
    id: 'collines-dassa',
    category: 'nature',
    durationValue: 1,
    priceValue: 15000,
    label: { fr: 'NATURE', en: 'NATURE' },
    image: '/slider/Images/473079184_612013824633744_2292827569597831335_n.jpg',
    homeImage: '/slider/img1.jpg',
    title: { fr: 'Randonnée sur les collines de Dassa', en: 'Hiking through the Dassa hills' },
    description: {
      fr: 'Ascension guidée des collines avec une vue panoramique incroyable sur la région de Dassa-Zoumé.',
      en: 'A guided climb with an incredible panoramic view over the Dassa-Zoumé region.',
    },
    duration: { fr: '1 journée', en: '1 day' },
    price: { fr: '15.000', en: '15,000' },
    tag: { fr: 'NATURE & DÉCOUVERTE', en: 'NATURE & DISCOVERY' },
  },
  {
    id: 'palais-igbo-idaasha',
    category: 'culture',
    durationValue: 2,
    priceValue: 12000,
    label: { fr: 'CULTURE', en: 'CULTURE' },
    image: '/slider/Images/IMG_5867.jpeg',
    homeImage: '/slider/img2.jpg',
    title: { fr: 'Le palais royal d’Igbo Idaasha', en: 'The royal palace of Igbo Idaasha' },
    description: {
      fr: 'Un voyage pour découvrir le palais de Dassa et les histoires de son royaume.',
      en: 'Discover the palace of Dassa and the stories of its kingdom.',
    },
    duration: { fr: '2 jours', en: '2 days' },
    price: { fr: '12.000', en: '12,000' },
    tag: { fr: 'CULTURE & HISTOIRE', en: 'CULTURE & HISTORY' },
  },
  {
    id: 'centre-okuta',
    category: 'discovery',
    durationValue: 1,
    priceValue: 8000,
    label: { fr: 'DÉCOUVERTE', en: 'DISCOVERY' },
    image: '/slider/Images/475016426_1125577919212533_8409583480296543718_n.jpg',
    homeImage: '/slider/img3.jpg',
    title: { fr: 'Le Centre culturel Okuta', en: 'The Okuta cultural centre' },
    description: {
      fr: 'Un centre présentant quelques œuvres d’art et les histoires vivantes de Dassa.',
      en: 'A centre presenting local artworks and the living stories of Dassa.',
    },
    duration: { fr: '1 journée', en: '1 day' },
    price: { fr: '8.000', en: '8,000' },
    tag: { fr: 'EXPÉRIENCE', en: 'EXPERIENCE' },
  },
  {
    id: 'puits-suspendus',
    category: 'culture',
    durationValue: 1,
    priceValue: 10000,
    label: { fr: 'CULTURE', en: 'CULTURE' },
    image: '/slider/Images/IMG_5860.jpeg',
    title: { fr: 'Les puits suspendus', en: 'The suspended wells' },
    description: {
      fr: 'Explorez les puits suspendus de Dassa contenant de l’eau et leurs récits.',
      en: 'Explore the suspended wells of Dassa and their stories.',
    },
    duration: { fr: '1 journée', en: '1 day' },
    price: { fr: '10.000', en: '10,000' },
  },
  {
    id: 'site-egbakokou',
    category: 'nature',
    durationValue: 1,
    priceValue: 9000,
    label: { fr: 'NATURE', en: 'NATURE' },
    image: '/slider/Images/475092973_1125577915879200_6673516319586974302_n.jpg',
    title: { fr: 'Le site Egbakokou', en: 'The Egbakokou site' },
    description: {
      fr: 'La place Egbakokou est un lieu historique et symbolique du royaume d’Igbo-Idaasha.',
      en: 'A historic and symbolic place of the Igbo-Idaasha kingdom.',
    },
    duration: { fr: '1 journée', en: '1 day' },
    price: { fr: '9.000', en: '9,000' },
  },
  {
    id: 'pierre-okeyite',
    category: 'adventure',
    durationValue: 3,
    priceValue: 25000,
    label: { fr: 'AVENTURE', en: 'ADVENTURE' },
    image: '/slider/Images/475119813_1125578075879184_981893903413840637_n.jpg',
    title: { fr: 'La pierre fendue d’Okéyité / Okuta', en: 'The split rock of Okeyite / Okuta' },
    description: {
      fr: 'Une formation rocheuse emblématique située à Dassa-Zoumé, idéale pour une aventure naturelle.',
      en: 'An emblematic rock formation, perfect for a natural adventure.',
    },
    duration: { fr: '3 jours', en: '3 days' },
    price: { fr: '25.000', en: '25,000' },
  },
]

function localizeCircuit(circuit, language) {
  return Object.fromEntries(
    Object.entries(circuit).map(([key, value]) => [
      key,
      value && typeof value === 'object' && !Array.isArray(value) && value.fr !== undefined
        ? value[language]
        : value,
    ]),
  )
}

export function getCircuitItems(language) {
  return circuits.map((circuit) => localizeCircuit(circuit, language))
}

export function getFeaturedCircuitItems(language) {
  return circuits.slice(0, 3).map((circuit) => ({
    ...localizeCircuit(circuit, language),
    image: circuit.homeImage,
  }))
}

export function getCircuitById(id, language) {
  const circuit = /^\d+$/.test(id)
    ? circuits[Number(id) - 1]
    : circuits.find((item) => item.id === id)
  return circuit ? localizeCircuit(circuit, language) : null
}
