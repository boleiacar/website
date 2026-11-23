# Mobile app screenshots: index

Real screenshots of the Boleia mobile app, to use as reference and inspiration when the landing page shows app screens (phone mockups, feature sections, "how it works" steps).

**Do not publish on the website:** `1000590981.png`, `1000590982.png` and `1000590984.png`. They show a real person's name, email and password, and two of them show error states. Recreate those screens with placeholder data instead.

## Screens

| File | Screen | Lang | Good for |
|---|---|---|---|
| `1000590972.png` | Splash: yellow Boleia logo on black | PT | Brand / logo reference |
| `1000590973.png` | Language picker (Português · Angola / English) with selectable cards | PT | "Portuguese and English" benefit |
| `1000590974.png` | Onboarding 1/3, "Viajar em conjunto": intercity rides in Angola | PT | Hero / about imagery |
| `1000590975.png` | Onboarding 2/3, "Partilhe a sua viagem": drivers publish trips, passengers book ahead | PT | How it works |
| `1000590976.png` | Onboarding 3/3, "Seguro e prático": verified drivers, secure payment, real ratings | PT | Safety / benefits |
| `1000590977.png`, `1000590980.png` | Welcome, "A sua próxima boleia já vai a caminho." + "Continuar como passageiro / motorista" | PT | Hero CTA pattern (passenger vs driver) |
| `1000590981.png` | Login form (empty) | PT | Not for display (see above) |
| `1000590982.png` | Login with error toast | PT | **Do not use** (personal data) |
| `1000590984.png` | Passenger home: "Encontrar boleia" search card (De / Para / date / seats), next trip, recent routes, bottom nav | PT | Passenger step 1 "Search" (recreate without name) |
| `1000590985.png` | Search results error state | PT | Not for display |
| `WhatsApp … 18.55.12.jpeg` | Publish trip, step 2/6: schedule (date, time) | EN | Driver step 2 "Publish a trip" |
| `WhatsApp … 18.55.13.jpeg` | Publish trip, step 4/6: seats stepper + luggage S/M/L | EN | "Travel your way" (luggage) |
| `WhatsApp … 18.55.14 (1).jpeg` | Publish trip, step 6/6: fare, AOA 700/seat recommended, stopover price | EN | "Fixed, fair prices" / app suggests price |
| `WhatsApp … 18.55.14 (2).jpeg` | Fare summary: total if every seat booked + price-policy note | EN | Fair pricing |
| `WhatsApp … 18.55.14 (3).jpeg` | Success: "Your trip is published" | EN | Driver step 3 "Fill your seats" |
| `WhatsApp … 18.55.14.jpeg` | Publish trip, step 5/6: preference chips (No smoking, Music ok, Quiet ride) + description | EN | "Travel your way" (preferences) |
| `WhatsApp … 18.55.15 (1).jpeg` | My trips, Published tab: trip cards with status badge | EN | Driver dashboard |
| `WhatsApp … 18.55.15.jpeg` | Published trip detail: map route Por Do Sol → Viana (stopover) → Cacuaco, 58 km, AOA 700/seat | EN | Strongest "trip" showcase |
| `WhatsApp … 18.55.16 (1).jpeg` | My trips, Completed tab (Talatona → Huambo, etc.) | EN | City + long-distance routes |
| `WhatsApp … 18.55.16 (2).jpeg` | My trips, Canceled tab, empty state | EN | Not for display |
| `WhatsApp … 18.55.16 (3).jpeg` | Notifications: booking confirmed, driver arriving, trip reminder | EN | Notifications / real-time feature |
| `WhatsApp … 18.55.16.jpeg` | My trips, Upcoming tab, empty state | EN | Not for display |

## App visual language (match it on the website)

For exact values use `design-system/tokens.css` and `design-system/README.md`; they supersede the eyeballed notes below. Colours are approximate, sampled by eye from the screenshots:

- **Theme:** dark-first. Near-black background (~`#050608`), card surfaces (~`#171B1D`) with a subtle 1px lighter border.
- **Primary:** Boleia yellow (~`#F2E01F`), with black text on yellow buttons.
- **Text:** white headings, muted grey (~`#8A8F94`) body and secondary text.
- **Status:** green (~`#2ECC71`) for success, prices and "Completed"; dark-red fill with red text for destructive actions ("Cancel trip"); a yellow-tint pill for "Published".
- **Shape:** large radius (~16px) on cards, inputs and buttons. Full-width pill-ish primary buttons, and outline buttons with a yellow border for secondary actions.
- **Type:** geometric sans with wide letter-spacing (looks like Plus Jakarta Sans).
- **Icons:** thin outline icons in yellow (map pin, navigation, calendar, users, search, bell), which map directly onto Lucide.
- **Patterns:** segmented tabs with a yellow active pill, a step progress bar ("Step 2 of 6"), +/− steppers, chip toggles, bottom nav with a central yellow FAB, toasts at the top.
- **Logo:** "Boleia" wordmark where the "o" is a map pin containing a taxi.
