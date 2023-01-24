import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE || "",
  process.env.SUPABASE_PUBLIC_ANON_KEY || ""
);

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: process.env.ADMIN_PRIVATE_KEY || "",
  domain: process.env.WEB3_DOMAIN,
  loginRedirect: "/",
  callbacks: {
    login: async (address) => {
      const { data: user } = await supabase
        .from("users")
        .select("*")
        .eq("walletaddress", address)
        .single();

      if (!user) {
        const res = await supabase
          .from("users")
          .insert({ walletaddress: address })
          .single();

        if (res.error) {
          throw new Error("Failed to create user!");
        }
      }
    },
    user: async (address) => {
      const { data: user } = await supabase
        .from("users")
        .select("*")
        .eq("walletaddress", address)
        .single();

      return user;
    },
  },
});

export default ThirdwebAuthHandler();