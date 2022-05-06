import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./routes/Welcome";
import Index from "./components/Index";
import Login from "./routes/Login";

function App() {
  return (
    <div className="bg-bone dark:bg-darker-blue dark:text-white h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/index" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
