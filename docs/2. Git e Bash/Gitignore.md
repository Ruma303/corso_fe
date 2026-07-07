# Il file `.gitignore`

Il file `.gitignore` consente di istruire Git affinché **ignori determinati file o directory** durante l'esecuzione delle operazioni di `git add`, impedendo che vengano tracciati nel repository. È fondamentale per mantenere un repository pulito, evitando che file temporanei, di sistema, di compilazione o specifici dell’ambiente di sviluppo finiscano sotto controllo versione.

Git verifica i pattern nel file `.gitignore` rispetto al **percorso relativo alla posizione del file `.gitignore` stesso**, a meno che non siano presenti slash iniziali (vedi sezione "Percorsi relativi e assoluti").

È importante notare che `.gitignore` **non rimuove file già tracciati**: se un file è già sotto versionamento, verrà comunque incluso nei commit futuri anche se inserito in `.gitignore`, a meno che non venga rimosso esplicitamente con `git rm --cached`.

---

## Posizione del file `.gitignore`

Il file `.gitignore` può essere posizionato:

- nella radice del repository, per regole globali;

- all'interno di qualsiasi sottocartella, per regole locali relative a quella directory.


Inoltre, è possibile definire regole globali (per tutti i progetti Git dell'utente) con:

```bash
git config --global core.excludesFile ~/.gitignore_global
```

---

## Sintassi e regole

### Commenti

Qualsiasi riga che inizia con `#` viene considerata un commento.

```gitignore
# Ignora file di log
*.log
```

---

### Ignorare file specifici

Un nome di file semplice si applica ricorsivamente in tutte le sottodirectory, a meno che non sia preceduto da uno slash.

```gitignore
config.json          # Ignora tutti i file chiamati config.json in qualsiasi directory
/config.json         # Ignora solo config.json nella root del repository
docs/manual.txt      # Ignora manual.txt solo nella directory docs/
```

---

### Wildcard e pattern

#### Asterisco `*`

Corrisponde a **qualsiasi sequenza di caratteri**, esclusi gli slash `/`.

```gitignore
*.log           # Ignora tutti i file con estensione .log
temp-*          # Ignora tutti i file che iniziano con temp-
```

#### Punto interrogativo `?`

Corrisponde a **un solo carattere**, esclusi gli slash.

```gitignore
file-?.txt      # file-a.txt, file-1.txt ma non file-aa.txt
```

#### Notazione con doppio asterisco `**`

Utilizzata per corrispondere in modo ricorsivo più directory.

```gitignore
**/build        # Ignora ogni directory chiamata build a qualsiasi livello
**/*.class      # Ignora tutti i file .class ovunque nel progetto
```

---

### Ignorare directory

Un pattern che termina con `/` rappresenta una directory e **tutti i suoi contenuti**.

```gitignore
node_modules/       # Ignora la directory node_modules e tutto ciò che contiene
build/              # Ignora tutte le directory build ovunque nel progetto
/logs/              # Ignora solo la directory logs/ nella root
```

---

### Negazione (inclusione di file specifici)

Il simbolo `!` all'inizio della riga nega una regola precedente, permettendo di **includere eccezioni** a pattern già ignorati.

```gitignore
# Ignora tutti i file
*

# Tranne i file .md
!*.md

# Tranne una directory specifica
!important/
```

> Per funzionare, le directory padre dei file esclusi dalla negazione **non devono essere ignorate anch'esse**.

Esempio pratico:

```gitignore
logs/
!important.log         # Non funziona, perché logs/ è ignorata
!logs/important.log    # Funziona, perché include il file completo all'interno della cartella ignorata
```

---

### Percorsi relativi e assoluti

- Un pattern che **inizia con `/`** è relativo alla **root del repository Git**.

- Un pattern **senza `/` iniziale** è valido ovunque nel repository.


```gitignore
/temp/      # Solo la directory temp nella root
temp/       # Qualsiasi directory temp a qualsiasi profondità
```

---

### Esempi pratici

#### Progetto Node.js

```gitignore
# Dipendenze
node_modules/

# Output build
dist/
build/

# Configurazioni locali
.env
.vscode/
.idea/

# Log
*.log

# Cache
.cache/
```

#### Progetto Java con Maven

```gitignore
# Output di build
/target/
*.class

# File IDE
.idea/
*.iml
*.ipr
*.iws
*.log

# Configurazioni personali
*.properties
.env
```

#### Ignorare tutto tranne un file

```gitignore
# Ignora tutto
*

# Tranne README.md
!README.md
```

#### Ignorare tutti i file tranne una directory

```gitignore
*
!important-folder/
```

---

### Comportamento con file già tracciati

Aggiungere un file a `.gitignore` **non lo rimuove dallo staging o dalla cronologia**. È necessario rimuoverlo manualmente con:

```bash
git rm --cached nomefile
```

Per rimuovere tutto ciò che ora è ignorato ma già tracciato:

```bash
git rm -r --cached .
git add .
git commit -m "Pulizia dei file ignorati"
```

---

### File `.gitignore` globali

È possibile definire un file `.gitignore_global` per regole comuni a tutti i repository locali:

```bash
echo ".DS_Store" >> ~/.gitignore_global
git config --global core.excludesFile ~/.gitignore_global
```

---

### Diagnostica: perché un file viene ignorato?

Per determinare il motivo per cui un file è ignorato:

```bash
git check-ignore -v nomefile
```

Questo comando mostra quale pattern (e da quale file `.gitignore`) sta influenzando quel file.