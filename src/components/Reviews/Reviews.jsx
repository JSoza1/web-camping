import React from 'react';
import './Reviews.css';

const reviewsData = [
    {
        id: 1,
        name: 'María Laura',
        date: 'Hace 2 semanas',
        text: 'Un lugar mágico. La conexión con la naturaleza, la limpieza de las instalaciones y la atención son de primera. Definitivamente volveremos para nuestras próximas vacaciones.',
        rating: 5,
        avatar: 'M'
    },
    {
        id: 3,
        name: 'Sofía',
        date: 'Hace 2 meses',
        text: 'Mucha paz y tranquilidad. El entorno es hermoso y la proveeduría tiene todo lo que necesitas a buen precio. ¡Súper recomendable para desconectar de la ciudad!',
        rating: 5,
        avatar: 'S'
    },
    {
        id: 4,
        name: 'Diego',
        date: 'Hace 3 meses',
        text: 'De los mejores campings que visité. La zona de acampe es perfecta, las parrillas geniales y la atención del personal te hace sentir como en casa.',
        rating: 5,
        avatar: 'D'
    }
];

const Reviews = () => {
    return (
        <section id="reviews" className="reviews-section">
            <div className="reviews-container">
                <h2 className="reviews-title">Nuestras reseñas</h2>
                <p className="reviews-subtitle">Experiencias de quienes ya nos visitaron</p>

                <div className="reviews-grid">
                    {reviewsData.map((review) => (
                        <div key={review.id} className="review-card">
                            <div className="review-header">
                                <div className="review-avatar">
                                    {review.avatar}
                                </div>
                                <div className="review-user-info">
                                    <h3 className="review-name">{review.name}</h3>
                                    <span className="review-date">{review.date}</span>
                                </div>
                            </div>
                            <div className="review-stars">
                                {[...Array(review.rating)].map((_, index) => (
                                    <svg key={index} className="star-icon" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
