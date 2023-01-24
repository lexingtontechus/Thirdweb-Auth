import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      authConfig={{
        domain: process.env.WEB3_DOMAIN,
        authUrl: "/api/auth",
        loginRedirect: "/",
        statement: "I agree to the terms of service",
        uri: "https://frontend.example.com",
        resources: ["https://terms-of-service.example.com"],
        version: "1",
        activeChain: "1",
        
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
