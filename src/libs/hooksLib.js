
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  navbar: {
    alignSelf: "flex-start",
    alignItems: "center"
  },
  notfound: {
    padding: "80px 0",
    textAlign: "center",
    fontWeight: "600",
    fontFamily: "Open Sans, sans-serif"
  },
  app: {
    height: "100vh",
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  content: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    border: "1px black solid",
  },
  create: {
    padding: "10px",
  },
}));
