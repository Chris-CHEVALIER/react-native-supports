# Supports React Native – version web

Supports de cours, énoncés de TP et test de positionnement du module React Native (Mastère 1 ingénierie du web).
Présentations en HTML (reveal.js, inclus dans `assets/vendor/`), exports PDF dans `pdf/`.

## Présenter

Ouvrir le fichier HTML dans un navigateur. `→` / `Espace` : diapo suivante · `S` : vue intervenant · `F` : plein écran · `Échap` : vue d'ensemble.

## Écrire une diapo

Chaque `<section>` est une diapo ; `data-layout` choisit la mise en page : *(absent)* contenu (`<h2>` + `<div class="corps">`), `titre`, `sommaire`, `section`.
Composants : `ul`, `table`, `.colonnes` (`.c3`, `.c4`, `.code-texte`, `.texte-code`), `.carte` (`.pleine`, `.accent`, `.corail`), `.encadre` (`.corail`, `.neutre`), `.etiquette`, `.frise` / `.etape`, `.reponse`, `.ok` / `.ko`.
Code : `<pre data-titre="App.tsx"><code class="language-tsx" data-trim>…</code></pre>`. Notes : `<aside class="notes">`.
