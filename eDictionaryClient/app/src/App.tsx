import React from "react";
import "./App.css";
import Lexicon from "./components/Lexicon";

function App() {
  return (
    <div className="bg-green-950 h-screen">
      <h1 className="text-3xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
      </h1>
      <Lexicon />
    </div>
  );
}

export default App;
