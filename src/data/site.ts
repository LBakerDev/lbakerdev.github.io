// Personal details used across the site. Replace every [bracketed] value.

export const site = {
  name: 'London Baker',
  role: 'Senior Frontend Engineer',
  location: 'Atlanta, GA',
  email: '[londonbaker12@gmail.com]',
  resumeUrl: '/resume.pdf', // drop your résumé at public/resume.pdf
  description:
    'Senior frontend engineer building fast, accessible product UI in React & TypeScript.',
  availability: {
    open: true,
    label: 'Open to senior / staff frontend roles · Atlanta or remote',
    shortLabel: 'Open to senior frontend roles',
  },
  links: {
    github: 'https://github.com/[username]',
    linkedin: 'https://www.linkedin.com/in/[username]',
  },
} as const;

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;
