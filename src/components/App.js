import React, { Component } from 'react';
import { Header, Order, Inventory } from './layouts/index';
import sampleFishes from '../sample-fishes';
import Fish from './layouts/Fish';
import base from '../base';
class App extends Component {
  state = {
    fishes: {},
    order: {}
  };
  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.id}/fishes`, {
      context: this,
      state: 'fishes',
      then() {
        this.setState({ fishes: sampleFishes });
      }
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  addToOrder = index => {
    const order = { ...this.state.order };
    order[index] = order[index] + 1 || 1;
    this.setState({ order });
    console.log(this.ref);
  };
  render() {
    const { fishes } = this.state;
    return (
      <React.Fragment>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market" />
            <ul className="fishes">
              {Object.keys(fishes).map(key => (
                <Fish
                  key={key}
                  index={key}
                  details={fishes[key]}
                  addToOrder={this.addToOrder}
                />
              ))}
            </ul>
          </div>
          <Order fishes={this.state.fishes} order={this.state.order} />
          <Inventory />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
