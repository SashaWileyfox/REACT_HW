import React from "react";
import classNames from "classnames";

class BtnGroup extends React.Component {
  render() {
    const btnClassLeft = classNames('btn btn-secondary left');
    const btnClassRight = classNames('btn btn-secondary right');

    return (
      <div className="btn-group" role="group">
        <button type="button" className={btnClassLeft}>Left</button>
        <button type="button" className={btnClassRight}>Right</button>
      </div>
    )
  }
}

export default BtnGroup
