# Dassa Tourisme

Landing page touristique pour découvrir Dassa-Zoumé, ses paysages, son patrimoine et ses circuits.

## Stack

- React 19
- Vite
- JavaScript / JSX
- CSS natif
- Oxlint

## Organisation

```text
src/
├── components/
│   ├── common/          # Éléments UI partagés
│   └── layout/          # Header et footer
├── context/             # État partagé, dont la langue active
├── data/                # Données mockées
├── i18n/                # Traductions françaises et anglaises
├── pages/               # Pages applicatives
├── styles/              # Tokens, styles globaux et styles de page
├── App.jsx              # Composition principale de l’application
└── main.jsx             # Point d’entrée React
```

## Fonctionnalités actuelles

- Landing page Dassa Tourisme fidèle à la maquette de référence
- Navigation vers les différentes sections de la page
- Menu responsive sur mobile
- Changement de langue français / anglais
- Circuits affichés depuis des données mockées
- Page catalogue `/circuits` avec filtres et tri
- Slider hero animé avec navigation circulaire et aperçus
- Mise en page responsive desktop, tablette et mobile

## Développement

```bash
npm install
npm run dev
```

## Vérification

```bash
npm run lint
npm run build
```
