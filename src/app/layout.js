import "./globals.css";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "BarberShop",
  description: "app de barberbearia desenvolvido em react/next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
        <body>
          
        {children}
        </body>
    </html>
  );
}
