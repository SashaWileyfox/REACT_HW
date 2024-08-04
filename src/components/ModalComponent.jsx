import Modal from "./Modal.jsx";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import React from "react";


class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  static Modal = Modal;
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  handleOpenModal = () => {
    this.setState({showModal: true})
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary m-5" onClick={this.handleOpenModal}>Open</button>
        {this.state.showModal && (<Modal>
          <Modal.Header>Modal title</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="modal-close-button btn btn-secondary">Cancel</button>
          </Modal.Footer>
        </Modal>)}


      </div>
    );
  }
}

export default ModalComponent;
