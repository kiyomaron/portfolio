import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>

    
  );
}

export default App;
