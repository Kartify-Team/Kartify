import React, { useState, useEffect } from "react";

const Search = ({ handleSearch }) => {
  const [text, setText] = useState("")
  const [query, setQuery] = useState("")
  useEffect(() => {
    if (text.length > 2 || query != "") {
      handleSearch(text);
    }
  }, [text])
  return (
    <input
      id="q-and-a-search"
      type="text"
      placeholder="Have a question? Search for answers…"
      value={text} onChange={(e) => setText(e.target.value)}
    />
  );
};

export default Search;
