import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/*
  Notes:
  1- Auto refetching independent of the staleTime:
    -when the network is reconnected
    -when the window is refocused
    -when the component is mounted
 */

const queryClient = new QueryClient({
  // to configure react-query globally, must of time we don't need to do this
  // just for staleTime.
  defaultOptions: {
    queries: {
      //the default query options
      retry: 3,
      cacheTime: 300_000, //5min
      staleTime: 0,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
