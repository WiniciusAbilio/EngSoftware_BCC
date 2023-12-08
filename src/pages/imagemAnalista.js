import React, { useState } from "react";
import "../styles.css";
import SelectFiliais from "../components/selectFiliais";


function ImagemAnalista() {
  const [cidade, setCidade] = useState("");
  const [silo, setSilo] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onFilialChange = (novaFilial) => {
    setCidade(novaFilial);
  };

  const handleFileChange = (event) => {
    const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    setSelectedFiles([...files]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFileChange(event);
  };

  const handleInserir = (event) => {
    event.preventDefault();

    // Aqui você pode adicionar a lógica para enviar os dados (filial, silo, files) para o backend
    const data = {
      cidade,
      silo,
      files: selectedFiles,
    };

    setSelectedFiles([]);
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleInserir} onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
            <span className="login-form-title">Enviar Imagem para Relatório</span>

            <SelectFiliais onFilialChange={onFilialChange} />

            {/* Adicionado campo de arrastar e soltar */}
            <div>
              <label htmlFor="fileInput">Arraste e solte uma imagem ou clique aqui para selecionar:</label>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: "none" }}
              />
            </div>

            {/* Adicionado área para mostrar os arquivos selecionados */}
            {selectedFiles.length > 0 && (
              <div id="fileInputContainer">
                <p>Arquivos Selecionados:</p>
                <ul>
                  {selectedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="container-login-form-btn">
              <button className="logon-form-btn" type="submit">
                INSERIR
              </button>
            </div>
         
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImagemAnalista;