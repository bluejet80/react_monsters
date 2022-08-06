import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  console.log("Render");
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  useEffect(() => {}, []); //two arguments: callback function and an array of dependency
  // if you only want the callback function to run once at the
  // beginning, then you pass an empty array as the second argument.

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Catalogue</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className="search-box"
        placeholder="search monsters"
      />
      <CardList list={filteredMonsters} />
    </div>
  );
};

export default App;
