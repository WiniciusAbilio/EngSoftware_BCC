import React, { useState } from "react";
import "../styles.css";
import SelectFiliais from "../components/selectFiliais";
import SelectSilos from "../components/selectSilos"
import DragDropFilesV2 from "../components/dragDropFilesV2";

function ImagemAnalista() {
  const [cidade, setCidade] = useState("");
  const [silo, setSilo] = useState("");
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleInserir = (event) => {
    event.preventDefault();

    // Aqui você pode adicionar a lógica para enviar os dados (filial, silo, e arquivos) para o backend
    // Certifique-se de descomentar a lógica do servidor no componente DragDropFilesV2

    // Exemplo de objeto para enviar ao backend
    const data = {
      filial,
      silo,
      files: selectedFiles,
    };

    // Substitua a URL pelo endpoint correto no seu backend
    // axios.post("/api/inserirImagem", data)
    //   .then((response) => {
    //     console.log("Inserção bem-sucedida", response.data);
    //     // Adicione lógica para mostrar um popup ou feedback ao usuário
    //   })
    //   .catch((error) => {
    //     console.error("Erro ao inserir imagem:", error);
    //     // Adicione lógica para mostrar um popup ou feedback de erro ao usuário
    //   });
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleInserir}>
            <span className="login-form-title">Inserir Imagem</span>

            <SelectFiliais />

            <SelectSilos />

            <DragDropFilesV2 onFilesSelected={setSelectedFiles} />

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
