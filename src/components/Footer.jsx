import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="modal-footer">
        <button type="button" className="modal-close-button btn btn-secondary" onClick={this.props.onClose}>Cancel</button>
      </div>
    );
  }
}

export default Footer;
