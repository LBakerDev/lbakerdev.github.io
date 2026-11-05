export interface Role {
  title: string;
  company: string;
  start: string;
  end: string; // use 'Now' for a current role
  summary: string; // one line of scope + one headline result
}

export const experience: Role[] = [
  {
    title: 'Software Engineer',
    company: 'Intuit Mailchimp',
    start: '2024',
    end: '2026',
    summary:
      "Owned frontend for email, SMS and WhatsApp reporting in Mailchimp's analytics platform and led three engineers on WhatsApp reporting; rebuilt SMS reporting to stream metrics in real time, cutting data latency from hours to minutes.",
  },
  {
    title: 'Senior Consultant',
    company: 'Cognizant (Nationwide Insurance)',
    start: '2021',
    end: '2024',
    summary:
      'Led React and TypeScript builds of an enterprise search app and an employee hub used by 30k+ employees, secured with JWT-based SSO on Azure.',
  },
  {
    title: 'Senior Consultant',
    company: 'CapTech Consulting',
    start: '2020',
    end: '2021',
    summary:
      "Overhauled a Fortune 100 insurer's legacy Angular portal and improved page load times on a B2B e-commerce site by 15%.",
  },
];

// Shown as one compact line under the main list. Full detail lives in the résumé.
export const earlier = {
  years: '2018 — 2020',
  text: 'Frontend engineer at Buckle (fintech startup), LivePerson and Client Command: customer portals, real-time chat and D3.js reporting dashboards.',
};

export const toolkit = [
  { group: 'Core', items: ['TypeScript', 'React', 'GraphQL', 'D3.js & Highcharts', 'Node.js'] },
  {
    group: 'Platform',
    items: ['JWT / SSO (Azure)', 'Playwright', 'Storybook', 'CI/CD, Docker & AWS'],
  },
  {
    group: 'Practice',
    items: ['Data visualization', 'Design systems', 'Accessibility (WCAG)', 'Web performance'],
  },
];
