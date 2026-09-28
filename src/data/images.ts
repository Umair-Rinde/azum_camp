import type { ImageAsset } from "./types";

/**
 * Stable image IDs (img-01 … img-34). Swap a file or change `src` here —
 * components should only import from this module.
 */
export const SITE_IMAGES = {
  HERO_MAIN: {
    id: "img-01",
    src: "/conference-assets/hero/img-01-main1.png",
    alt: "Conference main visual",
  },
  HERO_MAIN_2: {
    id: "img-02",
    src: "/conference-assets/hero/img-02-main2.png",
    alt: "Conference secondary visual",
  },
  COVER_1: {
    id: "img-03",
    src: "/conference-assets/hero/img-03-cover1.jpg",
    alt: "Conference cover image 1",
  },
  COVER_2: {
    id: "img-04",
    src: "/conference-assets/hero/img-04-cover2.jpg",
    alt: "Conference cover image 2",
  },
  COVER_3: {
    id: "img-05",
    src: "/conference-assets/hero/img-05-cover3.jpg",
    alt: "Conference cover image 3",
  },
  GEMINI_GENERATED: {
    id: "img-06",
    src: "/conference-assets/hero/img-06-gemini-generated.png",
    alt: "Conference decorative graphic",
  },
  BUILDING_1: {
    id: "img-07",
    src: "/conference-assets/venue/campus/img-07-building1.jpg",
    alt: "Azam Campus building",
  },
  BUILDING_3: {
    id: "img-08",
    src: "/conference-assets/venue/campus/img-08-building3.jpg",
    alt: "Azam Campus building",
  },
  BUILDING_4: {
    id: "img-09",
    src: "/conference-assets/venue/campus/img-09-building4.jpg",
    alt: "Azam Campus building",
  },
  BUILDING_5: {
    id: "img-10",
    src: "/conference-assets/venue/campus/img-10-building5.jpg",
    alt: "Azam Campus building",
  },
  BUILDING_6: {
    id: "img-11",
    src: "/conference-assets/venue/campus/img-11-building6.jpg",
    alt: "Azam Campus building",
  },
  BUILDING_12: {
    id: "img-12",
    src: "/conference-assets/venue/campus/img-12-building12.jpg",
    alt: "Azam Campus building",
  },
  PATHWAY: {
    id: "img-13",
    src: "/conference-assets/venue/campus/img-13-pathway.jpg",
    alt: "Campus pathway",
  },
  LAB_1: {
    id: "img-14",
    src: "/conference-assets/venue/labs/img-14-lab1.jpg",
    alt: "Laboratory facility 1",
  },
  LAB_2: {
    id: "img-15",
    src: "/conference-assets/venue/labs/img-15-lab2.jpg",
    alt: "Laboratory facility 2",
  },
  LAB_3: {
    id: "img-16",
    src: "/conference-assets/venue/labs/img-16-lab3.jpg",
    alt: "Laboratory facility 3",
  },
  LAB_4: {
    id: "img-17",
    src: "/conference-assets/venue/labs/img-17-lab4.jpg",
    alt: "Laboratory facility 4",
  },
  LAB_5: {
    id: "img-18",
    src: "/conference-assets/venue/labs/img-18-lab5.jpg",
    alt: "Laboratory facility 5",
  },
  LAB_6: {
    id: "img-19",
    src: "/conference-assets/venue/labs/img-19-lab6.jpg",
    alt: "Laboratory facility 6",
  },
  LAB_7: {
    id: "img-20",
    src: "/conference-assets/venue/labs/img-20-lab7.jpg",
    alt: "Laboratory facility 7",
  },
  LAB_8: {
    id: "img-21",
    src: "/conference-assets/venue/labs/img-21-lab8.jpg",
    alt: "Laboratory facility 8",
  },
  AGA_KHAN_PALACE: {
    id: "img-22",
    src: "/conference-assets/venue/landmarks/img-22-aga-khan-palace.webp",
    alt: "Aga Khan Palace, Pune",
  },
  AGA_KHAN_PALACE_2: {
    id: "img-23",
    src: "/conference-assets/venue/landmarks/img-23-aga-khan-palace-2.jpeg",
    alt: "Aga Khan Palace, Pune",
  },
  SHANIWAR_WADA: {
    id: "img-24",
    src: "/conference-assets/venue/landmarks/img-24-shaniwar-wada.png",
    alt: "Shaniwar Wada, Pune",
  },
  SHIVNERI_FORT: {
    id: "img-25",
    src: "/conference-assets/venue/landmarks/img-25-shivneri-fort.jpeg",
    alt: "Shivneri Fort",
  },
  LOGO_AISC: {
    id: "img-26",
    src: "/conference-assets/logos/img-26-logo-aisc.jpg",
    alt: "Abeda Inamdar Senior College logo",
  },
  LOGO_PUNE_UNIVERSITY: {
    id: "img-27",
    src: "/conference-assets/logos/img-27-pune-university.jpg",
    alt: "Pune University mark",
  },
  DR_PA_INAMDAR: {
    id: "img-28",
    src: "/conference-assets/people/img-28-dr-pa-inamdar.jpg",
    alt: "Dr. P. A. Inamdar",
  },
  MEMBERS: {
    id: "img-29",
    src: "/conference-assets/people/img-29-members.jpg",
    alt: "Conference committee members",
  },
  MEMBERS_2: {
    id: "img-30",
    src: "/conference-assets/people/img-30-members2.jpg",
    alt: "Conference committee members",
  },
  HANDSHAKE: {
    id: "img-31",
    src: "/conference-assets/events/img-31-handshake.jpg",
    alt: "Partnership handshake",
  },
  MOU_SIGNING: {
    id: "img-32",
    src: "/conference-assets/events/img-32-mou-signing.jpg",
    alt: "MoU signing ceremony",
  },
  CERTIFICATE_1: {
    id: "img-33",
    src: "/conference-assets/events/img-33-certificate1.jpg",
    alt: "Conference certificate",
  },
  CERTIFICATE_2: {
    id: "img-34",
    src: "/conference-assets/events/img-34-certificate2.jpg",
    alt: "Conference certificate",
  },
} as const;

function toAsset(
  image: { src: string; alt: string },
  caption?: string,
): ImageAsset {
  return caption ? { src: image.src, alt: image.alt, caption } : { src: image.src, alt: image.alt };
}

export const COVER_GALLERY: ImageAsset[] = [
  toAsset(SITE_IMAGES.COVER_1, "Cover 1"),
  toAsset(SITE_IMAGES.COVER_2, "Cover 2"),
  toAsset(SITE_IMAGES.COVER_3, "Cover 3"),
];

export const CAMPUS_GALLERY: ImageAsset[] = [
  toAsset(SITE_IMAGES.BUILDING_1, "Campus building"),
  toAsset(SITE_IMAGES.BUILDING_3, "Campus building"),
  toAsset(SITE_IMAGES.BUILDING_4, "Campus building"),
  toAsset(SITE_IMAGES.BUILDING_5, "Campus building"),
  toAsset(SITE_IMAGES.BUILDING_6, "Campus building"),
  toAsset(SITE_IMAGES.BUILDING_12, "Campus building"),
  toAsset(SITE_IMAGES.PATHWAY, "Campus pathway"),
];

export const LAB_GALLERY: ImageAsset[] = [
  toAsset(SITE_IMAGES.LAB_1, "Laboratory 1"),
  toAsset(SITE_IMAGES.LAB_2, "Laboratory 2"),
  toAsset(SITE_IMAGES.LAB_3, "Laboratory 3"),
  toAsset(SITE_IMAGES.LAB_4, "Laboratory 4"),
  toAsset(SITE_IMAGES.LAB_5, "Laboratory 5"),
  toAsset(SITE_IMAGES.LAB_6, "Laboratory 6"),
  toAsset(SITE_IMAGES.LAB_7, "Laboratory 7"),
  toAsset(SITE_IMAGES.LAB_8, "Laboratory 8"),
];

export const PUNE_LANDMARKS: ImageAsset[] = [
  toAsset(SITE_IMAGES.AGA_KHAN_PALACE, "Aga Khan Palace"),
  toAsset(SITE_IMAGES.AGA_KHAN_PALACE_2, "Aga Khan Palace"),
  toAsset(SITE_IMAGES.SHANIWAR_WADA, "Shaniwar Wada"),
  toAsset(SITE_IMAGES.SHIVNERI_FORT, "Shivneri Fort"),
];

export const PARTNERSHIP_IMAGES: ImageAsset[] = [
  toAsset(SITE_IMAGES.HANDSHAKE, "Partnership handshake"),
  toAsset(SITE_IMAGES.MOU_SIGNING, "MoU signing"),
];

export const CERTIFICATE_IMAGES: ImageAsset[] = [
  toAsset(SITE_IMAGES.CERTIFICATE_1, "Certificate"),
  toAsset(SITE_IMAGES.CERTIFICATE_2, "Certificate"),
];

export const COMMITTEE_GROUP_IMAGES: ImageAsset[] = [
  toAsset(SITE_IMAGES.MEMBERS, "Committee members"),
  toAsset(SITE_IMAGES.MEMBERS_2, "Committee members"),
];

/** Four-up strip under the hero (PhytoTMed-style conference image row). */
export const HERO_IMAGE_STRIP: ImageAsset[] = [
  toAsset(SITE_IMAGES.MEMBERS, "Conference delegates"),
  toAsset(SITE_IMAGES.MEMBERS_2, "Scientific committee"),
  toAsset(SITE_IMAGES.MOU_SIGNING, "MoU signing"),
  toAsset(SITE_IMAGES.HANDSHAKE, "Partnership handshake"),
];

/**
 * Past-edition highlight mosaic for the homepage.
 * Order matches bento slots: landscapes, tall landmark, paired tiles, tall campus, denser band.
 */
export const PAST_HIGHLIGHTS: ImageAsset[] = [
  toAsset(SITE_IMAGES.MEMBERS, "Committee and delegates"),
  toAsset(SITE_IMAGES.AGA_KHAN_PALACE, "Pune landmark"),
  toAsset(SITE_IMAGES.CERTIFICATE_1, "Certificates"),
  toAsset(SITE_IMAGES.HANDSHAKE, "Partnerships"),
  toAsset(SITE_IMAGES.MOU_SIGNING, "MoU signing"),
  toAsset(SITE_IMAGES.MEMBERS_2, "Scientific sessions"),
  toAsset(SITE_IMAGES.PATHWAY, "Campus pathway"),
  toAsset(SITE_IMAGES.LAB_1, "Laboratories"),
  toAsset(SITE_IMAGES.LAB_4, "Research facilities"),
  toAsset(SITE_IMAGES.BUILDING_5, "Azam Campus"),
  toAsset(SITE_IMAGES.CERTIFICATE_2, "Recognition"),
  toAsset(SITE_IMAGES.HERO_MAIN_2, "Pune landmark"),
];
