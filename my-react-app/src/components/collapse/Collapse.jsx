import { useState } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
    <div className="collapse__header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        {isOpen ? <FaAngleDown /> : <FaAngleUp />}
    </div>
    {isOpen && <div className="collapse__content">{children}</div>}
    </div>   
  );
}

export default Collapse;