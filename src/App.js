import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Form from "./pages/Form";
import Applications from "./pages/application/Applications";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/submitted-applications" element={<Applications />} />
      </Routes>
    </div>
  );
}

export default App;
