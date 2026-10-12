# Portfolio v2

Goal: Match the Nina Park homepage layout and motion, using Mirzah's existing professional content and reference imagery as temporary placeholders.

Approved direction: supplied reference, no additional design approval needed because the user explicitly asked to proceed while away.

Implementation: keep the existing Next.js architecture; one homepage component and scoped stylesheet. Preserve old components and work in progress. Local fonts and reference assets avoid external image dependencies. No backend changes.

- [x] Record rendered reference geometry and scroll/hover states in Edge.
- [x] Build hero, selected work, expanding services, marquee, approach, rotating explorations, contact and footer.
- [x] Compare every section in Edge at the same viewport, including hover and entrance states.
- [x] Check mobile and tablet layout, keyboard navigation, reduced motion, and working links.
- [x] Run TypeScript, lint on edited files, existing tests and production build.
- [x] Save side-by-side evidence and document remaining differences honestly.

Known intentional differences: personal copy, contact destinations and reference imagery used as temporary placeholders. No claim of literal 100 percent visual identity when text differs.

Final evidence: `evidence/v2/comparison.html`, 25 paired screenshot states, geometry and motion samples. Browser reduced-motion emulation was not performed; the preference is handled in code. Personal content prevents a literal pixel-identical certification. This verification was performed locally on branch v2. Hosting status must be checked separately from Git publication.

2026-10-12 follow-up: centred the all-work dialog, added responsive project image cards, sticky close control, clearer spacing, and scroll reset when reopening. Captured actual homepage screenshots for Noor, Monkey Adventure and Learnspire. Attendance artwork unchanged. E-commerce URL is missing in existing data, so its unrelated reference image is replaced by a text placeholder pending a preview URL.
