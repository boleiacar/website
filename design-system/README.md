Boleia is an intercity carpooling app for Angola. Drivers publish planned trips and offer free seats; passengers book ahead. The interface is dark, yellow-accented and plain. Everything below was measured from the shipping Android app; lengths are dp written as px.

## Content fundamentals

- **Language:** Portuguese as written in Angola, with European spelling and vocabulary: *boleia*, *palavra-passe*, *Iniciar sessão*, *Registar*, *Seguinte*, *Ignorar*, *partilha*. English is offered as a second language (“English — Reino Unido / Estados Unidos”).
- **Address:** formal third person, never *tu*: “Selecione o idioma que prefere…”, “Encontre boleias…”, “Partilhe a sua viagem”, “Tente novamente”.
- **Casing:** sentence case everywhere, buttons included (“Confirmar e continuar”). Placeholders are lowercase imperatives: “introduza o email”, “introduza a palavra-passe”.
- **Length:** titles of two or three words (“Viajar em conjunto”, “Seguro e prático”); body copy one or two short sentences. Lists of benefits are comma-separated (“Motoristas verificados, reserva fácil, pagamento seguro…”).
- **Errors:** title “Erro”, then a plain cause and what to do: “Email ou palavra-passe incorretos.”, “Algo correu mal. Tente novamente.”
- **Empty states** start with “Ainda não há…”. No emoji, no exclamation marks.

## Visual foundations

- **Color.** One dark theme. Screens sit on `bg`; filled controls and cards use `surface`; outlines use `border`. `primary` yellow is the only accent: primary buttons, the selected state, active navigation, field icons and links. Text on a yellow fill is always `on-primary`, never white. Headings and values are `text`; secondary copy is `text-subtle` on `bg` and `text-muted` on `surface`.
- **Type.** Plus Jakarta Sans only (files in `fonts/`, 400–700). Titles are 500–600, the welcome headline 700, everything else 400. Use the styles by name: `display` for auth titles, `display-onboarding` for slides, `title`/`app-bar` for screen titles, `section` for home sections, `body` for copy and values, `label` above inputs, `caption` for hints, `overline` for the small De / Para labels.
- **Layout.** A single column with an 18dp side margin (`space-gutter`) on every screen. Forms put the primary button full width under the content; onboarding puts two equal buttons side by side at the bottom; the home screen scrolls above a fixed `BottomNav`.
- **Spacing.** `space-sm` label to input, `space-md` between stacked fields, `space-lg` inside cards, `space-xl` between form groups, `space-2xl` between home sections.
- **Shape.** Rounded, never sharp: `radius-md` for inputs, options, cards and form buttons; `radius-lg` for search fields and onboarding buttons; `radius-2xl` for the search card and the navigation sheet; `radius-pill` for the search button, dots, avatar and round icon buttons.
- **Borders and depth.** 1dp outlines (`border-width`), no shadows. Hierarchy comes from `surface` against `bg` and from a yellow border on the selected item.
- **Imagery.** Warm, natural-light photos of young Angolan travellers with the black-and-yellow Boleia car: on the street, on a scenic road, at a hotel. Photos are full-bleed at the top of the screen and fade into `bg` over their lower half; the welcome screen uses a darkened full-screen photo behind the text.
- **States.** Selected = 1dp `primary` border plus a checked checkbox. Active tab = `primary` icon and label plus a 4dp bar. Focus: a 2px `text` outline, offset 2px (not observed in the app — added for keyboard use).
- **Motion.** Toasts slide and fade in from the top. Nothing else observed.

## Logo

- The wordmark is “Boleia” with the “o” replaced by a map pin holding a taxi. Use `boleia-wordmark.svg` (yellow) on `bg`, and `boleia-wordmark-dark.svg` on `primary`. Never recolour it any other way or set the word in type as a substitute for the wordmark.
- The pin alone (`boleia-pin.svg`) is the symbol: the app icon and the `BrandLockup`.
- The splash screen is the yellow wordmark centred on `bg`, about 205dp wide.

## Iconography

- Lucide outline icons (lucide.dev), 2px stroke, round joins, drawn in the colour of the text beside them; `primary` inside fields. Sizes: `icon-sm` in buttons and toolbars, `icon-md` in fields, `icon-lg` in navigation and the header. Verified by overlaying each icon on the screenshots.
- **Substituted:** the Mensagens tab icon is a speech bubble with two lines inside; Lucide has no exact match, so the bundle uses `message-circle`, and a raster crop of the real glyph is kept in Icons. Replace it with the app's own SVG.
- Flags are round discs with a white ring (Flags group). No emoji anywhere.

## Using this system

Load `tokens.css` (or read `tokens.json`), the fonts, `components/bundle.css` and `components/bundle.js` with React 18; the components are on `window.Boleia`. Build screens from the components and the named type styles. Do not invent new colours: a new state should reuse `primary`, `text-muted` or `border-strong`.
