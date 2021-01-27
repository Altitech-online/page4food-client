import { useState } from "react";
import { Auth } from "aws-amplify";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LoaderButton from "../../components/LoaderButton/LoaderButton";
import { TextInput } from "../../components/Form/Form";
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";
import { useStyles } from "../../libs/hooksLib";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userHasAuthenticated } = useAppContext();
  const classes = useStyles();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsLoading(true);
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <Container className={classes.paper} component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextInput
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoaderButton
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
          className={classes.submit}
        >
          Login
        </LoaderButton>
      </form>
    </Container>
  );
}
