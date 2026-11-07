import Link from "next/link";

export default function BlogPage() {
  return (
    <section>
      <h1>Our Blog</h1>
      <p>Read our latest articles.</p>

      <ul>
        <li>
          <Link href="/blog/react">React</Link>
        </li>

        <li>
          <Link href="/blog/nextjs">Next.js</Link>
        </li>
      </ul>
    </section>
  );
}