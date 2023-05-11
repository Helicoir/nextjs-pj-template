import "@/styles/globals.scss";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import DebugObserver from "./__global/recoilDebuger";
import { Headers } from "@/components/views/Headers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <DebugObserver />
        <Headers />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
