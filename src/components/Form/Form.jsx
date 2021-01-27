import TextField from "@material-ui/core/TextField";

export const TextInput = ({ ...props }) => (
  <TextField variant="outlined" margin="normal" required fullWidth {...props} />
);
