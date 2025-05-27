# Corso front end 2025

>Questo contenuto è costantemente in aggiornamento e potrebbe subire modifiche nel tempo. Si consiglia di controllare frequentemente per eventuali aggiornamenti o nuove risorse.
>
>Al momento, tutti i contenuti sono su un'unico branch `main`, ma in futuro potrebbero essere creati branch specifici per ogni lezione o argomento trattato.

Benvenuti al corso di front end 2025!

Questo è un repository che contiene tutte le risorse, le lezioni e gli esempi utilizzati durante il corso.

- È altamente consigliato seguire le lezioni in ordine, poiché ogni lezione si basa su quella precedente.

- Per ogni lezione, troverete un file `README.md` che contiene le istruzioni e le risorse necessarie per completare gli esercizi.

- Tra le prime cose da fare, è consigliato controllare la cartella (directory) `docs` che contiene configurazioni ottimali, documentazioni interessanti e risorse utili per il corso.

- La cartella `assets` contiene immagini, file e risorse utilizzate durante il corso e comuni a tutti i progetti. Potete utilizzare queste risorse nei vostri progetti o come riferimento.

- Per ogni software è consigliato documentarsi e leggere la documentazione ufficiale, che è sempre la fonte più affidabile e aggiornata. Questo perché le procedure di installazione e configurazione possono variare nel tempo e tra le diverse versioni del software.

- Per qualsiasi domanda o problema, potete contattare il docente del corso o aprire una issue in questo repository.

- È fortemente consigliato studiare anche al di fuori delle lezioni, approfondendo gli argomenti trattati e cercando risorse aggiuntive che sono indicate nella cartella `docs`. Tra le competenze fondamentali ci sono:
  - Terminali / Shell / Bash
  - Git
  - Node.js e NPM

- Una volta installato Git, clonare questo repository con il comando tramite un terminale:

```sh
git clone https://github.com/Ruma303/corso_fe.git
```

---

# Software richiesti / consigliati

## IDE

- Tutti i software sono altamente compatibili ma soprattutto configurabili. È consigliato approfondire le loro funzionalità e personalizzarli in base alle proprie esigenze, creare shortcut, impostare temi personalizzati, ecc.

- [Visual Studio Code](https://code.visualstudio.com/) è l'IDE consigliato e completo per il corso e che useremo per tutte le lezioni, ma possiamo utilizzare qualsiasi altro IDE a nostra scelta.

Ecco alcune valide alternative:

- [WebStorm](https://www.jetbrains.com/webstorm/download)
- [Sublime Text](https://www.sublimetext.com/)
- [Zed](https://zed.dev/)

## Estensioni Visual Studio Code consigliate

Le estensioni consigliate per Visual Studio Code sono installabili direttamente dal marketplace di Visual Studio Code, oppure dal sito web. Non tutte sono obbligatorie, ma molte di esse possono migliorare la nostra esperienza di sviluppo e rendere il codice più leggibile e mantenibile.

Ecco alcune delle più utili:
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) per formattare il codice in modo uniforme.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) per il linting del codice JavaScript e TypeScript.
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) per avviare un server locale e visualizzare le modifiche in tempo reale.
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) per completare automaticamente i percorsi dei file.
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) per rinominare automaticamente i tag HTML.
- [Restore Terminal](https://marketplace.visualstudio.com/items?itemName=EthanSK.restore-terminals) per ripristinare i terminali chiusi in Visual Studio Code. Se installato e configurato correttamente, l'estensione cerca dei comandi nella cartella `.vscode` dove sono presenti già dei terminali preconfigurati per il progetto corrente, in modo da poterli riutilizzare senza doverli riconfigurare ogni volta. È possibile disabilitare i terminali impostando `"shouldRunCommands": false` nel file di configurazione dell'estensione.
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) per avere suggerimenti intelligenti durante la scrittura del codice. È un'estensione a pagamento, ma è possibile richiedere una licenza gratuita se si è studenti o insegnanti.
- [Live Share](https://marketplace.visualstudio.com/items?itemName=ms-vsliveshare.vsliveshare) per collaborare in tempo reale con altri sviluppatori. Permette di condividere il proprio ambiente di sviluppo e lavorare insieme su un progetto.
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) per migliorare l'esperienza di scrittura e visualizzazione dei file Markdown.
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) per migliorare la leggibilità dei commenti nel codice. Permette di evidenziare i commenti in base al tipo (ad esempio, TODO, FIXME, etc.) e di renderli più visibili.
- [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) per gestire i progetti in Visual Studio Code. Permette di creare, aprire e gestire progetti in modo semplice e veloce, salvando i percorsi dei progetti e le configurazioni in un file di progetto, in modo da aprirli facilmente.
- [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next) per avere le ultime funzionalità di JavaScript e TypeScript. Questa estensione installa la versione più recente del linguaggio, che potrebbe non essere ancora disponibile nella versione stabile di Visual Studio Code.
- [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks) per aggiungere segnalibri nel codice e navigare facilmente tra di essi. Permette di aggiungere segnalibri in qualsiasi punto del codice e di navigare tra di essi con facilità, rendendo più semplice la gestione del codice lungo o complesso.
- [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek) per visualizzare e navigare facilmente tra i file CSS e HTML. Permette di vedere rapidamente le regole CSS associate a un elemento HTML e di navigare tra i file CSS e HTML in modo semplice.
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) per avere snippet di codice pronti all'uso per React, Redux e React Native. Questa estensione fornisce una serie di snippet di codice che possono essere utilizzati per velocizzare lo sviluppo di applicazioni React, Redux e React Native, riducendo il tempo necessario per scrivere il codice.
- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template) per avere il supporto completo per Angular in Visual Studio Code. Questa estensione fornisce funzionalità come il completamento automatico, la navigazione tra i file e la visualizzazione dei tipi di dati, rendendo più semplice lo sviluppo di applicazioni Angular.
- [Italian - Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-it) per avere il controllo ortografico in italiano nel codice (e automaticamente anche in inglese). Questa estensione controlla l'ortografia delle parole nel codice e nei commenti, evidenziando gli errori e suggerendo correzioni, rendendo il codice più leggibile e professionale.
- [MySQL](https://marketplace.visualstudio.com/items?itemName=formulahendry.vscode-mysql) per gestire i database MySQL (ma anche altri database anche NoSQL) direttamente da Visual Studio Code. Questa estensione permette di connettersi a un database MySQL, eseguire query e visualizzare i risultati, rendendo più semplice la gestione dei database durante lo sviluppo di applicazioni web.

## Estensioni browser consigliate (Chrome/Edge)

Le estensioni per il browser possono essere molto utili per il debug e lo sviluppo di applicazioni web. Le seguenti estensioni sono installabili sia su Chrome che su Edge, poiché entrambi i browser sono basati sullo stesso runtime engine Chromium.

Ecco alcune delle più utili:

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/hdhinbbkfojkjbkjjkjjkjjkjjkjjkj?hl=it)
- [Angular DevTools](https://chrome.google.com/webstore/detail/angular-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=it)

## Altri software consigliati

- [Node.js](https://nodejs.org/en/download) - Un ambiente di esecuzione JavaScript che ci permette di eseguire JavaScript al di fuori del browser.
- [Git](https://git-scm.com/) - Un sistema di controllo versione distribuito che ci permette di tenere traccia delle modifiche al codice e collaborare con altri sviluppatori.
- [Postman](https://www.postman.com/) - Uno strumento per testare le API e inviare richieste HTTP in modo semplice e intuitivo.
- [XAMPP](https://www.apachefriends.org/index.html) - Un pacchetto software che include Apache, MySQL, PHP e Perl, utile per lo sviluppo di applicazioni web.

---

# Referenze

## Documentazioni consigliate

- [MDN Web Docs](https://developer.mozilla.org/it/) - La documentazione ufficiale di Mozilla per HTML, CSS e JavaScript.
- [W3Schools](https://www.w3schools.com/) - Un sito web che offre tutorial e riferimenti su HTML, CSS, JavaScript e altro.
- [CSS Tricks](https://css-tricks.com/) - Un sito web che offre articoli, guide e risorse su CSS e design web.
- [Stack Overflow](https://stackoverflow.com/) - Una comunità di sviluppatori dove è possibile trovare risposte a domande comuni e condividere conoscenze.
- [FreeCodeCamp](https://www.freecodecamp.org/) - Una piattaforma di apprendimento online che offre corsi gratuiti su HTML, CSS, JavaScript e altro.

## Crediti

- Autore e curatore del repository: [Matteo Emanuele Russo (Ruma303)](https://github.com/Ruma303)
- Creatore lezioni [Maurizio Postiglione]
- Corso finanziato da FormaTemp