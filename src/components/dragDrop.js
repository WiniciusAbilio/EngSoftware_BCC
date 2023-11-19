import React, { useState } from 'react';
import FileInput from './fileInput'; // Adjust the import path based on your project structure
import '../styles/stylesAnalista.css'

const DragDrop = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (files) => {
    setSelectedFiles(files);
  };

  return (
    <div>
      <h1>Arraste a imagem</h1>
      <FileInput onFileSelect={handleFileSelect} />
      {selectedFiles.length > 0 && (
        <div>
          <h2>Imagens Selecionadas:</h2>
          <ul>
            {selectedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DragDrop;
