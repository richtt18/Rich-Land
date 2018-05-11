import React, { Component } from 'react';
import TopPicks from './TopPicks';

class TopPicksContainer extends Component {
  render() {
    return (
      <section className="top-picks">
        <div className="content">
          <h2>Dope Shit</h2>
          <h6>You can buy it today!</h6>
          <div className="product-list">
            <TopPicks />
          </div>
        </div>
      </section>
    );
  }
}

export default TopPicksContainer;
