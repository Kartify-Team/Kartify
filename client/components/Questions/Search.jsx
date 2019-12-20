import React, { useState, useEffect } from 'react';

const Search = ({ handleSearch }) => {
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  useEffect(() => {
    if (text.length > 2 || query != '') {
      setQuery(text);
      handleSearch(text);
    }
<<<<<<< HEAD
  }, [text])
  return (<>
    <div id="q-and-a-search-container">
      <input
        id="q-and-a-search-input"
        type="text"
        placeholder="Have a question? Search for answers…"
        value={text} onChange={(e) => setText(e.target.value)}
      />
      < i className="fa fa-search fa-2x"></i></div></>
=======
  }, [text]);
  return (
    <>
      <div id="q-and-a-search-container">
        <input
          id="q-and-a-search-input"
          type="text"
          placeholder="Have a question? Search for answers…"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <i className="fa fa-search fa-2x"></i>
      </div>
    </>
>>>>>>> 086ebee6a4cba1e433dfa35b7c791c10978ccc12
  );
};

export default Search;
