import { useMemo, useRef, useState } from "react";

const Search = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newItem = inputRef.current.value;

    if (newItem === '') return;

    setItems(previousItems => [...previousItems, newItem]);
    inputRef.current.value = '';
  }

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  }

  const filteredItems = useMemo(() => {
    return items
      .filter(item => item.toLowerCase().includes(query))
      .map(((item, index) => <div key={index}>{item}</div>));
  }, [items, query]);

  return (
    <>
      Search: <input onChange={ handleSearchChange } value={ query } type="search" />

      <br />
      <br />

      <form onSubmit={ handleFormSubmit } >
        New item: <input ref={ inputRef } type="text" />
        <button type="submit">Add</button>
      </form>

      <h3>Items:</h3>
      { filteredItems }
    </>
  );
}

export default Search;
