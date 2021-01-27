import { useStyles } from "../../libs/hooksLib";

export default function NotFound() {
  const classes = useStyles();

  return <h1 className={classes.notfound}>Sorry, page not found!</h1>;
}
