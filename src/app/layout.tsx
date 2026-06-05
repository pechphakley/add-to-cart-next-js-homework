import { Providers } from "./providers";
import Link from "next/link";
import CartIcon from "../components/CardIcon"
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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