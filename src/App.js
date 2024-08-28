import react from "react"
import { Link } from "react-router-dom";
import { Routes } from "./Routes";

export default function App() {
  
  return <>
    <header>
        <strong>React Router v6</strong>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes />
      </main>
  </>
}