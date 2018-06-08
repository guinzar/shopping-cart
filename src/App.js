import React, { Component } from 'react';
import './App.css';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      total: this.computeTotal(this.props.items)
    }
  }
  quantityChangeHandler = (index, newQuantity) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.map((item, i) => {
          return i === index ? { ...item, quantity: newQuantity } : item;
        }),
        total: prevState.total +
          prevState.items[index].price * (newQuantity - prevState.items[index].quantity)
      }
    });
  }
  computeTotal(items) {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
  render() {
    const header = (
      <div className="header">
        <div className="item-name">Name</div>
        <div className="item-quantity">Quantity</div>
        <div className="item-price">Price</div>
        <div className="item-subtotal">Subtotal</div>
      </div>
    )
    const total = (
      <div className="total">
        <div className="item-name"></div>
        <div className="item-quantity"></div>
        <div className="item-price">Total:</div>
        <div className="item-subtotal">{this.state.total}</div>
      </div>
    )
    return (
      <div className="App">
        {header}
        {this.state.items.map((item, index) =>
          <Item key={index} index={index} item={item} quantityChangeHandler={this.quantityChangeHandler} />
        )}
        {total}
      </div>
    );
  }
}

export default App;
