import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="card-list">
        {list.map((item) => {
          const { id, name, email } = item;
          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
