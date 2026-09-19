export type NavItem = {
  label: string;
  href: string;
};

export type NavNode = {
  label: string;
  href?: string;
  children?: NavNode[];
};

export type ImageAsset = {
  src: string;
  alt: string;
  caption?: string;
};

export type Theme = {
  title: string;
  description: string;
  sessions?: string[];
};

export type ImportantDate = {
  label: string;
  date: string;
};

export type CurrentConference = {
  shortName: string;
  title: string;
  edition: string;
  dates: string;
  startDateISO: string;
  venue: string;
  city: string;
  country: string;
  description: string;
  announcement: string;
  themes: Theme[];
  importantDates: ImportantDate[];
};

export type Speaker = {
  name: string;
  designation: string;
  institution: string;
  country: string;
  photo: string;
  shortBio: string;
  profileUrl?: string;
  role: "plenary" | "keynote" | "invited";
};

export type CommitteeMember = {
  name: string;
  role: string;
  institution: string;
  photo: string;
  bio: string;
};

export type ProgramSession = {
  time: string;
  title: string;
  speaker?: string;
  room?: string;
  type: "oral" | "poster" | "break" | "networking" | "plenary" | "keynote";
};

export type ProgramDay = {
  id: string;
  label: string;
  date: string;
  sessions: ProgramSession[];
};

export type RegistrationPlan = {
  category: string;
  price: string;
  currency: string;
  includes: string[];
};

export type PastConference = {
  year: number;
  edition: string;
  title: string;
  code: string;
  dates: string;
  venue: string;
  type: string;
  themes: string[];
  gallery: ImageAsset[];
};

export type Highlight = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContactDetails = {
  secretariat: string;
  email: string;
  phone: string;
  address: string;
  social: { label: string; href: string }[];
};

export type Organizer = {
  name: string;
  role: string;
  logo: string;
};

export type SiteMeta = {
  siteName: string;
  titleTemplate: string;
  description: string;
  canonicalBase: string;
};
