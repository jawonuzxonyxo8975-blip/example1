export interface Destination {
  name: string;
  region: string;
  image: string;
  tours: number;
}

export interface Tour {
  title: string;
  destination: string;
  duration: string;
  price: string;
  image: string;
  type: 'Group Tour' | 'Tailor-Made';
}

export const destinations: Destination[] = [
  {
    name: 'Italy',
    region: 'Europe',
    image: 'https://images.pexels.com/photos/2225442/pexels-photo-2225442.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tours: 24,
  },
  {
    name: 'India',
    region: 'Asia',
    image: 'https://images.pexels.com/photos/1589025/pexels-photo-1589025.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tours: 18,
  },
  {
    name: 'Morocco',
    region: 'Africa',
    image: 'https://images.pexels.com/photos/1378247/pexels-photo-1378247.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tours: 12,
  },
  {
    name: 'Japan',
    region: 'Asia',
    image: 'https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tours: 9,
  },
  {
    name: 'Egypt',
    region: 'Africa',
    image: 'https://images.pexels.com/photos/5749255/pexels-photo-5749255.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tours: 15,
  },
  {
    name: 'Peru',
    region: 'Americas',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tours: 7,
  },
];

export const tours: Tour[] = [
  {
    title: 'Sicilian Mosaic',
    destination: 'Sicily, Italy',
    duration: '10 days',
    price: '£2,895',
    image: 'https://images.pexels.com/photos/3605030/pexels-photo-3605030.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'Group Tour',
  },
  {
    title: 'Rajasthan & the Taj Mahal',
    destination: 'Rajasthan, India',
    duration: '14 days',
    price: '£3,450',
    image: 'https://images.pexels.com/photos/3599382/pexels-photo-3599382.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'Group Tour',
  },
  {
    title: 'Kingdom of the Pharaohs',
    destination: 'Cairo to Luxor, Egypt',
    duration: '12 days',
    price: '£3,195',
    image: 'https://images.pexels.com/photos/7124109/pexels-photo-7124109.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'Group Tour',
  },
  {
    title: 'Land of the Rising Sun',
    destination: 'Tokyo to Kyoto, Japan',
    duration: '13 days',
    price: '£4,295',
    image: 'https://images.pexels.com/photos/149381/pexels-photo-149381.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'Tailor-Made',
  },
  {
    title: 'Marrakech & the Sahara',
    destination: 'Marrakech, Morocco',
    duration: '9 days',
    price: '£2,150',
    image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'Group Tour',
  },
  {
    title: 'Inca Trail & Machu Picchu',
    destination: 'Cusco, Peru',
    duration: '11 days',
    price: '£3,750',
    image: 'https://images.pexels.com/photos/6603868/pexels-photo-6603868.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'Tailor-Made',
  },
];
