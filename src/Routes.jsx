import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/Routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/Routes/UnauthenticatedRoute";
import Loading from "./containers/Loading/Loading";

const Home = lazy(() => import("./containers/Home/Home"));
const Login = lazy(() => import("./containers/Login/Login"));
const Signup = lazy(() => import("./containers/Signup/Signup"));
const NewRecipe = lazy(() => import("./containers/NewRecipe/NewRecipe"));
const Recipes = lazy(() => import("./containers/Recipes/Recipes"));
const NotFound = lazy(() => import("./containers/NotFound/NotFound"));
const Logout = lazy(() => import("./containers/Logout/Logout"));

const renderLoading = () => Loading();

export default function Routes() {
  return (
    <Suspense fallback={renderLoading()}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
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
        <AuthenticatedRoute exact path="/logout">
          <Logout />
        </AuthenticatedRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}
