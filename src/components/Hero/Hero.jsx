import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section" id="inicio">
            <div className="hero-background">
                <div className="hero-overlay"></div>
                <img
                    alt="Atmospheric high-resolution campsite in a lush forest with a cozy tent"
                    className="hero-image"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhWoDREsKNTU0CAakYjKInI96emLk9Av-_CWy5cHY4PMQiIavoLXO2M8iMdOFBFZvpsm-lTNscS-hcN2E1eP0AAqVM8VG3NfNH8C7R9gj9fztlfQwW9LXfwJM4rqFWHgw1GDeYp9E3wl5FcxFzpJmu7ZeSWjc8Sgor26-avKtVa0Ys4CsatXyc3qW8LrpZxyGgZPU1WlWUdwMwiuS3QEc0dZAdyD0l1q3D2TCocuWPRwe0JLFACATxqmUW4NxuETDhFJ2UvU0n5F98"
                />
            </div>

            <div className="hero-content">
                <h2 className="hero-title">
                    Escápate a la naturaleza en Camping tu nombre
                </h2>
                <p className="hero-subtitle">
                    Un refugio de paz y desconexión total, abierto todo el año, a metros del río y en pleno entorno natural.
                </p>
                <div className="hero-actions">
                    <a className="btn-primary-large" href="https://wa.me/540123456789" target="_blank" rel="noopener noreferrer">
                        Consultar disponibilidad
                    </a>
                    <a className="btn-secondary" href="#galeria">
                        Ver fotos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
