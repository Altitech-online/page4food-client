import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";
import Navbar from "./components/Navbar/Navbar";
import { useStyles } from "./libs/hooksLib";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating && (
      <div className={classes.app}>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Navbar />
          <Routes />
        </AppContext.Provider>
      </div>
    )
  );
}

export default App;
