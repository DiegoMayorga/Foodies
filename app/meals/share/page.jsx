import Link from "next/link";

export default function Share() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>Share Meal</h1>
      <p style={{ textAlign: "center" }}>
        <Link href="/meals">Meals</Link>
      </p>
    </>
  );
}
