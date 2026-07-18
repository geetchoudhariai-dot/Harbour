# Harbour View Dental — "Watercolor Coast" Redesign Plan

**Status:** implementation-ready spec · **Date:** 2026-07-12
**Sources of truth:** `zoox-DESIGN.md` (extracted Zoox design system — tokens) + 10 Mobbin references (section patterns) + existing verified content in `app/lib/site.ts` / `app/lib/treatments.ts` + the user's two watercolor paintings.

---

## 1. Reference audit — what each source actually shows

| # | Section | Source site | Extracted pattern |
|---|---------|------------|-------------------|
| 1 | Hero | **Ada** | 50/50 split hero inside one large rounded media frame: left = abstract art background + lowercase light display headline in white + small body + pill CTA with circular arrow icon; right = full-bleed photo. Floating white **pill navbar** overlaid on the frame: logo left, center links with chevrons, tinted pill CTA right with black circle-arrow. |
| 2 | Mission | **Titan Intake** | Full-bleed **sky photo** background. Centered serif-toned display headline in a pale accent, inline pill "Learn more". Below: translucent **glass panels** — pill-tag cloud + portrait, stat cards with oversized numerals, numbered value props (01–04). |
| 3 | Stats | **Joby Aviation** | Cream surface. Hairline top rule + tiny eyebrow ("Joby today"). Large **bold sans statement paragraph** left-aligned. Bottom-right 2×2 stat grid: hairline rule above each stat, tiny label, very large bold numeral. Generous empty space. |
| 4 | Services | **Ada** | White surface, centered lowercase display headline + one-line subhead. Row of 4 **flat color-block cards** (deep green / plum / orange / pale yellow), each: geometric glyph top-left, lowercase title, small body. No shadows, slight rounding. |
| 5 | Booking | **Browserbase** | Split contact section: left = big heading + 2-line supporting copy; right = **white form card** — uppercase mono-style labels, thin-bordered inputs in 2-col rows, textarea, dark pill Submit, legal microcopy with links. A **landscape artwork rises from the bottom** of the whole section, behind the card. |
| 6 | FAQ | **Retool** | Pale sage-cream panel. Two columns: left **sticky heading**, right accordion list divided by hairlines, +/− toggles right-aligned, open answer in smaller muted text. |
| 7 | Team | **Passionfroot** | Cream surface, centered serif "Meet the team". 4-col grid of **circular headshots** (tinted backgrounds inside the circles), under each: highlighter-style role tag, name, small `→` link. |
| 8 | Reviews | **Codecademy** | Pale peach surface. Centered heading; **giant rating numeral + stars + count**; horizontal 5→1-star **distribution bars** with percentages; 3 pastel **paper-note testimonial cards** with oversized quote marks, name/role/location. |
| 9 | Footer | **Duna** | **Full-bleed painted landscape** as the entire footer. Link columns in white type sit in the quiet sky area at the top; tiny legal row bottom-left. Rounded top corners. |
| 10 | Content block | **Zoox** | Sage panel (`#d3e4df` — matches zoox-DESIGN.md exactly). Tiny uppercase eyebrow, centered heading, 3 columns: rounded photo card, tiny uppercase label, centered small body, tiny uppercase chevron link. |

**Common visual system across all 10:** one dominant soft surface color per section (cream/sage/paper — never pure white page-wide) · large rounded media frames (16–24px) · pill-shaped controls · hairline rules instead of boxes/shadows · tiny uppercase eyebrows/labels as the labeling system · oversized numerals for stats/ratings · lowercase or sentence-case display headlines at light-to-regular weight · artwork used as *environment* (Duna footer, Browserbase form, Titan sky), with text always placed in the artwork's quiet zones.

---

## 2. Deliberate decisions & conflict resolutions

These are the places the references disagree, and the ruling for each. Do not re-litigate during implementation.

**D1 — Page ground: warm paper, not sage.**
zoox-DESIGN.md says `surface-sage #d3e4df` is the primary page background. But our watercolor paintings are the site's soul, and they sit on warm paper — a green-tinted ground would tint every painting. Retool's FAQ and Joby's stats also sit on warm cream. **Ruling:** page background = `--paper #faf8f2` (kept from current site). Sage `#d3e4df` becomes the **panel surface** for alternating full-width sections (Zoox content block, Retool FAQ, stat band). This preserves Zoox's "one calm surface color per section" rhythm without contaminating the art.

**D2 — Primary action color: aqua-mint.**
Zoox evidence: `aqua-mint #64d5b3` = "Primary CTA button fill", one primary action per screen. Current site uses terracotta `#b5472e`. The logo's waves are cyan; mint reads clean/fresh/clinical — right for dental. **Ruling:** all primary CTAs = `#64d5b3` fill with `#0d1212` text (contrast 10.5:1 ✓). Terracotta is **demoted to an illustration accent** (one of the four service-card colors, pigment dabs) and must never appear on a button. This also resolves Ada's yellow/blue button variants: we don't copy their hues, we copy their *shape* (pill + circle-arrow) and use our token.

**D3 — Text ink: near-black, links teal.**
Zoox `midnight-ink #0d1212` for body/headings replaces the current blue-ink `#35597c` as text color. Harbour blue survives as the **brand/link color** and in artwork. Deep-teal `#34484a` = secondary button / hover / icon color (Zoox evidence).

**D4 — Typography: GT Standard is commercial → substitute Hanken Grotesk (assumption, labeled).**
zoox-DESIGN.md's dual-optical GT Standard (L for display, S for text) cannot be shipped without a license. **Ruling:** single family **Hanken Grotesk** (Google Fonts, variable weight), emulating the dual-optical pair by weight + tracking: display roles at weight 300–400 with −0.01…−0.016em tracking; text roles at 400/500/700 with ~0 tracking. **Caveat** (script) is retained *only* for handwritten captions on paintings — it's the one surviving thread of the previous watercolor identity and matches how galleries caption art. Newsreader (serif) and DM Sans are **dropped**; Passionfroot/Titan's serif display loses 3-to-2 against Ada/Joby/Zoox sans display, and one family keeps the system coherent.

**D5 — Case style: sentence case, not lowercase.**
Ada styles headlines fully lowercase ("build an extraordinary career"). For a healthcare brand that needs trust, forced lowercase reads too startup-y. **Ruling:** sentence case everywhere; never Title Case; eyebrows/labels UPPERCASE 12px per Zoox `label-bold`.

**D6 — Watercolor placement: environment, not wallpaper.**
Hard-won lesson (previous iterations failed as "washed out"): paintings behind body text kill both. The references agree — Duna puts links only in the sky; Browserbase puts the form on a solid white card above the artwork; Titan's text sits in empty sky. **Ruling:** watercolor appears in exactly four ways: (a) hero left panel fill, (b) mission sky backdrop with glass panels, (c) rising from the bottom of the booking/FAQ section *behind solid cards*, (d) full-bleed footer. Everywhere else, paintings are framed subjects (24px-radius media frames), full strength, no filters, no multiply overlays. Text over artwork only in verified quiet zones, only white or ink after checking contrast, with a subtle gradient scrim allowed (max 25% opacity) if the zone is busy.

**D7 — Depth: one shadow.**
Zoox validates exactly one shadow (`nav-float`). Codecademy's stitched paper edges are decorative borders, not elevation. **Ruling:** the floating navbar is the only shadowed element. Cards separate by surface color and hairline `#5b8279` @ 20% borders. Do not invent shadows.

**D8 — Motion: CSS-only, visible-by-default.**
Zoox interaction evidence: transforms of −30px x / +20px y, 3px outlines. Previous GSAP build froze mid-tween and ghosted the page (documented failure). **Ruling:** keep the current `site-effects.tsx` architecture — IntersectionObserver adds `.is-in`, transitions gated behind `html.anim`, content fully visible with JS dead. Reveal = 20px rise + fade, 500ms `cubic-bezier(0.22,1,0.36,1)`, ≤80ms stagger between siblings. `prefers-reduced-motion: reduce` → no transforms, opacity only. No parallax, no marquees, no GSAP.

**D9 — Booking + FAQ merge (user directive).**
User: one section, FAQ one side, booking the other, watercolor behind. **Ruling:** Browserbase's split becomes a 5/7 two-card layout on shared watercolor ground — left card = Retool-style accordion, right card = Browserbase-style form. Both sit on solid surfaces per D6. On the Contact page the form reuses the same component full-width; on New Patients the FAQ accordion reuses solo.

**D10 — Radius scale: Zoox tokens verbatim.**
2/8/10/12/16/20/24/36px mapped to roles (§3.5). Never mix a rounded and sharp corner in the same view (Zoox guardrail). Circular team portraits (Passionfroot) are the sanctioned exception as full circles.

---

## 3. Visual system (design tokens)

Authoritative token sheet. Implement as CSS custom properties in `app/globals.css` `:root`. Old variable names get aliased onto these during migration, then removed in the final cleanup pass.

### 3.1 Color

```css
/* Surfaces */
--paper:        #faf8f2;  /* page background (D1) */
--surface-sage: #d3e4df;  /* alternating section panels, inner card bg (Zoox) */
--white:        #ffffff;  /* cards: form, testimonials, nav pill */

/* Ink */
--ink:          #0d1212;  /* all headings, body, icons (Zoox midnight-ink) */
--ink-60:       rgba(13,18,18,0.6);   /* secondary text, FAQ answers, captions */
--teal-deep:    #34484a;  /* secondary buttons, hover text, icon accents */

/* Actions */
--mint:         #64d5b3;  /* THE primary CTA fill — one per screen (D2) */
--harbour:      #35597c;  /* links, focus rings on light, brand moments */

/* Lines */
--line:         rgba(91,130,121,0.2); /* all hairlines & borders (forest-muted @20%) */

/* Illustration accents — cards & pigment details ONLY, never UI controls (D2) */
--evergreen:    #45664e;
--terracotta:   #b5472e;
--gold:         #dcc188;
--sky:          #cadeed;
```

Semantic rules: `--mint` = primary action only. `--line` = every divider/border. Text on `--mint`, `--sage`, `--paper`, `--white`, `--sky`, `--gold` is `--ink`; text on `--evergreen`, `--terracotta`, `--teal-deep`, and dark artwork zones is `#fff`.

Verified contrast (WCAG AA needs 4.5:1): ink/paper ≈ 18:1 ✓ · ink/sage ≈ 13.7:1 ✓ · ink/mint ≈ 10.5:1 ✓ · white/teal-deep ≈ 9.6:1 ✓ · white/terracotta ≈ 5.6:1 ✓ · white/evergreen ≈ 7.5:1 ✓. **Never** white on sage or mint.

### 3.2 Typography

Family: `"Hanken Grotesk", system-ui, helvetica, arial, sans-serif` (variable font, weights 300–700). Accent: `"Caveat", cursive` — painting captions only (D4).

| Token | Size (desktop) | Weight | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| `display-xl` | clamp(44px, 6.5vw, 104px) | 350 | 1.05 | −0.01em | Hero headline only |
| `display-l` | clamp(34px, 4vw, 56px) | 380 | 1.15 | −0.015em | Section headlines (services, reviews, team, mission) |
| `display-m` | clamp(28px, 3vw, 36px) | 400 | 1.2 | −0.012em | Sub-section, FAQ heading, page-hero on inner pages |
| `display-s` | 28px | 400 | 1.3 | −0.012em | Card headings |
| `statement` | clamp(28px, 3.4vw, 44px) | 700 | 1.25 | −0.01em | Joby-style mission statement (Zoox `heading-bold-xl`, line-height corrected from the extraction's 30px artifact) |
| `stat-numeral` | clamp(48px, 5vw, 80px) | 650 | 1.0 | −0.02em | Stats, rating numeral |
| `body-l` | 20px | 400 | 1.5 | 0 | Lede paragraphs, nav items |
| `body` | 17px | 400 | 1.55 | 0 | Default body (interpolated between Zoox 20/14 — assumption) |
| `body-s` | 14px | 400 | 1.3 | 0 | Captions, legal, FAQ answers, form microcopy |
| `label-bold` | 12px | 700 | 1.3 | +0.08em UPPERCASE | Eyebrows, tags, button text, form labels |
| `label-med` | 12px | 500 | 1.3 | +0.04em | Metadata, footer legal |
| `accent-hand` | 22px | Caveat 500 | 1.3 | 0 | Painting captions |

Mobile: display roles resolve via clamp; body stays ≥16px on inputs (iOS zoom prevention).

### 3.3 Spacing & grid

4px base grid (Zoox). Scale: 4, 8, 12, 16, 20, 24, 32, 40, 60, 80, 100, 160.

- Container: max-width **1440px**, side gutters 24px (mobile) / 40px (tablet) / 60px (desktop).
- Section vertical padding: **100px** desktop / 60px mobile; hero and footer are full-bleed.
- Full-width panels (sage sections, footer) get **16px inset margin** from viewport edge with `radius-3xl`, echoing every Mobbin frame — sections read as soft cards on paper. Hero frame: same inset.
- Grid: 12-col, 24px gap desktop; collapses per component rules (§5).

Breakpoints (Zoox tiers): `sm ≤767` · `md 768–1079` · `lg 1080–1439` · `xl ≥1440`.

### 3.4 Radius roles

| Token | px | Role |
|---|---|---|
| `r-sm` | 8 | Inputs, small controls |
| `r-md` | 12 | Buttons that aren't pills, select |
| `r-lg` | 16 | Cards (service, testimonial, form card) |
| `r-xl` | 20 | Inner media, stat cards |
| `r-2xl` | 24 | Section panels, hero frame, media frames |
| `r-pill` | 999 | Nav bar, all pill buttons, tags |

### 3.5 Elevation, borders, icons, imagery

- Shadow: `--shadow-nav: 0 30px 30px 0 rgba(23,33,30,0.03)` — navbar only (D7).
- Borders: 1px `--line` everywhere a division is needed; 1px hairline `<hr>` rules above stats/eyebrows (Joby).
- Icons: existing line-drawn dental icons (`dental-service-icons.tsx`) restyled to 1.5px stroke, `currentColor`; plus Ada-style **geometric dot-grid glyphs** (pure CSS/SVG, 3×3 dot patterns, one arrangement per service) on service cards. Circle-arrow icon (→ in a filled circle) is the standard button/link affordance.
- Imagery: two classes — **paintings** (full strength, `r-2xl` frames or environmental per D6) and **photos** (team, clinic; `r-xl` frames, no filters; circular crops in team grid). Every image `object-fit: cover`, explicit aspect ratios, `loading="lazy"` below fold.

### 3.6 Motion principles

Per D8: IntersectionObserver `.is-in` reveals (20px rise + fade, 500ms, `cubic-bezier(0.22,1,0.36,1)`, ≤80ms stagger, trigger at 15% visibility, once). Hover: buttons darken fill 6% + arrow-circle translates 2px right, 200ms; cards lift 0 (no shadow change — color shift on border to 40% opacity instead). Accordion: height auto-animate 250ms ease-out. Focus: 3px `--harbour` outline, 2px offset (Zoox outline evidence). `prefers-reduced-motion`: opacity-only.

---

## 4. Site architecture

Routes are kept; every page is re-skinned from the same section components. Primary conversion goal everywhere: **booking-form submission**, secondary: **phone call (250) 724-1314**.

| Route | Purpose | Section order | Conversion |
|---|---|---|---|
| `/` | Convert + orient | 1 Nav (pill, floating) · 2 Hero [Ada] · 3 Mission sky [Titan] · 4 Stats [Joby] · 5 Services [Ada cards] · 6 Care triptych [Zoox block] · 7 Team [Passionfroot] · 8 Reviews [Codecademy] · 9 Booking+FAQ split [Browserbase+Retool] · 10 Footer [Duna] | Hero CTA → #booking; nav CTA persistent |
| `/services` | Route to treatment | PageHero · full 8-card service grid [Ada] · care triptych · CTA band → footer | Card → detail → book |
| `/services/[slug]` ×8 | Treatment depth | PageHero (service accent color) · content columns · process steps (numbered 01–04, Titan glass style) · FAQ (Retool solo) · CTA band | Book CTA |
| `/about` | Trust | PageHero · mission statement [Joby] · team grid (full, larger) · values triptych [Zoox] · CTA band | Book/phone |
| `/technology` | Differentiate | PageHero · content triptych ×2 [Zoox] · CTA band | Book |
| `/new-patients` | Reduce first-visit anxiety | PageHero · what-to-expect steps · insurance/payment triptych · FAQ solo [Retool] · booking card | Book |
| `/contact` | Convert directly | PageHero · Booking split with map instead of FAQ (form right, map+hours card left) · footer | Form/phone |
| `/accessibility` | Legal | PageHero · prose | — |
| 404 | Recover | Watercolor frame + "back to harbour" CTA | Home |

Content hierarchy rule (all pages): eyebrow → headline → lede → evidence (stats/cards/reviews) → action. Every page ends in either the Booking split or a CTA band, then the Duna footer.

Data stays in `app/lib/site.ts` + `treatments.ts` (verified facts: address Unit B, 4556 Gertrude St; phone (250) 724-1314; hours Mon 8:30–5:30, Tue–Thu 8:30–4:30, Fri 8:30–3:30; rating 4.2 — authoritative per owner; real reviews from Herpreet Forrest, Amanda Allen, Terry MacDonald; 8 real team members; booking to info@harbourviewdental.com).

---

## 5. Component specifications

### 5.1 Navbar — `nav.tsx` (rework)
- **Layout:** floating white pill (`r-pill`, `--shadow-nav`), max-width 1160px, centered, 16px from top, 12px inner padding, 64px tall. Logo-mark + wordmark left (28px mark); center links `body-l` 16px: Services (chevron dropdown), About, Technology, New Patients, Contact; right: phone number as text link (desktop only) + primary pill CTA "Book a visit" (`--mint` fill, ink text, circle-arrow).
- **States:** transparent page-top over hero → on scroll >24px the pill gains `--shadow-nav` and background solidifies (current scroll listener, keep). Active link: 700 weight. Dropdown: white `r-lg` card, `--line` border, 8 service links + "All services".
- **Responsive:** ≤1079px center links collapse into hamburger (right of logo); menu = full-screen paper overlay, `display-m` links stacked, CTA pinned bottom. Phone number always visible in menu.
- **A11y:** `<nav aria-label="Main">`, dropdown is a disclosure (`aria-expanded`), Esc closes, focus trapped in mobile menu.

### 5.2 Buttons (global classes)
- **Primary** `.btn`: pill, `--mint` bg, `--ink` `label-bold` 14px text, 14px 22px padding, trailing 28px `--ink` circle with white arrow. Hover: bg → `#54c4a2`, arrow +2px. Active: scale(0.98). Focus: 3px `--harbour` outline. Disabled: `--surface-sage` bg, `--ink-60` text, no arrow motion.
- **Secondary** `.btn-secondary`: pill, transparent, 1px `--line` border, `--teal-deep` text; hover border → `--teal-deep`.
- **On-dark** `.btn-light`: white pill, ink text (footer/artwork zones).
- **Text link** `.link-arrow`: `label-bold` uppercase + chevron, `--teal-deep` (Zoox content block); hover underline. Body links: `--harbour`, underlined.
- Reuse: exactly one `.btn` per section (Zoox guardrail); everything else secondary/text.

### 5.3 Section shell + head — `section-head.tsx` (rework)
- `.panel` modifier = sage full-width card (16px inset, `r-2xl`, 100px padding).
- SectionHead: hairline rule (Joby) → eyebrow `label-bold` uppercase `--teal-deep` → headline `display-l` → optional lede `body-l` `--ink-60` max 56ch. Alignment prop: center (services, team, reviews, triptych) or left (stats, FAQ).

### 5.4 Hero — `home-hero` (rebuild) [Ada]
- **Layout:** full-bleed frame, 16px inset, `r-2xl`, height `min(88vh, 860px)`, 2 equal columns. **Left:** `port_alberni_watercolor_landscape.webp` as full-bleed panel fill (this replaces Ada's abstract gradient — the painting *is* the art panel); bottom-left content block (60px padding): headline `display-xl` white, "Dentistry at the head of the harbour" (final copy TBD), body-l white max 40ch, primary CTA + secondary "Meet the team" `.btn-light`. Gradient scrim `linear-gradient(180deg, transparent 40%, rgba(13,18,18,0.35))` bottom third for text safety (≤25% per D6 — 35% at the very edge is acceptable as it sits below the painting's horizon; verify contrast ≥4.5 on the actual pixels, else lift text zone). Caveat caption bottom-right: "the Alberni Inlet, in watercolour".
- **Right:** `harborview_dental_team_portrait.webp` full-bleed.
- **Responsive:** ≤1079px columns stack (painting+text top at 70vh, photo 40vh below); ≤767px photo hides, painting panel only.
- **A11y:** `<h1>` unique; painting `alt="Watercolour painting of Port Alberni harbour"`.

### 5.5 Mission sky panel (rebuild of `mission` + `cred-strip`) [Titan]
- Full-width frame (16px inset, `r-2xl`), background = sky-region crop of `serene_watercolor_landscape.webp`, `min-height 640px`.
- Centered `display-l` in `--ink` over the quiet sky: mission line + inline pill CTA. Below, a row of three **glass panels** (`rgba(255,255,255,0.55)`, `backdrop-filter: blur(12px)`, 1px `--line`, `r-xl`): (a) pill-tag cloud — GENTLE, FAMILY-OWNED, DIGITAL X-RAY, SAME-WEEK, SEDATION, INSURANCE-FRIENDLY; (b) numbered values 01–04 (from current cred-strip copy); (c) mini stat teaser. Absorbs the old cred-strip; delete it as a separate section.
- Fallback: `@supports not (backdrop-filter)` → solid `rgba(255,255,255,0.85)`.
- Responsive: panels stack ≤767px; background repositions to keep sky behind headline (`background-position: top`).

### 5.6 Stats — `stat-band` (rebuild) [Joby]
- Paper background (no panel). Hairline top rule. Eyebrow "HARBOUR VIEW TODAY". Statement paragraph (`statement` token, max 20 words/line feel, left, spans 8 cols): "We're a family-owned practice caring for Port Alberni smiles with modern, gentle dentistry." Bottom-right 2×2 grid (each cell: hairline top rule, `label-med` label, `stat-numeral`): **4.2** Google rating · **8** team members · **8** services under one roof · **1** visit to get started. (Stat copy from `site.ts`; do not invent numbers.)
- Responsive: statement full-width, stat grid 2×2 → ≤479px 1-col.

### 5.7 Service cards — `service-dental-card.tsx` (rework) [Ada]
- Grid: home shows 4 (Preventive, Restorative, Cosmetic, Children's) + "All services" text-arrow link; `/services` shows all 8, 4-col.
- Card: flat color block, `r-lg`, aspect ≈ 3:4, 24px padding, no border/shadow. Top-left: dot-grid glyph (32px, ink or white per surface). Bottom: title `display-s` sentence case + `body-s` 2-line summary. Color rotation (illustration accents, D2): evergreen (white text) → sky (ink) → terracotta (white) → gold (ink), repeat.
- Behavior: whole card is the link; hover: glyph dots reflow (CSS transition on 2 dots) + arrow appears bottom-right; focus ring per global.
- Responsive: 4 → 2 (md) → 1.5-col horizontal scroll-snap (sm, 85% width cards).

### 5.8 Care triptych — new `content-triptych.tsx` [Zoox]
- Sage `.panel`. Eyebrow + centered `display-m`. 3 columns, each: photo (`r-xl`, 4:3, from `care-*.jpg`) → `label-bold` uppercase teal label → `body-s` centered max 34ch → `.link-arrow`.
- Home instance: "Your first visit" / "Gentle by default" / "Modern tools" (copy from current first-visit + technology sections — replaces both `first-visit-section` and `human-section` intro on home). Reused on `/about` (values), `/technology`, `/new-patients` (insurance/forms/parking).
- Responsive: 3 → 1 stacked, images 16:9.

### 5.9 Team grid — `team-grid.tsx` (rework) [Passionfroot]
- Centered `display-l` "Meet the team". 4-col grid, 40px row gap. Each member: **circular headshot** 180px (`border-radius: 50%`, background tint inside circle rotating through sky/gold/sage tints behind the cutout-style crop — if headshots aren't cut out, plain circular crop, no tint: **assumption to verify against real photos**); below: role tag as highlighter mark (`--gold` @ 45% background, `label-med`), name `body-l` 600.
- Dr. Gaurav first, 2× circle size on `/about` only.
- Responsive: 4 → 3 → 2 columns; never 1 (keeps it warm).

### 5.10 Reviews — new `rating-block.tsx` + rework `testimonial-carousel.tsx` → static [Codecademy]
- Paper section. Centered `display-l` "What patients say". Rating row: `stat-numeral` **4.2** + 5 star glyphs (4 filled `--gold`, 1 fifth ~20% filled via gradient) + `body-s` "Google reviews".
- Distribution bars only if real per-star data exists — **it does not** → omit histogram (labeled deviation from reference; do not fabricate).
- 3 paper-note cards: white, `r-lg`, 1px `--line`, oversized `--terracotta` `"` glyph, review text `body` (real verbatim quotes), name + "Google review" `label-med`. Slight alternating rotation (−0.5°/0.5°/−0.3°) for the pinned-note feel; `transform: none` on reduced-motion.
- Replaces the carousel: all three visible, no controls (only 3 reviews exist; carousels hide social proof). Delete carousel logic.
- Responsive: 3 → 1 stacked.

### 5.11 Booking + FAQ split — new `booking-faq.tsx` wrapping `booking-form.tsx` + `faq-list.tsx` [Browserbase + Retool, D9]
- Full-width section, paper bg; `serene_watercolor_landscape.webp` **rises from the bottom** (absolute, bottom-anchored, ~55% section height, soft-masked top edge via `mask-image: linear-gradient`), behind both cards.
- Header: left-aligned `display-l` "Book your visit" + lede with phone link.
- Grid 5/7: **Left (5):** FAQ accordion — sticky heading `display-m` "Common questions" inside a sage card (`r-lg`), hairline-divided items, `body-l` 16px questions, +/− right, answers `body-s` `--ink-60`. Single-open behavior; deep-linkable `#faq`.
- **Right (7):** white form card (`r-lg`, 1px `--line`, 40px padding): labels `label-bold` uppercase, inputs 1px `--line` border `r-sm`, 48px tall, 16px text; 2-col rows (name/phone, email/preferred time), reason `<select>`, message textarea 4 rows; consent microcopy `body-s`; primary `.btn` "Request appointment"; microcopy "We reply within one business day."
- **Form states:** client validation on blur (required name+phone/email); invalid = 1px `--terracotta` border + `body-s` message + `aria-invalid`/`aria-describedby`. Submitting = button disabled, arrow → spinner, "Sending…". Success = card swaps to confirmation panel (mint check-circle, "Request received — we'll call you", phone fallback). Error = inline banner "Something went wrong — call (250) 724-1314", form intact, `role="alert"`. Honeypot + existing `/api/booking` route unchanged.
- Responsive: stack (FAQ below form on mobile — form is the conversion goal); watercolor backdrop shrinks to bottom 30%.

### 5.12 Footer — `footer.tsx` (rebuild) [Duna]
- Full-bleed, `r-2xl` top corners, 16px inset, min-height 620px. Background: **full-bleed watercolor panorama**, sky occupying the top ~45% (needs a sky-heavy painting — see asset list; interim: top-cropped `port_alberni_watercolor_landscape.webp` with a 20% ink gradient scrim in the sky zone if contrast <4.5).
- In the sky: 4 white link columns (`label-bold` headers: Visit, Services, Practice, Hours) — address, phone, email; top services; About/Technology/New Patients/Accessibility; hours table. White logo-mark left of columns (existing CSS invert).
- Bottom-left row `label-med` white: © year · "On the traditional territory of the Tseshaht and Hupacasath First Nations" (keep) · Privacy · Accessibility. Bottom-right: Caveat "from the head of the Alberni Inlet".
- Link hover: underline. All white text zones contrast-checked ≥4.5.
- Responsive: columns 4 → 2 → accordion-less stack; painting stays full-bleed (mobile min-height 760px).

### 5.13 Inner-page hero — `page-hero.tsx` (restyle)
Sage panel (`r-2xl`, 16px inset, 60px padding): eyebrow + `display-m` + lede; optional right-side framed painting/photo thumb (`r-xl`). Service detail pages: eyebrow dot in that service's accent color.

### 5.14 CTA band — `page-cta.tsx` (restyle)
Teal-deep panel (`r-2xl`), white `display-m` + one `.btn` (mint pops on teal, 9.6:1 for text ✓) + phone text link. Replaces `motif-band` on home if section 9 already closes the page — **ruling: home ends with Booking split, no extra CTA band; inner pages use CTA band before footer.**

### 5.15 Supporting
- `map-embed.tsx`: framed `r-xl`, 1px `--line`; loads on interaction (click-to-load poster = static map image) — keeps LCP clean; error state = address card with "Open in Google Maps" link.
- `process-steps.tsx`: numbered 01–04 `stat-numeral` 40px `--teal-deep`, hairline-ruled rows (Joby rhythm).
- `trust-rating.tsx`: folds into `rating-block.tsx` (delete).
- `watercolor.tsx` / `contour.tsx`: retire contour motif (superseded by real paintings); keep only deckle mask util if the footer/mission need soft edges — else delete.
- `structured-data.tsx`, `seo.ts`, `robots/sitemap`: unchanged.

---

## 6. UX rules

**Primary flow (book):** any page → nav CTA or hero CTA → `#booking` split → 6-field form → success confirmation. Max 1 scroll-jump; form must be reachable ≤2 interactions from anywhere. Phone number is tappable `tel:` everywhere it appears.
**Secondary flow (research):** services grid → detail → per-service FAQ → CTA band → booking.

**Hierarchy:** one `<h1>` per page; sections are `<section aria-labelledby>` with `<h2>`; cards use `<h3>`. One primary CTA per viewport-height.

**Interaction patterns:** accordions single-open; whole-card links use pseudo-element stretch (no nested links); scroll-snap carousels only on mobile service cards; no autoplaying anything.

**Accessibility (WCAG 2.1 AA):** token contrast table in §3.1 is binding; focus visible 3px `--harbour` on all interactives; touch targets ≥44px; skip-link to `#main`; form errors announced (`role="alert"`, `aria-live="polite"` for success); star rating has text equivalent ("Rated 4.2 out of 5 on Google"); paintings get descriptive alt, decorative backdrops `alt=""`/`aria-hidden`; keyboard: dropdown/accordion/mobile-menu fully operable, Esc closes overlays; reduced-motion honored (D8).

**Empty/loading/error:** form states per §5.11; map per §5.15; images: explicit width/height (no CLS), paper-tone `background-color` placeholder while loading; 404 per §4. If reviews data were ever empty → hide section, never placeholder quotes.

**Mobile:** nav → overlay menu; hero stacks; grids per component rules; sticky bottom "Call · Book" bar on ≤767px (two half-width pills, appears after scrolling past hero, `position: sticky` — the one allowed extra CTA on mobile). Font sizes never below 14px; inputs ≥16px.

---

## 7. Consistency rules

1. Every color, size, radius, space in components must reference a §3 token — zero hardcoded hex/px (lint by grep in QA).
2. One `.btn` (mint) per section; mint appears nowhere except actions.
3. Every section = SectionShell (+ optional `.panel`) + SectionHead; no bespoke headers.
4. All hairlines = `--line`; all frames `r-lg`+; nothing sharp-cornered.
5. Watercolor only in the four sanctioned placements (D6) + framed subjects; photos never get filters.
6. Eyebrow style (12px 700 uppercase teal) is the only "label" treatment; Caveat only on/about paintings.
7. Shadow = navbar only.
8. Copy voice: sentence case, first person plural ("we"), Port Alberni references limited to hero eyebrow, footer, and one mission line (avoid theme-park overuse).
9. New sections must be composed from §5 components before any new component is written.

---

## 8. Asset needs (user to supply / approve)

| Asset | For | Spec |
|---|---|---|
| Sky-heavy watercolor panorama | Footer (Duna treatment) | ≥2400px wide, top 45% quiet sky, horizon low; webp |
| Sky/wash crop or new gentle wash | Mission panel backdrop | ≥2000px, very low contrast center |
| Existing two paintings | Hero, booking backdrop | already in `public/images/` ✓ (hero one ideally re-exported ≥2000px) |
| Optional: 8 small watercolor vignettes | Service-detail page heroes | ~800px, single-subject (lighthouse, boat, cedar…) |
| Team headshots | Team grid | existing ✓; confirm circular crops look right (§5.9 assumption) |

Until new paintings arrive, the two existing ones cover hero + mission + booking; footer uses the top-crop fallback (§5.12).

---

## 9. Delivery plan (priority order)

**Phase 0 — Foundation (do first, everything depends on it)**
1. Rewrite `globals.css` token layer (§3) — new custom props, Hanken Grotesk + Caveat via `next/font` in `layout.tsx` (drop Newsreader/DM Sans/Fraunces remnants), type/spacing/radius utilities, `.btn` system, SectionShell/`.panel`, reveal classes (keep `site-effects.tsx` mechanism).
2. Cleanup: delete `feature-tabs.tsx`, `team-carousel.tsx`, `trust-rating.tsx` (folded), `contour.tsx` (retired), gsap + @gsap/react from package.json, `public/assets/` duplicate PNGs, legacy CSS var aliases (`--lime`, `--orange`, `--navy`, `--cream`, `--sand` chain).
   *(`rm -rf .next` + dev-server restart after the globals rewrite — known Turbopack gotcha.)*

**Phase 1 — Global chrome**
3. Navbar (§5.1) · 4. Footer (§5.12) · 5. Buttons/links sweep across all pages.

**Phase 2 — Homepage, top to bottom (each section verified in browser before the next)**
6. Hero → 7. Mission sky panel (delete cred-strip) → 8. Stats → 9. Service cards → 10. Care triptych (absorbs first-visit + human sections) → 11. Team grid → 12. Reviews (delete carousel) → 13. Booking+FAQ split (delete old faq-booking + band).

**Phase 3 — Inner pages**
14. page-hero + page-cta restyles → 15. `/services` + `[slug]` (glyphs, accent rotation, process steps) → 16. `/about`, `/technology`, `/new-patients` recomposition from triptych/FAQ/team components → 17. `/contact` (form + map split) → 18. 404 + `/accessibility`.

**Phase 4 — QA & polish**
19. Responsive pass at 375 / 768 / 1080 / 1440 (screenshots each) + sticky mobile CTA bar.
20. A11y audit: keyboard walk, focus order, contrast spot-checks over artwork, reduced-motion, axe pass.
21. States: form success/error (hit `/api/booking`), map fallback, image alt sweep.
22. Consistency lint: grep for hardcoded hex/px outside globals; one-mint-per-section check.
23. Performance: painting file sizes (≤300KB webp each), font subsetting, LCP = hero painting `priority`, CLS 0.
24. Final: metadata/OG re-check, sitemap, deploy.

Estimated shape: Phase 0–1 ≈ one session; Phase 2 ≈ one–two sessions; Phase 3–4 ≈ one session each.

---

## 10. Labeled assumptions

- **A1 (D4):** Hanken Grotesk stands in for GT Standard; if the user buys GT Standard L/S, swap `next/font` config only — tokens unchanged.
- **A2 (§3.2):** 17px default body interpolated between Zoox's 20px `body-l` and 14px `body-s` (Zoox showed no mid body size).
- **A3 (§5.6):** stat set ("8 team members", "8 services", "1 visit") composed from verified site data; numerals must come from `site.ts`, wording to be approved.
- **A4 (§5.9):** circular tinted headshots depend on how the real photos crop; fallback = plain circular crop.
- **A5 (§5.10):** star-distribution histogram omitted — no real per-star data; only the reference's rating + note-cards are used.
- **A6 (§5.12):** footer uses top-cropped existing painting until a sky-heavy panorama is supplied.
- **A7 (§5.4):** hero copy lines are placeholders pending user approval; all facts locked to `site.ts`.
