const axios = require('axios');

const API_KEY = '6b4e7c2ad520d19b6b2efaba13c6b87b';

const cidade = process.argv[2];

const buscarPrevisao = async (cidade) => {
  try {    
    const resposta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&APPID=${API_KEY}&units=metric&lang=pt`);
    
    const dados = resposta.data;
 
    console.log(`Previsão do tempo para ${cidade}:`);
    console.log(`- Temperatura: ${dados.main.temp}°C`);
    console.log(`- Condição: ${dados.weather[0].description}`);
    console.log(`- Sensação térmica: ${dados.main.feels_like}°C`);
  } catch (erro) {
    console.log('Erro ao buscar a previsão do tempo:', erro.response?.data?.message || erro.message);
  }
};

if (cidade) {
  buscarPrevisao(cidade);
} else {
  console.log('Por favor, forneça o nome de uma cidade.');
}
