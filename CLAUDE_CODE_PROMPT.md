# Claude Code Prompt: Lagmodellen Nettside

## Prosjektbeskrivelse

Bygg en komplett Next.js-nettside for **Lagmodellen** — et norsk rammeverk for tverrsektorielt samarbeid i offentlig sektor. Siden skal presentere innholdet fra en 94-siders presentasjon på en interaktiv, navigerbar og visuelt slående måte. Nettsiden skal deployes på Netlify.

Språk på nettsiden: **Norsk (bokmål)**.

---

## Teknisk stack

- **Next.js 14+** med App Router
- **TypeScript**
- **Tailwind CSS** (med custom design tokens)
- **Framer Motion** for animasjoner
- **Netlify-deploy** (statisk export via `next export` eller SSG)
- Ingen database — alt innhold er statisk/hardkodet

---

## Visuell profil og designsystem

### Fargepalett

```css
:root {
  /* Primary */
  --color-primary-dark: #0A4259;     /* Mørk blågrønn — overskrifter, nøkkelelementer */
  --color-primary-light: #FAF3E5;    /* Varm krem — bakgrunn */

  /* Secondary (representerer tre sektorer) */
  --color-secondary-red: #F36C57;    /* Korallrød — offentlig sektor */
  --color-secondary-purple: #8B7BC6; /* Lavendel/lilla — frivillig/ideell */
  --color-secondary-green: #0E8A6B;  /* Smaragdgrønn — privat/samfunn */

  /* Tertiary (lysere varianter for illustrasjoner) */
  --color-tertiary-pink: #F4AFAF;    /* Lys rosa */
  --color-tertiary-lavender: #C4BBE0; /* Lys lavendel */
  --color-tertiary-mint: #7FC3CD;    /* Mint/turkis */
  --color-tertiary-sage: #A8D5BA;    /* Lys grønn */

  /* Accent */
  --color-accent: #E5D7BC;           /* Varm sand/gull — highlight, CTA */

  /* Neutral */
  --color-white: #FFFFFF;
  --color-text-dark: #182284;        /* Mørk blå — brødtekst i presentasjonen */
}
```

### Typografi

- **Overskrifter**: Bruk en varm, moderne serif eller semi-serif. Forslag: `DM Serif Display` eller `Playfair Display`. Presentasjonen bruker en avrundet, varm stil.
- **Brødtekst**: Bruk en ren, lesbar sans-serif. Forslag: `DM Sans` eller `Source Sans 3`.
- **Stemning**: Varm, menneskelig, profesjonell men ikke korporat. Tenk norsk offentlig innovasjon — ikke Silicon Valley.

### Visuell stil

- **Bakgrunn**: Varm krem (#FAF3E5) som hovedbakgrunn, ikke hvit.
- **Former**: Organiske, avrundede former som dekorative elementer (SVG-er følger med som assets). Bruk dem som bakgrunnselementer, section-dividere, og visuelle aksenter.
- **Illustrasjoner**: 6 figurative SVG-illustrasjoner (strek-tegninger av mennesker) brukes til å illustrere prinsippene.
- **Kort-stil**: Bruk avrundede hjørner (border-radius: 16-24px), subtile skygger, og fargeflater fra paletten.
- **Seksjonsbakgrunner**: Veksle mellom krem, rosa (#F4AFAF), og hvit for å skape rytme mellom kapitlene — akkurat som i presentasjonen.

---

## Assets (plasser i `/public/`)

Kopier disse filene til `public/assets/`:

```
Lagmodellen-logo.svg     → /public/assets/logo.svg
LM-figur-1.svg           → /public/assets/figur-innbygger.svg      (person i spotlight — "Innbygger i sentrum")
LM-figur-2.svg           → /public/assets/figur-tverrfaglig.svg    (person som peker opp — "Tverrsektorielle lag")
LM-figur-3.svg           → /public/assets/figur-relasjoner.svg     (to personer med kuler — "Faste relasjoner")
LM-figur-4.svg           → /public/assets/figur-oppfolging.svg     (person som går gjennom portal — "Ett oppfølgingsløp")
LM-figur-5.svg           → /public/assets/figur-samlokalisering.svg (kartpin — "Samlokalisering")
LM-figur-6.svg           → /public/assets/figur-frivillighet.svg   (hender — "Frivillighet")
LM-form-1.svg            → /public/assets/form-1.svg               (dekorativ organisk form)
LM-form-2.svg            → /public/assets/form-2.svg               (dekorativ organisk form)
LM-form-3.svg            → /public/assets/form-3.svg               (dekorativ organisk form)
```

---

## Sidestruktur og navigasjon

### Overordnet layout

- **Sticky header** med logo (venstre), kapittelnavigasjon (senter), og søkefelt (høyre).
- **Sidenavigasjon (sidebar)** som vises på desktop med kapitteloversikt og aktiv indikator basert på scroll-posisjon.
- **Responsivt**: Hamburgermeny på mobil med slide-in navigasjon.
- **Footer** med kontaktinformasjon, bakgrunn om arbeidet, og logoer.
- **Smooth scroll** mellom seksjoner, med URL-oppdatering (hash-routing) for delbarhet.

### Sider/seksjoner

Alt kan bygges som én lang single-page med lazy-loaded seksjoner, ELLER som separate sider per kapittel med en felles layout. **Anbefaling: separate sider per kapittel med en kapitteloversikt som landingsside.**

---

## Innholdsstruktur (komplett)

### Landingsside (`/`)

**Hero-seksjon:**
- Overskrift: "Lagmodellen"
- Undertittel: "Tverrsektorielt samarbeid i praksis"
- Kort intro: "Et rammeverk for å prøve ut Lagmodellen i egen virkelighet"
- CTA-knapp: "Utforsk rammeverket" → scrolle/lenke til kapitteloversikten
- Sitat i hero: "Dette er første gangen jeg opplever reelt tverrfaglig samarbeid" — Ansatt
- Dekorative former (form-1, form-2, form-3) i bakgrunnen

**Kapitteloversikt (grid med kort):**
- 5 kort med fargekoder, ikon og kort beskrivelse:
  1. Introduksjon (Kapittel 0)
  2. Hvorfor Lagmodellen? (Kapittel 1)
  3. Hva er Lagmodellen? (Kapittel 2)
  4. Gevinster og barrierer (Kapittel 3)
  5. Hvordan komme i gang (Kapittel 4)

Hvert kort linker til sin kapittelside.

---

### Kapittel 0: Introduksjon (`/introduksjon`)

**Seksjoner:**

1. **Hva er dette dokumentet?**
   - Et arbeidsdokument laget for å utforske om Lagmodellen kan være en god måte å organisere tjenester på.
   - Gjennom fire kapitler: forstå utfordringer → bli kjent med modellen → vurdere gevinster/barrierer → skissere egne steg.

2. **Hvordan bruke det**
   - Refleksjonsoppgaver underveis.
   - Sett av ca. 3 timer til et arbeidsmøte.
   - Individuell notering → deling i små grupper → felles betraktninger.

3. **Hvem bør delta?**
   - Tjenester, samarbeidspartnere, fagpersoner, ledere som gir et realistisk bilde.
   - De som kjenner målgrupper og virkeligheten best.

4. **Før dere begynner — tre avklaringer:**
   - Hvilken målgruppe snakker vi om?
   - Hvilke tjenester og aktører er relevante?
   - Hva ønsker dere å lære?

---

### Kapittel 1: Hvorfor Lagmodellen? (`/hvorfor`)

**Intro:**
Før vi kan forstå modellen, må vi forstå problembildet den forsøker å svare på. Målet er å løfte frem mønstre som gjør det vanskelig å gi innbyggere helhetlig støtte.

**Seksjoner:**

1. **Systemutfordringer i offentlig sektor**
   Typiske mønstre:
   - **Fragmentering og parallelle løp**: Innbyggere møter mange aktører og må koordinere hjelpen selv.
   - **Standardiserte tjenester**: Løsninger laget for "gjennomsnittsbrukeren", treffer dårlig for de som faller utenfor.
   - **Koordinering fremfor oppfølging**: Ansatte bruker tid på å få systemet til å henge sammen.
   - **Manglende brobygging**: Ulike fagkulturer, styringsnivåer og regelverk skaper barrierer.

2. **Menneskelige konsekvenser**
   - Mange faller mellom tjenester, ingen tar helhetlig ansvar.
   - Brukere forholder seg til mange aktører uten koordinering.
   - Relasjoner er personavhengige og sårbare.
   - Ansatte bruker uforholdsmessig mye tid på samordning.
   - I verste fall forsterker systemet utenforskap.

3. **Hvorfor det angår dere**
   - Mange aktører på ulike nivåer uten felles inngang.
   - Ukoordinerte parallelle prosesser.
   - Lite fleksibilitet til å møte faktiske situasjoner.

4. **Fra utfordring til mulighet**
   - Gjøre friksjon synlig.
   - Se hvor små, riktige grep kan gjøre en forskjell.
   - Redusere belastning på ansatte, gi innbyggere helhetlig tilbud.

5. **Endringsreaksjoner** (tre nivåer)
   - **Mikro (individ)**: Nysgjerrighet blandet med usikkerhet om egen rolle.
   - **Meso (virksomhet)**: Kulturforskjeller mellom avdelinger.
   - **Makro (samarbeid på tvers)**: Ulike tempo og styringslogikker.

6. **Refleksjonsspørsmål** (vis som interaktiv komponent):
   - Hva i utfordringsbildet kjenner dere best igjen?
   - Konkrete situasjoner der innbygger faller mellom tjenester?
   - Hvor er størst overlapp mellom utfordringer?

**Mann om bord — Praksis-case (egen seksjon/ekspanderbar):**

- **Bakgrunn**: Unge menn 18–30 i Trondheim som hadde falt ut av skole, arbeid og sosiale fellesskap.
- **Hva ble gjort**: Lag av tre personer (Trondheim kommune, Nav, Kirkens Bymisjon). Seks prinsipper. Korte læringsperioder.
- **Resultater på tre nivåer:**
  - *Innbyggere*: Trygghet, lavere terskel for hjelp, bedre livskvalitet.
  - *Ansatte*: Høyere arbeidsglede, lavere sykefravær, bedre støtte.
  - *Organisasjoner*: Effektivt samarbeid, redusert dobbeltarbeid, raskere beslutninger.
- **Mønstre som fungerte**: Ett lag over tid, samme mennesker/inngang/plan, jevnlige fysiske møtepunkter, tverrsektoriell kompetanse, frivillighet, korte læringssløyfer.

---

### Kapittel 2: Hva er Lagmodellen? (`/hva-er-lagmodellen`)

**Intro:** Organisering, prinsipper, og eksempler fra praksis.

**Seksjoner:**

1. **Organisering: Ett lag rundt innbygger**
   - Kjernen: organisere seg som ett lag rundt én innbygger/familie.
   - Alle aktører likeverdige i mål, stemme og ansvar — bidrar ulikt etter kompetanse.
   - **Kjernelag**: 2–4 personer, faste ressurser over tid.
   - **Utvidet krets**: Spesialister ved behov.
   - **Rammer**: Én enkel inngang, én felles plan, beslutninger nær innbygger.

   **Likeverd i praksis:**
   - Felles mål først (innbyggerens mål samler laget).
   - Ulik innsats, felles ansvar.
   - Én stemme mot innbygger.

   **Tre varianter av lagtyngde** (vis som visuelt diagram):
   - **Offentlig tjenestetyngde**: Offentlige tjenester bærer mest kapasitet, ideell/frivillig styrker relasjon.
   - **Ideell/frivillig-tyngde**: Frivillig leder relasjon og nærvær, offentlige avklarer rettigheter.
   - **Partner-/samfunnstyngde**: Andre aktører er nøkkel (kriminalomsorg, idrett, næringsliv), offentlige støtter med fag.

2. **De seks prinsippene** (vis som interaktivt grid med kort som kan ekspanderes)

   For hvert prinsipp — vis: kort beskrivelse, utdyping, hvorfor viktig, erfaring fra Mann om bord, refleksjonsspørsmål.

   **Prinsipp 1: Innbygger i sentrum**
   - Ikon: figur-innbygger.svg
   - Farge: accent/gul
   - Kort: Laget bygges rundt én innbygger eller familie som søker hjelp.
   - Utdyping: Oppfølgingen tar utgangspunkt i menneskers faktiske behov, ikke organisasjonsstrukturer. Spørsmålet: Hva trenger denne personen?
   - Hvorfor: Mange opplever å ikke bli sett. Bygge laget rundt personen øker sjansen for at hjelpen virker.
   - MoB-erfaring: Mange menn åpnet ikke opp før oppfølgingen handlet om deres faktiske situasjon. Laget brukte tid på å forstå hverdagen før tiltak.
   - Refleksjon: Hvordan involverer dere innbyggere i dag? Gode eksempler? Hva ville det bety å "bygge laget rundt personen"?

   **Prinsipp 2: Tverrsektorielle lag**
   - Ikon: figur-tverrfaglig.svg
   - Farge: secondary-red
   - Kort: Laget settes sammen på tvers av tjenester og nivåer.
   - Utdyping: Ansatte fra flere organisasjoner tar sammen ansvar for én person. Ikke samarbeide på papiret, men sitte sammen, vurdere sammen, handle sammen.
   - Hvorfor: Ukoordinerte parallelle prosesser. Ett lag gir bedre oversikt og mer effektiv kompetansebruk.
   - MoB-erfaring: Beslutninger tatt raskere med tre aktører tett sammen. Redusert dobbeltarbeid.
   - Refleksjon: Hvem måtte sittet i et lag? Hvilke aktører samarbeider dere med? Hvordan inngå i lag med reell verdi?

   **Prinsipp 3: Faste relasjoner**
   - Ikon: figur-relasjoner.svg
   - Farge: secondary-purple
   - Kort: Faste sammensetninger av ansatte, med deltidsstillinger og tydelig tilhørighet.
   - Utdyping: Stabil sammensetning, innbygger møter samme personer gjennom hele oppfølgingen.
   - Hvorfor: Stabilitet gir tillit. Felles forståelse. Mindre sårbarhet.
   - MoB-erfaring: Stabile relasjoner var avgjørende. Lettere å snakke om vanskelige ting. Færre falt ut.
   - Refleksjon: Hvor stabile er relasjoner/roller hos dere? Hva skjer når nøkkelperson slutter?

   **Prinsipp 4: Ett oppfølgingsløp med enkel tilgang**
   - Ikon: figur-oppfolging.svg
   - Farge: secondary-green
   - Kort: Innbyggeren opplever hjelpen som ett helhetlig tilbud, med enkel inngang.
   - Utdyping: Én inngang, én plan, én vei videre — uavhengig av antall aktører.
   - Hvorfor: Ukoordinerte prosesser skaper stress. Ett koordinert løp gjør det enklere.
   - MoB-erfaring: "Enkel tilgang" ble reell da laget tok ansvar for én felles forståelse. Samme plan, samme språk.
   - Refleksjon: Typisk oppfølgingsløp i dag? Parallelle prosesser? Første skritt for enklere inngang?

   **Prinsipp 5: Samlokalisering**
   - Ikon: figur-samlokalisering.svg
   - Farge: tertiary-mint
   - Kort: Oppfølgingen skal som hovedregel utføres fra samme sted.
   - Utdyping: Fysisk nærhet gjør samarbeid til en del av hverdagen. Raske avklaringer, sterkere fellesskap.
   - Hvorfor: Reduserer misforståelser, bygger kultur, gir sammenheng.
   - MoB-erfaring: Raske avklaringer mellom møtene. Saker løst på minutter. Færre misforståelser.
   - Refleksjon: Sitter dere sammen eller hver for dere? Hvor kunne samlokalisering gitt bedre samarbeid?

   **Prinsipp 6: Frivillighet**
   - Ikon: figur-frivillighet.svg
   - Farge: tertiary-pink
   - Kort: Oppfølging skjer på innbyggerens eget initiativ og ønske.
   - Utdyping: Ingen tvinges inn. Gjelder også organisasjoner.
   - Hvorfor: Frivillighet bygger tillit og motivasjon.
   - MoB-erfaring: Frivillighet gjorde det lettere for mennene å være ærlige. Mer stabilt oppmøte.
   - Refleksjon: Opplever innbyggere hjelpen som frivillig? Hvordan synliggjøre reell innflytelse?

---

### Kapittel 3: Gevinster og barrierer (`/gevinster-og-barrierer`)

**Intro:** Hva kan vi vinne, og hva må vi være forberedt på? Realistisk bilde: stor verdi, men krever aktive endringer.

**Seksjoner:**

1. **Gevinster** (vis som tre kolonner med ikoner)

   **For innbyggerne:**
   - Lavere terskel for å be om hjelp
   - Et helhetlig og samordnet tilbud
   - Bedre forutsetninger for mestring og deltakelse

   **For de ansatte:**
   - Mer arbeidsglede og tydeligere fellesskap
   - Kontinuerlig faglig utvikling i laget
   - Mer støtte og lavere belastning

   **For organisasjonene:**
   - Bedre koordinering og raskere vei til handling
   - Mindre dobbeltarbeid og bedre ressursbruk
   - Større treffsikkerhet og økt tillit

2. **Barrierer** (vis som expandable cards)

   - **Målkonflikter**: Aktører med ulike styringssignaler. Felles fokus på innbyggerens mål balanserer.
   - **Rammer og regelverk**: Journalplikt, finansieringsmodeller skaper usikkerhet. Faste relasjoner og tillit løser.
   - **Lederforankring**: Uten lederstøtte vanskelig å holde retning. Faste lag og tydelige roller hjelper.
   - **Praktiske utfordringer**: Tid og koordinering. Prinsippene om faste relasjoner, samlokalisering og enkel inngang.
   - **Kulturforskjeller**: Ulike fagkulturer. Tverrsektorielle lag og samlokalisering bygger kultur.

3. **Refleksjonsspørsmål:**
   - Hvilke gevinster er mest verdifulle hos dere?
   - Hvilke barrierer kan oppstå raskest?
   - Hva må være på plass for å realisere gevinstene?
   - Hvordan teste i liten skala?

---

### Kapittel 4: Hvordan komme i gang (`/kom-i-gang`)

**Intro:** Praktisk vei inn. Start i liten skala, lær ofte, juster underveis. Ikke en ferdig kokebok.

**12 steg** (vis som vertikal tidslinje/stepper med ekspanderbare kort):

Hvert steg har: Mål (én setning), Hva gjør dere, Praktiske avklaringer, Fallgruver, Hva innbyggeren merker.

**Steg 1: Forankre hensikten**
- Mål: Et delt "hvorfor" og en ramme som tåler læring.
- Gjør: Mandat på én side med formål, avgrensning, varighet 6–10 uker, hvilke prinsipper å teste.
- Avklaringer: Mandat og 2–3 læringsspørsmål.
- Fallgruver: Utydelig hensikt, for store ambisjoner, uklare roller.
- Innbygger merker: Lite foreløpig, men forventningsstyring forberedes.

**Steg 2: Velg fokus og målgruppe**
- Mål: Avgrense slik at dere faktisk kan lære.
- Gjør: Velg én målgruppe der fragmentering merkes. Definer inn- og ut-kriterier.
- Avklaringer: Målgruppebeskrivelse, etikk-sjekk, plan for inngang.
- Fallgruver: Uklare grenser, for bred målgruppe.
- Innbygger merker: Klart budskap om hvem tilbudet gjelder, at det er frivillig.

**Steg 3: Sett sammen laget**
- Mål: Et lite tverrsektorielt lag som faktisk møtes.
- Gjør: 2–3 offentlige tjenester + 1 frivillig/ideell. Rolleavklaringer. Avklar tid.
- Avklaringer: Lagavklaringer, faste møtepunkter, kontaktliste.
- Fallgruver: Uklare roller, hyppige personbytter.
- Innbygger merker: Samme folk, ikke nytt ansikt hver gang.

**Steg 4: Én enkel inngang**
- Mål: Lett å komme i kontakt, lett å ta imot.
- Gjør: Ett kontaktpunkt, ukentlig inntaksmøte, standardisert mottak.
- Avklaringer: Prosesskart, svartidsmål, tekstmal.
- Fallgruver: Flere parallelle innganger, ingen samlet oversikt.
- Innbygger merker: Én tydelig vei inn, rask respons.

**Steg 5: Operasjonaliser prinsippene**
- Mål: Gjøre prinsippene håndgripelige.
- Gjør: Kjøreregler på én side. Beslutninger i laget, én plan, faste deltakere.
- Avklaringer: Kjøreregler og planmal.
- Fallgruver: Prinsipper blir plakat i stedet for praksis.
- Innbygger merker: God info om hva laget er.

**Steg 6: Minste nødvendige juss**
- Mål: Trygge deling uten å stanse læring.
- Gjør: Journalfør hver for dere. Del med samtykke. Avklar hvert møte hva som kan deles.
- Avklaringer: Samtykkeskjema (essensielt!).
- Fallgruver: Vente på perfekte avtaler, uklarhet om ansvar.
- Innbygger merker: Klart språk om samtykke.

**Steg 7: Helt praktisk og arenaer**
- Mål: Gjøre samarbeid enkelt i hverdagen.
- Gjør: Ukentlig lagmøte, felles tavle, faste tider, samlokalisering.
- Avklaringer: Møtemal, ukeplan, enkel logg.
- Fallgruver: Lange e-posttråder uten beslutninger.
- Innbygger merker: Enkel kontakt, drop-in/fast trefftid.

**Steg 8: Start med konkrete saker**
- Mål: Omsette prinsippene i praksis.
- Gjør: Velg 3–5 saker. Forventningssamtale. Avklar roller. Innhent samtykke.
- Avklaringer: Mal for forventningssamtale, målnotat, samtykkeskjema.
- Fallgruver: Tiltak uten felles mål.
- Innbygger merker: Mål formulert i eget språk, én plan, frivillighet bekreftet.

**Steg 9: Jobb i korte læringssløyfer**
- Mål: Lære i et rolig tempo.
- Gjør: Perioder på 2–3 uker med læringsspørsmål. Del hva dere prøvde, observerte, vil justere.
- Avklaringer: Læringsmål, læringslogg, visningsnotat.
- Fallgruver: Lange planer uten praksis, tiltak uten refleksjon.
- Innbygger merker: Hyppige små forbedringer.

**Steg 10: Følg med på noen få signaler**
- Mål: Måle nok til å lære.
- Gjør: 3–5 indikatorer + kvalitative observasjoner.
- Avklaringer: Læringstavle, kort oppsummering.
- Fallgruver: Overmåling, tall uten tolkning.
- Innbygger merker: Mulighet til å si fra om oppfølgingen.

**Steg 11: Beslutningsport**
- Mål: Ta bevisste valg basert på læring.
- Gjør: Vurder kapasitet, støtte, etterspørsel, samarbeid. Fortsett, juster eller stopp.
- Avklaringer: Kort beslutningsnotat.
- Fallgruver: Fortsette av vane, stoppe uten å hente læring.
- Innbygger merker: Klar og forutsigbar informasjon.

**Steg 12: Skalere organisk**
- Mål: Vokse uten å miste kjernen.
- Gjør: Trinnvis. Øk volum i samme målgruppe før utvidelse. Prinsippsjekk ved utvidelse.
- Avklaringer: Skalaplan, praksisbibliotek.
- Fallgruver: Gå for raskt til ny målgruppe.
- Innbygger merker: Stabil kvalitet, samme enkle inngang.

**Sjekkliste før oppstart** (vis som interaktiv checklist):
- [ ] Mandat og læringsspørsmål avklart
- [ ] Målgruppe og kriterier definert
- [ ] Lag bemannet med roller, tid og kalender
- [ ] Én enkel inngang og samtykkeflyt på plass
- [ ] Kjøreregler skrevet og forankret
- [ ] Praktiske arenaer etablert
- [ ] Første læringsperiode og indikatorer valgt

**Fallgruver å unngå:**
- Koordinere mer uten å gjøre det enklere for innbygger
- Organisere alt som prosjekt ved siden av drift
- Hyppige bytter av folk og uklare roller
- Overdesigne før dere starter
- Prøve for mye samtidig

---

### Avslutning (`/avslutning`)

- Oppsummering av reisen
- Forpliktelsesformel (interaktiv komponent der brukeren kan fylle inn):
  > Vi vil prøve [tiltak] for [målgruppe] for å [forventet effekt], innen [tidspunkt], og vi vet at vi er på rett vei når [suksesssignal].
- Kontaktinformasjon:
  - Kristin Nordaune — kristin.nordaune@trondheim.kommune.no
  - Erik Lånke Solbu — Erik.Lanke.Solbu@nav.no
  - Halvor Skrede — Halvor@comte.no
- Bakgrunn: Lagmodellen ble utviklet i prosjektet Mann om bord med støtte fra Stimulab (Digdir + DOGA). Spredningsmateriell utviklet med Comte Bureau.

---

## Interaktive features

1. **Søkefunksjon**: Enkel tekstsøk som filtrerer innhold på tvers av kapitler. Vis resultater som kort med kontekst og lenke til riktig seksjon.

2. **Prinsipp-utforsker**: Grid av 6 prinsippkort som kan klikkes for å ekspandere og vise: beskrivelse, utdyping, praksis-erfaring, refleksjonsspørsmål.

3. **12-stegs tidslinje**: Vertikal stepper med ekspanderbare steg. Vis mål, handlinger, fallgruver og innbygger-perspektiv.

4. **Refleksjonsspørsmål**: Vises som stiliserte kort med ikon. Eventuelt klikkbare for å "notere" (lagres i localStorage).

5. **Sjekkliste**: Interaktiv checklist med avkrysning (lagres i localStorage).

6. **Forpliktelsesformel**: Fyll-inn-komponent der brukere skriver inn verdier i malen, med mulighet til å kopiere eller laste ned som tekst.

7. **Kapittel-navigasjon**: Tydelig breadcrumb og aktiv seksjon-indikator. Mulighet for å hoppe mellom kapitler.

8. **Vekslende seksjonsbakgrunner**: Krem → rosa → hvit → grønn osv. for visuell rytme.

---

## Animasjoner (Framer Motion)

- **Page transitions**: Fade + slide mellom kapitler.
- **Scroll-reveal**: Innholdsblokker fader inn og glir opp ved scroll.
- **Kort-hover**: Subtil løft og skygge-endring.
- **Prinsippkort-ekspansjon**: Smooth expand/collapse med layoutanimasjon.
- **Stepper-progresjon**: Animert linje som vokser nedover.
- **Dekorative former**: Subtil parallax-bevegelse ved scroll.
- **Sitat**: Fade-in med forsinkelse, gjerne med en myk bakgrunns-gradient.

---

## Filstruktur (forslag)

```
/app
  /layout.tsx              — Rotlayout med header, sidebar, footer
  /page.tsx                — Landingsside med hero og kapitteloversikt
  /introduksjon/page.tsx   — Kapittel 0
  /hvorfor/page.tsx        — Kapittel 1 (inkl. Mann om bord)
  /hva-er-lagmodellen/page.tsx — Kapittel 2
  /gevinster-og-barrierer/page.tsx — Kapittel 3
  /kom-i-gang/page.tsx     — Kapittel 4
  /avslutning/page.tsx     — Avslutning

/components
  /layout
    Header.tsx
    Sidebar.tsx
    Footer.tsx
    MobileNav.tsx
  /shared
    SectionWrapper.tsx      — Wrapper med bakgrunnsfarge og spacing
    ReflectionCard.tsx       — Refleksjonsspørsmål-komponent
    QuoteBlock.tsx           — Sitatblokk
    PrincipleCard.tsx        — Prinsipp-kort (grid + ekspanderbart)
    StepCard.tsx             — Steg-kort for 12-stegs prosessen
    Checklist.tsx            — Interaktiv sjekkliste
    CommitmentFormula.tsx    — Forpliktelsesformel
    SearchBar.tsx            — Søkefunksjon
    ChapterCard.tsx          — Kapittelkort for oversikten
    MannOmBordSection.tsx    — Case-studie seksjon
    BarrierCard.tsx          — Expandable barriere-kort
    GainColumn.tsx           — Gevinst-kolonne
  /decorative
    OrganicShape.tsx         — SVG dekorative former
    ScrollReveal.tsx         — Framer Motion scroll-animasjon wrapper

/lib
  content.ts                — Alt innhold som strukturerte objekter
  search.ts                 — Søkelogikk

/public
  /assets
    logo.svg
    figur-*.svg (6 stk)
    form-*.svg (3 stk)

/styles
  globals.css               — Tailwind + CSS variabler
```

---

## Viktige designprinsipper

1. **Varm og menneskelig** — ikke kald og korporat. Bruk den varme kremfargen som base.
2. **Organiske former** — SVG-formene brukes som dekor mellom seksjoner, i bakgrunner, som visuelle aksenter.
3. **Tydelig informasjonshierarki** — overskrifter i mørk blågrønn (#0A4259), brødtekst i mørk blå (#182284), aksenter i korall (#F36C57).
4. **Seksjonskontroller** — bruk fargeskift mellom seksjoner for å markere kapittelbytte.
5. **Illustrasjonene** — de 6 figurene er strek-tegninger i mørk blå (#182284). Bruk dem ved tilhørende prinsipp.
6. **Responsivt** — Fungerer godt på desktop, tablet og mobil. Sidebar skjules på mobil.
7. **Tilgjengelig** — Semantisk HTML, god kontrast, fokus-stiler, alt-tekster.

---

## Deploy-instruksjoner

Prosjektet skal deployes til Netlify:

```bash
# I next.config.js:
const nextConfig = {
  output: 'export',  // Statisk export for Netlify
  images: {
    unoptimized: true, // Nødvendig for statisk export
  },
}

# netlify.toml:
[build]
  command = "npm run build"
  publish = "out"
```

---

## Oppsummering til Claude Code

Bygg hele denne nettsiden fra scratch i et tomt Next.js-repo. Bruk innholdet og strukturen over som kilde. Sørg for:

1. Alle sider med komplett innhold (ikke placeholder-tekst)
2. Interaktive komponenter (søk, prinsippkort, stepper, sjekkliste, forpliktelsesformel)
3. Visuell profil tro mot Lagmodellens designsystem (farger, typografi, organiske former)
4. Framer Motion-animasjoner for scroll-reveal, kort-ekspansjon og sideoverganger
5. Responsiv design med mobilvennlig navigasjon
6. Klar for Netlify-deploy med statisk export
7. SVG-assets plassert korrekt i public/assets/

Start med å sette opp prosjektet (`npx create-next-app@latest`), installer avhengigheter, kopier assets, og bygg side for side.
