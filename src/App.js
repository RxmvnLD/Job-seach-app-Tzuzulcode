import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Index from "./components/Index";
import { Home } from "./pages/Home";
import { DetalleEmpleo } from "./pages/DetalleEmpleo";
import Login from "./pages/Login";
import SignUp from "./pages/Sigup";

function App() {
  return (
    <div className="bg-bone dark:bg-darker-blue h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/index" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/vacante" element={<DetalleEmpleo />} />
          {/* <Route path="/" element={</>}/>
        <Route path="/" element={</>}/>
        <Route path="/" element={</>}/>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
