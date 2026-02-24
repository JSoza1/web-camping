import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Location from './components/Location/Location';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp'
import Reviews from './components/Reviews/Reviews';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <Hero />
                <About />
                <Services />
                <Gallery />
                <Reviews />
                <Location />
                <Contact />
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}

export default App;
