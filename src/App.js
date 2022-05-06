import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Index from "./components/Index";
import { Home } from "./pages/Home";
import { DetalleEmpleo } from "./pages/DetalleEmpleo";

function App() {
  return (
    <div className="bg-bone dark:bg-darker-blue h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/index" element={<Index />} />
          <Route path="/home" element={<Home />} />
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
