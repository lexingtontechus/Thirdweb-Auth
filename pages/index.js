import Link from "next/link";
import {
  ConnectWallet,
  useAddress,
  useDisconnect,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
} from "@thirdweb-dev/react";
import { Button, css } from "@nextui-org/react";

export default function IndexPage() {
  const address = useAddress();
  return (
    <div>
      <h1>Thirdweb Auth w/ Unstoppable Domains UAuth</h1>

      <ConnectWallet
        accentColor="#181b1f"
        colorMode="dark"
        auth={{
          loginOptional: true,
        }}
      />
     <div>Connected as: {address} )</div>
    </div>
  );
}
