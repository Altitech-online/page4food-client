import { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import LoaderButton from "../../components/LoaderButton/LoaderButton";
import { TextInput } from "../../components/Form/Form";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";
import { useStyles } from "../../libs/hooksLib";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const history = useHistory();
  const [newUser, setNewUser] = useState(null);
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  function validateForm() {
    return (
      email.length > 0 && password.length > 0 && password === confirmPassword
    );
  }

  function validateConfirmationForm() {
    return confirmationCode.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const newUser = await Auth.signUp({
        username: email,
        password: password,
      });
      setIsLoading(false);
      setNewUser(newUser);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.confirmSignUp(email, confirmationCode);
      await Auth.signIn(email, password);

      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  function renderConfirmationForm() {
    return (
      <form onSubmit={handleConfirmationSubmit} className={classes.form}>
        <TextInput
          id="confirmation"
          label="Confirmation Code"
          name="confirmation"
          type="tel"
          autoFocus
          onChange={(e) => setConfirmationCode(e.target.value)}
          value={confirmationCode}
        />
        <LoaderButton
          type="submit"
          isLoading={isLoading}
          disabled={!validateConfirmationForm()}
        >
          Verify
        </LoaderButton>
      </form>
    );
  }

  function renderForm() {
    return (
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextInput
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          type="email"
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
        <TextInput
          name="confirm password"
          label="Confirm Password"
          type="confirm password"
          id="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <LoaderButton
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Signup
        </LoaderButton>
      </form>
    );
  }

  return (
    <Container className={classes.paper} component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </Container>
  );
}
