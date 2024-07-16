import React from "react";
import classNames from "classnames";

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    }
  }

  handleClick = (event) => {
    const buttonName = event.target.textContent
    this.setState({active: buttonName});
    console.log("Натиснута кнопка:", buttonName);
  }

  render() {
    const {active} = this.state;
    return (
      <div className="btn-group" role="group">
        <button type="button" className={classNames({'active': active === 'Left'}, 'btn btn-primary')}
                onClick={this.handleClick}>Left
        </button>
        <button type="button" className={classNames({'active': active === 'Middle'}, 'btn btn-primary')}
                onClick={this.handleClick}>Middle
        </button>
        <button type="button" className={classNames({ 'active': active === 'Right' }, 'btn btn-primary')}
                onClick={this.handleClick}>Right</button>
      </div>
    )
  }
}

export default BtnGroup
