import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
let counter = 0;
const App = () => {
  counter++;
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt me</Link>
      </header>
      <p>{counter}</p>

      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
