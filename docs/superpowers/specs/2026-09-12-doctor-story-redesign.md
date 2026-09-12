# Dr. Gary Story Redesign

## Goal

Replace the separate doctor introduction and notebook-style letter with one cohesive editorial profile that feels calm, personal, and credible within Harbour View Dental's existing coastal design language.

## Design direction

Use a unified two-column profile inspired by the portrait balance of Headspace, the readable founder-letter measure of incident.io, and the healthcare warmth of Titan Intake.

The section remains in the site's light theme and uses its established blue, paper, ink, radius, and button tokens. It does not introduce glass, ruled paper, decorative stationery, or a second visual language.

## Desktop composition

- Keep the existing `#doctor` section anchor and accessible Dr. Gary label.
- Place the entire profile inside one restrained pale-blue coastal panel.
- Use an asymmetric 5/7 grid.
- Left column:
  - Tall Dr. Gary portrait.
  - Small identity block with name and role directly below the image.
- Right column:
  - Small "Meet Dr. Gary" label.
  - The current statement becomes the large opening pull quote.
  - Full existing story remains visible in a readable column.
  - Handwritten signature closes the story.
  - "Book a visit" is the only CTA in the section.
- Remove the separate intro band, "View services" action, sticky portrait behavior, notebook ruling, red margin line, and paper-card simulation.

## Responsive composition

- At 1080px and below, use a single column.
- Order: label, pull quote, portrait, identity, full story, signature, CTA.
- Use a landscape portrait crop on tablet to control section height.
- Use a near-square portrait crop on mobile.
- Keep body text at a comfortable measure and preserve existing tap-target sizing.

## Visual details

- Panel background: a subtle tint from existing `--sage`, `--sky`, and `--paper` tokens.
- Panel radius: existing `--r-2xl`.
- Portrait radius: existing `--r-xl`.
- Use one structural hairline only where it separates the opening quote from the story body.
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
- Preserve the current statement text as the section's opening pull quote.
- Preserve Dr. Gary's name, role, portrait, and signature.
- Remove only the redundant "Led by Dr. Gary" introduction and "View services" CTA.

## Acceptance criteria

- The section reads as one profile rather than two adjacent sections.
- The opening quote, portrait, full story, signature, and booking CTA have a clear reading order.
- No notebook lines, margin rule, glass effect, or sticky rail remain.
- Desktop, tablet, and mobile layouts have no overflow or awkward dead space.
- The full story remains visible without an interaction.
- Production build and lint checks pass.
