import React from "react";

const MealDetailPage = async ({ params }) => {
  const { slug } = await params;
  return <h1>This is meal detail page with id: {slug}</h1>;
};

export default MealDetailPage;
