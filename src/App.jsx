import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

let counter = 0;
const App = () => {
  counter++;
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt me</Link>
        </header>
        <p>{counter}</p>

        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
