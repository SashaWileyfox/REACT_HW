import React from "react";

class Definitions extends React.Component {
  render() {
    const {data} = this.props;

    return (
      <>
        {data.map(item => (
          <dl key={item.id}>
            <dt>{item.dt}</dt>
            <dd>{item.dd}</dd>
          </dl>
        ))}
      </>
    )
  }
}

export default Definitions
