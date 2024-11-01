import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Formulário",
  description: "Como as pessoas consomem a internet atualmente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
