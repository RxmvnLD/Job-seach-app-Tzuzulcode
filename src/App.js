import { useContext } from "react";
import Router from "./components/Router";
import { ThemeProvider } from "./Context/ThemeContext";
import AuthContext from "./Context/AuthContext";
function App() {
  const { auth } = useContext(AuthContext);
  //console.log(auth);
  return (
    <>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
