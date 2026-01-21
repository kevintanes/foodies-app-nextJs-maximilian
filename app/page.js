import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
        <ul>
          <li>
            <Link href={"/meals"}>Meals</Link>
          </li>
          <li>
            <Link href={"/meals/share"}>Meals Share</Link>
          </li>
          <li>
            <Link href={"/community"}>Community</Link>
          </li>
        </ul>
      </h1>
    </main>
  );
}
