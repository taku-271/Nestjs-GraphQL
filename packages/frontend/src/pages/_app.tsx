import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const client = useMemo(
    () =>
      new ApolloClient({
        uri: "http://localhost:3001/graphql",
        cache: new InMemoryCache(),
      }),
    []
  );

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </QueryClientProvider>
  );
}
