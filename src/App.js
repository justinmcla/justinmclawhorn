import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Blogs from "./pages/Blogs";
import Resume from "./pages/Resume";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </div>
  );
}
