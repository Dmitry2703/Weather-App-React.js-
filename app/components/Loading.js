/**
 * @fileOverview Компонент Страница загрузки
 * @author Dmitry Meshcheryakov (dmitri.meshcheryakov@gmail.com)
 */

import React from 'react';
const PropTypes = React.PropTypes;

export default class Loading extends React.Component {
  /**
   * Класс Loading
   * @constructor
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    };
  }

  componentDidMount() {
    let stopper = this.props.text + '...';
    this.interval = setInterval(function() {
      if (this.state.text === stopper) {
        this.setState({
          text: this.props.text
        });
      } else {
        this.setState({
          text: this.state.text + '.'
        });
      }
    }.bind(this), this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="loading">
        <p className="loading__text">{this.state.text}</p>
      </div>
    );
  }
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
};
