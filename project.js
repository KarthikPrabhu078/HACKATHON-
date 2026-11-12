
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBqXxZ6SDW1Zixcmj7Xj7DslASV6o3pooQ",
    authDomain: "smart-schedule-planer.firebaseapp.com",
    projectId: "smart-schedule-planer",
    storageBucket: "smart-schedule-planer.firebasestorage.app",
    messagingSenderId: "172523740542",
    appId: "1:172523740542:web:80587eedf90e654fbf672f",
    measurementId: "G-SK630PJ7CX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const db = getFirestore(app);

async function loadTasks() {
  const snap = await getDocs(collection(db, "tasks"));
  document.getElementById("list").innerHTML =
    snap.docs.map(d => `<li>${d.data().task}</li>`).join("");
}

async function addTask() {
  const task = document.getElementById("task").value;
  if (!task) return;
  await addDoc(collection(db, "tasks"), { task });
  document.getElementById("task").value = "";
  loadTasks();
}

document.getElementById("addBtn").addEventListener("click", addTask);
loadTasks();