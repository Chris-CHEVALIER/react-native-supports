// Connexion à Firestore, chargée à la demande. Renvoie null en mode aperçu
// (configuration absente ou SDK injoignable, par exemple dans la page de relecture).
import { firebaseConfig } from "./firebase-config.js";

const SDK = "https://www.gstatic.com/firebasejs/10.14.1/";
export const COLLECTION = "positionnement";

export async function connecter() {
  if (!firebaseConfig) return null;
  try {
    const { initializeApp } = await import(SDK + "firebase-app.js");
    const firestore = await import(SDK + "firebase-firestore.js");
    const db = firestore.getFirestore(initializeApp(firebaseConfig));
    return { db, ...firestore };
  } catch (erreur) {
    console.error("Firebase indisponible :", erreur);
    return null;
  }
}
