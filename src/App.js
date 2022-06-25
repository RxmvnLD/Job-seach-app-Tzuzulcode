import Router from "./components/Router";
import { ThemeProvider } from "./context/ThemeContext";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
function App() {
  const { auth } = useContext(AuthContext);
  console.log(auth);
  return (
    <>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
