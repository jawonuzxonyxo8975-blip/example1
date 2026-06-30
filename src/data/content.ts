export interface Project {
  title: string;
  location: string;
  category: string;
  image: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  image: string;
  link: string;
  linkLabel: string;
}

export interface Stat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface BusinessGroup {
  name: string;
  description: string;
  image: string;
  projectCaption: string;
  link: string;
}

export interface Leader {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export const heroProject: Project = {
  title: 'Featured Project',
  location: 'Category | Division',
  category: 'Showcase',
  image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=2400',
};

export const valuePillars: ValuePillar[] = [
  {
    title: 'Heritage',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    linkLabel: 'Learn More',
  },
  {
    title: 'Partnership',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    linkLabel: 'Learn More',
  },
  {
    title: 'Ownership',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    linkLabel: 'Learn More',
  },
];

export const stats: Stat[] = [
  { value: '$1B+', label: 'Annual Revenue' },
  { value: '30+', label: 'Operating Companies' },
  { value: '12K+', label: 'Global Employees' },
  { value: '20%+', label: 'Average Annual Return', sublabel: 'Since Inception*' },
];

export const businessGroups: BusinessGroup[] = [
  {
    name: 'Division One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://images.pexels.com/photos/933984/pexels-photo-933984.jpeg?auto=compress&cs=tinysrgb&w=1600',
    projectCaption: 'Featured Project — Category | Division',
    link: '#',
  },
  {
    name: 'Division Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://images.pexels.com/photos/356736/pexels-photo-356736.jpeg?auto=compress&cs=tinysrgb&w=1600',
    projectCaption: 'Featured Project — Category | Division',
    link: '#',
  },
];

export const footprintProjects: Project[] = [
  {
    title: 'Project Alpha',
    location: 'Location — Category | Division',
    category: 'Category One',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Project Beta',
    location: 'Location — Category | Division',
    category: 'Category Two',
    image: 'https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Project Gamma',
    location: 'Location — Category | Division',
    category: 'Category Three',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Project Delta',
    location: 'Location — Category | Division',
    category: 'Category Four',
    image: 'https://images.pexels.com/photos/260946/pexels-photo-260946.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Project Epsilon',
    location: 'Location — Category | Division',
    category: 'Category Five',
    image: 'https://images.pexels.com/photos/461482/pexels-photo-461482.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Project Zeta',
    location: 'Location — Category | Division',
    category: 'Category Six',
    image: 'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export const leaders: Leader[] = [
  {
    name: 'Jane Doe',
    role: 'Chief Executive Officer',
    company: 'Company One',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'John Smith',
    role: 'Chief Executive Officer',
    company: 'Company Two',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Sarah Lee',
    role: 'Chief Executive Officer',
    company: 'Company Three',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.pexels.com/photos/374820/pexels-photo-374820.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
