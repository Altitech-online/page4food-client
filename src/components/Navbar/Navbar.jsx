import { useState } from "react";
import { useAppContext } from "../../libs/contextLib";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { useStyles } from "../../libs/hooksLib";

export default function Navbar() {
  const { isAuthenticated } = useAppContext();
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = useState(pathname);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      className={classes.navbar}
      value={value}
      onChange={handleChange}
      showLabels={true}
    >
      <BottomNavigationAction label="Home" value="/" component={Link} to="/" />
      {!isAuthenticated && (
        <BottomNavigationAction
          label="Login"
          value="/login"
          component={Link}
          to="/login"
        />
      )}
      {!isAuthenticated && (
        <BottomNavigationAction
          label="Sign up"
          value="/signup"
          component={Link}
          to="/signup"
        />
      )}
      {isAuthenticated && (
        <BottomNavigationAction
          label="Log out"
          value="/logout"
          component={Link}
          to="/logout"
        />
      )}
    </BottomNavigation>
  );
}
