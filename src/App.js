import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Headline from "./components/Headline";
import { useNewsArticles } from "./hooks/useNewsArticles";

import { SearchBar } from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState("");
  const { loading, headlines, error } = useNewsArticles(search);
  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="App">
      <SearchBar onSubmit={setSearch} />
      {headlines.map((x) => (
        <Headline {...x} />
      ))}
    </div>
  );
}

export default App;
