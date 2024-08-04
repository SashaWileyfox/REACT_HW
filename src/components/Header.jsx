import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="modal-header">
        <h5 className="modal-title">{this.props.children}</h5>
        <button type="button" className="btn-close" aria-label="Close" onClick={this.props.onClose}></button>
      </div>
    );
  }
}

export default Header;
