import type { Messages } from './pt'

const en: Messages = {
  meta: {
    title: 'Boleia · Share the ride, share the cost',
    description:
      "Going somewhere? Someone's probably already driving there. Boleia lets verified drivers share the empty seats in their car, and lets passengers book a seat in seconds.",
  },
  nav: {
    how: 'How it works',
    benefits: 'Benefits',
    safety: 'Safety',
    language: 'Language',
    menu: 'Menu',
  },
  hero: {
    eyebrow: 'Coming soon to Angola',
    title: 'Your seat is already on the way.',
    subtitle:
      "Going somewhere? Someone's probably already driving there. Boleia lets verified drivers share the empty seats in their car, and lets passengers book a seat in seconds. It's cheaper than going alone and safer than flagging a ride on the street.",
    soonOn: 'Coming soon on',
    soonIn: 'Coming soon on',
    googlePlay: 'Google Play',
    appStore: 'App Store',
  },
  trust: {
    verified: 'Verified drivers',
    sos: '24-hour SOS',
    price: 'Fixed price per seat, in kwanzas',
    payment: 'In-app payment',
  },
  how: {
    eyebrow: 'How it works',
    title: 'From search to seat, in four steps.',
    tabPassenger: "I'm a passenger",
    tabDriver: "I'm a driver",
    passenger: [
      { t: 'Search', d: "Enter where you're going and when." },
      { t: 'Book', d: 'Choose a ride, see the driver, car, rating and price, and reserve your seat.' },
      {
        t: 'Pay securely',
        d: "Pay by card in the app. If a trip is cancelled, you're refunded automatically.",
      },
      { t: 'Travel', d: 'Meet your driver and go.' },
    ],
    driver: [
      { t: 'Get verified', d: 'Upload your ID, licence, selfie and vehicle documents.' },
      {
        t: 'Publish a trip',
        d: 'Set your route, stops, departure time and seats. The app suggests a fair price.',
      },
      { t: 'Fill your seats', d: 'Passengers book and pay in advance.' },
      { t: 'Get paid', d: 'Your earnings are paid out automatically.' },
    ],
  },
  benefits: {
    eyebrow: 'Benefits',
    title: 'Cheaper than going alone. Safer than flagging a ride on the street.',
    items: [
      {
        t: 'Verified drivers',
        d: "Every driver's identity, licence and vehicle are reviewed by our team.",
      },
      { t: 'SOS with live location', d: 'One tap alerts our team, who can see where you are.' },
      {
        t: 'Fixed, fair prices',
        d: 'The price per seat is shown before you book, with no haggling.',
      },
      {
        t: 'Cashless and secure',
        d: 'Card payment in the app, with automatic refunds when a trip is cancelled.',
      },
      {
        t: 'City and long-distance',
        d: 'Daily trips around Luanda and intercity routes across Angola.',
      },
      {
        t: 'Travel your way',
        d: 'See luggage space, stops and preferences (no smoking, music) before booking.',
      },
      { t: 'Ratings', d: 'Passengers and drivers rate each other after every trip.' },
      { t: 'Portuguese and English', d: 'The app and support are available in both.' },
      {
        t: 'Real support',
        d: 'Help centre, support tickets and reports, handled by a local team.',
      },
    ],
  },
  safety: {
    eyebrow: 'Safety',
    title: 'Safety comes first.',
    verification:
      'Every driver is checked by hand before they can publish a trip: national ID, driving licence, a live selfie and their vehicle documents.',
    sos: 'During a trip, passengers and drivers have an SOS button that shares their live location with the Boleia operations team, who respond around the clock.',
    docs: ['National ID', 'Driving licence', 'Live selfie', 'Vehicle documents'],
    photoAlt: 'A Boleia driver picking up passengers at a hotel entrance',
  },
  routes: {
    title: 'By city and across the country.',
    city: 'City',
    intercity: 'Intercity',
  },
  closing: {
    title: 'Share the ride, share the cost.',
    subtitle: 'The app is almost ready. Coming soon to Google Play and the App Store.',
  },
  footer: {
    languages: 'Português · English',
    rights: '© 2026 Boleia',
  },
  phone: {
    greeting: 'Good morning',
    searchTitle: 'Find a ride',
    from: 'From',
    to: 'To',
    date: 'Select date',
    search: 'Search trips',
    recentRoutes: 'Recent routes',
    seeAll: 'See all',
    tapRoute: 'Tap to use this route',
    tabs: ['Home', 'Trips', 'Messages', 'Profile'],
    publishTitle: 'Publish trip',
    step: 'Step 6 of 6 · Fare',
    pricePerSeat: 'Price per seat',
    perSeat: 'AOA per seat',
    recommended: 'Recommended price',
    publish: 'Publish trip',
  },
}

export default en
