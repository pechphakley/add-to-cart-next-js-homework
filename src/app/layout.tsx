import { Providers } from "./providers";
import Link from "next/link";
import CartIcon from "../components/CardIcon"
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Providers>
          <nav style={{
            padding: "1rem",
            backgroundColor: "#f8f9fa",
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <Link href="/" style={{ fontSize: "24px", fontWeight: "bold", textDecoration: "none" }}>
              🛍️ MyStore
            </Link>
            <CartIcon />
          </nav>
          <main style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}