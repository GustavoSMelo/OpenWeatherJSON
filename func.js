'use strict';

const dados = [
  {
    dt: { dia: '15', mes: '11', ano: '2019' },
    temp: {
      day: 25.18,
      min: 20.19,
      max: 25.47,
      night: 20.76,
      eve: 22.94,
      morn: 20.19
    },
    pressure: 1012,
    humidity: 61,
    weather: [
      { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }
    ],
    speed: 4.59,
    deg: 148,
    clouds: 80
  },
  {
    dt: { dia: '02', mes: '11', ano: '2019' },
    temp: {
      day: 30.36,
      min: 20.13,
      max: 30.36,
      night: 21.84,
      eve: 23.15,
      morn: 20.13
    },
    pressure: 1013,
    humidity: 42,
    weather: [
      {
        id: 502,
        main: 'Rain',
        description: 'heavy intensity rain',
        icon: '10d'
      }
    ],
    speed: 1.61,
    deg: 131,
    clouds: 92,
    rain: 15.37
  },
  {
    dt: { dia: '03', mes: '11', ano: '2019' },
    temp: {
      day: 28.72,
      min: 21.65,
      max: 28.72,
      night: 22.31,
      eve: 25.4,
      morn: 21.65
    },
    pressure: 1013,
    humidity: 44,
    weather: [
      { id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' }
    ],
    speed: 5.05,
    deg: 309,
    clouds: 99,
    rain: 9.7
  },
  {
    dt: { dia: '04', mes: '11', ano: '2019' },
    temp: {
      day: 19.38,
      min: 18.13,
      max: 24.78,
      night: 18.13,
      eve: 18.69,
      morn: 21.7
    },
    pressure: 1015,
    humidity: 73,
    weather: [
      { id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' }
    ],
    speed: 9.19,
    deg: 163,
    clouds: 99,
    rain: 3.62
  },
  {
    dt: { dia: '05', mes: '11', ano: '2019' },
    temp: {
      day: 27.38,
      min: 18.19,
      max: 27.38,
      night: 18.77,
      eve: 21.86,
      morn: 18.19
    },
    pressure: 1014,
    humidity: 45,
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
    ],
    speed: 4.36,
    deg: 98,
    clouds: 5,
    rain: 0.31
  },
  {
    dt: { dia: '06', mes: '11', ano: '2019' },
    temp: {
      day: 29.2,
      min: 18.14,
      max: 29.2,
      night: 21.06,
      eve: 25.31,
      morn: 18.14
    },
    pressure: 1012,
    humidity: 41,
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
    ],
    speed: 2.02,
    deg: 48,
    clouds: 16,
    rain: 1.38
  },
  {
    dt: { dia: '07', mes: '11', ano: '2019' },
    temp: {
      day: 25.14,
      min: 20.7,
      max: 25.14,
      night: 21.03,
      eve: 24.65,
      morn: 20.7
    },
    pressure: 1009,
    humidity: 62,
    weather: [
      {
        id: 502,
        main: 'Rain',
        description: 'heavy intensity rain',
        icon: '10d'
      }
    ],
    speed: 4.25,
    deg: 12,
    clouds: 93,
    rain: 13.13
  },
  {
    dt: { dia: '08', mes: '11', ano: '2019' },
    temp: {
      day: 21.56,
      min: 19.34,
      max: 22.23,
      night: 19.34,
      eve: 19.76,
      morn: 20.93
    },
    pressure: 1005,
    humidity: 81,
    weather: [
      {
        id: 502,
        main: 'Rain',
        description: 'heavy intensity rain',
        icon: '10d'
      }
    ],
    speed: 6.34,
    deg: 303,
    clouds: 100,
    rain: 18.44
  },
  {
    dt: { dia: '09', mes: '11', ano: '2019' },
    temp: {
      day: 20.42,
      min: 17.78,
      max: 20.42,
      night: 17.78,
      eve: 18.72,
      morn: 19.17
    },
    pressure: 1008,
    humidity: 75,
    weather: [
      { id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' }
    ],
    speed: 3.53,
    deg: 134,
    clouds: 100,
    rain: 4.45
  },
  {
    dt: { dia: '10', mes: '11', ano: '2019' },
    temp: {
      day: 21.78,
      min: 17.29,
      max: 21.78,
      night: 17.46,
      eve: 17.67,
      morn: 17.61
    },
    pressure: 1011,
    humidity: 65,
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
    ],
    speed: 4.62,
    deg: 149,
    clouds: 90,
    rain: 2.27
  },
  {
    dt: { dia: '11', mes: '11', ano: '2019' },
    temp: {
      day: 22.71,
      min: 16.58,
      max: 23.37,
      night: 16.79,
      eve: 20.2,
      morn: 16.58
    },
    pressure: 1012,
    humidity: 56,
    weather: [
      { id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }
    ],
    speed: 4.29,
    deg: 132,
    clouds: 97
  },
  {
    dt: { dia: '12', mes: '11', ano: '2019' },
    temp: {
      day: 28.38,
      min: 15.92,
      max: 28.38,
      night: 19.83,
      eve: 22.25,
      morn: 15.92
    },
    pressure: 1010,
    humidity: 39,
    weather: [
      { id: 800, main: 'Clear', description: 'sky is clear', icon: '01d' }
    ],
    speed: 0.77,
    deg: 157,
    clouds: 1
  },
  {
    dt: { dia: '13', mes: '11', ano: '2019' },
    temp: {
      day: 28.22,
      min: 18.13,
      max: 28.22,
      night: 18.13,
      eve: 21.77,
      morn: 19.39
    },
    pressure: 1009,
    humidity: 32,
    weather: [
      { id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }
    ],
    speed: 4.23,
    deg: 164,
    clouds: 98
  },
  {
    dt: { dia: '14', mes: '11', ano: '2019' },
    temp: {
      day: 18.25,
      min: 16.04,
      max: 19.6,
      night: 16.04,
      eve: 17.56,
      morn: 17.5
    },
    pressure: 1012,
    humidity: 81,
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
    ],
    speed: 5,
    deg: 160,
    clouds: 100,
    rain: 2.38
  },
  {
    dt: { dia: '15', mes: '11', ano: '2019' },
    temp: {
      day: 22.16,
      min: 15.75,
      max: 22.16,
      night: 15.86,
      eve: 18.77,
      morn: 15.75
    },
    pressure: 1015,
    humidity: 51,
    weather: [
      { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
    ],
    speed: 4.95,
    deg: 158,
    clouds: 80,
    rain: 0.57
  }
];

window.addEventListener('load', () => {
  exibirTempo();
  diaMaisUmido();
  mediaTempMax_Min();
});

const exibirTempo = () => {
  const block = window.document.querySelector('#temp_container');

  dados.map(item => {
    block.innerHTML += `<div class="tempo_dia">
            <span class="img">
                ${item.dt.dia}/${item.dt.mes}/${item.dt.ano}<br/>
                <img src="img/${item.weather[0].icon}.png"/> <br/>
            </span>
            <span class="temperatura">
                <span class="max">Max. ${item.temp.max}º</span> <br/>
                <span class="min">Min. ${item.temp.min}</span> <br/>
            </span>
            <span class="umidade">Umidade ${item.humidity}% </span>
        </div>`;
  });
};

const diaMaisUmido = () => {
  let Umido = 0;
  let data = '';
  for (let i = 0; i < dados.length; i++) {
    if (Umido < dados[i].humidity) {
      Umido = dados[i].humidity;
      data = `${dados[i].dt.dia} / ${dados[i].dt.mes} / ${dados[i].dt.ano} `;
    }
  }
  const day = document.getElementById('info');
  day.innerHTML = `<strong>Dia mais úmido: <span class="chuvoso">${data}</span> -Valor:<span class="chuvoso"> ${Umido}</span> <br></strong>`;
};

const mediaTempMax_Min = () => {
  let mediaMax = 0;
  let mediaMin = 0;
  for (let i = 0; i < dados.length; i++) {
    mediaMax += dados[i].temp.max;
    mediaMin += dados[i].temp.min;
  }
  const infor = document.getElementById('info');
  infor.innerHTML += `<strong>Média da temp. máxima: <span class="max">${mediaMax /
    15}°</span> <br> Média da temp. mínima: <span class="min">${mediaMin /
    15}°</span></strong>`;
};
