// Test de positionnement – questions partagées par la page du test et celle des résultats.
// `bonne` est l'indice de la bonne réponse dans `choix`. « Je ne sais pas » est ajouté automatiquement à la fin.

export const CLASSES = ["IWB1", "IWB2"];

export const QUESTIONS = [
  {
    theme: "JavaScript",
    intitule: "Que vaut <code>rest</code> après cette instruction ?",
    code: `const { name, ...rest } = { name: "Manon", age: 22, city: "Paris" };`,
    choix: [`{ age: 22, city: "Paris" }`, `["age", "city"]`, `{ name: "Manon" }`, `undefined`],
    bonne: 0,
  },
  {
    theme: "JavaScript",
    intitule: "Que renvoie toujours une fonction déclarée avec <code>async</code> ?",
    choix: ["Une promesse (Promise)", "La valeur de son return, directement", "undefined", "Une fonction de rappel (callback)"],
    bonne: 0,
  },
  {
    theme: "React",
    intitule: "<code>count</code> vaut 0. Que vaut <code>count</code> au rendu suivant ?",
    code: `function handlePress() {\n  setCount(count + 1);\n  setCount(count + 1);\n}`,
    choix: ["1", "2", "0", "Une erreur est levée"],
    bonne: 0,
  },
  {
    theme: "React",
    intitule: "Quand s'exécute la fonction passée à <code>useEffect(() => { … }, [])</code> ?",
    choix: [
      "Après le premier affichage du composant, puis plus jamais",
      "Après chaque rendu du composant",
      "Avant le premier rendu du composant",
      "Uniquement quand le composant disparaît",
    ],
    bonne: 0,
  },
  {
    theme: "React",
    intitule: "Dans une liste affichée avec <code>map()</code>, à quoi sert la prop <code>key</code> ?",
    choix: [
      "À identifier chaque élément d'un rendu à l'autre",
      "À trier les éléments de la liste",
      "À appliquer un style différent à chaque élément",
      "À protéger les données de la liste",
    ],
    bonne: 0,
  },
  {
    theme: "React",
    intitule: "Deux composants frères affichent la même donnée et peuvent la modifier. Où placer cet état ?",
    choix: [
      "Dans leur parent commun (ou dans un Context)",
      "Un état dans chacun des deux composants",
      "Dans une variable globale déclarée avec let",
      "Dans le localStorage du navigateur",
    ],
    bonne: 0,
  },
  {
    theme: "TypeScript",
    intitule: "Que signifie le <code>?</code> dans ce type ?",
    code: `type User = { id: string; email?: string };`,
    choix: [
      "email peut être absent : son type est string | undefined",
      "email peut valoir null, mais pas undefined",
      "email est obligatoire et doit être vérifié",
      "email est une propriété privée",
    ],
    bonne: 0,
  },
  {
    theme: "TypeScript",
    intitule: "Quand TypeScript vérifie-t-il les types de cette fonction ?",
    code: `function total(prices: number[]): number { … }`,
    choix: [
      "Avant l'exécution, à la compilation ou dans l'éditeur",
      "Pendant l'exécution, à chaque appel",
      "Jamais : ce ne sont que des commentaires",
      "Il convertit automatiquement les arguments en nombres",
    ],
    bonne: 0,
  },
  {
    theme: "Mobile",
    intitule: "Qu'affiche une application React Native sur un téléphone ?",
    choix: [
      "Des composants natifs du système (iOS ou Android)",
      "Une page web dans un navigateur intégré (WebView)",
      "Du HTML et du CSS interprétés par le téléphone",
      "Une image dessinée pixel par pixel dans un canvas",
    ],
    bonne: 0,
  },
  {
    theme: "Mobile",
    intitule: "En React Native, quelle est la valeur par défaut de <code>flexDirection</code> ?",
    choix: ["column", "row", "row-reverse", "Aucune : Flexbox est désactivé par défaut"],
    bonne: 0,
  },
];

// Auto-évaluation (non notée)
export const AUTO = [
  { cle: "react", intitule: "React" },
  { cle: "typescript", intitule: "TypeScript" },
  { cle: "mobile", intitule: "Développement mobile (React Native, Flutter, natif…)" },
];
export const NIVEAUX = ["Jamais utilisé", "En cours ou en tutoriel", "Dans un projet personnel ou scolaire", "En entreprise"];

export const JE_NE_SAIS_PAS = -1;
