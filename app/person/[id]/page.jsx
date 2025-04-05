import React from "react";
import Person from "./Person";

const PersonById = async ({ params }) => {
  const { id } = await params;

  return <Person id={id} />;
};

export default PersonById;
