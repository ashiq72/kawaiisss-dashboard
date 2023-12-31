import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sheard/Sidebar/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import MainNavber from "./components/Sheard/Navber/MainNavber";
import { StoreProvider } from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <StoreProvider>
        <html lang="en">
          <body className={`${inter.className} flex`}>
            <Sidebar />
            <div className="w-full">
              <MainNavber />
              {children}
            </div>
          </body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  );
}
