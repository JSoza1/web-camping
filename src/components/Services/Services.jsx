import './Services.css';

const Services = () => {
    // Array of services defined in the new stitched design
    const features = [
        { icon: 'outdoor_grill', title: 'Parrillas', desc: 'Parrillas disponibles para tus asados.' },
        { icon: 'hot_tub', title: 'Baños con agua caliente', desc: 'Duchas con agua caliente las 24 horas para tu máximo confort.' },
        { icon: 'wifi', title: 'WiFi', desc: 'Conexión inalámbrica disponible en las áreas comunes.' },
        { icon: 'cabin', title: 'Dormis', desc: 'Habitaciones sencillas y confortables para quienes no traen carpa.' },
        { icon: 'security', title: 'Seguridad', desc: 'Vigilancia y acceso controlado para una estadía tranquila.' },
        { icon: 'electric_bolt', title: 'Electricidad', desc: 'Tomas de corriente en cada parcela y buena iluminación.' }
    ];

    return (
        <section className="services-section-large" id="servicios">
            <div className="services-header-large">
                <h3 className="services-subtitle">Comodidades</h3>
                <h2 className="services-title">Nuestros Servicios</h2>
            </div>

            <div className="services-grid-large">
                {features.map((feat, idx) => (
                    <div key={idx} className="feature-card-large">
                        <div className="feature-icon-wrapper-large">
                            <span className="material-symbols-outlined">{feat.icon}</span>
                        </div>
                        <h3>{feat.title}</h3>
                        <p>{feat.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
