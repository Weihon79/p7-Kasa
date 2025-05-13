import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  // Déclare un état pour gérer l'ouverture/fermeture
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour gérer l'ouverture et la fermeture du contenu
  const display = () => {
    // Si le contenu est déjà ouvert, on le ferme
    if (isOpen) {
      setIsOpen(false);
    } else {
      // Si le contenu est fermé, on l'ouvre
      setIsOpen(true);
    }
  };

  return (
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        {/* Affichage du titre de la section */}
        <h2>{title}</h2>
        <p>
          {/* Icone permettant de basculer entre ouverture/fermeture */}
          <i onClick={display}
            className={`fa-solid fa-chevron-up ${isOpen ? "rotate" : ""}`}
          />
        </p>
      </div>
      <div
        // Application de la classe "open" si le contenu est ouvert
        className={`collapse__dropdown__content ${isOpen ? "open" : ""}`}
      >
        {/* Contenu de la section, visible uniquement si ouverte */}
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Collapse;
