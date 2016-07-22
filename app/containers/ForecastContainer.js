/**
 * @fileOverview Контейнер прогноза погоды
 * @author Dmitry Meshcheryakov (dmitri.meshcheryakov@gmail.com)
 */

import React from 'react';
import Forecast from '../components/Forecast';
import Detail from '../components/Detail';
import getWeather from '../utils/weatherApi';

export default class ForecastContainer extends React.Component {
  /**
   * Класс ForecastContainer
   * @constructor
   * @param  {Object} props
   * @param  {Object} context
   */
  constructor(props, context) {
    super(props);
    context.router;
    this.state = {
      isLoading: true,
      currentTemp: 0,
      currentWeather: '',
      forecastWeather: []
    };
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  makeRequest(city) {
    getWeather(city)
      .then(function(response) {
        this.setState({
          isLoading: false,
          currentTemp: response.currentTemp,
          currentWeather: response.currentWeather,
          forecastWeather: response.forecastWeather
        });
      }.bind(this))
      .catch(function(error) {
        console.warn('Error in getWeather', error);
      });
  }

  componentDidMount() {
    this.makeRequest(this.props.routeParams.city);
  }

  componentWillReceiveProps(nextProps) {
    this.makeRequest(nextProps.routeParams.city);
  }

  /**
   * Обработчик клика по конкретному дню
   * @param  {Event} evt
   */
  handleDayClick(evt) {
    let days = document.querySelectorAll('.forecast-list__item');
    days = Array.prototype.slice.call(days);
    let clickedDayIndex = days.indexOf(evt.target.closest('.forecast-list__item'));
    let query = this.props.routeParams.city;
    if (evt.target.closest('.forecast-list__item')) {
      this.context.router.push({
        pathname: '/detail/' + query,
        state: {
          weather: this.state.forecastWeather[clickedDayIndex]
        }
      });
    }
  }

  render() {
    return (
      <Forecast
        isLoading = {this.state.isLoading}
        header = {this.props.routeParams.city}
        currentTemp = {this.state.currentTemp}
        currentWeather = {this.state.currentWeather}
        forecastWeather = {this.state.forecastWeather}
        onDayClick = {this.handleDayClick} />
    );
  }
}

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
