import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB5LFOUTZdzIoE4nDv2ZOH4PL_H_Ru-S4A",
  authDomain: "silverwebsite-b768f.firebaseapp.com",
  projectId: "silverwebsite-b768f",
  storageBucket: "silverwebsite-b768f.appspot.com",
  messagingSenderId: "978408157701",
  appId: "1:978408157701:web:b8fdddca698b1c712c626c",
  measurementId: "G-LVNY8BH057"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
