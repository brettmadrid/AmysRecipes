import React from "react";
import RecipesList from "./RecipesList";
import TagsList from "./TagsList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    allContentfulRecipe(sort: { title: ASC }) {
      nodes {
        contentful_id
        cookTime
        id
        prepTime
        title
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

const AllRecipes = () => {
  // run query to get data object
  const data = useStaticQuery(query);

  // get array portion of data object
  const recipesData = data.allContentfulRecipe.nodes;

  return (
    <>
      <h4>AllRecipes</h4>
      <RecipesList recipes={recipesData} />
      <TagsList recipes={recipesData} />
    </>
  );
};

export default AllRecipes;
