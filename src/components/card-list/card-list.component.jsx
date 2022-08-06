import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ list }, forwardRef) => (
  //react functional components only receive two arguments: props, forwardRef
  <div className="card-list">
    {list.map((item) => {
      return <Card list={item} />;
    })}
  </div>
);

export default CardList;
