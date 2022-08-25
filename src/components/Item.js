import React, { useState } from "react";

class Item extends React.Component {
  //const [isInCart, setIsInCart] = useState(false);
  state = {
    isInCart: false,
  }

  handleAddToCartClick = () => {
    this.setState((prevState) => ({
      isInCart: !prevState.isInCart,
    }))
  }
 
  render() {
    const {name, category} = this.props;
  
  return (
    <li className={this.state.isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={this.state.isInCart ? "remove" : "add"}
        onClick={this.handleAddToCartClick}
      >
        {this.isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  )
}
}
export default Item;
