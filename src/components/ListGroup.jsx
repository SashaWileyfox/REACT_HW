import React from "react";
import classNames from "classnames";

class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    const listItem = React.Children.map(children, child => {
      if (React.isValidElement(child)){
        return React.cloneElement(child, {
          className: classNames(child.props.className, 'list-group-item')
        })
      }
      return child;
    })
    return (
      <ul className="list-group">
        {listItem}
      </ul>
    )
  }
}

export default ListGroup
