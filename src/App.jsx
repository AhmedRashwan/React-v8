import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UseRefComponent from "./Routes/useRef";
import UseReducerComponent from "./Routes/useReducer";

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
        <header className="mb-10 w-full bg-gradient-to-b from-yellow-500 via-orange-40 to-red-500 p-7 text-center ">
          <Link className="text-6xl text-white hover:text-green-300" to="/">
            Adopt me
          </Link>
        </header>
        <p>{counter}</p>

        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
          <Route path="/useRef" element={<UseRefComponent />} />
          <Route path="/useReducer" element={<UseReducerComponent />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
