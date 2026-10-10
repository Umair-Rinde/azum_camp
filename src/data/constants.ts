import type {
  CommitteeMember,
  ContactDetails,
  CurrentConference,
  FaqItem,
  Highlight,
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
import { SITE_IMAGES } from "./images";

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
  // {ad
  { label: "Venue", href: "/venue" },
  { label: "Contact", href: "/contact" },
];

export const announcementLinks = [
  {
    label: "Abstract Submission Closes on:",
    date: "NOVEMBER 30, 2026",
    href: "/abstracts",
  },
  {
    label: "Early Bird Registration Closes on:",
    date: "OCTOBER 31, 2026",
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
  shortName: "HSDS-2027",
  title: "International Conference on Herbal & Synthetic Drug Studies",
  edition: "4th",
  dates: "January 28-30, 2027",
  startDateISO: "",
  venue: "Dr. A. R. Shaikh Assembly Hall, Azam Campus, Camp, Pune, India – 411001",
  city: "Pune",
  country: "India",
  description:
    "Connecting researchers in herbal medicines, synthetic chemistry, and translational pharmacology for scientific exchange, collaboration, and the advancement of drug studies.",
  announcement: "Details for the next edition will be announced soon.",
  themes: [],
  importantDates: [],
};

export const currentThemes: Theme[] = [];

/** Major themes announced for HSDS-2027. */
export const majorThemes = [
  "Novel Herbal and Synthetic Drugs: Synthesis, Characterization and Applications",
  "Analytical and Biotechnological Advances in Drug Development and Discovery",
  "Metal-Based Drugs",
  "New Trends in Pharmaceutical Sciences",
  "New Methods of Drug Formulation and Applications",
  "Nano Materials in Drug Discovery and Development",
  "Insights into Complementary Unani Medicines",
  "Developments and Future Challenges in the Unani System of Medicine",
];

export const currentImportantDates: ImportantDate[] = [];

export const highlights: Highlight[] = [
  {
    title: "Global Networking",
    description:
      "Connect with researchers, clinicians, and academicians across herbal medicine, synthetic chemistry, and translational pharmacology.",
  },
  {
    title: "Cutting-edge Research",
    description:
      "Gain insight into advances in preparation, characterization, and analytical methods for herbal and synthetic drugs.",
  },
  {
    title: "Multidisciplinary Approach",
    description:
      "Explore oral and poster exchange across pharmacognosy, formulation science, Unani medicine, and molecular targets.",
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
  "Present an overview of the current status in the field of herbal and synthetic drugs and highlight future potential with reference to development and diverse applications.",
  "Bring the scientific community together to discuss advances in the preparation of herbal and synthetic drugs, and new experimental methodologies for their characterization using analytical and biochemical techniques.",
  "Provide researchers, scientists and academicians from India and abroad an opportunity to discuss and share views on the development and future scope of the subject.",
];

/**
 * Scientific topics listed on earlier HSDS materials.
 * Adapt as research-area examples, not as the confirmed current track list.
 */
export const historicalTopics = [
  "Novel herbal and synthetic drugs (synthesis, characterization and applications)",
  "Metal based drugs (Bioinorganic Drugs)",
  "New trends in pharmaceutical sciences",
  "New methods of drug formulations and applications",
  "Insights into complementary Unani Medicines",
  "Molecular targets and translational therapy",
  "Advanced techniques in drug preparations and characterization",
  "Integrated medicinal approach and health care",
  "Taxonomic evaluation of plant drugs and standardization",
];

export const whoShouldAttend = [
  "Teachers, researchers and academicians",
  "Botanists and chemists",
  "Unani doctors and pharmacists",
  "Students interested in drug studies",
  "Industry professionals in drug discovery and formulation",
];

export const conferenceFormat = [
  {
    title: "Registration and inauguration",
    description: "Earlier editions opened with registration followed by an inauguration function.",
  },
  {
    title: "Keynote and plenary sessions",
    description: "Brochures listed a keynote address and invited talks on sub-themes before technical sessions.",
  },
  {
    title: "Oral and poster presentations",
    description: "Contributed papers were presented orally and as posters. Historical poster boards were 1 × 1 m.",
  },
  {
    title: "Interactive and cultural programme",
    description: "Earlier meetings included an interactive session, cultural programme, valedictory function, and a sightseeing programme.",
  },
];

/** Host college profile shown with the campus panorama on the homepage. */
export const hostInstitution = {
  eyebrow: "Host Institution",
  title: "Abeda Inamdar Senior College",
  college: {
    label: "The College",
    body: "M. C. E. Society’s Abeda Inamdar Senior College is a reputed institution of higher education in Pune, Maharashtra, managed by the M. C. E. Society, one of the prominent educational organizations at Azam Campus. The institution functions under the visionary leadership of Dr. P. A. Inamdar and Mrs. Abeda Inamdar. The college is affiliated with Savitribai Phule Pune University (formerly University of Pune) and has recently been granted the prestigious status of an “Empowered Autonomous College” by the University.",
  },
  department: {
    label: "Department of Chemistry",
    body: [
      "The Department of Chemistry offers B.Sc., M.Sc. and Ph.D. programmes and serves as a recognized Research Centre in Chemistry affiliated with Savitribai Phule Pune University since 2004. The faculty members are committed educators and active researchers working in diverse and emerging areas of chemistry, particularly drug discovery and development.",
      "Over the years, the department has published more than 100 research papers in reputed national and international journals. Its academic and research activities have been further strengthened through national and international collaborations and research grants received from reputed funding agencies, including DST and BCUD, Savitribai Phule Pune University. These initiatives have contributed significantly to fostering a vibrant and collaborative research environment.",
    ],
  },
} as const;

/**
 * Placeholder joint organizers for the homepage overview.
 * Names from the HSDS-2014 pamphlet (Allana College of Pharmacy excluded); replace when the current edition confirms hosts.
 */
export const homeOrganizers = [
  {
    name: "M. C. E. Society's Abeda Inamdar Senior College of Arts, Science & Commerce, Pune",
    detail: "Department of Chemistry & Post Graduate Research Centre",
    logo: SITE_IMAGES.LOGO_AISC,
  },
  {
    name: "M. M. E. R. C.'s Z. V. M. Unani Medical College and Hospital, Pune",
    detail: "Maharashtra University of Health Sciences (Nashik)",
    logo: SITE_IMAGES.LOGO_UNANI,
  },
] as const;

/** Host and partner bodies named on 2010, 2014, and 2016 brochures. Not a confirmed list for the next edition. */
export const organizers: Organizer[] = [
  {
    name: "M.C.E. Society's Abeda Inamdar Senior College of Arts, Science & Commerce, Pune",
    role: "Host college (2010, 2014, 2016)",
    logo: SITE_IMAGES.LOGO_AISC.src,
  },
  {
    name: "Interdisciplinary Science and Technology Research Academy (ISTRA, Pune)",
    role: "Organizing academy (2014, 2016)",
    logo: PLACEHOLDER_IMAGE,
  },
  {
    name: "Allana College of Pharmacy, Pune",
    role: "Partner institute",
    logo: PLACEHOLDER_IMAGE,
  },
  {
    name: "Z. V. M. Unani Medical College and Hospital, Pune",
    role: "Partner institute (2010, 2014)",
    logo: SITE_IMAGES.LOGO_UNANI.src,
  },
  {
    name: "The University of Kansas Cancer Center, Kansas City, USA",
    role: "In association (2014, 2016)",
    logo: PLACEHOLDER_IMAGE,
  },
  {
    name: "University Grants Commission, New Delhi",
    role: "Historical sponsor",
    logo: PLACEHOLDER_IMAGE,
  },
  {
    name: "Savitribai Phule Pune University",
    role: "Regional university mark",
    logo: SITE_IMAGES.LOGO_PUNE_UNIVERSITY.src,
  },
];

/**
 * Speaker photos from /public/Speaker. Names are provisional from filenames —
 * update designation, institution, country, bio, and roles when confirmed.
 */
export const speakers: Speaker[] = [
  {
    name: "Prof. Niyaz Ahmed",
    designation: "Senior Professor",
    institution: "Dept. of  Biotechnology & Bioinformatics (DoBB), University of Hyderabad, India",
    country: "",
    photo: SITE_IMAGES.SPEAKER_NIYAZ.src,
    shortBio: "",
    role: "keynote",
  },
  {
    name: "Dr. Sagar Arya",
    designation: "Ph.D. MSCA Fellow",
    institution: "Czech Advanced Technology & Research Institute, Palacký University, Czech Republic",
    country: "",
    photo: SITE_IMAGES.SPEAKER_SAGAR.src,
    shortBio: "",
    role: "invited",
  },
  {
    name: "Dr. Prasad Dandawate",
    designation: "Assistant Professor",
    institution: "Department of Cancer Biology  University of Kansas Medical Center, Kansas City, USA",
    country: "",
    photo: SITE_IMAGES.SPEAKER_PRASAD.src,
    shortBio: "",
    role: "invited",
  },
  {
    name: "Dr. Lubna Tahtamouni",
    designation: "Dean & Prof. of Scientific Research",
    institution: "The Hashemite University, Jordan",
    country: "",
    photo: SITE_IMAGES.SPEAKER_LUBNA.src,
    shortBio: "",
    role: "invited",
  },
  {
    name: "Dr. Ishtiaq Jeelani",
    designation: "Postdoctoral Researcher at the University of California",
    institution: "San Diego, California, United States",
    country: "",
    photo: SITE_IMAGES.SPEAKER_ISHTIAQ_JEELANI.src,
    shortBio: "",
    role: "invited",
  },
  {
    name: "Dr. Manas K. Santra",
    designation: "Scientist",
    institution: "BRIC-National Centre for Cell Science Pune, Maharashtra, India",
    country: "",
    photo: SITE_IMAGES.SPEAKER_MANAS.src,
    shortBio: "",
    role: "invited",
  },
  {
    name: "Dr. Syed G. Dastager",
    designation: "Microbiologist and Scientist",
    institution: "CSIR–National Chemical Laboratory (NCL), Pune, Maharashtra, India",
    country: "",
    photo: SITE_IMAGES.SPEAKER_DASTAGER.src,
    shortBio: "",
    role: "invited",
  },
  {
    name: "Dr. Saidur Rahman",
    designation: "Head, Research Professor",
    institution: "Research Centre for Nano-Materials and Energy Technology Faculty of Engineering and Technology University of Malaya Kuala Lumpur, Malaysia",
    country: "",
    photo: SITE_IMAGES.SPEAKER_SAIDUR.src,
    shortBio: "",
    role: "invited",
  },
  {
    name: "Prof. Suhel Parvez",
    designation: "Professor & Dean School of Interdisciplinary Sciences and Technology",
    institution: "Jamia Hamdard, New Delhi, India",
    country: "",
    photo: SITE_IMAGES.SPEAKER_SUHEL.src,
    shortBio: "",
    role: "invited",
  },
];

export const featuredSpeakerSlots = 4;

/** Host-society patrons shown on the home page. Roles follow earlier HSDS brochures. */
export const patrons = [
  {
    name: "Dr. P. A. Inamdar",
    role: "Past President (1982-2025)",
    institution: "M.C.E. Society",
    photo: SITE_IMAGES.DR_PA_INAMDAR_PORTRAIT.src,
  },
  {
    name: "Mrs. Abeda Inamdar",
    role: "President",
    institution: "M.C.E. Society",
    photo: SITE_IMAGES.MRS_ABEDA_INAMDAR.src,
  },
];

export const committee: CommitteeMember[] = [
  {
    name: "Dr. P. A. Inamdar",
    role: " Past President (1982-2025)",
    institution: "M.C.E. Society",
    photo: SITE_IMAGES.DR_PA_INAMDAR_PORTRAIT.src,
    bio: "",
  },
  {
    name: "Mrs. Abeda Inamdar",
    role: "President",
    institution: "M.C.E. Society",
    photo: SITE_IMAGES.MRS_ABEDA_INAMDAR.src,
    bio: "",
  },
  {
    name: "Prof. Shaila Bootwala",
    role: "Principal",
    institution: "Abeda Inamdar Senior College, Pune",
    photo: SITE_IMAGES.PROF_SHAILA_BOOTWALA.src,
    bio: "",
  },
];

export const programDays: ProgramDay[] = [];

export const presentationTypes = ["Oral Presentation", "Poster Presentation"] as const;

export const researchTracks = [...historicalTopics];

export const abstractGuidelines = {
  language: "English",
  wordLimit: "[Word limit to be confirmed]",
  fileTypes: "PDF or DOCX, once the template is released",
  note: "HSDS-2010, 2014, and 2016 brochures asked for abstracts of not more than 300 words. The 2010 circular specified MS Word, Times New Roman, 12 pt, 1.5 line spacing. That format is archival and is not the current limit unless organizers confirm it.",
  templateHref: "",
};

export const registrationPlans: RegistrationPlan[] = [
  {
    category: "Academic",
    price: "1800",
    currency: "INR",
    includes: [
      "Access to scientific sessions, once published",
      "Conference materials, as confirmed",
      "Certificate of participation, subject to confirmation",
      "Refreshments during scheduled breaks, if included",
    ],
  },
  {
    category: "Industry & Practitioners",
    price: "2000",
    currency: "INR",
    includes: [
      "Access to scientific sessions, once published",
      "Conference materials, as confirmed",
      "Certificate of participation, subject to confirmation",
      "Refreshments during scheduled breaks, if included",
    ],
  },
  {
    category: "Student",
    price: "1500",
    currency: "INR",
    includes: [
      "Access to scientific sessions, once published",
      "Conference materials, as confirmed",
      "Certificate of participation, subject to confirmation",
      "Refreshments during scheduled breaks, if included",
    ],
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
  name: "Dr. A. R. Shaikh Assembly Hall, Azam Campus",
  address: "Camp, Pune – 411001, Maharashtra, India",
  note: "Assembly Hall, Azam Campus, Pune, welcomes delegates from around the world to an international conference fostering knowledge exchange, academic dialogue, and global collaboration. With its spacious setting, central campus location, and accessibility, the venue provides an ideal environment for researchers, academicians, professionals, and distinguished guests to connect, share ideas, and build meaningful collaborations. We warmly invite you to join us at Assembly Hall for this international gathering of minds.",
};

export const historicalPosterNote =
  "The 2010, 2014, and 2016 brochures provided 1 × 1 m poster space at the venue. Selected papers were reviewed before presentation. Three best posters were awarded in 2010 and 2014; five in 2016. Current poster size is not confirmed.";

export const aboutPune =
  "Earlier HSDS brochures described Pune as the Queen of the Deccan, cultural capital of Maharashtra, and Oxford of the East: a historical city with a growing scientific and industrial base, pleasant winter weather, and a dense academic campus network. Travel notes for the next meeting will follow venue confirmation.";

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

const feeNote = "Printed on that edition’s brochure. Not valid for the current conference.";

export const pastConferences: PastConference[] = [
  {
    year: 2010,
    edition: "National Conference",
    title: "New Frontiers in Herbal and Synthetic Drug Studies",
    code: "HSDS-2010",
    dates: "14–16 January 2010",
    venue: "Assembly Hall, Azam Campus, Camp, Pune – 411001",
    type: "National Conference",
    quote:
      "We can't avoid death but we can reduce the pain and misery due to disease by designing and delivering novel drugs derived synthetically or from plant origin",
    about:
      "A National Conference on New Frontiers in Herbal and Synthetic Drug Studies (HSDS-2010) was jointly organized by the Department of Chemistry, Abeda Inamdar Senior College, M.C.E. Society's Allana College of Pharmacy and M.M.E.R.C.'s Z.V.M. Unani Medical College, Pune, from 14 to 16 January 2010 at Azam Campus, Pune. The conference was sponsored by the University of Pune and the University Grants Commission, New Delhi.",
    organizers: [
      "M.C.E. Society's Abeda Inamdar Senior College of Arts, Science & Commerce, Pune (Department of Chemistry)",
      "Allana College of Pharmacy, Pune",
      "M.M.E.R.C.'s Z. V. M. Unani Medical College and Hospital, Pune",
    ],
    inAssociationWith: [],
    sponsors: ["University of Pune", "University Grants Commission, New Delhi"],
    objectives: [
      "Present an overview of the current status in the field of herbal and synthetic drugs and enlighten the future potential with reference to development and diverse applications.",
      "Bring the scientist community together to discuss advances in the preparation of herbal and synthetic drugs, finding new experimental methodologies for their characterization using various analytical techniques and their applications.",
      "Provide researchers, scientists and academicians from all over the country an opportunity to discuss and share their views on the development of the subject.",
    ],
    themes: [
      "Novel herbal and synthetic drugs (synthesis, characterization and applications)",
      "Metal based drugs (Bioinorganic)",
      "New trends in pharmaceutical sciences",
      "Advanced techniques in drug preparations and characterization",
      "Integrated medicinal approach and health care",
      "Taxonomic evaluation of plant drugs and standardization",
    ],
    format: [
      "Paper and poster presentations",
      "Registration",
      "Inauguration function",
      "Plenary session (keynote address)",
      "Technical sessions",
      "Invited talks on sub-themes before each technical session",
      "Oral presentations",
      "Interactive session",
      "Cultural evening programme",
      "Valedictory function",
      "Sightseeing programme",
    ],
    resourcePersons: [
      { name: "Prof. (Dr.) R. Pushpangadan", affiliation: "Director General, Amity, Thiruvananthapuram" },
      { name: "Prof. C. Manoharachary", affiliation: "Professor Emeritus CSIR, Osmania University, Hyderabad" },
      { name: "Prof. Ghufran Ahmad", affiliation: "National Institute of Unani Medicine, Bangalore" },
      { name: "Prof. S. M. Hadi", affiliation: "AMU, Aligarh" },
      { name: "Dr. A. A. Natu", affiliation: "Indian Institute of Science Education & Research (IISER), Pune" },
      { name: "Dr. T. Narender", affiliation: "Central Drug Research Institute, Lucknow" },
      { name: "Dr. B. K. Kulkarni", affiliation: "Director R & D, Innovassynth Technologies, Khopoli, Pune" },
      { name: "Dr. Arun Nanda", affiliation: "Maharishi Dayanand University, Rohtak" },
      { name: "Dr. Jayant Ramgiri", affiliation: "Finey Care Ltd., Navi Mumbai" },
      { name: "Prof. A. R. Chakravarthy", affiliation: "IISc, Bangalore" },
      { name: "Dr. Afrasulabi Zahra", affiliation: "Lincoln University, USA" },
      { name: "Dr. Ruby John Anto", affiliation: "Rajiv Gandhi Centre for Biotechnology, Thiruvananthapuram" },
      { name: "Dr. Dulal Panda", affiliation: "IIT Bombay, Mumbai" },
      { name: "Dr. Sanjay M. Jachak", affiliation: "NIPER, Mohali" },
      { name: "Prof. M. Tajuddin", affiliation: "Dean, Faculty of Unani Medicine, AMU, Aligarh" },
      { name: "Dr. Vidya S. Gupta", affiliation: "Biochemistry Division, NCL, Pune" },
      { name: "Prof. S. Y. Rane", affiliation: "University of Pune, Pune" },
      { name: "Prof. S. B. Padhye", affiliation: "Research Co-ordinator, Abeda Inamdar Senior College, Pune" },
    ],
    receptionCommittee: [],
    advisoryCommittee: [
      { name: "Mr. P. A. Inamdar", role: "President", affiliation: "M.C.E. Society, Pune" },
      { name: "Mrs. Abeda Inamdar", role: "Vice President", affiliation: "M.C.E. Society, Pune" },
      { name: "Mr. Latif Magdum", role: "Hon. Secretary", affiliation: "M.C.E. Society" },
      { name: "Mr. Munawar Peerbhoy", role: "Chairman", affiliation: "HGM Azam Education Trust, Pune" },
      { name: "Mr. Zuber Ahmed", role: "Hon. Secretary", affiliation: "MMERC, Pune" },
      { name: "Dr. S. N. Pathan", role: "Vice Chancellor", affiliation: "Nagpur University" },
      { name: "Prof. S. B. Padhye", role: "Ex. Professor and Head, Dept. of Chemistry", affiliation: "Pune University" },
      { name: "Prof. Sandhya Y. Rane", role: "Ex. Professor, Dept. of Chemistry", affiliation: "Pune University" },
      { name: "Prof. C. Manoharachary", role: "Professor Emeritus (CSIR)", affiliation: "Osmania University, Hyderabad" },
      { name: "Dr. B. K. Kulkarni", role: "Director R & D", affiliation: "Innovassynth Technologies, Khopoli, Pune" },
      { name: "Dr. (Mrs.) Vidya Gupta", role: "Biochemistry Division", affiliation: "NCL, Pune" },
    ],
    organizingCommittee: [
      { name: "Dr. E. M. Khan", role: "Program Director", affiliation: "Principal, Abeda Inamdar Senior College" },
      { name: "Dr. Ansari Abdullah", role: "Asst. Program Director", affiliation: "Principal, ZVM Medical College" },
      { name: "Dr. Kiran Bhise", role: "Asst. Program Director", affiliation: "Principal, Allana Pharmacy College" },
      { name: "Dr. Khursheed Ahmed", role: "Convener", affiliation: "Abeda Inamdar Senior College" },
    ],
    members: [
      { name: "Dr. D. N. Mishra", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. R. D. Joseph", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Priya Joshi", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Vidya Iyer", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Bindu Arora", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Ishrat Jehan", affiliation: "Abeda Inamdar Senior College" },
      { name: "Mr. Doke Kailas", affiliation: "Abeda Inamdar Senior College" },
      { name: "Mr. Yusuf Mujahid", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Mushtaque Mukadam", affiliation: "ZVM Medical College" },
      { name: "Dr. Jalis Ahmed", affiliation: "ZVM Medical College" },
      { name: "Dr. Farah R. Shikalgar", affiliation: "ZVM Medical College" },
      { name: "Dr. Ghazala Mulla", affiliation: "ZVM Medical College" },
      { name: "Mrs. Rukhsana A. Rub", affiliation: "Allana College of Pharmacy" },
      { name: "Mrs. Nazma Inamdar", affiliation: "Allana College of Pharmacy" },
      { name: "Mr. Rahul T. Thube", affiliation: "Allana College of Pharmacy" },
    ],
    historicalFees: [
      { category: "Outstation delegates", amount: "Rs. 1000/-", note: "Inclusive of meals and accommodation" },
      { category: "Accompanying persons", amount: "Rs. 750/-", note: feeNote },
      { category: "Local delegates", amount: "Rs. 500/-", note: feeNote },
      { category: "Industry persons", amount: "Rs. 2000/-", note: feeNote },
      { category: "Students", amount: "Rs. 500/-", note: feeNote },
    ],
    historicalDates: [
      { label: "Registration and abstract deadline", date: "31 December 2009" },
      { label: "Full papers", date: "14 January 2010" },
    ],
    posterNote:
      "1 × 1 m space at the conference venue. Papers were reviewed; three best posters were selected for poster awards.",
    abstractNote:
      "Abstracts not exceeding one page (or 300 words), MS Word, Times New Roman, 12 pt, 1.5 line spacing. Hard copy and CD were requested with registration.",
    accommodationNote:
      "Arranged on the college campus or nearby residential facilities. Booking through guest houses, hotels, and hostels; first-come, first-served.",
    website: "www.abedainamdarseniorcollege.org.in",
    contact: {
      convener: "Dr. Khursheed Ahmed, Convener, HSDS-2010",
      emails: ["chemistry@aisc.org.in", "khursheed92@rediffmail.com"],
      phones: ["020-26446970", "26457577", "9922073720"],
      address: "Abeda Inamdar Senior College of Arts, Science & Commerce, Azam Campus, Camp, Pune – 411001",
    },
  },
  {
    year: 2014,
    edition: "2nd International Conference",
    title: "Herbal and Synthetic Drug Studies",
    code: "HSDS-2014",
    dates: "10–12 February 2014",
    venue: "Dr. A. R. Shaikh Assembly Hall, Azam Campus, Camp, Pune – 411001",
    type: "International Conference",
    quote:
      "The art of healing comes from nature and not from the physician. Therefore, the physician must start from nature with an open mind. (Paracelsus)",
    about:
      "Following the national meeting in 2010, the 2nd International Conference on Herbal and Synthetic Drug Studies (HSDS-2014) was held at Dr. A. R. Shaikh Assembly Hall, Azam Campus, Camp, Pune, from 10 to 12 February 2014. It was organized by M.C.E. Society's Interdisciplinary Science and Technology Research Academy (ISTRA) with Abeda Inamdar Senior College (Department of Chemistry & Post Graduate Research Centre), Allana College of Pharmacy, and Z. V. M. Unani Medical College and Hospital, in association with The University of Kansas Cancer Center, Kansas City, USA, and sponsored by the University Grants Commission, New Delhi.",
    organizers: [
      "M.C.E. Society's Interdisciplinary Science and Technology Research Academy (ISTRA, Pune)",
      "M.C.E. Society's Abeda Inamdar Senior College of Arts, Science & Commerce, Pune (Department of Chemistry & Post Graduate Research Centre)",
      "M.C.E. Society's Allana College of Pharmacy, Pune",
      "M.M.E.R.C.'s Z. V. M. Unani Medical College and Hospital, Pune",
    ],
    inAssociationWith: ["The University of Kansas Cancer Center, Kansas City, USA"],
    sponsors: ["University Grants Commission, New Delhi"],
    objectives: [
      "Present an overview of the current status in the field of herbal and synthetic drugs and highlight future potential with reference to development and diverse applications.",
      "Bring the scientific community together to discuss advances in the preparation of herbal and synthetic drugs, finding new experimental methodologies for their characterization using various analytical/biochemical techniques and their applications.",
      "Provide researchers, scientists and academicians from all over India and abroad an opportunity to discuss and share their views on the development and future scope of the subject.",
    ],
    themes: [
      "Novel herbal and synthetic drugs (synthesis, characterization and applications)",
      "Metal based drugs (Bioinorganic Drugs)",
      "New trends in pharmaceutical sciences",
      "New methods of drug formulations and applications",
      "Insights into complementary Unani Medicines",
      "Molecular targets and translational therapy",
    ],
    format: [
      "Registration",
      "Inauguration function",
      "Keynote address",
      "Technical sessions",
      "Invited talks on sub-themes",
      "Paper and poster presentations",
      "Oral presentations",
      "Interactive session",
      "Cultural programme",
      "Valedictory function",
      "Sightseeing programme",
    ],
    resourcePersons: [
      { name: "Dr. Shrikant Anant", role: "Dean of Research", affiliation: "University of Kansas Medical Center, USA" },
      { name: "Dr. Roy Jensen", role: "Director", affiliation: "The University of Kansas Cancer Center, USA" },
      { name: "Dr. Danny Welch", role: "Director, Basic Science", affiliation: "University of Kansas Cancer Center, USA" },
      { name: "Dr. Dan Dixon", affiliation: "Cancer Biology, University of Kansas Cancer Center, USA" },
      { name: "Dr. Animesh Dhar", affiliation: "Cancer Biology, University of Kansas Cancer Center, USA" },
      { name: "Dr. Med. U. Pachmann", affiliation: "Transfusion Medicine Center, Bayreuth, Germany" },
      { name: "Prof. Kensee S. Mossanda", affiliation: "Walter Sisulu University, South Africa" },
      { name: "Dr. Annie Bligh", affiliation: "University of Westminster, London, UK" },
      { name: "Dr. Hari Koul", affiliation: "Biochemistry and Molecular Biology, Louisiana Health Sciences Center, USA" },
      { name: "Dr. Julie Whitehouse", affiliation: "Complementary Medicine, University of Westminster, London, UK" },
      { name: "Dr. Shahid Umar", affiliation: "Molecular and Integrative Physiology, University of Kansas Cancer Center, USA" },
      { name: "Dr. Kamal Ahmed", affiliation: "Institute of Chemical Technology, Hyderabad" },
      { name: "Prof. D. Karunagaran", affiliation: "Indian Institute of Technology Madras, Chennai" },
      { name: "Dr. Anamik Shah", affiliation: "National Institute of Drug Design, Rajkot" },
      { name: "Dr. Venkat Palle", affiliation: "Lupin Research Park, Pune" },
      { name: "Dr. Evans Coutinho", affiliation: "Bombay College of Pharmacy, Mumbai" },
      { name: "Dr. Manjinder Singh Gill", affiliation: "NIPER, Mohali, Punjab" },
      { name: "Dr. Pallu Reddanna", affiliation: "University of Hyderabad" },
      { name: "Dr. Soumitra Kumar Choudhuri", affiliation: "Chittaranjan National Cancer Institute, Kolkata" },
      { name: "Dr. Ghufran Ahmed", affiliation: "Aligarh Muslim University, Aligarh" },
      { name: "Dr. Dhalendra Saraf", affiliation: "Pandit Ravishankar University, Raipur" },
    ],
    receptionCommittee: [
      { name: "Mr. P. A. Inamdar", role: "President", affiliation: "M.C.E. Society, Pune" },
      { name: "Mrs. Abeda Inamdar", role: "Chairperson, ISTRA & Vice President", affiliation: "M.C.E. Society, Pune" },
      { name: "Mr. M. A. Peerbhoy", role: "Chairman", affiliation: "HSMAE Trust, Pune" },
      { name: "Dr. N. Y. Kazi", role: "Chairman", affiliation: "MMERC, Pune" },
      { name: "Dr. Shrikant Anant", affiliation: "The University of Kansas Cancer Center, USA" },
      { name: "Prof. S. B. Padhye", role: "Director", affiliation: "ISTRA, Pune" },
      { name: "Dr. V. B. Gaikwad", role: "Director, BCUD", affiliation: "University of Pune" },
      { name: "Prof. Sandhya Y. Rane", role: "Ex. Professor, Dept. of Chemistry", affiliation: "Pune University" },
    ],
    advisoryCommittee: [],
    organizingCommittee: [
      { name: "Dr. E. M. Khan", role: "Program Director", affiliation: "Principal, Abeda Inamdar Senior College" },
      { name: "Dr. Jalis Ahmad", role: "Asstt. Program Director", affiliation: "Principal, ZVM Medical College" },
      { name: "Dr. Kiran Bhise", role: "Asstt. Program Director", affiliation: "Principal, Allana Pharmacy College" },
      { name: "Dr. Khursheed Ahmed", role: "Convener", affiliation: "Abeda Inamdar Senior College" },
    ],
    members: [
      { name: "Dr. Alim Sayed", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Shaukatali Inamdar", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Razia Kutty", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Abrar Kumthe", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Abeda Jamadar", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Zahid Imtiyaz", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Pratap Mukhopadhaya", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. D. Majumdar", affiliation: "Abeda Inamdar Senior College" },
      { name: "Mr. Doke Kailas", affiliation: "Abeda Inamdar Senior College" },
      { name: "Mr. Yusufi Mujahid", affiliation: "Abeda Inamdar Senior College" },
      { name: "Mr. Shaukat Khan", affiliation: "Abeda Inamdar Senior College" },
      { name: "Mrs. Deepa Shetty", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Mushtaque Mukadam", affiliation: "ZVM Medical College" },
      { name: "Dr. Ghazala Mulla", affiliation: "ZVM Medical College" },
      { name: "Dr. Khursheed Alam", affiliation: "ZVM Medical College" },
      { name: "Dr. Khan Mohd. Qaisar", affiliation: "ZVM Medical College" },
      { name: "Mrs. Rukhsana A. Rub", affiliation: "Allana College of Pharmacy" },
      { name: "Mrs. Nazma Inamdar", affiliation: "Allana College of Pharmacy" },
      { name: "Mr. Rahul T. Thube", affiliation: "Allana College of Pharmacy" },
      { name: "Mr. Rajat R. Sayyed", affiliation: "Allana College of Pharmacy" },
    ],
    historicalFees: [
      { category: "Delegates", amount: "Rs. 2000/-", note: "Conference kit and meals" },
      { category: "Industry persons", amount: "Rs. 3000/-", note: feeNote },
      { category: "Late fee", amount: "Rs. 500/- extra", note: feeNote },
    ],
    historicalDates: [
      { label: "Early registration and abstract submission", date: "15 December 2013 to 15 January 2014" },
      { label: "Late registration", date: "16 January 2014 to 20 January 2014" },
      { label: "Notification of acceptance", date: "25 January 2014" },
    ],
    posterNote:
      "1 × 1 m space at the conference venue. Abstracts of not more than 300 words by 15 January 2014. Three best posters selected for poster awards.",
    abstractNote: "Abstracts of not more than 300 words, submitted to the organizers by 15 January 2014.",
    accommodationNote:
      "Delegates on a paid basis on the college campus or nearby hotels, first-come, first-served.",
    website: "www.hsds2014.com",
    contact: {
      convener: "Dr. Khursheed Ahmed, Convener, HSDS-2014, ISTRA, Pune",
      emails: [
        "khursheedahmed@azamcampus.org",
        "inamdarshaukatali@azamcampus.org",
        "hsds2014@azamcampus.org",
        "aiscchemistry@azamcampus.org",
      ],
      phones: ["+91 99220 73720", "+91 80074 46050", "020-26446970", "26457577"],
      address: "Interdisciplinary Science and Technology Research Academy (ISTRA), Azam Campus, Camp, Pune – 411001",
    },
  },
  {
    year: 2016,
    edition: "3rd International Conference",
    title: "Herbal and Synthetic Drug Studies",
    code: "HSDS-2016",
    dates: "07–09 January 2016",
    venue: "Dr. A. R. Shaikh Assembly Hall, Azam Campus, Camp, Pune – 411001",
    type: "International Conference",
    about:
      "After HSDS-2010 and HSDS-2014, the 3rd International Conference on Herbal and Synthetic Drug Studies (HSDS-2016) was held at Dr. A. R. Shaikh Assembly Hall, Azam Campus, Camp, Pune, from 7 to 9 January 2016. It was organized by Maharashtra Cosmopolitan Education Society's ISTRA with Abeda Inamdar Senior College (Department of Chemistry & Post Graduate Research Centre) and Allana College of Pharmacy, in association with The University of Kansas Cancer Center, Kansas City, USA, and sponsored by the University Grants Commission, New Delhi.",
    organizers: [
      "Maharashtra Cosmopolitan Education Society's Interdisciplinary Science and Technology Research Academy (ISTRA, Pune)",
      "Maharashtra Cosmopolitan Education Society's Abeda Inamdar Senior College of Arts, Science & Commerce, Pune (Department of Chemistry & Post Graduate Research Centre)",
      "Allana College of Pharmacy, Pune",
    ],
    inAssociationWith: ["The University of Kansas Cancer Center, Kansas City, USA"],
    sponsors: ["University Grants Commission, New Delhi"],
    objectives: [
      "Present an overview of the current status in the field of herbal and synthetic drugs and highlight the future potential with reference to the development and diverse applications.",
      "Bring the scientific community together to discuss advances in the preparation of herbal and synthetic drugs, finding new experimental methodologies for their characterization using various analytical/biochemical techniques and their applications.",
      "Provide an opportunity to researchers, scientists and academicians from all over India and abroad to discuss and share their views on the development and future scope of the subject.",
    ],
    themes: [
      "Novel herbal and synthetic drugs (synthesis, characterization and applications)",
      "Metal based drugs (Bioinorganic Drugs)",
      "New trends in pharmaceutical sciences",
      "New methods of drug formulations and applications",
      "Insights into complementary Unani Medicines",
      "Molecular targets and translational therapy",
    ],
    format: [
      "Registration",
      "Inauguration",
      "Keynote and invited lectures",
      "Technical sessions",
      "Oral presentations",
      "Poster presentations",
      "Valedictory function",
    ],
    resourcePersons: [
      { name: "Dr. Shrikant Anant", role: "Dean of Research", affiliation: "University of Kansas Medical Center, USA" },
      { name: "Dr. Victoria L. Seewaldt", affiliation: "Duke University School of Medicine, Durham, North Carolina, USA" },
      { name: "Dr. Roy Jensen", role: "Director", affiliation: "The University of Kansas Cancer Center, USA" },
      { name: "Dr. George Weiner", role: "Director, Holden Comprehensive Cancer Center", affiliation: "University of Iowa, USA" },
      { name: "Dr. Arun K. Iyer", affiliation: "Institute of Pharmaceutical Sciences, Wayne State University, Detroit, USA" },
      { name: "Prof. Timothy Stemmler", affiliation: "Institute of Pharmaceutical Sciences, Wayne State University, Detroit, USA" },
      { name: "Dr. James F. Collins", affiliation: "University of Florida, Gainesville, USA" },
      { name: "Dr. Prasad Dandawte", affiliation: "Kansas University Medical Center, Kansas City, USA" },
      { name: "Prof. Iztok Turel", affiliation: "University of Ljubljana, Slovenia" },
      { name: "Prof. John Greenman", affiliation: "University of Hull, UK" },
      { name: "Prof. Theeshan Bahorun", role: "Chair, Mauritius Research Council", affiliation: "University of Mauritius, Mauritius" },
      { name: "Dr. Vidushi Neergheen-Bhujun", affiliation: "University of Mauritius, Mauritius" },
      { name: "Prof. Tahvilian", affiliation: "Kermanshah University of Medical Sciences, Iran" },
      { name: "Dr. Animesh Dhar", affiliation: "Cancer Biology, University of Kansas Cancer Center, USA" },
      { name: "Dr. Rajendra A. Badwe", role: "Director", affiliation: "Tata Cancer Hospital, Mumbai" },
      { name: "Dr. Shubhada Chiplunkar", role: "Acting Director", affiliation: "ACTREC, Kharghar, Mumbai" },
      { name: "Dr. Vibha Tandon", affiliation: "Jawaharlal Nehru University, New Delhi" },
      { name: "Dr. K. Murugan", affiliation: "Bharathiar University, Coimbatore" },
      { name: "Dr. R. Ilangovan", affiliation: "University of Madras, Taramani Campus, Chennai" },
      { name: "Dr. Radhakrishna Pillai", role: "Director", affiliation: "Rajiv Gandhi Centre for Biotechnology, Thiruvananthapuram" },
    ],
    receptionCommittee: [
      { name: "Mr. P. A. Inamdar", role: "President", affiliation: "M.C.E. Society, Pune" },
      { name: "Mrs. Abeda Inamdar", role: "Chairperson, ISTRA & Vice President", affiliation: "M.C.E. Society, Pune" },
      { name: "Mr. M. A. Peerbhoy", role: "Chairman", affiliation: "H.G.M.A.E. Trust, Pune" },
      { name: "Mr. Latif Magdum", role: "Secretary", affiliation: "M.C.E. Society, Pune" },
      { name: "Prof. Irfan Shaikh", role: "Jt. Secretary", affiliation: "M.C.E. Society, Pune" },
      { name: "Dr. Shrikant Anant", role: "Associate Director", affiliation: "The Kansas Cancer Center, USA" },
      { name: "Prof. S. B. Padhye", role: "Director", affiliation: "ISTRA, Pune" },
    ],
    advisoryCommittee: [],
    organizingCommittee: [
      { name: "Dr. E. M. Khan", role: "Program Director", affiliation: "Principal, Abeda Inamdar Senior College" },
      { name: "Dr. Kiran Bhise", role: "Asst. Program Director", affiliation: "Principal, Allana College of Pharmacy" },
      { name: "Dr. Khursheed Ahmed", role: "Convener, HSDS-2016", affiliation: "Abeda Inamdar Senior College" },
    ],
    members: [
      { name: "Dr. Shaila Bootwala", role: "Vice Principal", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Alim Sayed", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Doke Kailas", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Yusufi Mujahid", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Shaukatali Inamdar", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Abeda Jamadar", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Snehal Kulkarni", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Zahid Imtiyaz", affiliation: "Abeda Inamdar Senior College" },
      { name: "Dr. Rukhsana A. Rub", affiliation: "Allana College of Pharmacy" },
      { name: "Dr. Nazma Inamdar", affiliation: "Allana College of Pharmacy" },
      { name: "Dr. Ziya-ur-Raheman", affiliation: "Allana College of Pharmacy" },
      { name: "Ms. Areej Siddiqui", affiliation: "Allana College of Pharmacy" },
      { name: "Mr. Shakeel Memon", affiliation: "Allana College of Pharmacy" },
      { name: "Mr. Rajat R. Sayyed", affiliation: "Allana College of Pharmacy" },
    ],
    historicalFees: [
      { category: "Delegates (teachers and researchers)", amount: "Rs. 3000/-", note: "Conference kit and meals; accommodation extra" },
      { category: "Students", amount: "Rs. 1500/-", note: feeNote },
      { category: "Late fee", amount: "Rs. 500/- extra", note: feeNote },
    ],
    historicalDates: [
      { label: "Early registration and abstract submission", date: "Up to 15 December 2015" },
      { label: "Late registration", date: "15 to 20 December 2015" },
      { label: "Notification and abstract acceptance", date: "20 December 2015" },
    ],
    posterNote:
      "1 × 1 m space at the conference venue. Abstracts of not more than 300 words by 20 December 2015. Five best posters selected for poster awards.",
    abstractNote: "Abstracts of not more than 300 words, submitted by 20 December 2015.",
    accommodationNote:
      "Delegates on a paid basis on the college campus or nearby hotels, first-come, first-served.",
    website: "www.hsds2016.com",
    contact: {
      convener: "Dr. Khursheed Ahmed, Convener, HSDS-2016",
      emails: ["khursheedahmed@azamcampus.org", "chemistryaisc@hsds2016.com", "hsds2016@azamcampus.org"],
      phones: ["+91 99220 73720", "020-26446970", "09922073720"],
      address:
        "Interdisciplinary Science and Technology Research Academy (ISTRA), 2390-B, K.B. Hidayatulla Road, New Modikhana, Azam Campus, Camp, Pune – 411001",
    },
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
