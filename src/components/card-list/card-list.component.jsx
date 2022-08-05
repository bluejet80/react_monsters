import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="card-list">
        {list.map((item) => {
          return <Card list={item} />;
        })}
      </div>
    );
  }
}

export default CardList;
