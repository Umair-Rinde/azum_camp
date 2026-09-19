# Herbal & Synthetic Drug Studies Conference

Premium academic conference website for the HSDS series. Current-edition facts stay placeholders until organizers confirm them. The 2010, 2014, and 2016 editions are documented from historical materials.

## Edit content

All public copy, dates, speakers, fees, program, gallery paths, and contact details live in:

`src/data/constants.ts`

Types are in `src/data/types.ts`. Do not invent current fees, speakers, or a venue.

## Historical pamphlets

Place the original brochure JPEGs in:

`public/conference-assets/pamphlets/`

Use the filenames already listed in `pamphletFiles`. Missing files fall back to the shared placeholder image.

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
```
