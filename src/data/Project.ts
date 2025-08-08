export const projects = [
  {
    id: 1,
    key: 'e-commerce',
    title: 'E-Commerce Platform',
    description: 'Modern online store with seamless checkout experience and inventory management',
    imageLink: 'src/assets/image.jpg',
    tags: ['React', 'Node.js', 'Stripe'],
    overlayTitle: 'ShopFlow Pro',
    overlayDescription:
      'A complete e-commerce solution built for a growing fashion brand. Features include real-time inventory tracking, advanced analytics, and AI-powered product recommendations.',
    stats: [
      {
        text: 'Completed in 8 weeks',
        iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      },
      {
        text: '50K+ monthly users',
        iconPath:
          'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z',
      },
      {
        text: '98.5% uptime',
        iconPath:
          'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
      },
    ],
    overlayTech: ['React 18', 'Node.js', 'MongoDB', 'Stripe API', 'AWS'],
    buttonText: 'View Case Study →',
    buttonLink: 'https://example.com/shopflow-case-study',
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    key: 'saas-dashboard',
    description: 'Analytics platform with real-time data visualization and AI insights',
    imageLink: 'src/assets/image.jpg',
    tags: ['Vue.js', 'D3.js', 'MongoDB'],
    overlayTitle: 'DataFlow Analytics',
    overlayDescription:
      'An advanced analytics dashboard for B2B SaaS companies. Features real-time data processing, predictive analytics, and customizable reporting tools.',
    stats: [
      {
        text: 'Delivered in 12 weeks',
        iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      },
      {
        text: '1M+ data points/day',
        iconPath:
          'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z',
      },
      {
        text: '40% efficiency increase',
        iconPath:
          'M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      },
    ],
    overlayTech: ['Vue 3', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
    buttonText: 'View Live Demo →',
    buttonLink: 'https://example.com/dataflow-demo',
  },
  {
    id: 3,
    title: 'Creative Portfolio',
    key: 'creative-portfolio',
    description: 'Award-winning portfolio with smooth animations and 3D interactions',
    imageLink: 'src/assets/image.jpg',
    tags: ['Next.js', 'Three.js', 'GSAP'],
    overlayTitle: 'Artist Showcase',
    overlayDescription:
      'An immersive 3D portfolio website for a digital artist. Features WebGL experiences, smooth page transitions, and an innovative cursor-following gallery system.',
    stats: [
      {
        text: 'Awwwards Site of the Day',
        iconPath:
          'M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      },
      {
        text: '4.9/5 client rating',
        iconPath:
          'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
      },
      {
        text: '250K+ page views',
        iconPath:
          'M10 12a2 2 0 100-4 2 2 0 000 4zM.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      },
    ],
    overlayTech: ['Next.js 14', 'Three.js', 'GSAP', 'Vercel', 'Framer Motion'],
    buttonText: 'View Live Site →',
    buttonLink: 'https://example.com/artist-showcase',
  },
  {
    id: 4,
    title: 'Mobile App',
    key: 'mobile-app',
    description: 'Cross-platform mobile app with native performance and offline support',
    imageLink: 'src/assets/image.jpg',
    tags: ['React Native', 'Firebase', 'Redux'],
    overlayTitle: 'FitTrack Pro',
    overlayDescription:
      'A comprehensive fitness tracking app with AI-powered workout recommendations, social features, and advanced analytics for personal trainers.',
    stats: [
      {
        text: '100K+ downloads',
        iconPath:
          'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
      },
      {
        text: '4.8 App Store rating',
        iconPath:
          'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
      },
      {
        text: 'Daily active users: 25K',
        iconPath:
          'M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      },
    ],
    overlayTech: ['React Native', 'Firebase', 'Redux', 'Stripe', 'Push Notifications'],
    buttonText: 'App Store →',
    buttonLink: 'https://example.com/fittrack-app',
  },
  {
    id: 5,
    title: 'AI-Powered Tool',
    key: 'ai-tool',
    description: 'Machine learning platform for content optimization and automation',
    imageLink: 'src/assets/image.jpg',
    tags: ['Python', 'TensorFlow', 'FastAPI'],
    overlayTitle: 'ContentGenius AI',
    overlayDescription:
      'An intelligent content optimization platform that uses machine learning to analyze and improve marketing content performance across multiple channels.',
    stats: [
      {
        text: '85% accuracy improvement',
        iconPath:
          'M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      },
      {
        text: '2M+ content pieces analyzed',
        iconPath: 'M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0zM12 2.252A8.014 8.014 0 0117.748 8H12V2.252z',
      },
      {
        text: '60% faster processing',
        iconPath:
          'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 10.793a1 1 0 101.414 1.414l2-2a1 1 0 000-1.414z',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      },
    ],
    overlayTech: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'AWS ML'],
    buttonText: 'Try Beta →',
    buttonLink: 'https://example.com/contentgenius-beta',
  },
  {
    id: 6,
    title: 'Corporate Website',
    key: 'corporate-website',
    description: 'Professional website with headless CMS and advanced SEO optimization',
    imageLink: 'src/assets/image.jpg',
    tags: ['Gatsby', 'Strapi', 'GraphQL'],
    overlayTitle: 'TechCorp Global',
    overlayDescription:
      'A modern corporate website for a Fortune 500 company featuring multilingual support, advanced SEO, and integration with enterprise systems.',
    stats: [
      {
        text: '12 languages supported',
        iconPath:
          'M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      },
      {
        text: '95 PageSpeed score',
        iconPath:
          'M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      },
      {
        text: '500K+ organic visitors/month',
        iconPath:
          'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      },
    ],
    overlayTech: ['Gatsby', 'Strapi CMS', 'GraphQL', 'Netlify', 'i18n'],
    buttonText: 'View Website →',
    buttonLink: 'https://example.com/techcorp-global',
  },
];