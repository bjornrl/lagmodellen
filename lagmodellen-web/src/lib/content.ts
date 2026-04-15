// ─── Types ────────────────────────────────────────────────────────────────────

export interface Chapter {
  id: number;
  title: string;
  slug: string;
  description: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  intro: string;
  cta: string;
  quote: { text: string; author: string };
}

export interface Principle {
  id: number;
  title: string;
  icon: string;
  color: string;
  short: string;
  description: string;
  why: string;
  mobExperience: string;
  reflection: string[];
}

export interface Step {
  number: number;
  title: string;
  goal: string;
  actions: string;
  clarifications: string;
  pitfalls: string;
  citizenNotices: string;
}

export interface GainCategory {
  category: string;
  items: string[];
}

export interface Barrier {
  title: string;
  description: string;
  solution: string;
}

export interface Contact {
  name: string;
  email: string;
}

export interface SystemChallenge {
  title: string;
  description: string;
}

export interface ChangeReaction {
  level: string;
  label: string;
  description: string;
}

export interface TeamVariant {
  title: string;
  description: string;
}

export interface MannOmBordCase {
  background: string;
  approach: string;
  results: {
    innbyggere: string;
    ansatte: string;
    organisasjoner: string;
  };
  patterns: string;
}

export interface SearchableItem {
  title: string;
  text: string;
  chapter: number;
  slug: string;
}

// ─── Navigation / Chapters ───────────────────────────────────────────────────

export const chapters: Chapter[] = [
  {
    id: 0,
    title: 'Introduksjon',
    slug: 'introduksjon',
    description: 'Hva er dette dokumentet og hvordan bruke det',
  },
  {
    id: 1,
    title: 'Hvorfor Lagmodellen?',
    slug: 'hvorfor',
    description: 'Utfordringer i offentlig sektor som modellen adresserer',
  },
  {
    id: 2,
    title: 'Hva er Lagmodellen?',
    slug: 'hva-er-lagmodellen',
    description: 'Organisering, prinsipper og eksempler fra praksis',
  },
  {
    id: 3,
    title: 'Gevinster og barrierer',
    slug: 'gevinster-og-barrierer',
    description: 'Hva kan vi vinne og hva må vi være forberedt på',
  },
  {
    id: 4,
    title: 'Hvordan komme i gang',
    slug: 'kom-i-gang',
    description: 'Praktisk vei inn med 12 konkrete steg',
  },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero: Hero = {
  title: 'Lagmodellen',
  subtitle: 'Tverrsektorielt samarbeid i praksis',
  intro: 'Et rammeverk for å prøve ut Lagmodellen i egen virkelighet',
  cta: 'Utforsk rammeverket',
  quote: {
    text: 'Dette er første gangen jeg opplever reelt tverrfaglig samarbeid',
    author: 'Ansatt',
  },
};

// ─── Principles (Chapter 2) ──────────────────────────────────────────────────

export const principles: Principle[] = [
  {
    id: 1,
    title: 'Innbygger i sentrum',
    icon: 'figur-innbygger.svg',
    color: 'accent',
    short: 'Laget bygges rundt én innbygger eller familie som søker hjelp.',
    description:
      'Oppfølgingen tar utgangspunkt i menneskers faktiske behov, ikke organisasjonsstrukturer. Spørsmålet: Hva trenger denne personen?',
    why: 'Mange opplever å ikke bli sett. Bygge laget rundt personen øker sjansen for at hjelpen virker.',
    mobExperience:
      'Mange menn åpnet ikke opp før oppfølgingen handlet om deres faktiske situasjon. Laget brukte tid på å forstå hverdagen før tiltak.',
    reflection: [
      'Hvordan involverer dere innbyggere i dag?',
      'Har dere gode eksempler?',
      "Hva ville det bety å 'bygge laget rundt personen'?",
    ],
  },
  {
    id: 2,
    title: 'Tverrsektorielle lag',
    icon: 'figur-tverrfaglig.svg',
    color: 'secondary-red',
    short: 'Laget settes sammen på tvers av tjenester og nivåer.',
    description:
      'Ansatte fra flere organisasjoner tar sammen ansvar for én person. Ikke samarbeide på papiret, men sitte sammen, vurdere sammen, handle sammen.',
    why: 'Ukoordinerte parallelle prosesser. Ett lag gir bedre oversikt og mer effektiv kompetansebruk.',
    mobExperience: 'Beslutninger tatt raskere med tre aktører tett sammen. Redusert dobbeltarbeid.',
    reflection: [
      'Hvem måtte sittet i et lag?',
      'Hvilke aktører samarbeider dere med?',
      'Hvordan inngå i lag med reell verdi?',
    ],
  },
  {
    id: 3,
    title: 'Faste relasjoner',
    icon: 'figur-relasjoner.svg',
    color: 'secondary-purple',
    short: 'Faste sammensetninger av ansatte, med deltidsstillinger og tydelig tilhørighet.',
    description: 'Stabil sammensetning, innbygger møter samme personer gjennom hele oppfølgingen.',
    why: 'Stabilitet gir tillit. Felles forståelse. Mindre sårbarhet.',
    mobExperience:
      'Stabile relasjoner var avgjørende. Lettere å snakke om vanskelige ting. Færre falt ut.',
    reflection: [
      'Hvor stabile er relasjoner/roller hos dere?',
      'Hva skjer når nøkkelperson slutter?',
    ],
  },
  {
    id: 4,
    title: 'Ett oppfølgingsløp med enkel tilgang',
    icon: 'figur-oppfolging.svg',
    color: 'secondary-green',
    short: 'Innbyggeren opplever hjelpen som ett helhetlig tilbud, med enkel inngang.',
    description: 'Én inngang, én plan, én vei videre — uavhengig av antall aktører.',
    why: 'Ukoordinerte prosesser skaper stress. Ett koordinert løp gjør det enklere.',
    mobExperience:
      '"Enkel tilgang" ble reell da laget tok ansvar for én felles forståelse. Samme plan, samme språk.',
    reflection: [
      'Hva er et typisk oppfølgingsløp i dag?',
      'Finnes det parallelle prosesser?',
      'Hva ville vært første skritt for enklere inngang?',
    ],
  },
  {
    id: 5,
    title: 'Samlokalisering',
    icon: 'figur-samlokalisering.svg',
    color: 'tertiary-mint',
    short: 'Oppfølgingen skal som hovedregel utføres fra samme sted.',
    description:
      'Fysisk nærhet gjør samarbeid til en del av hverdagen. Raske avklaringer, sterkere fellesskap.',
    why: 'Reduserer misforståelser, bygger kultur, gir sammenheng.',
    mobExperience: 'Raske avklaringer mellom møtene. Saker løst på minutter. Færre misforståelser.',
    reflection: [
      'Sitter dere sammen eller hver for dere?',
      'Hvor kunne samlokalisering gitt bedre samarbeid?',
    ],
  },
  {
    id: 6,
    title: 'Frivillighet',
    icon: 'figur-frivillighet.svg',
    color: 'tertiary-pink',
    short: 'Oppfølging skjer på innbyggerens eget initiativ og ønske.',
    description: 'Ingen tvinges inn. Gjelder også organisasjoner.',
    why: 'Frivillighet bygger tillit og motivasjon.',
    mobExperience:
      'Frivillighet gjorde det lettere for mennene å være ærlige. Mer stabilt oppmøte.',
    reflection: [
      'Opplever innbyggere hjelpen som frivillig?',
      'Hvordan synliggjøre reell innflytelse?',
    ],
  },
];

// ─── 12 Steps (Chapter 4) ────────────────────────────────────────────────────

export const steps: Step[] = [
  {
    number: 1,
    title: 'Forankre hensikten',
    goal: 'Et delt "hvorfor" og en ramme som tåler læring.',
    actions:
      'Mandat på én side med formål, avgrensning, varighet 6–10 uker, hvilke prinsipper å teste.',
    clarifications: 'Mandat og 2–3 læringsspørsmål.',
    pitfalls: 'Utydelig hensikt, for store ambisjoner, uklare roller.',
    citizenNotices: 'Lite foreløpig, men forventningsstyring forberedes.',
  },
  {
    number: 2,
    title: 'Velg fokus og målgruppe',
    goal: 'Avgrense slik at dere faktisk kan lære.',
    actions: 'Velg én målgruppe der fragmentering merkes. Definer inn- og ut-kriterier.',
    clarifications: 'Målgruppebeskrivelse, etikk-sjekk, plan for inngang.',
    pitfalls: 'Uklare grenser, for bred målgruppe.',
    citizenNotices: 'Klart budskap om hvem tilbudet gjelder, at det er frivillig.',
  },
  {
    number: 3,
    title: 'Sett sammen laget',
    goal: 'Et lite tverrsektorielt lag som faktisk møtes.',
    actions: '2–3 offentlige tjenester + 1 frivillig/ideell. Rolleavklaringer. Avklar tid.',
    clarifications: 'Lagavklaringer, faste møtepunkter, kontaktliste.',
    pitfalls: 'Uklare roller, hyppige personbytter.',
    citizenNotices: 'Samme folk, ikke nytt ansikt hver gang.',
  },
  {
    number: 4,
    title: 'Én enkel inngang',
    goal: 'Lett å komme i kontakt, lett å ta imot.',
    actions: 'Ett kontaktpunkt, ukentlig inntaksmøte, standardisert mottak.',
    clarifications: 'Prosesskart, svartidsmål, tekstmal.',
    pitfalls: 'Flere parallelle innganger, ingen samlet oversikt.',
    citizenNotices: 'Én tydelig vei inn, rask respons.',
  },
  {
    number: 5,
    title: 'Operasjonaliser prinsippene',
    goal: 'Gjøre prinsippene håndgripelige.',
    actions: 'Kjøreregler på én side. Beslutninger i laget, én plan, faste deltakere.',
    clarifications: 'Kjøreregler og planmal.',
    pitfalls: 'Prinsipper blir plakat i stedet for praksis.',
    citizenNotices: 'God info om hva laget er.',
  },
  {
    number: 6,
    title: 'Minste nødvendige juss',
    goal: 'Trygge deling uten å stanse læring.',
    actions: 'Journalfør hver for dere. Del med samtykke. Avklar hvert møte hva som kan deles.',
    clarifications: 'Samtykkeskjema (essensielt!).',
    pitfalls: 'Vente på perfekte avtaler, uklarhet om ansvar.',
    citizenNotices: 'Klart språk om samtykke.',
  },
  {
    number: 7,
    title: 'Helt praktisk og arenaer',
    goal: 'Gjøre samarbeid enkelt i hverdagen.',
    actions: 'Ukentlig lagmøte, felles tavle, faste tider, samlokalisering.',
    clarifications: 'Møtemal, ukeplan, enkel logg.',
    pitfalls: 'Lange e-posttråder uten beslutninger.',
    citizenNotices: 'Enkel kontakt, drop-in/fast trefftid.',
  },
  {
    number: 8,
    title: 'Start med konkrete saker',
    goal: 'Omsette prinsippene i praksis.',
    actions: 'Velg 3–5 saker. Forventningssamtale. Avklar roller. Innhent samtykke.',
    clarifications: 'Mal for forventningssamtale, målnotat, samtykkeskjema.',
    pitfalls: 'Tiltak uten felles mål.',
    citizenNotices: 'Mål formulert i eget språk, én plan, frivillighet bekreftet.',
  },
  {
    number: 9,
    title: 'Jobb i korte læringssløyfer',
    goal: 'Lære i et rolig tempo.',
    actions:
      'Perioder på 2–3 uker med læringsspørsmål. Del hva dere prøvde, observerte, vil justere.',
    clarifications: 'Læringsmål, læringslogg, visningsnotat.',
    pitfalls: 'Lange planer uten praksis, tiltak uten refleksjon.',
    citizenNotices: 'Hyppige små forbedringer.',
  },
  {
    number: 10,
    title: 'Følg med på noen få signaler',
    goal: 'Måle nok til å lære.',
    actions: '3–5 indikatorer + kvalitative observasjoner.',
    clarifications: 'Læringstavle, kort oppsummering.',
    pitfalls: 'Overmåling, tall uten tolkning.',
    citizenNotices: 'Mulighet til å si fra om oppfølgingen.',
  },
  {
    number: 11,
    title: 'Beslutningsport',
    goal: 'Ta bevisste valg basert på læring.',
    actions: 'Vurder kapasitet, støtte, etterspørsel, samarbeid. Fortsett, juster eller stopp.',
    clarifications: 'Kort beslutningsnotat.',
    pitfalls: 'Fortsette av vane, stoppe uten å hente læring.',
    citizenNotices: 'Klar og forutsigbar informasjon.',
  },
  {
    number: 12,
    title: 'Skalere organisk',
    goal: 'Vokse uten å miste kjernen.',
    actions: 'Trinnvis. Øk volum i samme målgruppe før utvidelse. Prinsippsjekk ved utvidelse.',
    clarifications: 'Skalaplan, praksisbibliotek.',
    pitfalls: 'Gå for raskt til ny målgruppe.',
    citizenNotices: 'Stabil kvalitet, samme enkle inngang.',
  },
];

// ─── Checklist (Chapter 4) ───────────────────────────────────────────────────

export const checklist: string[] = [
  'Mandat og læringsspørsmål avklart',
  'Målgruppe og kriterier definert',
  'Lag bemannet med roller, tid og kalender',
  'Én enkel inngang og samtykkeflyt på plass',
  'Kjøreregler skrevet og forankret',
  'Praktiske arenaer etablert',
  'Første læringsperiode og indikatorer valgt',
];

// ─── Pitfalls to Avoid (Chapter 4) ──────────────────────────────────────────

export const pitfallsToAvoid: string[] = [
  'Koordinere mer uten å gjøre det enklere for innbygger',
  'Organisere alt som prosjekt ved siden av drift',
  'Hyppige bytter av folk og uklare roller',
  'Overdesigne før dere starter',
  'Prøve for mye samtidig',
];

// ─── Gains (Chapter 3) ──────────────────────────────────────────────────────

export const gains: GainCategory[] = [
  {
    category: 'For innbyggerne',
    items: [
      'Lavere terskel for å be om hjelp',
      'Et helhetlig og samordnet tilbud',
      'Bedre forutsetninger for mestring og deltakelse',
    ],
  },
  {
    category: 'For de ansatte',
    items: [
      'Mer arbeidsglede og tydeligere fellesskap',
      'Kontinuerlig faglig utvikling i laget',
      'Mer støtte og lavere belastning',
    ],
  },
  {
    category: 'For organisasjonene',
    items: [
      'Bedre koordinering og raskere vei til handling',
      'Mindre dobbeltarbeid og bedre ressursbruk',
      'Større treffsikkerhet og økt tillit',
    ],
  },
];

// ─── Barriers (Chapter 3) ───────────────────────────────────────────────────

export const barriers: Barrier[] = [
  {
    title: 'Målkonflikter',
    description: 'Aktører med ulike styringssignaler.',
    solution: 'Felles fokus på innbyggerens mål balanserer.',
  },
  {
    title: 'Rammer og regelverk',
    description: 'Journalplikt, finansieringsmodeller skaper usikkerhet.',
    solution: 'Faste relasjoner og tillit løser.',
  },
  {
    title: 'Lederforankring',
    description: 'Uten lederstøtte vanskelig å holde retning.',
    solution: 'Faste lag og tydelige roller hjelper.',
  },
  {
    title: 'Praktiske utfordringer',
    description: 'Tid og koordinering.',
    solution: 'Prinsippene om faste relasjoner, samlokalisering og enkel inngang.',
  },
  {
    title: 'Kulturforskjeller',
    description: 'Ulike fagkulturer.',
    solution: 'Tverrsektorielle lag og samlokalisering bygger kultur.',
  },
];

// ─── Chapter 3 Reflections ──────────────────────────────────────────────────

export const chapter3Reflections: string[] = [
  'Hvilke gevinster er mest verdifulle hos dere?',
  'Hvilke barrierer kan oppstå raskest?',
  'Hva må være på plass for å realisere gevinstene?',
  'Hvordan teste i liten skala?',
];

// ─── Mann om Bord Case (Chapter 1) ─────────────────────────────────────────

export const mannOmBordCase: MannOmBordCase = {
  background:
    'Unge menn 18–30 i Trondheim som hadde falt ut av skole, arbeid og sosiale fellesskap.',
  approach:
    'Lag av tre personer (Trondheim kommune, Nav, Kirkens Bymisjon). Seks prinsipper. Korte læringsperioder.',
  results: {
    innbyggere: 'Trygghet, lavere terskel for hjelp, bedre livskvalitet.',
    ansatte: 'Høyere arbeidsglede, lavere sykefravær, bedre støtte.',
    organisasjoner: 'Effektivt samarbeid, redusert dobbeltarbeid, raskere beslutninger.',
  },
  patterns:
    'Ett lag over tid, samme mennesker/inngang/plan, jevnlige fysiske møtepunkter, tverrsektoriell kompetanse, frivillighet, korte læringssløyfer.',
};

// ─── System Challenges (Chapter 1) ──────────────────────────────────────────

export const systemChallenges: SystemChallenge[] = [
  {
    title: 'Fragmentering og parallelle løp',
    description: 'Innbyggere møter mange aktører og må koordinere hjelpen selv.',
  },
  {
    title: 'Standardiserte tjenester',
    description:
      'Løsninger laget for "gjennomsnittsbrukeren", treffer dårlig for de som faller utenfor.',
  },
  {
    title: 'Koordinering fremfor oppfølging',
    description: 'Ansatte bruker tid på å få systemet til å henge sammen.',
  },
  {
    title: 'Manglende brobygging',
    description: 'Ulike fagkulturer, styringsnivåer og regelverk skaper barrierer.',
  },
];

// ─── Human Consequences (Chapter 1) ─────────────────────────────────────────

export const humanConsequences: string[] = [
  'Mange faller mellom tjenester, ingen tar helhetlig ansvar.',
  'Brukere forholder seg til mange aktører uten koordinering.',
  'Relasjoner er personavhengige og sårbare.',
  'Ansatte bruker uforholdsmessig mye tid på samordning.',
  'I verste fall forsterker systemet utenforskap.',
];

// ─── Change Reactions (Chapter 1) ───────────────────────────────────────────

export const changeReactions: ChangeReaction[] = [
  {
    level: 'mikro',
    label: 'Mikro (individ)',
    description: 'Nysgjerrighet blandet med usikkerhet om egen rolle.',
  },
  {
    level: 'meso',
    label: 'Meso (virksomhet)',
    description: 'Kulturforskjeller mellom avdelinger.',
  },
  {
    level: 'makro',
    label: 'Makro (samarbeid på tvers)',
    description: 'Ulike tempo og styringslogikker.',
  },
];

// ─── Chapter 1 Reflections ──────────────────────────────────────────────────

export const chapter1Reflections: string[] = [
  'Hva i utfordringsbildet kjenner dere best igjen?',
  'Konkrete situasjoner der innbygger faller mellom tjenester?',
  'Hvor er størst overlapp mellom utfordringer?',
];

// ─── Team Variants (Chapter 2) ──────────────────────────────────────────────

export const teamVariants: TeamVariant[] = [
  {
    title: 'Offentlig tjenestetyngde',
    description: 'Offentlige tjenester bærer mest kapasitet, ideell/frivillig styrker relasjon.',
  },
  {
    title: 'Ideell/frivillig-tyngde',
    description: 'Frivillig leder relasjon og nærvær, offentlige avklarer rettigheter.',
  },
  {
    title: 'Partner-/samfunnstyngde',
    description:
      'Andre aktører er nøkkel (kriminalomsorg, idrett, næringsliv), offentlige støtter med fag.',
  },
];

// ─── Contacts ────────────────────────────────────────────────────────────────

export const contacts: Contact[] = [
  {
    name: 'Kristin Nordaune',
    email: 'kristin.nordaune@trondheim.kommune.no',
  },
  {
    name: 'Erik Lånke Solbu',
    email: 'Erik.Lanke.Solbu@nav.no',
  },
  {
    name: 'Halvor Skrede',
    email: 'Halvor@comte.no',
  },
];

// ─── Background Text ────────────────────────────────────────────────────────

export const backgroundText: string =
  'Lagmodellen ble utviklet i prosjektet Mann om bord med støtte fra Stimulab (Digdir + DOGA). Spredningsmateriell utviklet med Comte Bureau.';

// ─── Searchable Content ─────────────────────────────────────────────────────

export const searchableContent: SearchableItem[] = [
  // Chapter 0 - Introduksjon
  {
    title: 'Introduksjon',
    text: hero.intro,
    chapter: 0,
    slug: 'introduksjon',
  },
  {
    title: 'Bakgrunn',
    text: backgroundText,
    chapter: 0,
    slug: 'introduksjon',
  },

  // Chapter 1 - Hvorfor Lagmodellen
  ...systemChallenges.map((c) => ({
    title: c.title,
    text: c.description,
    chapter: 1,
    slug: 'hvorfor',
  })),
  ...humanConsequences.map((text) => ({
    title: 'Menneskelige konsekvenser',
    text,
    chapter: 1,
    slug: 'hvorfor',
  })),
  ...changeReactions.map((r) => ({
    title: `Endringsreaksjon: ${r.label}`,
    text: r.description,
    chapter: 1,
    slug: 'hvorfor',
  })),
  ...chapter1Reflections.map((text) => ({
    title: 'Refleksjon',
    text,
    chapter: 1,
    slug: 'hvorfor',
  })),
  {
    title: 'Mann om Bord - Bakgrunn',
    text: mannOmBordCase.background,
    chapter: 1,
    slug: 'hvorfor',
  },
  {
    title: 'Mann om Bord - Tilnærming',
    text: mannOmBordCase.approach,
    chapter: 1,
    slug: 'hvorfor',
  },
  {
    title: 'Mann om Bord - Resultater for innbyggere',
    text: mannOmBordCase.results.innbyggere,
    chapter: 1,
    slug: 'hvorfor',
  },
  {
    title: 'Mann om Bord - Resultater for ansatte',
    text: mannOmBordCase.results.ansatte,
    chapter: 1,
    slug: 'hvorfor',
  },
  {
    title: 'Mann om Bord - Resultater for organisasjoner',
    text: mannOmBordCase.results.organisasjoner,
    chapter: 1,
    slug: 'hvorfor',
  },
  {
    title: 'Mann om Bord - Mønstre',
    text: mannOmBordCase.patterns,
    chapter: 1,
    slug: 'hvorfor',
  },

  // Chapter 2 - Hva er Lagmodellen
  ...principles.flatMap((p) => [
    {
      title: p.title,
      text: `${p.short} ${p.description}`,
      chapter: 2,
      slug: 'hva-er-lagmodellen',
    },
    {
      title: `${p.title} - Hvorfor`,
      text: p.why,
      chapter: 2,
      slug: 'hva-er-lagmodellen',
    },
    {
      title: `${p.title} - Mann om Bord`,
      text: p.mobExperience,
      chapter: 2,
      slug: 'hva-er-lagmodellen',
    },
    ...p.reflection.map((r) => ({
      title: `${p.title} - Refleksjon`,
      text: r,
      chapter: 2,
      slug: 'hva-er-lagmodellen',
    })),
  ]),
  ...teamVariants.map((v) => ({
    title: `Lagvariant: ${v.title}`,
    text: v.description,
    chapter: 2,
    slug: 'hva-er-lagmodellen',
  })),

  // Chapter 3 - Gevinster og barrierer
  ...gains.flatMap((g) =>
    g.items.map((item) => ({
      title: `Gevinst: ${g.category}`,
      text: item,
      chapter: 3,
      slug: 'gevinster-og-barrierer',
    })),
  ),
  ...barriers.map((b) => ({
    title: `Barriere: ${b.title}`,
    text: `${b.description} ${b.solution}`,
    chapter: 3,
    slug: 'gevinster-og-barrierer',
  })),
  ...chapter3Reflections.map((text) => ({
    title: 'Refleksjon',
    text,
    chapter: 3,
    slug: 'gevinster-og-barrierer',
  })),

  // Chapter 4 - Kom i gang
  ...steps.map((s) => ({
    title: `Steg ${s.number}: ${s.title}`,
    text: `${s.goal} ${s.actions} ${s.clarifications}`,
    chapter: 4,
    slug: 'kom-i-gang',
  })),
  ...checklist.map((text) => ({
    title: 'Sjekkliste',
    text,
    chapter: 4,
    slug: 'kom-i-gang',
  })),
  ...pitfallsToAvoid.map((text) => ({
    title: 'Fallgruver å unngå',
    text,
    chapter: 4,
    slug: 'kom-i-gang',
  })),
];
