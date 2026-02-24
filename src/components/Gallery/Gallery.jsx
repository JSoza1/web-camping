import './Gallery.css';
import aerial from '../../assets/gallery/camping_bathrooms.webp';
import barbecue from '../../assets/gallery/camping_barbecue_area.webp';
import bonfire from '../../assets/gallery/camping_bonfire_night.webp';
import cabins from '../../assets/gallery/camping_cabins_woods.webp';
import riverSunset from '../../assets/gallery/camping_river_sunset.webp';
import tent from '../../assets/gallery/camping_tent_forest.webp';

const Gallery = () => {
    const images = [
        aerial,
        barbecue,
        bonfire,
        cabins,
        riverSunset,
        tent
    ];

    return (
        <section className="gallery-section" id="galeria">
            <div className="gallery-container">
                <div className="gallery-header">
                    <h2 className="gallery-title">Galería de Fotos</h2>
                    <p className="gallery-desc">Descubre la belleza que te espera en nuestro predio.</p>
                </div>
                <div className="gallery-grid">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            alt={`Naturaleza ${index + 1}`}
                            className="gallery-image"
                            src={src}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
