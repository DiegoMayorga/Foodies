import Link from "next/link";

export default function XPage({ params }) {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>{params.mealSlug}</h1>
      <p style={{ textAlign: "center" }}>
        <Link href="/meals">Meals</Link>
      </p>
    </>
  );
}
