import { Auth } from "aws-amplify";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LoaderButton from "../../components/LoaderButton/LoaderButton";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import { useStyles } from "../../libs/hooksLib";

export default function Logout() {
  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();
  const classes = useStyles();
  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    history.push("/login");
  }

  return (
    <Container className={classes.notfound} component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Are you sure you want to sign out?
      </Typography>
      <LoaderButton onClick={handleLogout}>Confirm logout</LoaderButton>
    </Container>
  );
}
