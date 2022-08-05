import React, { useState } from "react";

const Input = () => {
  const [query, setQuery] = useState("");
  console.log(query)
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        <li>sunny</li>
        <li>don</li>
        <li>kon</li>
        <li>name</li>
      </ul>
    </div>
  );
};

export default Input;
