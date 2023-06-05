import { getByPlaceholderText } from '@testing-library/react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get, set, remove } from 'firebase/database';
import {v4 as uuid} from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const database = getDatabase(app);

export function login() {
   signInWithPopup(auth, provider)
    .catch(console.error);
}


export function logout() {
     signOut(auth).catch(console.error);
}


export function onUserStateChanged(callback) {
    onAuthStateChanged(auth, async (user) => {
        const updatedUser = user ? await adminUser(user) : null;
        callback(updatedUser);
    });
}

export function adminUser(user) {
  return get(ref(database, 'admins')).then((snapshot) => {
    if(snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return {...user, isAdmin};
    }
    return user;
  })
}

export function addNewProduct(product, new__image) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    new__price: parseInt(product.new__price),
    new__image,
    new__size: product.new__size.split(','),
  });
};

export function getProducts() {
  return get(ref(database, 'products')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val())
    }
    return [];
  });
}


export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`))
  .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
  });
}

export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`))
}