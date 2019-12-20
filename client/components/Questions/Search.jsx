import React, { useState, useEffect } from "react";

const Search = ({ handleSearch }) => {
  const [text, setText] = useState("")
  const [query, setQuery] = useState("")
  useEffect(() => {
    if (text.length > 2 || query != "") {
      setQuery(text)
      handleSearch(text);
    }
  }, [text])
  return (<>
    <div id="q-and-a-search-container">
      <input
        id="q-and-a-search-input"
        type="text"
        placeholder="Have a question? Search for answers…"
        value={text} onChange={(e) => setText(e.target.value)}
      />
      < i class="fa fa-search fa-2x"></i></div></>
  );
};

export default Search;
