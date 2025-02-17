import { ThemeProvider } from "styled-components";
import AppRoutes from "./services/routes";
import GlobalStyle from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AppRoutes />
  </ThemeProvider>
);

export default App;