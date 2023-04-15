import React, { useState } from "react";

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length === 0) {
      onSearch(null);
    }
  };
  const onClick = async (event) => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>BUSCAR</button>
      </div>
    </div>
  );
};

export default Searchbar;
