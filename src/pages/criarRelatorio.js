import React, { useState } from "react";
import "../styles.css";
import SelectSilos from "../components/selectSilos";

function ImagemAnalista() {
  // Estados para armazenar as informações selecionadas
  const [selectedFilial, setSelectedFilial] = useState('');
  const [selectedSilo, setSelectedSilo] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Função de callback para o componente SelectSilos - Filial
  const handleFilialChange = (event) => {
    setSelectedFilial(event.target.value);
  };

  // Função de callback para o componente SelectSilos - Silo
  const handleSiloChange = (event) => {
    setSelectedSilo(event.target.value);
  };

  // Função de manipulação de alterações no arquivo
  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...files]);
  };

  // Função de manipulação do envio do formulário
  const handleInserir = (event) => {
    event.preventDefault();

    // Aqui você pode criar um objeto para armazenar todas as informações necessárias
    const formData = {
      filial: selectedFilial,
      silo: selectedSilo,
      files: selectedFiles,
    };

    // Agora você pode usar o objeto formData conforme necessário, como enviá-lo para o servidor, etc.

    // Exemplo de como você pode logar os dados
    console.log("Dados a serem enviados:", formData);

    // Limpar os estados após o envio, se necessário
    setSelectedFilial('');
    setSelectedSilo('');
    setSelectedFiles([]);
  };

  // Função para lidar com o evento de soltar (drop)
  const handleDrop = (e) => {
    e.preventDefault();

    const files = e.dataTransfer.files;
    setSelectedFiles([...files]);
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
        <form
          className="login-form"
          onSubmit={handleInserir}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <span className="login-form-title">Enviar Imagem para Relatório</span>

          {/* Passando as funções de callback para o componente SelectSilos */}
          <SelectSilos
            onFilialChange={(value) => handleFilialChange(value)}
            onSiloChange={(value) => handleSiloChange(value)}
          />


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
