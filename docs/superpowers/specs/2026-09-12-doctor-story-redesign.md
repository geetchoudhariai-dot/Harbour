# Dr. Gary Story Redesign

## Goal

Remove the separate doctor introduction and replace the notebook-style letter with one cohesive personal note that feels calm, credible, and consistent with Harbour View Dental's coastal design language.

## Design direction

Use Handshake's framed letter surface and Ada's typographic hierarchy, adapted to the site's existing portrait and coastal palette.

The section remains in the site's light theme and uses its established blue, paper, ink, radius, and button tokens. It uses a clean letter surface without ruled paper, decorative stationery, glass, or a second visual language.

## Desktop composition

- Keep the existing `#doctor` section anchor and accessible Dr. Gary label.
- Place the personal note inside one restrained pale-blue coastal panel.
- Use an asymmetric 4/8 grid.
- Left column:
  - "A personal note from Dr. Gary" heading.
  - Tall Dr. Gary portrait.
  - Small identity block with name and role directly below the image.
- Right column:
  - Clean warm-white letter sheet.
  - The current statement becomes the large Ada-inspired pull quote within the letter.
  - Full existing story remains visible in a readable column.
  - Handwritten signature closes the story.
  - "Book a visit" follows the signature as the only CTA in the section.
- Remove the entire `.about-doctor-intro` band, "View services" action, sticky portrait behavior, notebook ruling, and red margin line.

## Responsive composition

- At 1080px and below, use a single column.
- Order: heading, portrait, identity, letter pull quote, full story, signature, CTA.
- Use a landscape portrait crop on tablet to control section height.
- Use a near-square portrait crop on mobile.
- Keep body text at a comfortable measure and preserve existing tap-target sizing.

## Visual details

- Panel background: a subtle tint from existing `--sage`, `--sky`, and `--paper` tokens.
- Panel radius: existing `--r-2xl`.
- Portrait radius: existing `--r-xl`.
- Use one structural hairline inside the letter to separate the opening quote from the story body.
- Keep the existing Hanken Grotesk body type and Caveat signature.
- Use the existing mint primary button without inventing a new button style.
- No decorative dots, glass blur, gradients on text, or excessive shadows.

## Motion and accessibility

- Reuse the existing `fade-up` IntersectionObserver reveal.
- Do not add new animation dependencies or scroll effects.
- Preserve the portrait alt text and semantic article structure.
- Keep visible text contrast at WCAG AA or better.
- Ensure the CTA remains a single line and has a minimum 44px tap target.
- Existing reduced-motion behavior remains effective.

## Content

- Preserve the complete doctor story and its current voice.
- Move the current statement text into the letter as its opening pull quote.
- Preserve Dr. Gary's name, role, portrait, and signature.
- Remove the entire redundant introduction band and its "View services" CTA.

## Acceptance criteria

- The section reads as one profile rather than two adjacent sections.
- The opening quote, portrait, full story, signature, and booking CTA have a clear reading order.
- No notebook lines, margin rule, glass effect, or sticky rail remain.
- Desktop, tablet, and mobile layouts have no overflow or awkward dead space.
- The full story remains visible without an interaction.
- Production build and lint checks pass.
