// Importa solo las funciones necesarias de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyClfBNvASYli676hinvCJj0ccrA6gu5A-Q",
  authDomain: "ecommerstecnology.firebaseapp.com",
  projectId: "ecommerstecnology",
  storageBucket: "ecommerstecnology.appspot.com",
  messagingSenderId: "468356249762",
  appId: "1:468356249762:web:0049acfd86cfcf3f69fffb"
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa los servicios de Firebase
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app); // Utiliza getAuth para obtener la instancia de autenticación


// Exporta las instancias para usar en otras partes de tu aplicación
export { auth, db, storage };
