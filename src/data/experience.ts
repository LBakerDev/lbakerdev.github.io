export interface Role {
  title: string;
  company: string;
  start: string;
  end: string; // use 'Now' for your current role
  summary: string; // one line of scope + one headline result
}

export const experience: Role[] = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Mailchimp',
    start: '[Year]',
    end: 'Now',
    summary: '[One line of scope + one headline result.]',
  },
  {
    title: '[Title]',
    company: '[Company]',
    start: '[Year]',
    end: '[Year]',
    summary: '[One line of scope + one headline result.]',
  },
  {
    title: '[Title]',
    company: '[Company]',
    start: '[Year]',
    end: '[Year]',
    summary: '[One line of scope + one headline result.]',
  },
];

export const toolkit = [
  { group: 'Core', items: ['TypeScript', 'React', '[Framework]', '[State / data]'] },
  { group: 'Platform', items: ['JWT / auth flows', '[Build tooling]', '[Testing]', '[CI / deploy]'] },
  {
    group: 'Practice',
    items: ['Design systems', 'Accessibility (WCAG)', 'Web performance', '[Mentoring / leadership]'],
  },
];
