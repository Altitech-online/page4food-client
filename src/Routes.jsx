import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/Routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/Routes/UnauthenticatedRoute";
import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound/NotFound";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import NewRecipe from "./containers/NewRecipe/NewRecipe";
import Recipes from "./containers/Recipes/Recipes";
import Settings from "./containers/Settings/Settings";

export default function Routes() {
  return (
    <Switch>
      <UnauthenticatedRoute exact path="/">
        <Home />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/recipes/new">
        <NewRecipe />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/recipes/:id">
        <Recipes />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/settings">
        <Settings />
      </AuthenticatedRoute>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
