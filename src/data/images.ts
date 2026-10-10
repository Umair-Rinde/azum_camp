import type { ImageAsset } from "./types";

/**
 * Stable image IDs (img-01 … img-38). Swap a file or change `src` here —
 * components should only import from this module.
 */
export const SITE_IMAGES = {
  HERO_MAIN: {
    id: "img-01",
    src: "/conference-assets/hero/img-01-main1.webp",
    alt: "Conference main visual",
  },
  HERO_MAIN_2: {
    id: "img-02",
    src: "/conference-assets/hero/img-02-main2.webp",
    alt: "Conference secondary visual",
  },
  HERO_MAIN_3: {
    id: "img-38",
    src: "/conference-assets/hero/img-38-main3.webp",
    alt: "Azam Campus sports field and buildings",
  },
  COVER_1: {
    id: "img-03",
    src: "/conference-assets/hero/img-03-cover1.webp",
    alt: "Conference cover image 1",
  },
  COVER_2: {
    id: "img-04",
    src: "/conference-assets/hero/img-04-cover2.webp",
    alt: "Conference cover image 2",
  },
  COVER_3: {
    id: "img-05",
    src: "/conference-assets/hero/img-05-cover3.webp",
    alt: "Conference cover image 3",
  },
  GEMINI_GENERATED: {
    id: "img-06",
    src: "/conference-assets/hero/img-06-gemini-generated.webp",
    alt: "Conference decorative graphic",
  },
  CAMPUS_PANORAMA: {
    id: "img-39",
    src: "/conference-assets/venue/campus/img-39-campus-panorama.webp",
    alt: "Aerial view of Azam Campus, Pune",
  },
  BUILDING_1: {
    id: "img-07",
    src: "/conference-assets/venue/campus/img-07-building1.webp",
    alt: "Azam Campus building",
  },
  ASSEMBLY_HALL: {
    id: "img-37",
    src: "/conference-assets/venue/campus/img-37-assembly-hall.webp",
    alt: "Dr. A. R. Shaikh Assembly Hall, Azam Campus",
  },
  ASSEMBLY_HALL_2: {
    id: "img-35",
    src: "/conference-assets/venue/campus/img-35-assembly-hall.webp",
    alt: "Dr. A. R. Shaikh Assembly Hall, Azam Campus",
  },
  ASSEMBLY_HALL_3: {
    id: "img-36",
    src: "/conference-assets/venue/campus/img-36-assembly-hall.webp",
    alt: "Dr. A. R. Shaikh Assembly Hall, Azam Campus",
  },
  BUILDING_3: {
    id: "img-08",
    src: "/conference-assets/venue/campus/img-08-building3.webp",
    alt: "Azam Campus building",
  },
  BUILDING_4: {
    id: "img-09",
    src: "/conference-assets/venue/campus/img-09-building4.webp",
    alt: "Azam Campus building",
  },
  BUILDING_5: {
    id: "img-10",
    src: "/conference-assets/venue/campus/img-10-building5.webp",
    alt: "Azam Campus building",
  },
  BUILDING_6: {
    id: "img-11",
    src: "/conference-assets/venue/campus/img-11-building6.webp",
    alt: "Azam Campus building",
  },
  BUILDING_12: {
    id: "img-12",
    src: "/conference-assets/venue/campus/img-12-building12.webp",
    alt: "Azam Campus building",
  },
  PATHWAY: {
    id: "img-13",
    src: "/conference-assets/venue/campus/img-13-pathway.webp",
    alt: "Campus pathway",
  },
  LAB_1: {
    id: "img-14",
    src: "/conference-assets/venue/labs/img-14-lab1.webp",
    alt: "Laboratory facility 1",
  },
  LAB_2: {
    id: "img-15",
    src: "/conference-assets/venue/labs/img-15-lab2.webp",
    alt: "Laboratory facility 2",
  },
  LAB_3: {
    id: "img-16",
    src: "/conference-assets/venue/labs/img-16-lab3.webp",
    alt: "Laboratory facility 3",
  },
  LAB_4: {
    id: "img-17",
    src: "/conference-assets/venue/labs/img-17-lab4.webp",
    alt: "Laboratory facility 4",
  },
  LAB_5: {
    id: "img-18",
    src: "/conference-assets/venue/labs/img-18-lab5.webp",
    alt: "Laboratory facility 5",
  },
  LAB_6: {
    id: "img-19",
    src: "/conference-assets/venue/labs/img-19-lab6.webp",
    alt: "Laboratory facility 6",
  },
  LAB_7: {
    id: "img-20",
    src: "/conference-assets/venue/labs/img-20-lab7.webp",
    alt: "Laboratory facility 7",
  },
  LAB_8: {
    id: "img-21",
    src: "/conference-assets/venue/labs/img-21-lab8.webp",
    alt: "Laboratory facility 8",
  },
  AGA_KHAN_PALACE: {
    id: "img-22",
    src: "/conference-assets/venue/landmarks/img-22-aga-khan-palace.webp",
    alt: "Aga Khan Palace, Pune",
  },
  AGA_KHAN_PALACE_2: {
    id: "img-23",
    src: "/conference-assets/venue/landmarks/img-23-aga-khan-palace-2.webp",
    alt: "Aga Khan Palace, Pune",
  },
  SHANIWAR_WADA: {
    id: "img-24",
    src: "/conference-assets/venue/landmarks/img-24-shaniwar-wada.webp",
    alt: "Shaniwar Wada, Pune",
  },
  SHIVNERI_FORT: {
    id: "img-25",
    src: "/conference-assets/venue/landmarks/img-25-shivneri-fort.webp",
    alt: "Shivneri Fort",
  },
  LOGO_SITE: {
    id: "img-26",
    src: "/logo2.webp",
    alt: "HSDS conference logo",
  },
  LOGO_AISC: {
    id: "img-43",
    src: "/conference-assets/logos/logo-aisc.webp",
    alt: "Abeda Inamdar Senior College logo",
  },
  LOGO_UNANI: {
    id: "img-42",
    src: "/conference-assets/logos/logo-unani-college.webp",
    alt: "Z.V.M. Unani Medical College & Hospital logo",
  },
  LOGO_PUNE_UNIVERSITY: {
    id: "img-27",
    src: "/conference-assets/logos/img-27-pune-university.webp",
    alt: "Pune University mark",
  },
  DR_PA_INAMDAR: {
    id: "img-28",
    src: "/conference-assets/people/img-28-dr-pa-inamdar.webp",
    alt: "Dr. P. A. Inamdar",
  },
  MRS_ABEDA_INAMDAR: {
    id: "img-40",
    src: "/conference-assets/people/img-40-mrs-abeda-inamdar-face.webp",
    alt: "Mrs. Abeda Inamdar",
  },
  DR_PA_INAMDAR_PORTRAIT: {
    id: "img-41",
    src: "/conference-assets/people/img-41-dr-pa-inamdar-face.webp",
    alt: "Dr. P. A. Inamdar",
  },
  PROF_SHAILA_BOOTWALA: {
    id: "img-42",
    src: "/conference-assets/people/img-42-prof-shaila-bootwala-face.jpg",
    alt: "Prof. Shaila Bootwala",
  },
  SPEAKER_DASTAGER: {
    id: "spk-01",
    src: "/Speaker/dastager.svg",
    alt: "Dastager",
  },
  SPEAKER_ISHTIAQ_JEELANI: {
    id: "spk-02",
    src: "/Speaker/IJ2.svg",
    alt: "Ishtiaq Jeelani",
  },
  SPEAKER_LUBNA: {
    id: "spk-03",
    src: "/Speaker/Lubna.webp",
    alt: "Lubna Tahtamouni",
  },
  SPEAKER_MANAS: {
    id: "spk-04",
    src: "/Speaker/Manas.webp",
    alt: "Manas",
  },
  SPEAKER_NIYAZ: {
    id: "spk-05",
    src: "/Speaker/niyaz1.svg",
    alt: "Niyaz",
  },
  SPEAKER_PRASAD: {
    id: "spk-06",
    src: "/Speaker/Prasad.webp",
    alt: "Prasad Dandawate",
  },
  SPEAKER_SAGAR: {
    id: "spk-07",
    src: "/Speaker/Sagar.webp",
    alt: "Sagar",
  },
  SPEAKER_SAIDUR: {
    id: "spk-08",
    src: "/Speaker/saidur1.svg",
    alt: "Saidur",
  },
  SPEAKER_SUHEL: {
    id: "spk-09",
    src: "/Speaker/suhel1.svg",
    alt: "Suhel",
  },
  MEMBERS: {
    id: "img-29",
    src: "/conference-assets/people/img-29-members.webp",
    alt: "Conference committee members",
  },
  MEMBERS_2: {
    id: "img-30",
    src: "/conference-assets/people/img-30-members2.webp",
    alt: "Conference committee members",
  },
  HANDSHAKE: {
    id: "img-31",
    src: "/conference-assets/events/img-31-handshake.webp",
    alt: "Partnership handshake",
  },
  MOU_SIGNING: {
    id: "img-32",
    src: "/conference-assets/events/img-32-mou-signing.webp",
    alt: "MoU signing ceremony",
  },
  CERTIFICATE_1: {
    id: "img-33",
    src: "/conference-assets/events/img-33-certificate1.webp",
    alt: "Conference certificate",
  },
  CERTIFICATE_2: {
    id: "img-34",
    src: "/conference-assets/events/img-34-certificate2.webp",
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
  toAsset(SITE_IMAGES.HERO_MAIN_3, "Campus sports field"),
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
