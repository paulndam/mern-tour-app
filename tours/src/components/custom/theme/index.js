import { createTheme } from "@mui/material/styles";

import colors from "./colors";
import typography from "./typography";
import linearGradient from "./linearGradient";
import rgba from "./rgba";

export default createTheme({
  palette: { ...colors },
  typography: { ...typography },

  functions: {
    linearGradient,
    rgba,
  },

  components: {},
});
