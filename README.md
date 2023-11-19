# EngSoftware_BCC 🎓
Este repositório pertence ao projeto da disciplina de Engenharia de Software da UTFPR-CM. 🏫

O projeto é um site que permite que empresas no ramo alimentício identifiquem quais são as espécies de pragas encontradas nos silos junto com os grãos. 🌽🐜 O site utiliza uma inteligência artificial para identificar as espécies de pragas. 🧠💻

## Comandos Frontend 💻
Os comandos a seguir precisam ser executados dentro da pasta raiz no terminal:

**Configurar variáveis de ambiente:**
```bash
cp .env.example .env
```

**Instalar requerimentos frontend:**
```bash
npm install
```

**Executar o frontend:**
```bash
npm start
```

## Comandos Backend 🖥️
Os comandos a seguir precisam ser executados dentro da pasta backend pelo terminal:

**Configurar variáveis de ambiente:**
```bash
cp .env.example .env
```

**Instalar requerimentos backend:**
```bash
pip install -r requirements.txt 
```

**Executar o backend:**
```bash
python manage.py runserver
```

## Alterar senha padrão do MySQL 🔑
```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

## Comandos Docker e Docker Compose 🐋
Com o `Docker Compose` é possível ter o frontend, o backend e uma instância do banco de dados já configurados rodando em containers. Assim o desenvolvedor pode rodar a aplicação inteira com apenas um comando.

O comando a seguir precisa ser executado dentro da pasta raiz no terminal:

**Construir executar os containers Docker:** 
``` bash
docker compose up
```
