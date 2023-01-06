import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
let counter = 0;
const App = () => {
  counter++;
  return (
    <div>
      <p>{counter}</p>
      <h1>Adopt me</h1>

      <SearchParams />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
