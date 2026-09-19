import type {
  CommitteeMember,
  ContactDetails,
  CurrentConference,
  FaqItem,
  Highlight,
  ImageAsset,
  ImportantDate,
  NavItem,
  NavNode,
  Organizer,
  PastConference,
  ProgramDay,
  RegistrationPlan,
  SiteMeta,
  Speaker,
  Theme,
} from "./types";

/** Single reusable image until organizers supply edition-specific assets. */
export const PLACEHOLDER_IMAGE = "/conference-assets/placeholder.svg";

export const siteMeta: SiteMeta = {
  siteName: "Herbal & Synthetic Drug Studies Conference",
  titleTemplate: "[Conference Name] | [Edition] | [City]",
  description:
    "Official conference website with program, speakers, abstract submission, registration, venue and previous conference editions.",
  canonicalBase: "",
};

export const navigation: NavItem[] = [
  { label: "Intro", href: "/#overview" },
  { label: "About", href: "/about" },
  { label: "Speakers", href: "/speakers" },
  { label: "Program", href: "/program" },
  { label: "Call for Abstracts", href: "/abstracts" },
  { label: "Venue", href: "/venue" },
  { label: "Contact", href: "/contact" },
];

/** Matches the PhytoTMed header IA: Intro, Overview, Program, Sponsor, Venue, Contact, Register. */
export const navigationMenu: NavNode[] = [
  { label: "Intro", href: "/#overview" },
  {
    label: "Overview",
    children: [
      { label: "About Conference", href: "/about" },
      { label: "Committee", href: "/speakers#committee" },
      { label: "Speakers", href: "/speakers" },
      { label: "Important Dates", href: "/important-dates" },
      {
        label: "Past Event",
        children: [
          { label: "HSDS-2010", href: "/past-conferences#hsds-2010" },
          { label: "HSDS-2014", href: "/past-conferences#hsds-2014" },
          { label: "HSDS-2016", href: "/past-conferences#hsds-2016" },
        ],
      },
    ],
  },
  {
    label: "Program",
    children: [
      { label: "Tentative Program Schedule", href: "/program" },
      { label: "Topics", href: "/conference#topics" },
      { label: "Call for Abstracts", href: "/abstracts" },
      { label: "Review Process", href: "/review-process" },
      { label: "Presenters Instructions", href: "/presenters" },
    ],
  },
  {
    label: "Sponsor",
    children: [
      { label: "Exhibition (Tabletop) Opportunities", href: "/sponsors#exhibition" },
      { label: "Sponsor Opportunity", href: "/sponsors#opportunity" },
      { label: "Become A Sponsor", href: "/sponsors#become" },
    ],
  },
  { label: "Venue", href: "/venue" },
  { label: "Contact", href: "/contact" },
];

export const announcementLinks = [
  {
    label: "Abstract Submission Closes on:",
    date: "[Date TBA]",
    href: "/abstracts",
  },
  {
    label: "Early Bird Registration Closes on:",
    date: "[Date TBA]",
    href: "/register",
  },
];

export const primaryCta = { label: "Register", href: "/register" };
export const secondaryCta = { label: "Submit Abstract", href: "/abstracts" };

/**
 * Current-edition fields. Keep bracketed placeholders until organizers confirm.
 * Do not invent a year, city, venue, fee, or speaker list.
 */
export const currentConference: CurrentConference = {
  shortName: "HSDS",
  title: "[Current Conference Title]",
  edition: "[Edition]",
  dates: "[Current Conference Dates]",
  startDateISO: "",
  venue: "[Venue]",
  city: "[City]",
  country: "[Country]",
  description: "[Current Conference Description]",
  announcement: "Details for the next edition will be announced soon.",
  themes: [],
  importantDates: [],
};

export const currentThemes: Theme[] = [];

export const currentImportantDates: ImportantDate[] = [];

export const highlights: Highlight[] = [
  {
    title: "Interdisciplinary science",
    description:
      "A meeting point for researchers working across herbal medicines, synthetic chemistry, and translational pharmacology.",
  },
  {
    title: "Oral and poster exchange",
    description:
      "Previous editions combined invited talks with contributed oral and poster sessions. The next format will be published with the program.",
  },
  {
    title: "Academic collaboration",
    description:
      "The series has historically brought scientists, clinicians, and academicians together to share methods and open new collaborations.",
  },
  {
    title: "Documented legacy",
    description:
      "National and international editions in 2010, 2014, and 2016 form the documented archive of this conference series.",
  },
];

export const whyAttend: Highlight[] = [
  {
    title: "Scientific breadth",
    description:
      "Hear work that sits between natural-product research and contemporary synthetic drug discovery.",
  },
  {
    title: "Methodological exchange",
    description:
      "Previous meetings emphasized preparation, characterization, and analytical or biochemical methods.",
  },
  {
    title: "Community",
    description:
      "Meet faculty, students, and industry participants who work on formulation, targets, and translation.",
  },
  {
    title: "Publication-ready dialogue",
    description:
      "Abstracts, talks, and posters have been the core scholarly formats of earlier editions.",
  },
];

/**
 * Objectives recorded from earlier HSDS brochures.
 * Present as historical context, not as commitments of the next edition.
 */
export const historicalObjectives = [
  "Review the current status and future potential of herbal and synthetic drugs.",
  "Discuss advances in preparation, characterization and analytical/biochemical methodologies.",
  "Bring researchers, scientists and academicians together for interdisciplinary exchange.",
  "Explore drug formulations, applications, molecular targets and translational approaches.",
  "Encourage academic collaboration and knowledge sharing.",
];

/**
 * Scientific topics listed on earlier HSDS materials.
 * Adapt as research-area examples, not as the confirmed current track list.
 */
export const historicalTopics = [
  "Novel herbal and synthetic drugs: synthesis, characterization and applications",
  "Metal-based drugs / bioinorganic drugs",
  "New trends in pharmaceutical sciences",
  "New methods of drug formulation and applications",
  "Complementary and Unani medicines",
  "Molecular targets and translational therapy",
  "Drug preparation and characterization",
  "Analytical and biochemical techniques",
];

export const whoShouldAttend = [
  "Faculty and academic researchers",
  "Doctoral and postgraduate students",
  "Pharmaceutical and natural-product scientists",
  "Clinicians and translational researchers",
  "Industry professionals in drug discovery and formulation",
];

export const conferenceFormat = [
  {
    title: "Plenary and keynote lectures",
    description: "Invited overviews will be published when the speaker list is confirmed.",
  },
  {
    title: "Oral presentations",
    description: "Contributed talks selected from submitted abstracts.",
  },
  {
    title: "Poster presentations",
    description: "Poster sessions for work-in-progress and completed studies.",
  },
  {
    title: "Networking intervals",
    description: "Breaks and informal discussion periods, once the program is released.",
  },
];

export const organizers: Organizer[] = [
  {
    name: "[Organizing Institution]",
    role: "Host institution",
    logo: PLACEHOLDER_IMAGE,
  },
  {
    name: "[Collaborating Institution]",
    role: "Academic partner",
    logo: PLACEHOLDER_IMAGE,
  },
  {
    name: "[Supporting Body]",
    role: "Supporting organization",
    logo: PLACEHOLDER_IMAGE,
  },
];

export const speakers: Speaker[] = [];

export const featuredSpeakerSlots = 4;

export const committee: CommitteeMember[] = [];

export const programDays: ProgramDay[] = [];

export const presentationTypes = ["Oral Presentation", "Poster Presentation"] as const;

export const researchTracks = [...historicalTopics];

export const abstractGuidelines = {
  language: "English",
  wordLimit: "[Word limit to be confirmed]",
  fileTypes: "PDF or DOCX, once the template is released",
  note: "Earlier brochures mentioned abstracts of approximately 300 words. That figure is historical and is not the current limit unless organizers confirm it.",
  templateHref: "",
};

export const registrationPlans: RegistrationPlan[] = [
  {
    category: "Delegates / Faculty / Researchers",
    price: "Fee to be announced",
    currency: "",
    includes: [],
  },
  {
    category: "Students",
    price: "Fee to be announced",
    currency: "",
    includes: [],
  },
  {
    category: "Industry Professionals",
    price: "Fee to be announced",
    currency: "",
    includes: [],
  },
  {
    category: "International Participants",
    price: "Fee to be announced",
    currency: "",
    includes: [],
  },
  {
    category: "Accompanying Person",
    price: "Fee to be announced",
    currency: "",
    includes: [],
  },
];

export const registrationIncludes = [
  "Access to scientific sessions, once the program is published",
  "Conference materials, as confirmed closer to the event",
  "Certificate of participation, subject to organizer confirmation",
  "Refreshments during scheduled breaks, if included in the published package",
];

export const paymentNote =
  "Payment instructions for the current edition have not been published. Do not use fees from earlier brochures.";

export const cancellationPolicy =
  "The cancellation and refund policy will be published with the current registration circular.";

export const accommodationNote =
  "Accommodation arrangements for the current edition will be announced with the venue confirmation.";

export const faqs: FaqItem[] = [
  {
    question: "When will the next edition be announced?",
    answer:
      "The announcement bar and this website will be updated when organizers confirm the title, dates, and venue. Until then, fields remain placeholders.",
  },
  {
    question: "Can I use fees printed on older HSDS pamphlets?",
    answer:
      "No. Fees differed by edition. Current categories are listed, but prices will appear only after organizers release them.",
  },
  {
    question: "Is there a 300-word abstract limit?",
    answer:
      "That figure appears on older brochures only. Submit according to the current guidelines once they are confirmed.",
  },
  {
    question: "Where were earlier conferences held?",
    answer:
      "The 2010, 2014, and 2016 editions were hosted at Azam Campus, Camp, Pune. The venue for the next edition is still to be confirmed.",
  },
];

export const historicalVenue = {
  name: "Dr. A. R. Shaikh Assembly Hall / Azam Campus",
  address: "Camp, Pune – 411001, Maharashtra, India",
  note: "This address is documented for earlier editions. Confirm the venue for the current edition before treating it as the meeting site.",
};

export const aboutPune =
  "Pune is a major academic city in Maharashtra, India, and was the documented host city for the 2010, 2014, and 2016 editions. Travel notes for the next meeting will follow venue confirmation.";

export const howToReach = [
  {
    title: "By air",
    description:
      "International and domestic arrivals typically use Pune International Airport when the meeting is in Pune. Transfer details will follow venue confirmation.",
  },
  {
    title: "By rail",
    description: "Pune Junction serves the city. Local transfer advice will be published with the current venue.",
  },
  {
    title: "Campus access",
    description:
      "Earlier editions convened at Azam Campus, Camp. Do not assume the same hall until organizers confirm it.",
  },
];

export const contact: ContactDetails = {
  secretariat: "[Conference Secretariat]",
  email: "[conference@email]",
  phone: "[Phone]",
  address: "[Address]",
  social: [
    { label: "Website", href: "#" },
    { label: "Email", href: "mailto:[conference@email]" },
  ],
};

const pamphlet = (file: string, caption: string): ImageAsset => ({
  src: `/conference-assets/pamphlets/${file}`,
  alt: caption,
  caption,
});

/**
 * Drop the original WhatsApp pamphlet JPEGs into /public/conference-assets/pamphlets/
 * using these exact filenames. The gallery falls back to the placeholder until they exist.
 */
export const pamphletFiles = [
  "WhatsApp Image 2026-09-12 at 00.58.00.jpeg",
  "WhatsApp Image 2026-09-12 at 00.58.17.jpeg",
  "WhatsApp Image 2026-09-12 at 00.58.31.jpeg",
  "WhatsApp Image 2026-09-12 at 00.59.00.jpeg",
  "WhatsApp Image 2026-09-12 at 00.59.20.jpeg",
  "WhatsApp Image 2026-09-12 at 00.59.35.jpeg",
  "WhatsApp Image 2026-09-12 at 01.00.00.jpeg",
  "WhatsApp Image 2026-09-12 at 01.00.20.jpeg",
  "WhatsApp Image 2026-09-12 at 01.00.38.jpeg",
] as const;

export const pastConferences: PastConference[] = [
  {
    year: 2010,
    edition: "National Conference",
    title: "New Frontiers in Herbal and Synthetic Drug Studies",
    code: "HSDS-2010",
    dates: "14–16 January 2010",
    venue: "Assembly Hall, Azam Campus, Camp, Pune – 411001",
    type: "National Conference",
    themes: [
      "Herbal and synthetic drugs",
      "Drug preparation and characterization",
      "Pharmaceutical sciences",
      "Drug formulation",
      "Complementary medicine",
      "Oral and poster presentations",
    ],
    gallery: [
      pamphlet(pamphletFiles[0], "HSDS-2010 brochure scan"),
      pamphlet(pamphletFiles[1], "HSDS-2010 historical document"),
      pamphlet(pamphletFiles[2], "HSDS-2010 conference material"),
    ],
  },
  {
    year: 2014,
    edition: "2nd International Conference",
    title: "Herbal and Synthetic Drug Studies",
    code: "HSDS-2014",
    dates: "10–12 February 2014",
    venue: "Dr. A. R. Shaikh Assembly Hall, Azam Campus, Camp, Pune – 411001",
    type: "International Conference",
    themes: [
      "Novel herbal and synthetic drugs",
      "Metal-based / bioinorganic drugs",
      "New trends in pharmaceutical sciences",
      "Drug formulation and applications",
      "Complementary and Unani medicines",
      "Molecular targets and translational therapy",
    ],
    gallery: [
      pamphlet(pamphletFiles[3], "HSDS-2014 brochure scan"),
      pamphlet(pamphletFiles[4], "HSDS-2014 historical document"),
      pamphlet(pamphletFiles[5], "HSDS-2014 conference material"),
    ],
  },
  {
    year: 2016,
    edition: "3rd International Conference",
    title: "Herbal and Synthetic Drug Studies",
    code: "HSDS-2016",
    dates: "07–09 January 2016",
    venue: "Dr. A. R. Shaikh Assembly Hall, Azam Campus, Camp, Pune – 411001",
    type: "International Conference",
    themes: [
      "Herbal and synthetic drugs",
      "Drug discovery and development",
      "Drug formulation",
      "Analytical and biochemical techniques",
      "Complementary medicine",
      "Molecular targets and translational research",
    ],
    gallery: [
      pamphlet(pamphletFiles[6], "HSDS-2016 brochure scan"),
      pamphlet(pamphletFiles[7], "HSDS-2016 historical document"),
      pamphlet(pamphletFiles[8], "HSDS-2016 conference material"),
    ],
  },
];

export const footerLinks: NavItem[] = [
  { label: "About Conference", href: "/about" },
  { label: "Committee", href: "/speakers#committee" },
  { label: "Venue", href: "/venue" },
  { label: "Call for Abstracts", href: "/abstracts" },
  { label: "Register Now", href: "/register" },
  { label: "Sponsor", href: "/sponsors" },
];
