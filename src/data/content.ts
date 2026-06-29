export interface Destination {
  name: string;
  region: string;
  image: string;
  description: string;
}

export interface Expedition {
  title: string;
  destination: string;
  duration: string;
  price: string;
  image: string;
  type: 'Private Charter' | 'Scheduled Voyage';
  highlights: string[];
}

export interface YachtFeature {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export interface PressFeature {
  publication: string;
  title: string;
}

export const destinations: Destination[] = [
  {
    name: 'Raja Ampat & Papua',
    region: 'West Papua',
    image: 'https://images.pexels.com/photos/12877922/pexels-photo-12877922.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'The world\'s most biodiverse marine habitat, where karst islands rise from turquoise lagoons and birds of paradise dwell in the rainforest canopy.',
  },
  {
    name: 'Beyond Komodo',
    region: 'Lesser Sunda Islands',
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Dragons on pink sand beaches, world-class drift dives, and sunsets that set the savannah ablaze across the Lesser Sunda chain.',
  },
  {
    name: 'Banda & Spice Islands',
    region: 'Maluku',
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Nutmeg groves, colonial forts, and underwater volcanoes in the remote Banda Sea — the original spice trade crossroads.',
  },
  {
    name: 'Mentawai Islands',
    region: 'West Sumatra',
    image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Pristine barrelling waves, ancient tribal culture, and palm-fringed lagoons off the Sumatran coast — a surfer\'s paradise.',
  },
];

export const expeditions: Expedition[] = [
  {
    title: 'Raja Ampat Archipelago',
    destination: 'Misool to Wayag',
    duration: '10 nights',
    price: 'On request',
    image: 'https://images.pexels.com/photos/12877922/pexels-photo-12877922.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'Private Charter',
    highlights: ['4 dives daily', 'Birdwatching', 'Kayak lagoons'],
  },
  {
    title: 'Komodo & Rinca Safari',
    destination: 'Labuan Bajo to Padar',
    duration: '7 nights',
    price: 'On request',
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'Scheduled Voyage',
    highlights: ['Dragon trekking', 'Drift diving', 'Pink beaches'],
  },
  {
    title: 'Spice Islands Voyage',
    destination: 'Ambon to Banda Neira',
    duration: '9 nights',
    price: 'On request',
    image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'Private Charter',
    highlights: ['Historical tours', 'Wall diving', 'Nutmeg groves'],
  },
  {
    title: 'Mentawai Surf Expedition',
    destination: 'Siberut to Sipora',
    duration: '8 nights',
    price: 'On request',
    image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'Private Charter',
    highlights: ['World-class waves', 'Tribal visits', 'Fishing'],
  },
  {
    title: 'Forgotten Islands',
    destination: 'Saumlaki to Maopora',
    duration: '12 nights',
    price: 'On request',
    image: 'https://images.pexels.com/photos/5739853/pexels-photo-5739853.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'Scheduled Voyage',
    highlights: ['Remote diving', 'Whale watching', 'Trawler wrecks'],
  },
  {
    title: 'Triton Bay Discovery',
    destination: 'Kaimana coastline',
    duration: '8 nights',
    price: 'On request',
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'Private Charter',
    highlights: ['Whale sharks', 'Rock art', 'Black coral forests'],
  },
];

export const yachtFeatures: YachtFeature[] = [
  {
    icon: 'BedDouble',
    title: 'Eight Balcony Suites',
    description: 'Eight private suites with personal balconies, accommodating up to 16 guests in refined comfort. Each suite is a sanctuary of teak, linen, and ocean light.',
    image: 'https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Dining',
    description: 'A chef-led galery serving Indonesian and international cuisine, sourced from local markets and the day\'s catch. Communal dining that brings guests together.',
    image: 'https://images.pexels.com/photos/261047/pexels-photo-261047.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: 'Waves',
    title: 'Activities & Toys',
    description: 'Diving, surfing, kayaking, fishing, paddleboarding, and snorkelling — a full complement of water toys and expedition gear, guided by expert crew.',
    image: 'https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export const pressFeatures: PressFeature[] = [
  { publication: 'Travel + Leisure', title: 'Explores Indonesia\'s Spice Islands with Kudanil Explorer' },
  { publication: 'SURFER', title: 'Features Kudanil x Mahalo Surf Experience' },
  { publication: 'Financial Times', title: 'Trusted for Off-Grid Luxury Voyages' },
  { publication: 'Boat International', title: 'On board with Thibaud Epstein' },
  { publication: 'Forbes', title: 'The Ultimate Indonesian Adventure Yacht?' },
  { publication: 'Robb Report', title: 'Kudanil Explorer — A Favourite' },
];

export const yachtSpecs = [
  { value: '50m', label: 'Length' },
  { value: '8', label: 'Balcony Suites' },
  { value: '16', label: 'Guests Maximum' },
  { value: '17,000+', label: 'Islands to Explore' },
];
