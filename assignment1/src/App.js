import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<SinglePost />} />
    </Routes>
  );
}

export default App;
