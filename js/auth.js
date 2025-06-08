// js/auth.js
import "https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth-compat.js";
import "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore-compat.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbet_bmwm8h8G5CqvmzrdAnc3AO-0IKa8",
  authDomain: "decision-maker-4e1d3.firebaseapp.com",
  projectId: "decision-maker-4e1d3",
  storageBucket: "decision-maker-4e1d3.firebasestorage.app",
  messagingSenderId: "727689864651",
  appId: "1:727689864651:web:0100c3894790b8c188c24e",
  measurementId: "G-7EJVQN0WT3"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();

let currentUser = null;

export function getCurrentUser() {
  return currentUser;
}

export function initAuth({ loginBtn, logoutBtn, userEmail }, onLogin) {
  const safeSet = (el, key, value) => {
    if (el) el[key] = value;
  };

  loginBtn.onclick = async () => {
    const provider = new auth.GoogleAuthProvider();
    try {
      const result = await auth.signInWithPopup(provider, undefined, auth.browserPopupRedirectResolver);
      currentUser = result.user;
      safeSet(userEmail, 'textContent', currentUser.email);
      onLogin(currentUser);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  logoutBtn.onclick = async () => {
    await auth.signOut();
    currentUser = null;
    safeSet(userEmail, 'textContent', '');
    safeSet(loginBtn, 'style', 'display: inline-block');
    safeSet(logoutBtn, 'style', 'display: none');
    onLogin(null);
  };

  auth.onAuthStateChanged(user => {
    currentUser = user;
    safeSet(userEmail, 'textContent', user?.email || '');
    safeSet(loginBtn, 'style', user ? 'display: none' : 'display: inline-block');
    safeSet(logoutBtn, 'style', user ? 'display: inline-block' : 'display: none');
    onLogin(user);
  });
}
