import './Location.css';

const Location = () => {
    return (
        <section className="location-section" id="ubicacion">
            <div className="location-container">
                <div className="location-info">
                    <div className="location-header">
                        <h2>Ingreso y Ubicación</h2>
                        <p>Todo lo que necesitas saber para tu llegada al Camping El Lago.</p>
                    </div>

                    <div className="info-cards">
                        <div className="info-card">
                            <span className="material-symbols-outlined info-icon">schedule</span>
                            <div className="info-details">
                                <h4>Horarios Ingreso y Egreso</h4>
                                <ul>
                                    <li><strong>Ingreso carpas:</strong> 24:00hs</li>
                                    <li><strong>Ingreso dormis:</strong> hasta las 22:00hs</li>
                                    <li><strong>Egreso carpas y dormis:</strong> 10:00hs</li>
                                </ul>
                            </div>
                        </div>

                        <div className="info-card">
                            <span className="material-symbols-outlined info-icon">key</span>
                            <div className="info-details">
                                <h4>Información Importante</h4>
                                <p>Durante la permanencia el Camping El Lago estará abierto las 24hs.</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <span className="material-symbols-outlined info-icon">location_on</span>
                            <div className="info-details">
                                <h4>Dirección</h4>
                                <p>Ferrari 200 Colòn, Entre Rios.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="map-container overflow-hidden">
                    <iframe
                        title="Mapa de ubicación real"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.0726028709123!2d-58.13286167599185!3d-32.22553948847863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ae3319d42ed2d9%3A0x733bb62ec886b25f!2sParque%20Dr.%20Herminio%20J.%20Quir%C3%B3s!5e0!3m2!1ses-419!2sar!4v1771797078638!5m2!1ses-419!2sar"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: '400px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Location;
