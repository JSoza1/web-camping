import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="header-container">
            <div className="header-content">
                <div className="logo">
                    <span className="material-symbols-outlined logo-icon">forest</span>
                    <h1>Camping El Lago</h1>
                </div>
                <nav className="main-nav">
                    <a href="#inicio">Inicio</a>
                    <a href="#presentacion">Nuestro Camping</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#galeria">Galería</a>
                    <a href="#reviews">Reseñas</a>
                    <a href="#contacto">Contacto</a>
                </nav>
                <div className="header-actions">
                    <input
                        className="hidden-toggle"
                        id="mobile-menu-toggle"
                        type="checkbox"
                        checked={isMenuOpen}
                        onChange={(e) => setIsMenuOpen(e.target.checked)}
                    />
                    <label className="menu-toggle" htmlFor="mobile-menu-toggle">
                        <span className="material-symbols-outlined menu-icon">menu</span>
                        <span className="material-symbols-outlined close-icon">close</span>
                    </label>
                    <div className="mobile-menu">
                        <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a>
                        <a href="#presentacion" onClick={() => setIsMenuOpen(false)}>Nuestro Camping El Lago</a>
                        <a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a>
                        <a href="#galeria" onClick={() => setIsMenuOpen(false)}>Galería</a>
                        <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reseñas</a>
                        <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
