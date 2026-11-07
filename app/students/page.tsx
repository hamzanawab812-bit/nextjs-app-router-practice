import Link from "next/link";

export default function StudentsPage() {
  return (
    <section>
      <h1>Our Students</h1>
      <p>Click on a student to see details.</p>

      <ul>
        <li>
          <Link href="/students/101">Student 101</Link>
        </li>

        <li>
          <Link href="/students/102">Student 102</Link>
        </li>

        <li>
          <Link href="/students/103">Student 103</Link>
        </li>
      </ul>
    </section>
  );
}