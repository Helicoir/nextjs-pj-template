import "@/styles/globals.scss";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import DebugObserver from "./__global/recoilDebuger";
import { Headers } from "@/components/templates/Headers";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Suspense, useState } from "react";
import { PreventCrashErrorBoundary } from "@/components/helpers/ErrorBoundaries/PreventCrashErrorBoundary";

type AppPropsWithPrefetchedData = AppProps<{
  // dehydratedStateは各ページのgetStaticProps関数でexportされるため、ここでは型をつけない
  dehydratedState: any;
}>;

export default function App({
  Component,
  pageProps,
}: AppPropsWithPrefetchedData) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <Suspense fallback={"Loading(root)..."}>
            <PreventCrashErrorBoundary>
              <Headers />
              <Component {...pageProps} />
            </PreventCrashErrorBoundary>
          </Suspense>
          <DebugObserver />
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}
