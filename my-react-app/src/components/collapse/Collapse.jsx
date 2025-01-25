import { useState } from 'react';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <i className={`fa-solid ${isOpen ? 'fa-angle-down' : 'fa-angle-up'}`}></i>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;