import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'

// Import des pages
import Home from './Pages/Home'
import Ficof from './Pages/Ficof'
import Evenement from './Pages/Evenement'
import Formation from './Pages/Formation'
import Emploi from './Pages/Emploi'
import Archives from './Pages/Archives'
import Conferences from './Pages/Conferences'
import Adhesion from './Pages/Adhesion'
import Contact from './Pages/Contact'


// Pages détaillées des formations
import Comptabilite from './Pages/Formations/Comptabilite'
import Fiscalite from './Pages/Formations/Fiscalite'
import Paie from './Pages/Formations/Paie'
import Finance from './Pages/Formations/Finance'
import Management from './Pages/Formations/Management'
import Veille from './Pages/Formations/Veille'
import Conseils from './Pages/Formations/Conseils'
import Footer from './Components/Footer'
import EvenementPage from './Pages/Evenements/EvennementPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-18 md:pt-21"> {/* Ajustement pour la hauteur du header fixe */}
        <Routes>
          {/* Routes principales */}
          <Route path="/" element={<Home />} />
          <Route path="/ficof" element={<Ficof />} />
          <Route path="/evenements" element={<Evenement />} />
          <Route path="/formations" element={<Formation />} />
          <Route path="/emploi" element={<Emploi />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/adhesion" element={<Adhesion />} />
          <Route path="/contact" element={<Contact />} />

          {/* Routes des événements détaillés */}
          <Route path="/evenements/:slug" element={<EvenementPage/>} />

          {/* Routes des formations détaillées */}
          <Route path="/formations/comptabilite" element={<Comptabilite />} />
          <Route path="/formations/fiscalite" element={<Fiscalite />} />
          <Route path="/formations/paie" element={<Paie />} />
          <Route path="/formations/finance" element={<Finance />} />
          <Route path="/formations/management" element={<Management />} />
          <Route path="/formations/veille" element={<Veille />} />
          <Route path="/formations/conseils" element={<Conseils />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App