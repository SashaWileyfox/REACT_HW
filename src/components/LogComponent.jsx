import React from "react";

class LogComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      log: [],
      currentValue: 0
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => {
      const newValue = prevState.currentValue + 1;
      return {
        log: [newValue, ...prevState.log],
        currentValue: newValue
      };
    });
  }

  handleDecrement = () => {
    this.setState((prevState) => {
      const newValue = prevState.currentValue - 1;
      return {
        log: [newValue, ...prevState.log],
        currentValue: newValue
      };
    });
  }

  handleRemoveLogItem = (index) => {
    this.setState((prevState) => {
      const newLog = [...prevState.log];
      newLog.splice(index, 1);
      return { log: newLog };
    });
  }

  render() {
    return (
      <div className="container p-4">
        <div className="btn-group font-monospace col-2" role="group">
          <button type="button" className="btn btn-outline-success" onClick={this.handleIncrement}>+</button>
          <button type="button" className="btn btn-outline-danger" onClick={this.handleDecrement}>-</button>
        </div>
        <ul className="list-group">
          {this.state.log.map((value, index) => (
            <li key={index} className="list-group-item" onClick={() => this.handleRemoveLogItem(index)}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LogComponent;
