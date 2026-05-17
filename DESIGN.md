# Design Brief — Ma's House Chinese Cuisine

## Direction
Warm Editorial Luxury — professional restaurant showcase with heritage warmth and premium presence.

## Tone
Refined editorial aesthetic executed with intentional warmth and professional clarity; inspired by upscale dining experiences where heritage and craftsmanship are celebrated without excess.

## Differentiation
Gold accent CTAs on warm card surfaces with soft shadows—distinctive restaurant luxury that avoids generic warmth through deliberate color hierarchy and typography pairing.

## Color Palette

| Token      | OKLCH        | Role                       |
| ---------- | ------------ | -------------------------- |
| background | 0.96 0.015 75  | Cream base, editorial calm |
| foreground | 0.2 0.03 50    | Deep brown text, readable  |
| card       | 0.98 0.01 75   | Elevated surfaces, content |
| primary    | 0.5 0.18 30    | Deep wine red, CTAs        |
| accent     | 0.68 0.15 70   | Gold highlights, accents   |
| muted      | 0.92 0.02 75   | Secondary surfaces         |

## Typography

- Display: Lora — elegant serif, warm heritage feel, section headings and hero text
- Body: DM Sans — clean sans-serif, professional clarity, all UI labels and body copy
- Scale: Hero `text-5xl md:text-6xl font-bold tracking-tight`, H2 `text-3xl md:text-4xl`, labels `text-sm font-semibold uppercase tracking-widest`, body `text-base md:text-lg`

## Elevation & Depth

Cards float on cream base with soft warm shadows (8–12° brown hue); header subtle, footer grounded with terracotta wash; no floating orbs or aggressive depth—clarity through layering.

## Structural Zones

| Zone    | Background      | Border            | Notes                                    |
| ------- | --------------- | ----------------- | ---------------------------------------- |
| Header  | 0.96 0.015 75   | —                 | Clean nav, cream base with no separation |
| Content | Alternates: 0.96/0.98 cream | subtle border   | Cards on cream; section spacing 64–80px  |
| Footer  | 0.22 0.02 50    | 0.26 0.022 155    | Warm dark terracotta, gold text accents |

## Spacing & Rhythm

Spacious breathing room (64–80px section gaps, 24px card padding); micro-spacing 8–16px for UI grouping; aligned grid ensures editorial clarity without density.

## Component Patterns

- **Buttons:** Primary wine-red `bg-primary text-primary-foreground` with active scale-95, secondary cream-to-wine fade; all rounded-md 6px
- **Cards:** Cream base `bg-card rounded-md shadow-sm border border-border`, hover elevates to shadow-md with transition-smooth
- **Badges:** Accent gold text on cream background, small uppercase label, no fill—text only for ratings and labels

## Motion

- **Entrance:** Fade-in + slide-up 0.5s ease-out on section load—subtle, editorial, not bouncy
- **Hover:** Opacity shift on buttons (90%), shadow elevation on cards, all 0.3s smooth cubic-bezier
- **Decorative:** None—focus on interaction feedback and clarity

## Constraints

- No generic warm gradients—use flat OKLCH tokens for authenticity
- No animations beyond fade/slide entrance and hover feedback
- Cards always have visible border + soft shadow (never flat or flush)
- Serif (Lora) display only on headings; body always sans-serif (DM Sans)

## Signature Detail

Deep wine-red primary with gold accents creates premium restaurant presence; warm cream base and soft shadows deliver editorial luxury without rusticity—every surface feels intentional and upscale.
