/**
 * @fileOverview Получение и обработка данных от api.openweathermap.org
 * @author Dmitry Meshcheryakov (dmitri.meshcheryakov@gmail.com)
 */

import axios from 'axios';

const APIkey = '56210999ba8642c56ced158fc2465344';
let currentWeatherLink = 'http://api.openweathermap.org/data/2.5/weather?q=';
let forecastWeatherLink = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
let param = '&units=metric';

/**
 * Получение текущей погоды
 * @param  {String} city
 * @return {Object}
 */
function getCurrentWeather(city) {
  return axios.get(currentWeatherLink + city + param + '&APPID=' + APIkey);
}

/**
 * Получение прогноза погоды
 * @param  {String} city
 * @return {Object}
 */
function getForecastWeather(city) {
  return axios.get(forecastWeatherLink + city + param + '&APPID=' + APIkey + '&cnt=5');
}

/**
 * Преобразование дат в формат 'Weekday, Month Day'
 * @param  {Object} data
 * @return {Object}
 */
function convertDates(data) {
  let dateOptions = {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  };

  data.map(function(item) {
    item.dt = new Date(item.dt * 1000).toLocaleString('en-US', dateOptions);
  });
  return data;
}

/**
 * Преобразование иконок погоды в пути до соответствующих изображений
 * @param  {Array of Objects} data
 * @return {Array of Objects}
 */
function setWeatherIcons(data) {
  data.map(function(item) {
    item.weather[0].icon = 'app/images/weather-icons/' + item.weather[0].icon + '.svg';
  });
  return data;
}

/**
 * Преобразование температуры в градусы Цельсия
 * @param  {Number} data
 * @return {Number}
 */
function roundTemp(data) {
  let roundedTemp = Math.round(data * 10) / 10;
  return roundedTemp;
}

/**
 * Преобразование температуры в градусы Цельсия
 * @param  {Array of Objects} data
 * @return {Array of Objects}
 */
function roundTemps(data) {
  data.forEach(function(item) {
    for (let key in item.temp) {
      item.temp[key] = Math.round(item.temp[key] * 10) / 10;
    }
  });
  return data;
}

/**
 * Преобразование данных о погоде
 * @param  {Array of Objects} data
 * @return {Array of Objects}
 */
function handleForecastData(data) {
  convertDates(data);
  setWeatherIcons(data);
  roundTemps(data);
  return data;
}

export let helpers = {
  /**
   * Получение данных о текущей погоде и прогнозе погоды
   * @param  {String} city
   * @return {Object}
   */
  getWeather(city) {
    return axios.all([getCurrentWeather(city), getForecastWeather(city)])
      .then(function(response) {
        return {
          currentTemp: roundTemp(response[0].data.main.temp),
          currentWeather: 'app/images/weather-icons/' + response[0].data.weather[0].icon + '.svg',
          forecastWeather: handleForecastData(response[1].data.list)
        };
      })
      .catch(function(err) {
        console.warn('Error in getWeather', err);
      });
  }
};
