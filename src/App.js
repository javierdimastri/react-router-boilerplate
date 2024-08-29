import react from "react"
import { Link, useRoutes } from "react-router-dom";
import {Routes} from "./Routes";

export default function App() {
  const routeResult = useRoutes(Routes);
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
        { routeResult }
      </main>
  </>
}