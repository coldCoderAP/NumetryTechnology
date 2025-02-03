import React, { useState } from 'react';
import '../Css/Jan31ImageGallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalImage, setModalImage] = useState(null);

  const images = [
    { src: require('../images/Nature1.jpeg'), category: 'nature' },
    { src: require('../images/Nature2.jpeg'), category: 'tech' },  
    { src: require('../images/Art1.jpeg'), category: 'art' },
    { src: require('../images/Art2.jpg'), category: 'nature' },
    { src: require('../images/Tech1.avif'), category: 'tech' },
    { src: require('../images/Tech2.avif'), category: 'art' },
  ];

  const filterImages = (category) => {
    setSelectedCategory(category);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="filter-container">
        <button className="filter-btn" onClick={() => filterImages('all')}>All</button>
        <button className="filter-btn" onClick={() => filterImages('nature')}>Nature</button>
        <button className="filter-btn" onClick={() => filterImages('tech')}>Tech</button>
        <button className="filter-btn" onClick={() => filterImages('art')}>Art</button>
      </div>

      <div className="gallery">
        {images
          .filter(image => selectedCategory === 'all' || image.category === selectedCategory)
          .map((image, index) => (
            <div className="gallery-item" key={index}>
              <img 
                src={image.src} 
                alt={image.category} 
                onClick={() => openModal(image.src)} 
              />
            </div>
          ))}
      </div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <img src={modalImage} alt="modal view" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
