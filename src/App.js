import DarkModeToggle from "./components/DarkModeToggle";
import Router from "./components/Router";
import { ThemeProvider } from "./Context/ThemeContext";
function App() {
  return (
    <>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
