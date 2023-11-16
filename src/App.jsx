import { Routes, Route } from "react-router-dom";
import Home from "./sections/Home.jsx";

// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
