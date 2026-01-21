import Link from "next/link";
import React from "react";

const MealsPage = () => {
  return (
    <>
      <h1>This is meals page</h1>
      <ul>
        <li>
          <Link href={`/meals/detail-1`}>Meal Detail 1</Link>
        </li>
        <li>
          <Link href={`/meals/detail-2`}>Meal Detail 2</Link>
        </li>
      </ul>
    </>
  );
};

export default MealsPage;
