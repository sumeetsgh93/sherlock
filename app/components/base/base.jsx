import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';

export default class Base extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  };

  render() {
    return (
      <section className="base">
        <section className="base-right">
          <Header />
          {this.props.children}
          <Footer />
        </section>
      </section>
    );
  }
}