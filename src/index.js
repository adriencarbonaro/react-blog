import React                  from 'react';
import ReactDOM               from 'react-dom';
import { initializeApp }      from "firebase/app";
import { getAnalytics }       from "firebase/analytics";
import App                    from './App';
import {
  BrowserRouter,
  Route,
  Routes
}                             from 'react-router-dom'

const firebaseConfig = {
  apiKey: "AIzaSyCSyajiKq-cm2Zx9sP0hQS1k8sHPJgq74E",
  authDomain: "nid-de-poule.firebaseapp.com",
  projectId: "nid-de-poule",
  storageBucket: "nid-de-poule.appspot.com",
  messagingSenderId: "1076183007666",
  appId: "1:1076183007666:web:d84100f3228e0ab85f24ab",
  measurementId: "G-PVJ65R0ZSL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App analytics={analytics}/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
