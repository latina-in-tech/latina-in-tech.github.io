# Home page redesign — iterazione 2

Data: 2026-08-04
Branch: `ui/home-layout` (da `origin/main`, che include la PR #527 "Redesign event detail layout")

## Obiettivo

Rinfrescare la home page in direzione più funzionale e moderna, estendendo il linguaggio
visivo introdotto sul dettaglio evento nella PR #527. L'intervento è di **layout, densità e
gerarchia**: nessun colore e nessun design token viene modificato.

Riferimento desktop, ma ogni componente resta responsive e funzionante in light e dark mode.

## Problemi da risolvere

1. La hero è dominata dalla foto di Latina a tutta larghezza: ingombrante e poco informativa.
2. Le card evento sono verticalmente enormi (contengono l'intera descrizione): consultare
   la lista è faticoso.
3. Gli eventi passati sono resi con `opacity-70 grayScale`: sembrano disabilitati, il che è
   sgradevole e concettualmente sbagliato — l'archivio è un valore della community.
4. Il blocco newsletter occupa un'intera schermata per un campo email.

## Token e vocabolario visivo (invariati)

| Elemento         | Classi                                                                          |
| ---------------- | ------------------------------------------------------------------------------- |
| Superficie card  | `rounded-2xl bg-white dark:bg-slate-800`                                          |
| Bordo            | `ring-1 ring-slate-200 dark:ring-slate-700`                                        |
| Chip tag         | `bg-primary/10 text-primary` · dark `bg-primary-lighter/10 text-primary-lighter`   |
| Accento          | `primary` / `primary-lighter`, gradient `from-primary to-primary-light`            |
| Testo primario   | `text-gray-900 dark:text-slate-100`                                                |
| Testo secondario | `text-slate-600 dark:text-slate-400`                                               |

`tailwind.config.js` non viene toccato.

## 1. Hero

**Rimuovere:** l'immagine di sfondo `latina.jpg` con overlay `mix-blend-multiply`, il
riquadro `shadow-xl sm:rounded-2xl` a tutta larghezza, il box `bg-slate-400` attorno al
sottotitolo.

**Struttura risultante** — sezione centrata `max-w-3xl`, `py-12 sm:py-16` (circa un terzo
dell'altezza attuale):

```
              [ crest 112px / sm:128px ]
                La community degli
                Informatici Pontini        ← gradient primary → primary-light
   Eventi gratuiti per favorire la condivisione…   ← una riga, text-slate-600
             [ Unisciti al Gruppo Telegram ]
               ● 318 membri · 12 online     ← testo sottile, altezza riservata
```

- Logo: `public/android-chrome-512x512.png` (crest standalone, PNG con alpha 512×512),
  reso via `next/image` con `priority`, `width`/`height` espliciti.
- Titolo: `text-4xl sm:text-5xl lg:text-6xl font-extrabold`; seconda riga in gradient
  `bg-clip-text text-transparent` (stessa tecnica già usata nel titolo newsletter).
- Sfondo: solo un velo `bg-gradient-to-b from-primary/5 to-transparent`.
- CTA Telegram: bottone pieno `bg-primary hover:bg-primary-dark text-white rounded-xl`.
- Il contatore membri/online resta client-side (`useTelegramGroupInfo`); il suo contenitore
  ha altezza riservata per evitare layout shift quando la fetch si risolve.
- Le chiavi i18n `hero.*` esistenti restano invariate.

## 2. Sezione eventi — lista unica

Le due sezioni separate ("Prossimi Eventi" / "Eventi Passati") diventano **un unico blocco**.

**Ordinamento:** eventi in arrivo per data crescente (il più vicino per primo), seguiti dagli
eventi passati per data decrescente (il più recente per primo).

### Componenti (in `src/components/event/`)

**`EventsSection.tsx`** — orchestratore della sezione.

- Props: `events: IEvent[]`, `translations: Dictionary`, `initialCount?: number`,
  `expandable?: boolean`.
- Calcola l'ordinamento unico, estrae l'eventuale evento in evidenza, rende la griglia.
- Paginazione client: mostra `initialCount` (default 6) card in griglia; il bottone
  "Mostra altri eventi" ne aggiunge 6 alla volta. Quando la lista è esaurita il bottone
  sparisce e resta il link "Vedi tutti gli eventi" verso `/[lang]/events`.
- Heading unico + caption dalle nuove chiavi i18n.
- Griglia: `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`.

**`FeaturedEventCard.tsx`** — reso **solo se esiste almeno un evento in arrivo**; in quel
caso è il primo evento in arrivo. Se non ci sono eventi futuri la sezione parte direttamente
con la griglia: nessun placeholder, nessuno spazio vuoto.

- Card orizzontale a piena larghezza: `lg:grid-cols-[24rem_1fr]`, cover a sinistra
  (`aspect-video object-cover`), contenuto a destra.
- Contenuto: badge "Prossimo evento", data, titolo grande, tag, luogo, e le azioni reali
  tramite il componente esistente `EventActions` (aggiungi al calendario, biglietto,
  mappa, eventuale YouTube).
- L'intera card è cliccabile verso il dettaglio; le azioni interne fermano la propagazione
  del click (comportamento già presente in `EventActions`).

**`EventCard.tsx`** — card compatta, usata per tutti gli altri eventi.

- Cover `aspect-video object-cover` in testa.
- Riga meta: badge di stato + data compatta.
- Titolo su massimo 2 righe (`line-clamp-2`, disponibile nativamente in Tailwind 3.4).
- Massimo 3 tag come chip, più un `+N` se ce ne sono altri.
- Luogo su una riga con `truncate`.
- **Nessuna descrizione**: la descrizione vive solo nella pagina di dettaglio, ed è la
  ragione per cui l'utente clicca.

### Distinzione fra eventi in arrivo e passati

Entrambi a colori pieni. Nessun `opacity`, nessun `grayscale`.

|         | In arrivo                                            | Passato                              |
| ------- | ---------------------------------------------------- | ------------------------------------ |
| Bordo   | `ring-primary/40` · dark `ring-primary-lighter/40`    | `ring-slate-200` · dark `ring-slate-700` |
| Badge   | `bg-primary text-white` — "In arrivo"                 | chip neutro slate con la data         |
| Extra   | data in evidenza                                      | icone "Slide" / "Video" se disponibili |

Hover uniforme per entrambi (`-translate-y-0.5` + shadow, `transition`), focus da tastiera
visibile (`focus-visible:ring-2 ring-primary`).

### Componenti rimossi

`EventsList.tsx`, `EventWidget.tsx`, `EventTags.tsx`, `EventDescription.tsx` restano senza
consumer e vengono eliminati. `EventActions.tsx` e `AddToCalendar.tsx` restano: il primo è
usato anche dalla pagina di dettaglio.

## 3. Newsletter

Da blocco a due colonne con `py-16` a **banda inline compatta**:

- Contenitore `rounded-2xl bg-white ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700`,
  `py-8 px-6 sm:px-10`.
- Layout `lg:grid-cols-[1fr_auto] items-center gap-6`: a sinistra titolo su una riga
  (`text-2xl font-bold`) e micro-copy `text-sm`; a destra `input` e bottone inline.
- Input da `rounded-3xl` a `rounded-xl`, coerente con il resto dei componenti.
- Badge Mailchimp: dalle due immagini 220×40 (light/dark) a un link testuale `text-xs
  text-slate-500` sotto il form. L'attribution Mailchimp è volontaria.
- **Invariati:** `action`/`method` del form, il campo honeypot
  `b_08bff1fa2d8bd95bf693be2ab_8489b0a8a1`, l'input nascosto `tags`, i `name`/`id` dei campi.
  L'integrazione Mailchimp non deve cambiare comportamento.

## 4. Community Partners

Griglia allineata `grid-cols-3 sm:grid-cols-4 lg:grid-cols-6`, loghi ad altezza normalizzata
(`h-12 object-contain`) dentro celle di dimensione uniforme, heading in
`text-sm font-semibold uppercase tracking-wider text-slate-500`. Oggi i loghi hanno
dimensioni molto diverse e la fascia risulta disordinata. Elenco sponsor e link invariati.

## 5. Membri della community

Card membro allineate al nuovo linguaggio (`rounded-2xl`, `ring-1`, spaziatura coerente).
Nessun cambiamento di logica, incluso lo shuffle client-side dei membri e la gestione degli
errori di parsing in dev.

## 6. i18n

Nuove chiavi sotto `home.events` in **entrambi** i dizionari (`it.json` e `en.json`; il tipo
`Dictionary` deriva da `en.json`, quindi devono restare allineati):

| Chiave           | it                                                                    | en                                                    |
| ---------------- | --------------------------------------------------------------------- | ----------------------------------------------------- |
| `title`          | Eventi                                                                | Events                                                |
| `subtitle`       | Talk, workshop e meetup della community: quelli in arrivo e l'archivio | Talks, workshops and meetups: what's next and the archive |
| `upcomingBadge`  | In arrivo                                                             | Upcoming                                              |
| `nextEventBadge` | Prossimo evento                                                       | Next event                                            |
| `showMore`       | Mostra altri eventi                                                   | Show more events                                      |
| `seeAll`         | Vedi tutti gli eventi                                                 | See all events                                        |
| `slides`         | Slide                                                                 | Slides                                                |
| `video`          | Video                                                                 | Video                                                 |

Chiavi rimosse perché orfane: `home.nextEventsTitle`, `home.nextEventsSubtitle`,
`home.previousEventsTitle`, `home.previousEventsSubtitle`, `home.andManyOthers`.
`home.communityDescription` resta (usata nei metadata SEO).

## 7. Pagine

- `src/pages/[lang]/index.tsx`: sostituisce le due `EventsList` con una singola
  `EventsSection` (`initialCount={6}`, `expandable`), rimuove il link "…e molti altri" e i
  `div` spaziatori residui.
- `src/pages/[lang]/events/index.tsx`: usa la stessa `EventsSection` senza limite iniziale,
  così la pagina archivio resta coerente con la home.

## 8. File toccati

Nuovi:

- `src/components/event/EventsSection.tsx`
- `src/components/event/FeaturedEventCard.tsx`
- `src/components/event/EventCard.tsx`

Modificati:

- `src/components/Hero.tsx`
- `src/components/Newsletter.tsx`
- `src/components/Sponsors.tsx`
- `src/components/CommunityMember.tsx` (e/o `src/pages/[lang]/community/index.tsx`)
- `src/pages/[lang]/index.tsx`
- `src/pages/[lang]/events/index.tsx`
- `dictionaries/it.json`, `dictionaries/en.json`

Eliminati:

- `src/components/event/EventsList.tsx`
- `src/components/event/EventWidget.tsx`
- `src/components/event/EventTags.tsx`
- `src/components/event/EventDescription.tsx`

`public/assets/latina.jpg` resta nel repo (non è più referenziato dalla hero, ma non è
compito di questa iterazione ripulire gli asset).

## 9. Criteri di verifica

Il lavoro è completo quando:

1. `yarn check:types` passa senza errori.
2. `yarn lint` passa senza errori.
3. `yarn prettier:check` passa senza errori.
4. `yarn build` completa (export statico di tutte le pagine per entrambe le locale).
5. Controllo visivo su `/it` e `/en`, desktop e mobile, in light **e** dark mode:
   - la hero non mostra la foto di Latina e occupa circa un terzo dello spazio precedente;
   - la sezione eventi è una lista unica, con card in evidenza solo se esiste un evento
     futuro;
   - nessuna card evento appare desaturata o semitrasparente;
   - "Mostra altri eventi" aggiunge eventi e sparisce a lista esaurita;
   - il form newsletter invia correttamente a Mailchimp (campi e action immutati).
