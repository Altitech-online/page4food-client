import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound/NotFound";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import NewRecipe from "./containers/NewRecipe/NewRecipe";
import Recipes from "./containers/Recipes/Recipes";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/recipes/new">
        <NewRecipe />
      </Route>
      <Route exact path="/recipes/:id">
        <Recipes />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
