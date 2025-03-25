// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Context from './components/Context'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Manifesto from './pages/Manifesto.tsx'
import Articles from './pages/Articles.tsx'
import MDSI from './pages/MDSI.tsx'
import DroughtManagement from './pages/DroughtManagement'
import MoroccoTechHub from './pages/MoroccoTechHub'

// Home page component to keep all the main page content
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Context />
      <SocialProof />
      <FAQ />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/mdsi" element={<MDSI />} />
          <Route path="/articles/drought-management" element={<DroughtManagement />} />
          <Route path="/articles/morocco-tech-hub" element={<MoroccoTechHub />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App