import { Acme } from "@next/font/google";

const acme = Acme({ weight: "400", style: "normal", subsets: ["latin"] });

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body style={acme.style}>{children}</body>
    </html>
  );
}
