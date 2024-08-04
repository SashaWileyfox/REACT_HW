import React from "react";
import Modal from "./Modal.jsx";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary m-5" onClick={this.handleOpenModal}>Open</button>
        <Modal show={this.state.showModal}>
          <Header onClose={this.handleCloseModal}>Modal title</Header>
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Body>
          <Footer onClose={this.handleCloseModal} />
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
