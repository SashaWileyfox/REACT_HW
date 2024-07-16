import React from "react";
import '../styles/Slider.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + this.props.images.length) %
        this.props.images.length,
    }));
  };

  render() {
    const {images} = this.props;
    const {currentIndex} = this.state;

    return (
      <div id="carouselExampleIndicators" className="carousel slide carousel-container">
        <h2>Image#{currentIndex + 1}</h2>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
              <img src={image} className="d-block w-100 img-bordered" alt={`Slide ${index}`}/>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" onClick={this.handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" onClick={this.handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Slider;
