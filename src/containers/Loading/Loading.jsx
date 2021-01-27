import { useStyles } from "../../libs/hooksLib";

export default function Loading() {
  const classes = useStyles();

  return <h1 className={classes.notfound}>Loading... Please wait</h1>;
}
