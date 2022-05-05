import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Index from "./components/Index";

function App() {
  return (
    <div className="bg-bone dark:bg-darker-blue h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/index" element={<Index />} />
          {/* <Route path="/" element={</>}/>
        <Route path="/" element={</>}/>
        <Route path="/" element={</>}/>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
