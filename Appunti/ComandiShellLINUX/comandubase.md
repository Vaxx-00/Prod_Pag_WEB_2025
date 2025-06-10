

# Comandi Base di Linux

## Navigazione nel File System

### `pwd`
Stampa la directory di lavoro corrente (Print Working Directory)
```bash
pwd
```

### `cd`
Cambia la directory corrente (Change Directory)
```bash
cd [directory]          # Cambia alla directory specificata
cd ..                   # Torna alla directory genitore
cd ~                    # Torna alla home directory dell'utente
cd -                    # Torna alla directory precedente
```

### `ls`
Elenca i file e le directory nella directory corrente
```bash
ls                      # Elenca i file e le directory
ls -l                   # Formato lungo con dettagli (permessi, proprietario, dimensione, data)
ls -a                   # Elenca tutti i file, inclusi quelli nascosti (che iniziano con .)
ls -h                   # Dimensioni dei file in formato leggibile (1K, 234M, 2G)
ls -r                   # Elenca i file in ordine inverso
ls -t                   # Ordinati per data di modifica (il più recente per primo)
ls *.txt                # Elenca i file che corrispondono al pattern (es. *.txt, file?)
```

## Gestione di File e Directory

### `touch`
Crea un file vuoto o aggiorna il timestamp di un file esistente
```bash
touch nome_file.txt
```

### `mkdir`
Crea una nuova directory
```bash
mkdir nome_directory    # Crea una nuova directory
mkdir -p path/to/dir    # Crea directory genitore se non esistono
```

### `rm`
Rimuove file e directory
```bash
rm nome_file            # Rimuove un file
rm -r directory         # Rimuove una directory e il suo contenuto (ricorsivamente) ⚠️
rm -f nome_file         # Forza la rimozione di un file (senza chiedere conferma) ⚠️
rm -rf directory        # Forza la rimozione ricorsiva di una directory ⚠️⚠️
```

> **⚠️ ATTENZIONE**: I comandi `rm -r`, `rm -f` e soprattutto `rm -rf` sono molto potenti e possono cancellare permanentemente file e directory. Usare con estrema cautela!

### `cp`
Copia file e directory
```bash
cp file1 file2          # Copia un file
cp file directory/      # Copia un file in una directory
cp -r dir1 dir2         # Copia una directory e il suo contenuto (ricorsivamente)
```

### `mv`
Sposta o rinomina file e directory
```bash
mv file1 file2          # Rinomina file1 in file2
mv file directory/      # Sposta file nella directory
mv directory1 directory2 # Rinomina o sposta una directory
```