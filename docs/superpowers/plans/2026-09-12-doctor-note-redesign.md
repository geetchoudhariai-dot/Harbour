# Dr. Gary Personal Note Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the redundant doctor intro band and rebuild the remaining story as a Handshake-inspired framed letter with Ada-inspired typography.

**Architecture:** Keep the About page as a Server Component. Restructure only the `#doctor` article markup, then replace its existing CSS block and responsive overrides. Reuse the existing portrait, site tokens, button component, Caveat signature, and generic `fade-up` behavior.

**Tech Stack:** Next.js 16, React 19, TypeScript, native CSS, `next/image`

## Global Constraints

- Preserve the complete doctor story and its current voice.
- Keep the `#doctor` anchor and semantic article structure.
- Use existing color, type, radius, shadow, and button tokens.
- Add no dependencies or client-side state.
- Keep the full story visible.
- Remove notebook ruling, margin line, glass, and sticky behavior.
- Keep the primary CTA text on one line with a minimum 44px tap target.

---

### Task 1: Recompose the doctor story markup

**Files:**
- Modify: `app/about/page.tsx:39-117`

**Interfaces:**
- Consumes: `Image`, `BtnLink`, and the existing doctor portrait asset.
- Produces: `.doctor-profile`, `.doctor-profile-rail`, `.doctor-letter-surface`, `.doctor-letter-opening`, `.doctor-letter-copy`, and `.doctor-note-sign`.

- [ ] **Step 1: Capture the current structural failure**

Run:

```bash
rg -n "about-doctor-intro|doctor-letter-body|doctor-letter-rail" app/about/page.tsx
```

Expected: all three legacy structures are present.

- [ ] **Step 2: Replace the doctor section markup**

Replace the separate `.about-doctor-intro` and `.doctor-letter` blocks with:

```tsx
<article className="doctor-profile" aria-labelledby="doctor-note-title">
  <div className="doctor-profile-rail fade-up">
    <p className="doctor-letter-kicker">A personal note</p>
    <h2 id="doctor-note-title">From Dr. Gary</h2>
    <figure className="doctor-media">
      <Image
        src="/images/dr-gaurav.jpg"
        alt="Dr. Gary, dentist and owner of Harbour View Dental"
        fill
        sizes="(max-width: 1079px) 100vw, 420px"
        style={{ objectPosition: "center 15%" }}
      />
    </figure>
    <p className="doctor-profile-name">
      <strong>Dr. Gary</strong>
      <span>Owner &amp; General Dentist</span>
    </p>
  </div>

  <div className="doctor-letter-surface fade-up">
    <p className="doctor-letter-opening">
      You deserve a skilled, caring team that helps you achieve and keep great oral health.
    </p>
    <div className="doctor-letter-copy">
      <p>
        Growing up, I was actually a little afraid of going to the dentist. That experience
        stayed with me and became one of the reasons I chose dentistry.
      </p>
      <p>
        I wanted to create the kind of dental experience I would have appreciated as a kid:
        calm, comfortable, and welcoming.
      </p>
      <p>
        I&apos;ve been practicing dentistry for the past seven years, and my favourite part
        of what I do is getting to know the people I care for. I enjoy building long-term
        relationships with patients and helping them feel at ease in the dental chair.
        I&apos;m also a big believer in technology and love finding ways to use it to make
        dentistry simpler, more predictable, and more comfortable.
      </p>
      <p>
        Outside of dentistry, life is mostly about family. I love spending time with my wife
        and our two kids, whether we&apos;re at the park, hiking, exploring Vancouver Island,
        or simply going out for a good meal. Parksville has become one of our favourite family
        spots. When I get the chance, I also love playing volleyball.
      </p>
      <p>
        Moving from Toronto to Vancouver Island was a big change, but it has been a wonderful
        one. I really appreciate the slower pace, the outdoors, and especially the friendly,
        close-knit community. It feels like a great place to raise our family, and I feel
        fortunate to be able to care for families in the community we now call home.
      </p>
    </div>
    <footer className="doctor-note-sign">
      <span className="sign-hand" aria-hidden="true">Dr. Gary</span>
      <p className="sign-name">
        <strong>Dr. Gary</strong>
        <span>Owner &amp; General Dentist, Harbour View Dental</span>
      </p>
      <BtnLink href="/contact#booking">Book a visit</BtnLink>
    </footer>
  </div>
</article>
```

- [ ] **Step 3: Verify obsolete markup is gone**

Run:

```bash
rg -n "about-doctor-intro|about-doctor-heading|about-doctor-actions|doctor-letter-body|doctor-letter-rail" app/about/page.tsx
```

Expected: no matches.

---

### Task 2: Build the Handshake and Ada visual treatment

**Files:**
- Modify: `app/globals.css:2194-2378`
- Modify: `app/globals.css:3423-3448`
- Modify: `app/globals.css:3533-3544`

**Interfaces:**
- Consumes: the class names produced by Task 1 and existing CSS custom properties.
- Produces: responsive desktop, tablet, and mobile layouts.

- [ ] **Step 1: Remove obsolete doctor styles**

Delete rules for:

```css
.about-doctor-intro
.about-doctor-heading
.about-doctor-actions
.doctor-letter
.doctor-letter-rail
.doctor-letter-body
.doctor-note-pull
```

- [ ] **Step 2: Add the desktop composition**

Implement:

```css
.about-doctor {
  padding-top: clamp(36px, 5vw, 64px);
}

.doctor-profile {
  display: grid;
  grid-template-columns: minmax(240px, 4fr) minmax(0, 8fr);
  gap: clamp(32px, 5vw, 76px);
  margin-top: clamp(28px, 4vw, 48px);
  padding: clamp(32px, 4.5vw, 68px);
  border-radius: var(--r-2xl);
  background: color-mix(in srgb, var(--sage) 72%, var(--paper));
}

.doctor-profile-rail {
  align-self: start;
}

.doctor-profile-rail h2 {
  margin-top: 8px;
  font-size: clamp(30px, 3vw, 44px);
  line-height: 1.08;
  letter-spacing: -0.025em;
}

.doctor-profile .doctor-media {
  margin-top: clamp(24px, 3vw, 36px);
  aspect-ratio: 4 / 5;
}

.doctor-profile-name {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 16px;
  color: var(--ink-60);
}

.doctor-profile-name strong {
  color: var(--ink);
}

.doctor-letter-surface {
  padding: clamp(34px, 4.5vw, 64px);
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: var(--r-xl);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: var(--shadow-nav), inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.doctor-letter-opening {
  max-width: 23ch;
  padding-bottom: clamp(26px, 3vw, 38px);
  border-bottom: 1px solid var(--line);
  font-size: clamp(27px, 3vw, 42px);
  font-weight: 600;
  line-height: 1.18;
  letter-spacing: -0.025em;
  text-wrap: balance;
}

.doctor-letter-copy {
  max-width: 62ch;
  margin-top: clamp(28px, 3vw, 40px);
}

.doctor-letter-copy p {
  font-size: clamp(16.5px, 1.2vw, 18px);
  line-height: 1.72;
  text-wrap: pretty;
}

.doctor-letter-copy p + p {
  margin-top: 20px;
}

.doctor-note-sign {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: 16px 24px;
  margin-top: clamp(34px, 4vw, 48px);
}

.doctor-note-sign .sign-hand,
.doctor-note-sign .sign-name {
  grid-column: 1;
}

.doctor-note-sign .btn {
  grid-column: 2;
  grid-row: 1 / span 2;
  min-height: 44px;
}
```

- [ ] **Step 3: Add explicit tablet and mobile collapse**

At `max-width: 1079px`:

```css
.doctor-profile {
  grid-template-columns: 1fr;
}

.doctor-profile .doctor-media {
  max-width: 560px;
  aspect-ratio: 4 / 3;
}
```

At `max-width: 767px`:

```css
.doctor-profile {
  margin-inline: calc(var(--gutter) * -0.4);
  padding: 24px;
}

.doctor-profile .doctor-media {
  aspect-ratio: 1 / 1;
}

.doctor-letter-surface {
  padding: 28px 24px;
}

.doctor-letter-opening {
  font-size: 27px;
}

.doctor-note-sign {
  grid-template-columns: 1fr;
}

.doctor-note-sign .btn {
  grid-column: 1;
  grid-row: auto;
  width: max-content;
}
```

- [ ] **Step 4: Check stylesheet and TypeScript diagnostics**

Run the IDE diagnostics for `app/about/page.tsx` and `app/globals.css`.

Expected: no new errors.

---

### Task 3: Verify responsive visual quality and production output

**Files:**
- Verify: `app/about/page.tsx`
- Verify: `app/globals.css`

**Interfaces:**
- Consumes: the completed doctor profile.
- Produces: browser and build evidence that the redesign is ready.

- [ ] **Step 1: Verify the legacy treatment is absent**

Run:

```bash
rg -n "about-doctor-intro|note-line|repeating-linear-gradient|doctor-letter-body::before" app
```

Expected: no matches.

- [ ] **Step 2: Test responsive layouts**

Open `/about` at widths 1440px, 1155px, 1024px, and 532px.

Expected:

- 1440px and 1155px: portrait rail and letter surface form one balanced 4/8 composition.
- 1024px: single-column layout with controlled landscape portrait height.
- 532px: single-column layout, square portrait, readable letter padding, and no horizontal overflow.
- The full story, signature, and CTA remain visible at every width.

- [ ] **Step 3: Run production verification**

Run:

```bash
npm run build
```

Expected: exit code 0 and `/about` listed as a statically rendered route.
