import React from "react";

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened !== undefined ? props.opened : true,
    };
  }

  toggleCollapse = () => {
    this.setState((prevState) => ({
      opened: !prevState.opened,
    }));
  };

  render() {
    const {text} = this.props;
    const {opened} = this.state;

    return (
      <div>
        <div className="card card-body">
          <p>
            <a
              className="btn btn-primary"
              data-bs-toggle="collapse"
              href="#"
              role="button"
              aria-expanded={opened}
              onClick={this.toggleCollapse}
            >
              Link with href
            </a>
          </p>
          <div className={`collapse ${opened ? 'show' : ''}`}>
            {text}
          </div>
        </div>
      </div>
    );
  }
}

export default Collapse;

