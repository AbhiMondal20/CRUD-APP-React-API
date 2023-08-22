import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./components/Create";
import Read from "./components/Read";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container mt-4">
        <Routes>
          <Route exact path="/" element={<Read />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
