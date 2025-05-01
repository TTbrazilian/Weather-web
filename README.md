# 🌤 React Weather App

Aplicação web feita em **React** que permite ao usuário consultar o clima e tempo de uma cidade pesquisada, consumindo a API da [OpenWeatherMap](https://openweathermap.org/api). Desenvolvido como parte de um trabalho prático.

## 🚀 Funcionalidades

- 🔍 Pesquisa por nome da cidade
- 🌦 Exibição de clima atual (temperatura, umidade, vento, condição)
- 🌐 Consumo de API externa (OpenWeather)
- 🧭 Rotas dinâmicas com React Router
- 📱 Interface simples e responsiva

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## 📦 Instalação e Execução Local

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/react-weather-app.git
cd react-weather-app
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure a API do OpenWeather

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
VITE_WEATHER_API_KEY=sua_api_key_aqui
```

Você pode obter sua API key gratuita em [https://openweathermap.org/api](https://openweathermap.org/api).

### 4. Execute o projeto

```bash
npm run dev
```

Acesse em `http://localhost:5173`.

---

## 🖼 Prints da aplicação

### Página Inicial
![Página inicial](./prints/home.png)

### Página de Clima
![Clima da cidade](./prints/city.png)

---

## 📁 Estrutura de Diretórios

```
react-weather-app/
├── public/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── CityDetail.jsx
│   ├── services/
│   │   └── weatherService.js
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── package.json
└── vite.config.js
```

---

## 🧑‍💻 Autor

- Nome: **Seu Nome Aqui**
- Curso: Engenharia de Software — 4º semestre
- Trabalho prático para disciplina de Desenvolvimento Web

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
