// Personal details used across the site. Replace every [bracketed] value.

export const site = {
  name: 'London Baker',
  role: 'Senior Frontend Engineer',
  location: 'Atlanta, GA',
  email: 'londonbaker12@gmail.com',
  resumeUrl: '/resume.pdf', // drop your résumé at public/resume.pdf
  description:
    'Senior frontend engineer building analytics dashboards and data visualization in React & TypeScript.',
  availability: {
    open: true,
    label: 'Open to Software Engineer and Senior Software Engineer roles · Atlanta or remote',
    shortLabel: 'Open to Software Engineer and Senior roles',
  },
  links: {
    github: 'https://github.com/LBakerDev',
    linkedin: 'https://www.linkedin.com/in/london-baker/',
  },
} as const;

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;
