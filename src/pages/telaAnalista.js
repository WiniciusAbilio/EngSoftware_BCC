import React, { useState, useEffect } from "react";
import "../styles.css";
import { Link } from "react-router-dom"; // Importe a funcionalidade de Link para criar links
import axios from "axios";

function telaAnalista() {
  // Estado para armazenar os dados do usuário
//   const [userData, setUserData] = useState(null);

  // Efeito para carregar os dados do usuário ao montar o componente
//   useEffect(() => {
    // Simulação de uma solicitação ao backend
//     axios
//       .get("/api/user") // Substitua '/api/user' pela rota correta do seu backend
//       .then((response) => {
//         setUserData(response.nomeUsuario);
//       })
//       .catch((error) => {
//         console.error("Erro ao obter dados do usuário:", error);
//       });
//   }, []);

  return (
    <div className="container">
      <div className="container-adm">
        <div className="wrap-adm">
          <h1>Bem Vindo,!</h1>
          <div className="container-login-form-btn">
            <Link to="/imagemAnalista">
              <button className="logon-form-btn">Inserir Imagem</button>
            </Link>
          </div>

          <div className="container-login-form-btn">
            <Link to="/cadastroFilial">
              <button className="logon-form-btn">CADASTRAR FILIAL</button>
            </Link>
          </div>

          <div className="container-login-form-btn">
            <Link to="/cadastroSilo">
              <button className="logon-form-btn">CADASTRAR SILO</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default telaAnalista;
