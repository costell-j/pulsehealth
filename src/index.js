import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from "./Layout"
import Home from "./pages/home/Home"
import Appointments from './pages/appointments/Appointments';
import Conditions from './pages/conditions/Conditions';
import Doctors from './pages/doctors/Doctors';
import Guides from './pages/guides/Guides';
import Medications from './pages/medications/Medications';
import Resources from './pages/resources/Resources';

const App = () => {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/medications" element={<Medications />} />
          <Route path="/resources" element={<Resources />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);