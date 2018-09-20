# Dokumentasjon for prosjekt 2

## Funksjonalitet på websiden
---

Vi har oppfylt kravene til funksjonalitet ved at bruker kan velge fra tre ulike medier, og innad der tre ulike kategorier. Til slutt får brukeren mulighet til å velge en av fire kombinasjon av de ulike mediene og kategoriene. For hver gang brukeren endrer en kategori eller en fane, endrer kombinasjonen seg. Vi brukte utkastet til layout som inspirasjon, men har gjort noe endring, mht plassering av de ulike komponentene. 

Lydfilene er hentet fra Bensound og zapsplat.com
Bildene er hentet fra publicdomainvectors.org
Diktene kommer fra poetryfoundation.org

## React
---
Et av kravene til oppgaven var at nettsiden skulle skrives i React. Alle på gruppen var helt ferske med denne teknologien, så litt tid gikk med på å lære seg dette individuelt før vi begynte på prosjektet. Deretter satte vi i gang med å bygge om og utvide app-malen som ble laget for oss ved `npm create-react-app` 
I god React-ånd har vi benyttet oss av klasser for å lage ulike komponenter med ønsket funksjonalitet. Løsningen vår baserer seg i hovedsak på tre typer komponenter. 3 «Category»-komponenter er på toppen av siden under overskriften. Her er hver «category»-komponent knyttet opp mot hver sin medietype, og en variabel holder styr på hvilken kategori som er valgt. Videre har vi «Tab»-komponenten som representerer de fire tab-valgmulighetene. Også her blir en variabel satt som representerer den nylig klikkede tab-en. Til sist har vi «Showcase»-komponentene. Dette er egentlig 3 relativt like komponenter, som brukes til henholdsvis å hente inn og vise fram medieinnhold basert på «Category»- og «Tab»-verdiene.
Da vi begynte med utviklingen var planen å ha en felles ArtContainer-komponent som inneholdt de tre mediene for å ha et fast oppsett rundt disse og for å kunne stil-legge ut ifra dette. Men mot slutten av utviklingen var Showcase-klassene laget på en slik måte at de returnerte hele komponenter selv, som inneholdt alt det nødvendige, og dermed ble ArtContainer overflødig. Det optimale hadde kanskje vært å separere databehandlingslogikk og framvisning av mediene(selve komponenten) men grunnet litt ulike ideèr og preferanser (og da kanskje litt dårlig kommunikasjon) underveis i utviklingen ble det ikke slik. Men dette er en del av læringsprosessen med nye teknologier og er noe vi er mer observant på til neste gang.


## AJAX
---
I prosjektbeskrivelsen sto det at vi skulle bruke AJAX til å laste inn bilder og tekst dynamisk. Vi valgte å bruke AJAX Fetch APIet. Slik brukte vi fetch()-metoden for å hente data asynkront når vi hadde behov for det. Det var et krav om at bilde og tekst skulle lagres slik at man ikke trengte å gjennomføre nye AJAX-kall om man bladde tilbake i utstillingen. Vi brukte state i react-componentene våre til å lagre denne informasjonen. Vi trengte ikke å bruke noen spesifikk metode for å laste inn lyd.

## Responsive web design
---
I dette prosjektet var det et krav om at siden skulle være responsiv. Vi prøvde ut designprinsippet med å lage den først for telefon, så utvide den til større skjermer. Dette er noe vi synes å ha suksess med, og merket at det er enklere å legge til enn å fjerne innen webutvikling. For å oppnå et responsivt design valgte vi å bruke CSS-grid for oppbyggingen. Vi lagde en grid bestående av 3 kolonner og 6 rader. Grunnen til at vi valgte CSS-grid var at det fungerer godt i samarbeid med media-queries og det var det vi var mest komfortable med. Vi har som utgangspunkt å sette grid-columns til 2.5% 95% 2.5%. Når skjermen utvider seg endres dette til 10% 80% 10%, noe vi mener er et godt utgangspunkt for «desktop». Ved å bruke % oppnår vi et fleksibelt og flytende layout.


Vi mener at på telefon er det mest intuitivt og strukturert å ha lister med tekst nedover, mens tall godt kan være bortover. Derfor valgte vi å ha kategoriene loddrett, og fanene vannrett. Vi valgte å bruke flex-box for dette siden det er enkelt å endre retning. På større skjermer endret vi flex-direction på kategoriene fra column til row, slik at vi utnytter skjermplassen bedre.
Vi har valgt å ikke gjøre noen endringer dersom man endrer orientering på telefon. Ut i fra våre tester med Pixel 2XL i landskap, kom vi frem til skjermen er for liten til det er noe poeng å ha den i «desktop modus».

Siden bildene er av SVG-formatet, skalerer det veldig fint med siden. Fordelen med SVG er at det er vektor-grafikk og har ikke noe tap når man øker/minker størrelsen.

Viewport blir automatisk lagt til når vi lagde prosjektet via npx. Det viewport gjør, er at den skalerer siden slik at den passer til mindre skjermer. Vi valgte å ikke endre den fra standard verdien, da siden vår skalerte godt med den.

Vi har ikke brukt eksterne CSS-rammeverk, alt er lagd fra grunnen av.

## Samarbeid og bruk av GIT
--- 
Når det kommer til det overordnede samarbeidet i prosjektet har det vært veldig bra. Det har vært en fin flyt og bruk av feature-branches knyttet opp mot individuelle issues i GitHub. Dette har gjort det enkelt å arbeide individuelt mellom gangene vi møtes, samt enkelt å ha overblikk over hva andre gjør underveis.

## Testing
---
Nettsiden er testet responsivt i Chrome og Firefox på Windows og macOs med ulike størrelser på nettleservinduet, samt på iOs og Android(horisontal + vertikal orientering).

