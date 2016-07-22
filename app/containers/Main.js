/**
 * @fileOverview Компонент Main
 * @author Dmitry Meshcheryakov (dmitri.meshcheryakov@gmail.com)
 */

import React from 'react';
import Header from '../components/Header';

export default class Main extends React.Component {
  render() {
    return (
      <div className="main-content">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
