import React, { useState } from 'react';

const FileInput = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    onFileSelect(files);
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    onFileSelect(files);
  };

  return (
    <div
      className={`file-input ${isDragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        onChange={handleFileInputChange}
        multiple
      />
      <p>Arraste as imagens para dentro</p>
    </div>
  );
};

export default FileInput;
