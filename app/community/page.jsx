import Link from "next/link";

export default function CommunityPage() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>Community</h1>
      <p style={{ textAlign: "center" }}>
        <Link href="/meals">Meals</Link>
      </p>
    </>
  );
}
