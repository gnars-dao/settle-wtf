import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppType } from "next/dist/shared/lib/utils";
import { configureChains, createClient, WagmiConfig, mainnet } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";

if (!process.env.NEXT_PUBLIC_ALCHEMY_KEY) {
  throw new Error("Missing alchemy key");
}

const { provider, chains, webSocketProvider } = configureChains(
  [mainnet],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY,
      stallTimeout: 2_000,
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Gnars Preview",
  chains,
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const queryClient = new QueryClient();
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        showRecentTransactions={false}
        theme={lightTheme({
          fontStack: "rounded",
        })}
      >
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default MyApp;
