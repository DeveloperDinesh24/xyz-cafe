import './App.css';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';

export default function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <AboutSection />
    <MenuSection />
    <ContactSection />
    <Footer />
    </>
  )
}