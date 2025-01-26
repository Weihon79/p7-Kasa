import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const display = () => {
    if (isOpen) {
      // On déclenche la fermeture, mais la transition aura lieu d'abord
      setIsOpen(false);
    } else {
      // Si c'est fermé, on l'ouvre
      setIsOpen(true);
    }
  };

  return (
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
        <p>
          <i onClick={display}
            className={`fa-solid fa-chevron-up ${isOpen ? "rotate" : ""}`}
          />
        </p>
      </div>
      <div
        className={`collapse__dropdown__content ${isOpen ? "open" : ""}`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Collapse;
