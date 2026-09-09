export type Locale = "en" | "af";

export const LOCALES: Locale[] = ["en", "af"];
export const DEFAULT_LOCALE: Locale = "en";

export const serviceSlugs = [
  "windows",
  "enclosures",
  "balustrades",
  "doors",
  "partitions-showers",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

type ServiceCopy = {
  title: string;
  summary: string;
  description: string;
  points: string[];
};

const copy = {
  langName: "English",
  location: "South Africa",

  nav: {
    home: "Home",
    services: "Services",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
  },

  cta: {
    quote: "Get a Quote",
    viewServices: "View services",
    chat: "WhatsApp us",
  },

  hero: {
    line1: "Victorious",
    red: "Aluminium",
    line2: "",
    sub: "We manufacture and design aluminium windows, enclosures, balustrades, hinge doors, pivot doors, stack folding doors, sliding doors, office partitioning and showers at affordable prices.",
    scroll: "Scroll to see more",
  },

  home: {
    whoEyebrow: "Who we are",
    introMain:
      "Victorious Aluminium manufactures, designs and installs aluminium and glass solutions for homes and businesses. ",
    introMuted:
      "From windows and doors to balustrades, enclosures, office partitioning and showers, we keep the work practical, neat and affordable.",
    servicesHeading: "Services",
    allServices: "All services",
    whyEyebrow: "Why Victorious",
    whyHeading: "Designed, manufactured and installed with care.",
    why: [
      {
        t: "Made for your space",
        d: "Windows, doors, showers, partitions and enclosures are measured and made to suit your opening and layout.",
      },
      {
        t: "Affordable pricing",
        d: "We keep pricing clear and practical so you can improve your property without overcomplicating the job.",
      },
      {
        t: "Easy contact",
        d: "Do not hesitate to WhatsApp us or call us on 081 701 5241.",
      },
    ],
    processEyebrow: "How it works",
    processHeading: "From first call to finished installation.",
    testimonialsEyebrow: "Feedback",
    galleryEyebrow: "Our work",
    galleryHeading: "Recent aluminium and glass projects.",
    galleryCta: "View gallery",
    ctaHeading: "Need aluminium or glass work at an affordable price?",
  },

  services: {
    windows: {
      title: "Aluminium Windows",
      summary:
        "Manufactured and designed aluminium windows for homes and businesses.",
      description:
        "Victorious Aluminium manufactures and designs aluminium windows to suit your space, with neat finishes, strong framing and practical glass options.",
      points: [
        "Manufactured to fit your opening",
        "Designed for a clean, modern finish",
        "Affordable pricing for homes and businesses",
      ],
    },
    enclosures: {
      title: "Enclosures",
      summary:
        "Aluminium and glass enclosures designed for patios, entrances and useful covered areas.",
      description:
        "We design and manufacture aluminium enclosures that add protection, structure and usable space while keeping the finish neat and durable.",
      points: [
        "Custom aluminium and glass layouts",
        "Suitable for patios, entrances and covered areas",
        "Built for everyday use",
      ],
    },
    balustrades: {
      title: "Balustrades",
      summary:
        "Aluminium and glass balustrades for stairs, balconies and raised areas.",
      description:
        "We manufacture and install balustrades that bring strength, visibility and a clean finish to stairways, balconies and other raised spaces.",
      points: [
        "Glass and aluminium options",
        "Neat lines for modern spaces",
        "Measured and installed with care",
      ],
    },
    doors: {
      title: "Hinge, Pivot, Stack Folding & Sliding Doors",
      summary:
        "Aluminium doors manufactured and designed for smooth access and lasting use.",
      description:
        "We manufacture and design hinge doors, pivot doors, stack folding doors and sliding doors for residential and commercial spaces.",
      points: [
        "Hinge and pivot doors",
        "Stack folding doors",
        "Sliding doors for wider openings",
      ],
    },
    "partitions-showers": {
      title: "Office Partitioning & Showers",
      summary:
        "Aluminium and glass office partitions and shower solutions at affordable prices.",
      description:
        "We design and manufacture office partitioning and shower installations that divide space neatly and give bathrooms or workspaces a polished finish.",
      points: [
        "Office glass partitioning",
        "Shower screens and enclosures",
        "Practical, clean installations",
      ],
    },
  } as Record<ServiceSlug, ServiceCopy>,

  process: [
    {
      title: "Call or WhatsApp",
      body: "Contact us on 081 701 5241 and tell us what you need.",
    },
    {
      title: "Design & measure",
      body: "We discuss the space, take measurements and plan the best aluminium or glass solution.",
    },
    {
      title: "Manufacture",
      body: "Your windows, doors, enclosures, balustrades, partitions or showers are manufactured to suit the job.",
    },
    {
      title: "Install",
      body: "We install neatly and make sure the final result is ready for everyday use.",
    },
  ],

  testimonials: [
    {
      quote:
        "Victorious Aluminium would love your feedback. Post a review to our Google profile and let us know how we did.",
      name: "Leave a Google review",
      place: "Victorious Aluminium",
    },
  ],

  review: {
    eyebrow: "Feedback",
    title: "Victorious Aluminium would love your feedback.",
    body: "Post a review to our profile and let us know how we did.",
    button: "Post a review",
  },

  services_page: {
    eyebrow: "What we do",
    title: "Services",
    intro:
      "We manufacture and design aluminium windows, enclosures, balustrades, hinge doors, pivot doors, stack folding doors, sliding doors, office partitioning and showers at affordable prices.",
    ask: "Ask about",
    ctaHeading:
      "Do not hesitate to WhatsApp us or call us on 081 701 5241.",
  },

  gallery_page: {
    eyebrow: "Our work",
    title: "Gallery",
    intro:
      "A look at Victorious Aluminium projects, including aluminium windows, doors, enclosures, balustrades, office partitioning and showers.",
  },

  about: {
    eyebrow: "About us",
    title: "Victorious Aluminium",
    intro:
      "Victorious Aluminium manufactures, designs and installs aluminium and glass work at affordable prices.",
    approachEyebrow: "Our approach",
    approachMain:
      "We help customers improve their homes and businesses with practical aluminium and glass solutions. ",
    approachMuted:
      "Every job starts with understanding the space and what the customer needs.",
    approachBody:
      "Our services include aluminium windows, enclosures, balustrades, hinge doors, pivot doors, stack folding doors, sliding doors, office partitioning and showers. Do not hesitate to WhatsApp us or call us on 081 701 5241.",
    valuesHeading: "What we focus on.",
    values: [
      {
        t: "Manufacture",
        d: "We make aluminium and glass products to suit the project and the opening.",
      },
      {
        t: "Design",
        d: "We plan clean, practical solutions for windows, doors, enclosures, balustrades, partitions and showers.",
      },
      {
        t: "Affordability",
        d: "We keep our service accessible with affordable prices and straightforward communication.",
      },
    ],
    processEyebrow: "Our process",
    processHeading: "Four simple steps.",
  },

  contact: {
    eyebrow: "Contact",
    title: "WhatsApp or call us.",
    intro:
      "Do not hesitate to WhatsApp us or call us on 081 701 5241. You can also fill in the form and WhatsApp will open with your message ready to send.",
    directEyebrow: "Direct contact",
    contactPersonLabel: "Company",
    callLabel: "Call or WhatsApp",
    emailLabel: "Email",
    areaLabel: "Service area",
    facebookLabel: "Google review",
    followUs: "Post a review",
  },

  form: {
    name: "Name",
    namePlaceholder: "Your name",
    phone: "Contact number",
    phonePlaceholder: "E.g. 081 234 5678",
    service: "Service",
    servicePlaceholder: "Choose a service (optional)",
    details: "Details",
    detailsPlaceholder: "Tell us briefly what you need",
    submit: "Send via WhatsApp",
    note: "When you send, WhatsApp opens with your message already filled in. You just press send.",
  },

  footer: {
    statement:
      "Aluminium windows, enclosures, balustrades, doors, office partitioning and showers at affordable prices.",
    followFacebook: "Post a Google review",
    browse: "Browse",
    services: "Services",
    contact: "Contact",
    rights: "All rights reserved.",
    tagline: "Manufacture, design and installation",
  },

  whatsapp: {
    enquiry:
      "Hi Victorious Aluminium, I have an enquiry about aluminium and glass work.",
    greeting:
      "Hello Victorious Aluminium, I'd like to request a quote.",
    fName: "Name",
    fPhone: "Contact number",
    fService: "Service",
    fDetails: "Details",
  },

  notFound: {
    title: "Page not found.",
    body: "The page you're looking for doesn't exist or has moved. Let's get you back to the right place.",
    button: "Back to home",
  },
};

export type Dict = typeof copy;

const af: Dict = {
  ...copy,
  langName: "Afrikaans",
};

export const translations: Record<Locale, Dict> = { en: copy, af };
