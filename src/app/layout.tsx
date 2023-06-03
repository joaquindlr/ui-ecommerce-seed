import { Navbar } from "./components";
import { font } from "./assets/fonts";
import Sidebar from "./components/layout/Sidebar";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className} style={{ margin: 0, height: "100vh" }}>
        <Navbar />
        {/* @ts-expect-error Async Server Component */}
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
