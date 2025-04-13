import React, { useState } from 'react';
import './components.css';

const AddDesignForm = ({ onAddDesign }) => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [designName, setDesignName] = useState('');
  const [designNo, setDesignNo] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imagePreview || !designName || !designNo) {
      alert("Please fill all required fields.");
      return;
    }

    onAddDesign({
      image: imagePreview,
      designName,
      designNo,
      description
    });

    // Reset the form
    setImageFile(null);
    setImagePreview(null);
    setDesignName('');
    setDesignNo('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="form-input"
      />

      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '15px' }}
        />
      )}

      <input
        type="text"
        placeholder="Design Name"
        value={designName}
        onChange={(e) => setDesignName(e.target.value)}
        required
        className="form-input"
      />

      <input
        type="text"
        placeholder="Design No"
        value={designNo}
        onChange={(e) => setDesignNo(e.target.value)}
        required
        className="form-input"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-textarea"
      ></textarea>

      <button type="submit" className="form-button">Add Design</button>
    </form>
  );
};

export default AddDesignForm;
