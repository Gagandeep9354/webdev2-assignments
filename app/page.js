import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Web Dev 2 Demos</h1>
      <p>Demos for Web Dev 2</p>
      <li>
        <Link href="/week-2">Week 2 Demo</Link>
      </li>
      <li>
        <Link href="/week-3">Week 3 Demo</Link>
      </li>
      <li>
        <Link href="/week-4">Week 4 Demo</Link>
      </li>
      <li>
        <Link href="/week-5">Week 5 Demo</Link>
      </li>
      <li>
        <Link href="/week-7">Week 7 Demo</Link>
      </li>
      <li>
        <Link href="/week-9">Week 9 Demo</Link>
      </li>
    </div>
  );
}