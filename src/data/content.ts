export interface Project {
  title: string;
  location: string;
  category: string;
  image: string;
}

export interface BusinessGroup {
  name: string;
  description: string;
  image: string;
  link: string;
}

export interface Leader {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  image: string;
  link: string;
  linkLabel: string;
}

export const heroProject: Project = {
  title: 'Texas Data Center',
  location: 'Construction Services | STO Mission Critical',
  category: 'Data Centers',
  image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=2400',
};

export const valuePillars: ValuePillar[] = [
  {
    title: 'Legacy',
    description:
      'Established by veteran engineers and industry experts. Our merger partnerships are rooted in shared values and long-term alignment, while honoring the legacies that made them exceptional.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    linkLabel: 'Our History',
  },
  {
    title: 'Collaboration',
    description:
      'Drawing on a wealth of shared expertise, the management of our companies are empowered to deliver broader services, explore new markets, and expand employee career opportunities.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    linkLabel: 'Our Model',
  },
  {
    title: 'Employee Ownership',
    description:
      'Founded on the belief that we could do much more through shared employee ownership. At every level, our people are empowered to think and act like owners — driven by accountability, craft, and pride.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
    linkLabel: 'Learn More',
  },
];

export const stats: Stat[] = [
  { value: '$1B+', label: '2025 Annual Revenue' },
  { value: '30+', label: 'Operating Companies' },
  { value: '12K+', label: 'Global Employees' },
  { value: '20%+', label: 'Average Annual Total Shareholder Return', sublabel: 'Since Inception*' },
];

export const businessGroups: BusinessGroup[] = [
  {
    name: 'STO Building Group',
    description:
      'One of the largest privately held construction service firms, providing services to a diversified group of clients in a variety of end-markets throughout North America, Ireland, United Kingdom, and the Netherlands.',
    image: 'https://images.pexels.com/photos/933984/pexels-photo-933984.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
  },
  {
    name: 'GISI Consulting Group',
    description:
      'One of the top 10 global providers of project management and engineering consulting, delivering services worldwide in infrastructure & mobility, earth & water, and government & society for private and public sector clients.',
    image: 'https://images.pexels.com/photos/356736/pexels-photo-356736.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '#',
  },
];

export const footprintProjects: Project[] = [
  {
    title: 'Medical City Heart Hospital',
    location: 'Dallas, TX — Construction Services | Layton',
    category: 'Healthcare',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Oroville Spillway Recovery',
    location: 'California — Project Management, Civil, Geotech | GEI',
    category: 'Infrastructure',
    image: 'https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Ray Nashville Tower',
    location: 'Nashville, TN — 32-Story Mixed Use | Layton',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Frost Museum of Science',
    location: 'Miami, FL — Project Management | Hill Intl.',
    category: 'Cultural',
    image: 'https://images.pexels.com/photos/260946/pexels-photo-260946.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Airport Terminal Expansion',
    location: 'International — Consulting Group',
    category: 'Transportation',
    image: 'https://images.pexels.com/photos/461482/pexels-photo-461482.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'University Campus',
    location: 'North America — Construction Services',
    category: 'Education',
    image: 'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export const leaders: Leader[] = [
  {
    name: 'Rich Cavallaro',
    role: 'CEO',
    company: 'LiRo-Hill',
    quote:
      'The model and focus on employee ownership provides staff the opportunity to think and act long-term as they serve clients in delivering essential projects.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Dave Layton',
    role: 'CEO',
    company: 'Layton Construction',
    quote:
      'Being part of the group allows us to take on larger, more complex projects while giving our employees greater opportunity to share in the success they help create.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Scott Wallington',
    role: 'CEO',
    company: 'GEI Consultants',
    quote:
      'A partnership was the natural next step to ensure the multi-generational legacy our leadership has built continues to endure for decades to come.',
    image: 'https://images.pexels.com/photos/374820/pexels-photo-374820.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
