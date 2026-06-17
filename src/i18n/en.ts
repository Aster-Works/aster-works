// =============================================================
// English translation dictionary.
// Typed as `typeof ja` so any missing key is a compile-time error.
// Keep the warm, practical brand voice — clear over clever.
// =============================================================
import { ja } from './ja';

export const en: typeof ja = {
  // --- Site-wide meta / SEO ---
  meta: {
    htmlLang: 'en',
    locale: 'en_US',
    siteTitle: 'Aster Works | Small tools for a brighter future.',
    description:
      'Aster Works builds practical digital tools that brighten the way you work, learn, and live.',
    tagline: 'Small tools for a brighter future.',
    shortCopy:
      'Practical digital tools that brighten work, learning, and daily life.',
    skipToContent: 'Skip to content',
  },

  // --- Navigation / shared UI ---
  nav: {
    items: [
      { key: 'tools', href: '/tools', label: 'Tools' },
      { key: 'about', href: '/about', label: 'About' },
      { key: 'contact', href: '/contact', label: 'Contact' },
    ],
    home: 'Home',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    footerNav: 'Footer navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLanguage: 'Switch language',
  },

  footer: {
    menuHeading: 'Menu',
    infoHeading: 'Information',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms' },
      { href: '/tokushoho', label: 'Legal Notice (Japan)' },
      { href: '/contact', label: 'Contact' },
    ],
    rights: 'All rights reserved.',
  },

  // --- Shared button labels ---
  actions: {
    viewTools: 'Explore tools',
    viewAllTools: 'View all tools',
    learnMore: 'Learn more',
    contact: 'Contact us',
    backToTop: 'Back to home',
  },

  // --- Home page ---
  home: {
    featured: {
      eyebrow: 'Tools',
      title: 'Tools',
      description: 'Simple tools that make daily work a little lighter.',
    },
    products: {
      eyebrow: 'Products',
      title: 'Live products',
      description:
        'Real, usable tools published for indie developers and Claude Code users.',
    },
    categoriesSection: {
      eyebrow: 'For your everyday',
      title: 'For your work, learning, and life.',
    },
    categories: [
      {
        name: 'Work' as const,
        label: '',
        description: 'Review replies, writing, task organization, templates.',
      },
      {
        name: 'Learning' as const,
        label: '',
        description: 'Study plans, note-taking, research aids, lesson materials.',
      },
      {
        name: 'Life' as const,
        label: '',
        description: 'Cost simulations, budgeting, making daily life visible.',
      },
    ],
    concept: {
      eyebrow: 'Concept',
      title: 'What Aster Works cares about',
      points: [
        { lead: 'Small tools you can use right away', body: '—rather than big systems.' },
        { lead: 'Screens you can use without thinking', body: '—rather than complicated instructions.' },
        { lead: 'Everyday usefulness', body: '—rather than flashy features.' },
      ],
      quote:
        'Aster Works builds tools that ease the small frictions and hesitations woven through work, learning, and daily life.',
    },
    approach: {
      eyebrow: 'Approach',
      title: 'Usefulness, above all.',
      body: [
        'Aster Works combines web technology, thoughtful template design, and AI where it genuinely helps, to build practical digital tools that support your everyday work.',
        'Rather than putting technology front and center, we care about what is easy to use, easy to understand, and truly helpful.',
      ],
    },
    cta: {
      title: 'Small tools, one at a time.',
      body: 'A roundup of our live and upcoming tools. Requests and questions are always welcome.',
    },
  },

  // --- Hero (home) ---
  hero: {
    titleLine1: 'Small tools',
    titleLine2: 'for a brighter future.',
    sub1a: 'Aster Works builds practical digital tools',
    sub1b: 'that brighten work, learning, and daily life.',
    sub2: 'Writing, cost calculations, organizing information, everyday decisions—we release small, easy-to-use web tools, one at a time.',
    ctaPrimary: 'Explore tools',
    ctaSecondary: 'About Aster Works',
  },

  // --- Tool cards (shared) ---
  toolCard: {
    comingSoonBadge: 'Coming Soon',
    learnMore: 'Learn more',
    preparing: 'Coming soon',
  },
  devCard: {
    badgeDev: 'Dev tool',
    badgeLive: 'Live',
    copy: 'Copy',
    copied: 'Copied',
    copyAria: 'Copy command',
    viewNpm: 'View on npm',
    github: 'GitHub',
  },

  // --- Tools page ---
  toolsPage: {
    pageTitle: 'Tools',
    description:
      'Browse the tools from Aster Works—simple companions that make work, learning, and daily life a little lighter, released a few at a time.',
    headerTitle: 'Simple tools that make daily work a little lighter.',
    count: (n: number) => `${n} ${n === 1 ? 'tool' : 'tools'} (including upcoming)`,
    devEyebrow: 'For Developers',
    devTitle: 'Developer tools',
    devDescription:
      'Real, usable tools published for indie developers and Claude Code users.',
  },

  // --- About page ---
  aboutPage: {
    pageTitle: 'About',
    eyebrow: 'About',
    headerTitle: 'About Aster Works',
    description:
      'Aster Works builds digital tools that ease the small frictions and hesitations found in everyday work, learning, and life.',
    intro: [
      'What matters to us is not piling on complicated features, but being ready the moment you need it—usable right away, and genuinely helpful.',
      'Polish a piece of writing. Make costs visible. Organize information. Build something that helps you decide.',
      'Through small tools like these, we hope each day’s results feel a little brighter.',
    ],
    valuesHeading: 'The values we hold',
    values: [
      {
        title: 'Ready right away',
        body: 'Usable on the spot, the moment you need it—no sign-up, no long explanations.',
      },
      {
        title: 'No second-guessing',
        body: 'Screens kept as simple as possible, so you never wonder how to use them.',
      },
      {
        title: 'Genuinely useful',
        body: 'Practicality that makes everyday work and decisions a little lighter, over flash.',
      },
    ],
    makeHeading: 'What we build',
    makeBody: [
      'Writing review replies and drafting text for work; planning study and organizing notes for learning; simulating costs and making household budgets visible for daily life. The areas vary, but they share one thing: small, and useful right away.',
      'We start with just a few tools, and grow the collection carefully—keeping the ones that are actually used and genuinely help.',
    ],
    makeLink: 'See our live and upcoming tools',
    techHeading: 'On technology and AI',
    techBody: [
      'Aster Works combines web technology, thoughtful template design, and AI where it genuinely helps, to build practical digital tools that support your everyday work.',
      'Rather than putting technology front and center, we care about what is easy to use, easy to understand, and truly helpful.',
    ],
    futureHeading: 'Looking ahead',
    futureBody:
      'Small tools for work, learning, and life—one at a time. If you have a request or something to discuss, we’d love to hear from you anytime.',
  },

  // --- Contact page ---
  contactPage: {
    pageTitle: 'Contact',
    eyebrow: 'Contact',
    headerTitle: 'Contact',
    description:
      'Have a tool request, a project to discuss, or a bug to report? We’d be glad to hear from you.',
    mailSubject: 'Inquiry to Aster Works',
    emailHeading: 'Reach us by email',
    emailBody:
      'Please write to the address below. We’ll review your message and reply in turn.',
    emailLabel: 'Email',
    sendButton: 'Send an email',
    topicsHeading: 'When to reach out',
    topics: [
      'Requests for tools or ideas for improvement',
      'Project work or collaboration inquiries',
      'Reports of bugs or display issues',
    ],
    noteBefore:
      '※ A contact form is in the works; for now we accept inquiries by email. Any personal information you share is used only to reply to you (see our',
    noteLink: 'Privacy Policy',
    noteAfter: 'for details).',
  },

  // --- Privacy page ---
  privacyPage: {
    pageTitle: 'Privacy Policy',
    eyebrow: 'Privacy',
    headerTitle: 'Privacy Policy',
    updatedLabel: 'Last updated: ',
    updated: 'June 9, 2026',
    intro:
      'Aster Works (“the Site”) sets out the following Privacy Policy regarding the handling of users’ personal information and data.',
    sections: [
      {
        heading: '1. Information We Collect',
        body: [
          'When you contact us, the Site may collect information you provide, such as your email address, name, and the contents of your inquiry.',
        ],
      },
      {
        heading: '2. Analytics and Cookies',
        body: [
          'To understand usage and improve our service, the Site may use analytics tools such as Google Analytics. These tools may use cookies and similar technologies to collect information, but that information is collected anonymously and does not identify individuals.',
          'You can disable cookies through your browser settings. Even with cookies disabled, most of the Site remains usable.',
        ],
      },
      {
        heading: '3. Purpose of Use',
        body: [
          'Personal information we collect is used to respond to inquiries, to contact you, and to operate and improve the Site. Except as required by law, we will not provide it to third parties without your prior consent.',
        ],
      },
      {
        heading: '4. Advertising and Affiliates',
        body: [
          'In the future, the Site may use third-party advertising services or affiliate programs. In that case, advertising providers may use cookies and similar technologies to display ads tailored to your interests. If we introduce these, we will update this Policy and let you know.',
        ],
      },
      {
        heading: '5. External Links',
        body: [
          'The Site is not responsible for how information is handled on external websites you reach from the Site. Please review the privacy policy of each site.',
        ],
      },
      {
        heading: '6. Disclaimer',
        body: [
          'The information, calculations, and generated results provided by the Site and its tools are offered for reference only, with no guarantee of accuracy, completeness, or usefulness. The Site accepts no liability for any damages arising from their use.',
        ],
      },
      {
        heading: '7. Changes to This Policy',
        body: [
          'The contents of this Policy may change without notice in response to changes in law or in our services. Any revised version takes effect once posted on the Site.',
        ],
      },
    ],
    contactHeading: '8. Contact',
    contactBefore: 'For inquiries about this Policy, please reach us via the ',
    contactLink: 'contact page',
    contactAfter: '.',
  },

  // --- Terms page ---
  termsPage: {
    pageTitle: 'Terms of Service',
    eyebrow: 'Terms',
    headerTitle: 'Terms of Service',
    updatedLabel: 'Last updated: ',
    updated: 'June 9, 2026',
    intro:
      'These Terms of Service (“Terms”) set out the conditions for using the website and tools (“the Service”) provided by Aster Works (“the Site”). By using the Service, you are deemed to have agreed to these Terms.',
    sections: [
      {
        heading: '1. Application',
        body: [
          'These Terms apply to all relationships between the Site and users concerning use of the Service.',
        ],
        list: [] as string[],
      },
      {
        heading: '2. Conditions of Use',
        body: [
          'You use the Service at your own responsibility. The Service is provided “as is,” with no guarantee of fitness for any particular purpose.',
        ],
        list: [] as string[],
      },
      {
        heading: '3. About Tool Results',
        body: [
          'Any calculations, generated results, or displayed content from the Service’s tools are for reference only. They are not guaranteed to be accurate or complete and are no substitute for professional advice.',
          'For important decisions (including those involving costs, contracts, health, or legal matters), always verify the content yourself and, where necessary, consult a professional before making a final decision.',
        ],
        list: [] as string[],
      },
      {
        heading: '4. Prohibited Conduct',
        body: ['In using the Service, you must not engage in any of the following:'],
        list: [
          'Acts that violate laws or public order and morals',
          'Acts that infringe the intellectual property, privacy, or other rights of the Site or third parties',
          'Acts that place excessive load on the Service’s servers or network, or attempts at unauthorized access',
          'Acts that interfere, or risk interfering, with the operation of the Service',
          'Any other acts the Site deems inappropriate',
        ],
      },
      {
        heading: '5. Intellectual Property',
        body: [
          'Intellectual property rights to the text, design, logos, programs, and other materials in the Service belong to the Site or to their rightful holders.',
        ],
        list: [] as string[],
      },
      {
        heading: '6. Changes and Suspension of the Service',
        body: [
          'The Site may change the contents of the Service, or suspend or terminate it, without prior notice to users.',
        ],
        list: [] as string[],
      },
      {
        heading: '7. Disclaimer',
        body: [
          'Except in cases of willful misconduct or gross negligence on the part of the Site, the Site accepts no liability for any damages incurred by users through use of the Service.',
        ],
        list: [] as string[],
      },
      {
        heading: '8. Changes to These Terms',
        body: [
          'When the Site deems it necessary, it may change these Terms without notice to users. The revised Terms take effect once posted on the Site.',
        ],
        list: [] as string[],
      },
    ],
    contactHeading: '9. Contact',
    contactBefore: 'For inquiries about these Terms, please reach us via the ',
    contactLink: 'contact page',
    contactAfter: '.',
  },

  // --- Specified Commercial Transactions Act notice ---
  tokushohoPage: {
    pageTitle: 'Legal Notice (Specified Commercial Transactions Act)',
    eyebrow: 'Legal',
    headerTitle: 'Legal Notice under Japanese Law',
    updatedLabel: 'Last updated: ',
    updated: 'June 10, 2026',
    note: 'This notice is a disclosure required of online sellers under Japan’s Act on Specified Commercial Transactions. It is provided here in English for reference; the Japanese version is authoritative.',
    intro:
      'In accordance with Article 11 of Japan’s Act on Specified Commercial Transactions, the following is disclosed.',
    items: [
      { label: 'Seller', value: 'Aster Works (trade name)' },
      { label: 'Operator in charge', value: 'Hiroaki Takaishi' },
      {
        label: 'Address',
        value:
          'Disclosed without delay upon request (as a sole proprietor; please request via the contact page).',
      },
      {
        label: 'Phone number',
        value:
          'Disclosed without delay upon request (inquiries are accepted by email).',
      },
      { label: 'Email', value: '__EMAIL__' },
      {
        label: 'Price',
        value:
          'The amount shown on each service or product purchase page (consumption tax included).',
      },
      {
        label: 'Additional fees',
        value:
          'Internet connection and communication charges are borne by the customer. Any other fees will be stated clearly on the purchase page.',
      },
      { label: 'Payment method', value: 'Credit card payment (Stripe).' },
      {
        label: 'Payment timing',
        value:
          'Payment is confirmed at the time of order. For subscriptions, charges are processed automatically on each renewal date.',
      },
      {
        label: 'Delivery timing',
        value:
          'As digital services, they are available immediately after payment is completed. For commissioned work with deliverables, delivery follows the schedule agreed at the time of contract.',
      },
      {
        label: 'Returns and cancellations',
        value:
          'Due to the nature of digital content and services, returns or refunds after payment are not accepted as a rule. If a service has a defect, please contact us via the contact page and we will respond individually. Subscriptions can be canceled at any time; after cancellation, no further charges occur from the next renewal date.',
      },
      {
        label: 'System requirements',
        value:
          'Use with the latest versions of major browsers (Chrome / Safari / Edge / Firefox) is recommended.',
      },
    ],
    contactHeading: 'Contact',
    contactBefore:
      'For inquiries about this notice, or to request disclosure of the address or phone number, please reach us via the ',
    contactLink: 'contact page',
    contactAfter: '.',
  },

  // --- 404 page ---
  notFoundPage: {
    pageTitle: 'Page not found',
    description: 'The page you were looking for could not be found.',
    heading: 'Page not found',
    body: 'The page may have moved or been removed. Please try again from the home page.',
    backHome: 'Back to home',
    viewTools: 'Explore tools',
  },
};
