import React, { useState, useEffect } from 'react';
import AddDesignForm from './components/AddDesignForm';
import DesignList from '../src/Components/DesignList';
import SearchBar from './components/SearchBar';
import './App.css';

const LOCAL_STORAGE_KEY = 'fsstudio_designs'; // Key to save designs in localStorage

const App = () => {
  const [designs, setDesigns] = useState([]); // State to store designs
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term

  // Load designs from localStorage when the app starts
  useEffect(() => {
    const savedDesigns = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedDesigns) {
      setDesigns(JSON.parse(savedDesigns));  // Parse and load designs into state
    }
  }, []);  // Empty dependency array means it runs only once when the component mounts

  // Save designs to localStorage every time the designs state changes
  useEffect(() => {
    if (designs.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(designs));  // Save designs to localStorage
    }
  }, [designs]);  // This runs every time designs state changes

  // Add a new design to the list
  const addDesign = (design) => {
    setDesigns([...designs, design]);
  };

  // Delete a design from the list
  const deleteDesign = (indexToDelete) => {
    const updatedDesigns = designs.filter((_, index) => index !== indexToDelete);
    setDesigns(updatedDesigns);
  };

  // Filter designs based on search term
  const filteredDesigns = designs.filter((design) =>
    design.designNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    design.designName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Design Dashboard</h1>
      <AddDesignForm onAddDesign={addDesign} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Pass designs and delete function to DesignList */}
      <DesignList designs={filteredDesigns} onDelete={deleteDesign} />
    </div>
  );
};

export default App;
