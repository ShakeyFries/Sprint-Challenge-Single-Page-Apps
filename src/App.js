import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import CharacterCard from "./components/CharacterCard";


export default function App() {
  return (
    <main>
      <Header />
      <div>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/character-list" component={CharacterList} />
        <Route path="/header" component={Header} />
        <Route path="/character-card" component={CharacterCard} />
      </div>
    </main>
  );
}

