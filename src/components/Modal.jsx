import React from "react";

class Modal extends React.Component{
  render() {
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal;
