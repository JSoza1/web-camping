import './About.css';

const About = () => {
    return (
        <section className="about-section" id="presentacion">
            <div className="about-container">
                <div className="about-text-content">
                    <h3 className="about-subtitle">Bienvenidos</h3>
                    <h2 className="about-title">Nuestro Camping El Lago</h2>
                    <p className="about-desc">
                        En Camping El Lago, nos dedicamos a ofrecerte una experiencia auténtica. Nuestra ubicación
                        privilegiada te brinda una <strong>cercanía única al río</strong> en un entorno natural ideal para descansar.
                        Nuestras instalaciones se encuentran abiertas todo el año para que puedas disfrutar de la naturaleza en cualquier momento.
                    </p>
                    <div className="about-features">
                        <div className="about-feature">
                            <span className="material-symbols-outlined feature-icon">water_lux</span>
                            <span className="feature-label">Cercanía al río</span>
                        </div>
                        <div className="about-feature">
                            <span className="material-symbols-outlined feature-icon">eco</span>
                            <span className="feature-label">Entorno natural</span>
                        </div>
                        <div className="about-feature">
                            <span className="material-symbols-outlined feature-icon">spa</span>
                            <span className="feature-label">Paz absoluta</span>
                        </div>
                        <div className="about-feature">
                            <span className="material-symbols-outlined feature-icon">family_restroom</span>
                            <span className="feature-label">Ambiente familiar</span>
                        </div>
                    </div>
                </div>
                <div className="about-image-content">
                    <img
                        alt="Entorno del camping"
                        className="about-img"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuP8sj6yqQUhI8Qc8AncYrtA8CAz2YePvxWJi6IJhtL5FWAuadFx3Jy0EInvH2r_IppdQeEqXEPWPMK5mYIYnWQ5-0BNP_u2apKD6QE2qwcmmm_9vI4KWFVxEsSCe0nDTD70PvGcuvjvw386KdwrhjICKPxyibo18ws-kqqJQLcKrCeY8f4MqxPh-Aqk9xrnt1ZoZgE8W89-TYQFoQfnG_lhxHJ67bjJ3b_baN266-Ntfx1OUx22Ui4Pciyxdl3nAF6tznkOme_hO4"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
