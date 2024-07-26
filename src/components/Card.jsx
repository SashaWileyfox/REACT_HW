import Body from "./Body.jsx";
import Title from "./Title.jsx";
import Text from "./Text.jsx";

const Card = (props) => {
  return (
    <div className="card col-2">
      {props.children}
    </div>
    )
}

Card.Body = Body;
Card.Title = Title;
Card.Text = Text;

export default Card;
