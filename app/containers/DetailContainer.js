/**
 * @fileOverview Контейнер детального прогноза погоды
 * @author Dmitry Meshcheryakov (dmitri.meshcheryakov@gmail.com)
 */

import React from 'react';
import Detail from '../components/Detail';

export default class DetailContainer extends React.Component {
  /**
   * Класс DetailContainer
   * @constructor
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      weather: {}
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
      weather: this.props.location.state.weather
    });
  }

  render() {
    return (
      <Detail
        isLoading = {this.state.isLoading}
        header = {this.props.routeParams.city}
        weather = {this.state.weather} />
    );
  }
}
