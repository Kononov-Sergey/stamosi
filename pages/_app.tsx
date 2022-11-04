import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";

import Header from "../components/header/Header";

const reactQueryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
