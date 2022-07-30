import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((item) => (
          <h1 key={item.id}>{item.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
