
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Next.js Assignment",
  description: "Next.js App Router Practice",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h2>My Website</h2>

          <nav>
            <Link href="/">Home</Link>{" "}
            <Link href="/about">About</Link>{" "}
            <Link href="/contact">Contact</Link>{" "}
            <Link href="/services">Services</Link>{" "}
            <Link href="/blog">Blog</Link>{" "}
            <Link href="/students">Students</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2026 My Website. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
