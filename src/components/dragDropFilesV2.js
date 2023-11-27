import React, { useState, useRef } from "react";
import "../styles/stylesAnalista.css";

const FileItem = ({ file, onCancel }) => {
  return (
    <li>
      {file.name}
      <button className="uploads" onClick={() => onCancel(file)}>Remover</button>
    </li>
  );
};

const DragDropFilesV2 = ({ onFilesSelected }) => {
  const [files, setFiles] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleUpload = () => {
    // Assuming you want to pass the selected files back to the parent
    onFilesSelected(files);

    // Rest of your code for handling the upload
    // ...

    // Reset the component state after uploading
    setFiles(null);
    setShowPopup(true);
  };

  const handleCancel = (fileToCancel) => {
    const remainingFiles = Array.from(files).filter((file) => file !== fileToCancel);
    if (remainingFiles.length > 0) {
      setFiles(remainingFiles);
    } else {
      // Se não houver mais arquivos, redefine para o estado inicial (null)
      setFiles(null);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  if (files) {
    return (
      <div className="uploads">
        <ul>
          {Array.from(files).map((file, idx) => (
            <FileItem key={idx} file={file} onCancel={handleCancel} />
          ))}
        </ul>
        <div className="actions">
          <button onClick={() => setFiles(null)}>Remover Todos</button>
          <button onClick={handleUpload}>Confirmar</button>
        </div>
        {showPopup && (
          <div className="popup">
            <p>Imagens inseridas com sucesso</p>
            <button onClick={closePopup}>Fechar</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
        <h1>Arraste as imagens</h1>
        <h1>Ou</h1>
        <input
          type="file"
          multiple
          onChange={(event) => setFiles(event.target.files)}
          hidden
          accept="image/png, image/jpeg"
          ref={inputRef}
        />
        <button onClick={() => inputRef.current.click()}>Selecione as imagens</button>
      </div>
    </>
  );
};

export default DragDropFilesV2;
