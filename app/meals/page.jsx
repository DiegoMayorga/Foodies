import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>Meals page</h1>
      <div style={{ textAlign: "center" }}>
        <p>
          <Link href="/community">Community</Link>
        </p>
        <p>
          <Link href="/meals/share">Share Meal</Link>
        </p>
        <p>
          <Link href="/meals/item-1">Item-1</Link>
        </p>
        <p>
          <Link href="../">Back</Link>
        </p>
      </div>
    </>
  );
}
