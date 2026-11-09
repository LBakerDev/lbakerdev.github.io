// Personal details used across the site. Replace every [bracketed] value.

export const site = {
  name: 'London Baker',
  role: 'Senior Software Engineer',
  location: 'Atlanta, GA',
  email: 'londonbaker12@gmail.com',
  resumeUrl: '/resume.pdf', // drop your résumé at public/resume.pdf
  // Web3Forms access key for the contact form. Public by design: it can only
  // send to the address the key was registered with.
  contactFormKey: '2a5b4c46-9984-4311-9998-0b6a70064420',
  description:
    'Senior software engineer building analytics dashboards and data visualization in React & TypeScript.',
  availability: {
    open: true,
    label: 'Open to senior frontend roles · Atlanta or remote',
    shortLabel: 'Open to senior frontend roles',
  },
  // Shown under the hero as quick credibility, like a logo row.
  previously: ['Intuit Mailchimp', 'Nationwide', 'CapTech', 'LivePerson'],
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
