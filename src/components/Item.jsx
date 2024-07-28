import React from "react";

class Item extends React.Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>{this.props.task.text}</span>
        <button type="button" className="btn btn-danger btn-sm" onClick={this.props.onRemove}>-</button>
      </li>
    );
  }
}

export default Item;

