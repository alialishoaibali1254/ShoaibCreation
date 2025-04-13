import React from 'react';
import './components.css';

const DesignList = ({ designs, onDelete }) => {
  return (
    
    <div className="design-grid">
        
      {designs.map((design, index) => (
        <div key={index} className="design-card">
          <img src={design.image} alt={`Design ${design.designNo}`} />
          <div className="design-info">
            <h3>Name: {design.designName}</h3>
            <p><strong>Design No:</strong> {design.designNo}</p>
            <p>{design.description}</p>
            <button
              className="delete-button"
              onClick={() => onDelete(index)}  // Handle delete on click
            >
              🗑 Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesignList;
