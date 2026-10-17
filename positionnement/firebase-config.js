// Configuration Firebase du test de positionnement (projet Firebase de Chris, distinct de ceux des étudiants).
// Console Firebase → Paramètres du projet → Vos applications → Application Web → « Configuration du SDK ».
// Ces valeurs ne sont pas secrètes : la sécurité repose sur les règles Firestore (outils/firestore-positionnement.rules).
// Remplacer l'objet par null pour repasser en mode aperçu (rien n'est enregistré).
export const firebaseConfig = {
  apiKey: "AIzaSyAr682tME1eFRq2U-lrtC6UIK9barY5K_8",
  authDomain: "test-de-positionnement.firebaseapp.com",
  projectId: "test-de-positionnement",
  storageBucket: "test-de-positionnement.firebasestorage.app",
  messagingSenderId: "138550806063",
  appId: "1:138550806063:web:e0b2f399f1cef0c36528da",
};
