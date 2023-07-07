import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/"><h1>Justin McLawhorn | Software Engineer</h1></Link>
      <Navbar />
    </header>
  )
}