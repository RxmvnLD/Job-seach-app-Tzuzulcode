import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Welcome from "./components/Welcome";
import Index from "./components/Index";
import { Home } from "./pages/Home";
import { DetalleEmpleo } from "./pages/DetalleEmpleo";
import Login from "./pages/Login";
import Signup from "./pages/Sigup";
import { authContext } from "./Context/AuthContext";
import { useContext, useEffect } from "react";


function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

function App() {

  const context = useContext(authContext);
  // console.log("=========")
  // console.log(context.auth.logged)
  const user = context.auth.logged;
  return (
    <div className="bg-bone dark:bg-darker-blue h-screen">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/index" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login"  element={user ? <Redirect to="/" /> : <Login />} />
            <Route path="/signup"   element={user ? <Redirect to="/" /> : <Signup />} />
            <Route path="/vacante/:id" element={<DetalleEmpleo />} />
            {/* <Route path="/" element={</>}/>
        <Route path="/" element={</>}/>
        <Route path="/" element={</>}/>*/}
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
