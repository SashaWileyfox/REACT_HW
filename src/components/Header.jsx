import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="modal-header">
        <div className="modal-title">{this.props.children}</div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>
      </div>
    )
  }
}

export default Header;
