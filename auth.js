// Firebase Configuration (Jo tumne provide ki)
const firebaseConfig = {
  apiKey: "AIzaSyCVEnfaMY8e1wohNthgu_e44U4K6CpBAM8",
  authDomain: "smifenterprises-d349b.firebaseapp.com",
  projectId: "smifenterprises-d349b",
  storageBucket: "smifenterprises-d349b.firebasestorage.app",
  messagingSenderId: "596708511562",
  appId: "1:596708511562:web:d1b5467379f7f1829ffbb3",
  measurementId: "G-EXHSD2NLS1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// --- REGISTER LOGIC ---
const btnRegister = document.getElementById('btnRegister');
if(btnRegister) {
    btnRegister.onclick = () => {
        const email = document.getElementById('regEmail').value;
        const pass = document.getElementById('regPassword').value;

        auth.createUserWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                alert("Account Created Successfully!");
                window.location.href = "index.html"; // Redirect to home
            })
            .catch((error) => alert(error.message));
    };
}

// --- LOGIN LOGIC ---
const btnLogin = document.getElementById('btnLogin');
if(btnLogin) {
    btnLogin.onclick = () => {
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPassword').value;

        auth.signInWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                alert("Welcome Back!");
                window.location.href = "index.html";
            })
            .catch((error) => alert(error.message));
    };
}
