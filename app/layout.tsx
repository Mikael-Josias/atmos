import type { Metadata } from "next";
import { Inconsolata, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeProvider";

const geistSans = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atmos: Previsão do Tempo",
  description: "Veja o tempo e clima de qualquer lugar do mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
