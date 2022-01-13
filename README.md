# Slutprojektet
Välkommen till den förinställda kodbasen för slutprojektet.
Se filen `./src/sketch.ts` för hur ni ska börja skriva er kod!

Kom ihåg att använda git!

## Dokument & Artifakter
All dokument skall finnas i projektet som faktiska filer vid inlämningen. Det finns en mapp `./documents` som alla dokumenten skall sparas i.

Gå in i mappen och läs vidare där!

## Utveckling
### Installation
Först behöver ni köra kommandot `npm i` för att installera nödvändiga moduler (p5, typescript, etc).

### Starta projektet
Kör kommandot `npm start` för att starta projektet och se det live i din webbläsare!

### Debugger
Det är starkt rekomenderat att ni använder debug-verktyget i VSCode för att hitta och lösa problem. Metoden vi primärt har använt tidigare är att skriva `console.log` men vi kan bli mer effektiva!

Debuggern låter er stanna programmet och stega rad för rad samtidigt som ni kan titta på vad variablerna innehåller. Det är speciellt användbart när ni arbetar med funktioner som anropas 60 gånger per sekund - console overload otherwise... 🤯

#### Starta Debuggern
För att starta debuggern måste du första ladda hem tilläget "Debugger for Chrome" som finns under "Extensions" här i VSCode.
Därefter tycker du `F5` för att starta debuggern, se dock till att du har startat projektet innan (`npm start`)!

Ett nytt fönster kommer att öppnas som behöver användas för att få koden att stanna vid utsatta debugg-punkter.

### Potentiella problem
Versionen av p5.js är 1.1.9 medan senaste version av typescript endast är uppdaterad till 0.9.1. Detta skulle kunna orsaka problem men framför allt kan det vara så att ni hittar något i p5's dokumention som inte finns tillgängligt i detta projektet.

Typings för de globala variablerna relaterat till p5.sound fungerar tyvärr inte - exempel finns för hur ni kan kringå detta.

## TODO
Lägg till ytterliggare information som är specifikt för ert projekt!

**LYCKA TILL!**



### Krav för godkänt

- Uppgiften lämnas in i tid!
- Alla filer: spelidé, klassdiagram, skisser, planering, kodbas etc har lämnats in
- Objekt Orienterade Programmerings Principer har användas
- Ni har redovisat en idépresentation
- Ni har genomfört en presentation av projektet
- Ni har använt er av TypeScript & P5
- Git och GitHub har används enligt beskrivning
- Spelet fungerar och efterliknar er idébeskrivning
- Du lämnar in en individuell loggbok
- Krav för väl godkänt:

### Krav för väl godkänt
- Alla punkter för godkänt är uppfyllda
- Spelet ska vara helt originellt eller vara en originell tappning på ett befintligt spel
- Slutresultatet matchar er idébeskrivning väl
