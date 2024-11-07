export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
