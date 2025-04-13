import React, { useState } from 'react';
import './components.css';

const DesignList = ({ designs, onDelete }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="design-grid">
        {designs.map((design, index) => (
          <div key={index} className="design-card">
            <img
              src={design.image}
              alt={`Design ${design.designNo}`}
              onClick={() => setSelectedImage(design.image)}
              style={{ cursor: 'pointer' }}
            />
            <div className="design-info">
              <h3>{design.designName}</h3>
              <p><strong>No:</strong> {design.designNo}</p>
              <p>{design.description}</p>
              <button className="delete-button" onClick={() => onDelete(index)}>
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-preview-overlay" onClick={() => setSelectedImage(null)}>
          <div className="image-preview-content">
            <img src={selectedImage} alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignList;
