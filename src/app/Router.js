import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StarWarsCard,
  HomePage,
  ContactPage,
  StarShipsPage,
  NotFoundPage,
} from "../pages";

export const Router = () => {
  const [starWars, setStarWars] = React.useState("");

  function handleSetStarwars(starWars) {
    console.log(starWars);
    setStarWars(starWars);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/starships">
          <StarShipsPage />
        </Route>

        <Route path="/characters">
          <StarWarsCard starWars={starWars} />
        </Route>

        <Route path="/about">
          <ContactPage />
        </Route>

        <Route path="/" exact>
          <HomePage setStarWars={handleSetStarwars} />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
