# Old portfolio content migration

Source: https://3092hproust.wixsite.com/portfolio-adrian-p (retrieved 19 October 2026).

All 14 project detail pages were read and translated into English. Original project names and team-member names are preserved. Dates, media/engine, context, descriptions, team credits, gallery captions, playable links, and design-document links are represented in `src/data/portfolio.ts`. Existing unsupported descriptions and contribution claims were replaced with source-backed content. Text embedded in original screenshots and original downloadable documents retains its source language.

## Verified mapping

Match projects by their on-page title and description, not by their URL or image filenames. Several pages contain a shared navigation gallery with other projects' images; these are excluded from the project's own gallery.

| New project ID | Original page title | Original path below `/portfolio-adrian-p/` |
| --- | --- | --- |
| power-quiz | Le Power Quiz | copie-de-le-cirque-de-l-ia-1 |
| lego-pharaons | Le Lego des pharaons | copie-de-le-cirque-de-l-ia |
| cirque-ia | Le cirque de l'IA | copie-de-lego-des-pharaons |
| bastos | Bastos | copie-de-syzygy-1 |
| syzygy | SYZYGY | copie-de-excroalibur |
| sang-pourcent | Sang% | copie-de-bastos |
| gogolem | GoGolem | copie-de-court-métrage-1 |
| hansel-gretel | Hansel & Gretel GO | copie-de-gogolem |
| neutriscore | Neutriscore | copie-de-court-métrage-1-1 |
| excroalibur | Excroalibur | copie-de-syzygy |
| simulation-cplusplus | Simulation du comportement d'une fourmi | copie-de-2048 |
| 2048 | 2048 | copie-de-projet-03 |
| short-films-vfx | court-métrage Lego | projet-02 |
| geogebra-short-film | court-métrage GeoGebra | projet-03 |

## Content and media handling

- Neutriscore was missing from the new portfolio and now has a card.
- The ant simulation and 2048 are separate projects, as are the LEGO and GeoGebra films. The existing `simulation-cplusplus` and `short-films-vfx` IDs remain valid for existing links.
- All 52 project-specific gallery items and film/demo videos were recovered from the original pages. Decorative background footage and navigation galleries are excluded. Videos use native controls and do not autoplay. Images link to their full-size originals.
- Gallery images and videos are served from their original Wix CDN URLs; deleting the old Wix media may affect availability. Card thumbnails are local.
- The POWER Quiz YouTube trailer is preserved as a resource link.
- Professional-project images retain the original © Les Coqs en Pâte attribution.
- Original team-profile links on Neutriscore are preserved.
- Project categories retain the new site's existing structure. Neutriscore is filed under Personal as a game-jam project. Historical academic/arts exercises remain under Personal, matching the existing new-site grouping.

## Incorrect source link excluded

The Hansel & Gretel GO page's GDD button points to the exact same `GDD_GoGolem.pptx` resource as GoGolem. The downloaded presentation was inspected and identifies the tactical GoGolem project. That link appears only on GoGolem in the new site. No replacement Hansel & Gretel document URL was invented.

Design documents remain in their original language. Translating their internal contents is outside the website-copy migration.
