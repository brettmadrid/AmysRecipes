import React from "react";
import setupTags from "../utils/setupTags";

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes);
  return <div>TagsList</div>;
};

export default TagsList;
