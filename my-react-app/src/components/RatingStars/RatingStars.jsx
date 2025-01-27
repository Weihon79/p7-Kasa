import React from "react";

function RatingStars({ rating }) {
  const totalStars = 5; // Nombre total d'étoiles
  const filledStars = parseInt(rating, 10); // Convertir la note en entier (parseInt = integer)
  const emptyStars = totalStars - filledStars;

  return (
    <div className="rating-stars">
      {/* Étoiles remplies */}
      {Array(filledStars)
        .fill(null)
        .map((_, index) => (
          <i key={`filled-${index}`} className="fa-solid fa-star filled"></i>
        ))}

      {/* Étoiles vides */}
      {Array(emptyStars)
        .fill(null)
        .map((_, index) => (
          <i key={`empty-${index}`} className="fa-solid fa-star empty"></i>
        ))}
    </div>
  );
}

export default RatingStars;
