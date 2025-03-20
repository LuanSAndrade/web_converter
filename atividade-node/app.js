// Importando o axios para realizar a requisição HTTP
const axios = require('./node_modules/axios/index.d.cts');

// Substitua pela sua chave de API do OpenWeatherMap
const API_KEY = '6b4e7c2ad520d19b6b2efaba13c6b87b';

// Obtendo o nome da cidade a partir do argumento da linha de comando
const cidade = process.argv[2];
console.log(cidade)
// Função para buscar a previsão do tempo
const buscarPrevisao = async (cidade) => {
  try {
    // Fazendo a requisição à API do OpenWeatherMap
    const resposta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&APPID=${API_KEY}&units=metric&lang=pt`);

    // Dados da resposta
    const dados = resposta.data;

    // Exibindo os dados no terminal
    console.log(`Previsão do tempo para ${cidade}:`);
    console.log(`- Temperatura: ${dados.main.temp}°C`);
    console.log(`- Condição: ${dados.weather[0].description}`);
    console.log(`- Sensação térmica: ${dados.main.feels_like}°C`);
  } catch (erro) {
    console.log('Erro ao buscar a previsão do tempo:', erro.response?.data?.message || erro.message);
  }
};

// Verifica se o nome da cidade foi fornecido
if (cidade) {
  buscarPrevisao(cidade);
} else {
  console.log('Por favor, forneça o nome de uma cidade.');
}
