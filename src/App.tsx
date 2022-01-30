import { ThemeProvider } from "styled-components";
import { EditBoard } from "components/EditBoard";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <EditBoard />
    </ThemeProvider>
  );
};

export default App;
