import "@/styles/globals.scss";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import DebugObserver from "./__global/recoilDebuger";
import { Headers } from "@/components/views/Headers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <DebugObserver />
      <Headers />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
