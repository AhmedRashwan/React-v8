import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UseRefComponent from "./Routes/useRef";
import UseReducerComponent from "./Routes/useReducer";
import AppContext from "./AppContext";
import { useState, lazy, Suspense } from "react";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));
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
  const LanguageState = useState("en");

  counter++;
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={LanguageState}>
          <Suspense fallback={<h1>LOAAAAAAAADING</h1>}>
          <header className="via-orange-40 mb-10 w-full bg-gradient-to-b from-yellow-500 to-red-500 p-7 text-center ">
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
          </Suspense>
        </AppContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
